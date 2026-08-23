// Index-coverage sweep for toolfaultfinder.com.
// Fetches the live sitemap (index + children), runs GSC URL Inspection on every
// URL, and reports coverage state. Writes gsc-coverage.csv + gsc-not-indexed.txt.
//
// Coverage states matter — read them correctly before acting:
//   "Submitted and indexed"        = working.
//   "Crawled - currently not indexed" = Google looked and declined. Actionable (thin/dup).
//   "Discovered - currently not indexed" = known, not yet crawled. Just new/low-priority.
//                                    Needs internal links + time. NOT a quality signal.
//   "URL is unknown to Google"     = discovery gap (internal-linking problem).
//
// Usage: node gsc-coverage.mjs
import { google } from '/home/nick/homecheckup/epc-engine/node_modules/googleapis/build/src/index.js'
import { writeFileSync } from 'fs'

const auth = new google.auth.GoogleAuth({
  keyFile: '/home/nick/homecheckup/thai-meetup-4d8e8bc8d974.json',
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
})
const sc = google.searchconsole({ version: 'v1', auth })
const SITE = 'sc-domain:toolfaultfinder.com'
const ORIGIN = 'https://toolfaultfinder.com'

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim())
const get = async (u) => (await fetch(u)).text()

// sitemap-index.xml lists child sitemaps; follow them all.
const indexXml = await get(`${ORIGIN}/sitemap-index.xml`)
const children = locs(indexXml).filter(u => /\.xml$/.test(u))
const urls = [...new Set((await Promise.all(children.map(async c => locs(await get(c))))).flat())].sort()
console.error(`Inspecting ${urls.length} URLs from ${children.length} sitemap file(s)...`)

const typeOf = (u) => {
  const seg = u.replace(ORIGIN, '').split('/').filter(Boolean)
  if (seg.length === 0) return 'homepage'
  if (seg[0] === 'tools') return 'fault-entry'
  if (seg[0] === 'faults') return 'fault-index'
  return 'static-page'
}

async function inspect(u) {
  try {
    const r = await sc.urlInspection.index.inspect({ requestBody: { inspectionUrl: u, siteUrl: SITE } })
    const i = r.data.inspectionResult?.indexStatusResult || {}
    return { url: u, state: i.coverageState || 'UNKNOWN', verdict: i.verdict || '?', lastCrawl: i.lastCrawlTime || '' }
  } catch (e) {
    return { url: u, state: `ERROR: ${e.message}`, verdict: 'ERR', lastCrawl: '' }
  }
}

// URL Inspection is capped at 2,000/day and 600/min per property. Small site,
// but keep the pacing so this stays safe if the sitemap grows to hundreds.
const results = []
const BATCH = 8
for (let k = 0; k < urls.length; k += BATCH) {
  const t0 = Date.now()
  results.push(...await Promise.all(urls.slice(k, k + BATCH).map(inspect)))
  const elapsed = Date.now() - t0
  if (elapsed < 900 && k + BATCH < urls.length) await new Promise(r => setTimeout(r, 900 - elapsed))
}

const byState = {}
for (const r of results) byState[r.state] = (byState[r.state] || 0) + 1
console.log('\n=== COVERAGE STATE TOTALS ===')
for (const [s, c] of Object.entries(byState).sort((a, b) => b[1] - a[1])) console.log(String(c).padStart(4), s)

const notIndexed = results.filter(r => !/^Submitted and indexed$/i.test(r.state))
console.log(`\n=== NOT "SUBMITTED AND INDEXED" (${notIndexed.length} of ${results.length}) ===`)
for (const r of notIndexed.sort((a, b) => a.state.localeCompare(b.state))) {
  console.log(`  ${typeOf(r.url).padEnd(12)} ${r.state.padEnd(38)} ${r.url}`)
}

writeFileSync('/home/nick/toolfaultfinder.com/gsc-coverage.csv',
  'url,type,state,verdict,lastCrawl\n' +
  results.map(r => `${r.url},${typeOf(r.url)},"${r.state}",${r.verdict},${r.lastCrawl}`).join('\n'))
writeFileSync('/home/nick/toolfaultfinder.com/gsc-not-indexed.txt',
  notIndexed.map(r => `${r.state}\t${r.url}`).sort().join('\n'))
console.log('\nWrote gsc-coverage.csv and gsc-not-indexed.txt.')
