import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { slugify } from './src/lib/slug.ts';

// --- Sitemap <lastmod> -------------------------------------------------------
//
// Astro's sitemap integration emits bare <loc> elements. Google treats
// <lastmod> as a recrawl hint, and this site's measured bottleneck is crawling,
// not ranking: 7 of 29 URLs have been "Discovered - currently not indexed" or
// unknown for over a month while the rest get recrawled regularly.
//
// Every date below is real. Entry URLs take that entry's own `date_published`,
// read straight from its markdown. Pages that list entries (the homepage, the
// fault index, /tools/ and the brand hubs) take the newest entry date, because
// that is genuinely when their content last changed. Static pages get no
// lastmod at all rather than an invented one — the element is optional per-URL.

const FAULTS_DIR = new URL('./src/content/faults/', import.meta.url);

function readEntryDates() {
  const dates = new Map();
  let newest = null;

  for (const file of readdirSync(FAULTS_DIR)) {
    if (!file.endsWith('.md')) continue;

    const frontmatter = readFileSync(new URL(file, FAULTS_DIR), 'utf8').split(/^---$/m)[1] ?? '';
    const field = (name) => frontmatter.match(new RegExp(`^${name}:\\s*"?(.+?)"?\\s*$`, 'm'))?.[1];

    const brand = field('brand');
    const model = field('model');
    const date = field('date_published');
    if (!brand || !model || !date) continue;

    dates.set(`/tools/${slugify(brand)}/${slugify(model)}/`, date);
    if (!newest || date > newest) newest = date;
  }

  return { dates, newest };
}

const { dates, newest } = readEntryDates();

/** True for pages whose content is a list of entries, so they change when one lands. */
const isEntryListing = (path) =>
  path === '/' || path === '/faults/' || path === '/tools/' || /^\/tools\/[^/]+\/$/.test(path);

export default defineConfig({
  site: 'https://toolfaultfinder.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = dates.get(path) ?? (isEntryListing(path) ? newest : null);
        return lastmod ? { ...item, lastmod: new Date(lastmod).toISOString() } : item;
      },
    }),
  ],
});
