import type { CollectionEntry } from 'astro:content';
import { slugify } from './slug';
import { HUB_MIN_ENTRIES } from './brands';

/**
 * A fault category with every entry filed under it — the `/faults/<category>/`
 * counterpart to brand hubs in `brands.ts`. Same `HUB_MIN_ENTRIES` threshold and
 * same reasoning: don't mint a hub that just restates a single entry.
 */
export interface CategoryGroup {
  category: string;
  slug: string;
  entries: CollectionEntry<'faults'>[];
}

/** Group entries by category, newest entry first within each, categories A–Z. */
export function groupByCategory(entries: CollectionEntry<'faults'>[]): CategoryGroup[] {
  const groups = new Map<string, CategoryGroup>();

  for (const entry of entries) {
    const slug = slugify(entry.data.category);
    let group = groups.get(slug);
    if (!group) {
      group = { category: entry.data.category, slug, entries: [] };
      groups.set(slug, group);
    }
    group.entries.push(entry);
  }

  for (const group of groups.values()) {
    group.entries.sort((a, b) => b.data.date_published.valueOf() - a.data.date_published.valueOf());
  }

  return [...groups.values()].sort((a, b) => a.category.localeCompare(b.category, 'en'));
}

export const hasHub = (group: CategoryGroup): boolean => group.entries.length >= HUB_MIN_ENTRIES;

/** URL of a category hub. Only meaningful when `hasHub` is true for that category. */
export const categoryUrl = (slug: string): string => `/faults/${slug}/`;
