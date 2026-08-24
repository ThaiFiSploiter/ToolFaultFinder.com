import type { CollectionEntry } from 'astro:content';
import { slugify } from './slug';

/**
 * A brand with every fault entry filed under it.
 * `brand` keeps the real display form ("Kärcher"); `slug` is the URL segment.
 */
export interface BrandGroup {
  brand: string;
  slug: string;
  entries: CollectionEntry<'faults'>[];
  categories: string[];
}

/**
 * A brand needs this many entries before it gets its own `/tools/<brand>/` hub.
 *
 * Deliberately not 1. Seven of 25 URLs are currently uncrawled or unknown to
 * Google, so crawl budget is the scarce resource on this site — minting a dozen
 * hub pages that each restate a single entry would spend that budget on thin
 * duplicates of the very pages we are trying to get crawled. Brands cross this
 * threshold on their own as the library grows, and the hub appears then.
 */
export const HUB_MIN_ENTRIES = 2;

/** Group entries by brand, newest entry first within each, brands A–Z. */
export function groupByBrand(entries: CollectionEntry<'faults'>[]): BrandGroup[] {
  const groups = new Map<string, BrandGroup>();

  for (const entry of entries) {
    const slug = slugify(entry.data.brand);
    let group = groups.get(slug);
    if (!group) {
      group = { brand: entry.data.brand, slug, entries: [], categories: [] };
      groups.set(slug, group);
    }
    group.entries.push(entry);
  }

  for (const group of groups.values()) {
    group.entries.sort((a, b) => b.data.date_published.valueOf() - a.data.date_published.valueOf());
    group.categories = [...new Set(group.entries.map((e) => e.data.category))].sort();
  }

  return [...groups.values()].sort((a, b) => a.brand.localeCompare(b.brand, 'en'));
}

export const hasHub = (group: BrandGroup): boolean => group.entries.length >= HUB_MIN_ENTRIES;

/** URL of a brand hub. Only meaningful when `hasHub` is true for that brand. */
export const brandUrl = (slug: string): string => `/tools/${slug}/`;

/** "the TPT125", "the 5704R and HR2470", "the K4, K5 and TPT125" — for meta text. */
export function listModels(group: BrandGroup): string {
  const models = group.entries.map((e) => e.data.model);
  if (models.length === 1) return models[0];
  return models.slice(0, -1).join(', ') + ' and ' + models[models.length - 1];
}
