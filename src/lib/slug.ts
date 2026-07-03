/** URL-safe slug from a brand or model string, e.g. "Kärcher" -> "karcher". */
export function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

import type { CollectionEntry } from 'astro:content';

/** Canonical URL for a fault entry. */
export function faultUrl(entry: CollectionEntry<'faults'>): string {
  return `/tools/${slugify(entry.data.brand)}/${slugify(entry.data.model)}/`;
}
