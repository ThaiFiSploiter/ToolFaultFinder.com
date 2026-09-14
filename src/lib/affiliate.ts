/**
 * Amazon Associates configuration and link building.
 *
 * ---------------------------------------------------------------------------
 * CURRENTLY OFF. Nothing on the live site links to Amazon.
 * ---------------------------------------------------------------------------
 *
 * Why it is built but dark (Nick's decision, 14 Sep 2026):
 *
 * Amazon Associates closes accounts that do not make 3 qualifying sales within
 * 180 days of approval, and reapplying means starting over. The site runs 2-5
 * organic clicks a week, so applying now would very likely burn the application
 * before there is traffic to convert. The plan is to apply once weekly clicks
 * are consistently in the dozens, then flip `AFFILIATE_ENABLED` and fill in
 * `AMAZON_TAG` — at which point every `parts:` entry already written across the
 * library becomes a link at once, with the 180-day clock starting against real
 * traffic.
 *
 * To go live:
 *   1. Get approved at https://affiliate-program.amazon.co.uk/
 *   2. Put the tracking ID (looks like "toolfaultfinder-21") in AMAZON_TAG
 *   3. Set AFFILIATE_ENABLED = true
 *   4. Build and check /affiliate-disclosure/ now reads as "we use them"
 *
 * Until then the `parts:` data still renders — as plain text, no links. That is
 * deliberate: "here is the part you need" is useful to a reader with a broken
 * tool whether or not there is anything in it for us, and it means the research
 * is not wasted work sitting in a branch waiting on an Amazon application.
 */

/** Master switch. While false, no outbound Amazon link is rendered anywhere. */
export const AFFILIATE_ENABLED = false;

/** Associates tracking ID, e.g. "toolfaultfinder-21". Empty until approved. */
export const AMAZON_TAG = '';

/** UK storefront — the audience and all prices on this site are UK. */
const AMAZON_HOST = 'www.amazon.co.uk';

/**
 * One replaceable part or consumable named by a fault entry.
 *
 * `part_number` is the manufacturer's own code and must come from a real
 * document — a manual, a parts diagram, an official support page. Rail 3
 * applies here exactly as it does to diagnostic claims: a wrong part number
 * costs the reader money, so leave it out rather than guess it.
 */
export interface Part {
  /** What it is, in the reader's words: "Carbon brush set (pair)". */
  name: string;
  /** Manufacturer part code, only when verified against a real document. */
  part_number?: string;
  /** One line on choosing or fitting it. Optional. */
  note?: string;
  /**
   * Search terms used to build the Amazon link.
   *
   * Search links rather than ASINs, deliberately: an ASIN is a specific
   * listing that goes out of stock, gets relisted, or turns into a different
   * product under the same code, and a stale ASIN sends a reader somewhere
   * wrong with our tag on it. A search query for "carbon brushes bosch gws
   * 7-115" keeps working. It converts less well than a product link — that is
   * the trade being made.
   */
  search?: string;
}

/** True when links should actually render. Both halves are required. */
export const affiliateLive = (): boolean => AFFILIATE_ENABLED && AMAZON_TAG.length > 0;

/**
 * Amazon UK search URL for a part, tagged. Returns null when affiliate links
 * are off or the part has no search terms — callers render plain text instead.
 */
export function amazonSearchUrl(part: Part, context?: string): string | null {
  if (!affiliateLive()) return null;
  const terms = part.search ?? [context, part.name].filter(Boolean).join(' ');
  if (!terms.trim()) return null;
  const url = new URL(`https://${AMAZON_HOST}/s`);
  url.searchParams.set('k', terms);
  url.searchParams.set('tag', AMAZON_TAG);
  return url.href;
}
