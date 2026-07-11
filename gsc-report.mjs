// GSC report for toolfaultfinder.com. Same pattern as wegotthemove's gsc-report.mjs.
// Auth: shared service account (claude@thai-meetup.iam.gserviceaccount.com),
// added as a Full user on this GSC property 2026-07-11.
// Usage: node gsc-report.mjs [--days N]
import { google } from '/home/nick/homecheckup/epc-engine/node_modules/googleapis/build/src/index.js'

const auth = new google.auth.GoogleAuth({
  keyFile: '/home/nick/homecheckup/thai-meetup-4d8e8bc8d974.json',
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
})
const wm = google.webmasters({ version: 'v3', auth })
const SITE = 'sc-domain:toolfaultfinder.com'
const q = async (body) => (await wm.searchanalytics.query({ siteUrl: SITE, requestBody: body })).data.rows || []

function arg(n, f) { const i = process.argv.indexOf(`--${n}`); return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : f }
const days = arg('days', '30')

const iso = d => d.toISOString().slice(0, 10)
const today = new Date()
const daysAgo = k => { const d = new Date(today); d.setDate(d.getDate() - k); return iso(d) }
const START = daysAgo(Number(days))
const END = daysAgo(2)

console.log(`\n=== toolfaultfinder.com — ${START} to ${END} ===\n`)

const byDate = await q({ startDate: START, endDate: END, dimensions: ['date'] })
const totalClicks = byDate.reduce((a, r) => a + r.clicks, 0)
const totalImpr = byDate.reduce((a, r) => a + r.impressions, 0)
console.log(`Totals: clicks=${totalClicks}  impressions=${totalImpr}  CTR=${totalImpr ? (totalClicks/totalImpr*100).toFixed(2) : 0}%\n`)

console.log('By day:')
for (const r of byDate) console.log('  ', r.keys[0], 'clicks:'+r.clicks, 'impr:'+r.impressions)

console.log('\n=== Top queries ===')
const queries = await q({
  startDate: START, endDate: END,
  dimensions: ['query'],
  orderBy: [{ fieldName: 'impressions', sortOrder: 'DESCENDING' }],
})
for (const r of queries.slice(0, 40)) {
  console.log('  ', String(r.clicks).padStart(3)+' clk', String(r.impressions).padStart(4)+' imp', 'pos '+r.position.toFixed(1), ' ', r.keys[0])
}

console.log('\n=== By page ===')
const pages = await q({
  startDate: START, endDate: END,
  dimensions: ['page'],
  orderBy: [{ fieldName: 'impressions', sortOrder: 'DESCENDING' }],
})
for (const r of pages) {
  console.log('  ', String(r.clicks).padStart(3)+' clk', String(r.impressions).padStart(4)+' imp', 'pos '+r.position.toFixed(1), ' ', r.keys[0])
}
console.log('')
