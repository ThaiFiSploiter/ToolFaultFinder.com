/**
 * Amazon Associates configuration and link building.
 *
 * ---------------------------------------------------------------------------
 * LIVE since 14 Sep 2026. Tagged links render wherever an entry sets `parts:`.
 * ---------------------------------------------------------------------------
 *
 * The thing to keep an eye on: Amazon Associates closes accounts that do not
 * make 3 qualifying sales within 180 days of approval, and reapplying means
 * starting over. The site ran 2-5 organic clicks a week when this went live, so
 * the account is on a clock that traffic has to beat. If approval was 14 Sep
 * 2026, the deadline is roughly 13 Mar 2027. Worth checking the Associates
 * dashboard against that date rather than being surprised by it.
 *
 * To switch everything off again, set AFFILIATE_ENABLED = false: every link
 * across the site disappears and `parts:` falls back to plain text, which still
 * reads fine on its own. Nothing else needs touching.
 */

/** Master switch. While false, no outbound Amazon link is rendered anywhere. */
export const AFFILIATE_ENABLED = true;

/** Associates tracking ID (Amazon UK). Confirmed with Nick 14 Sep 2026. */
export const AMAZON_TAG = 'toolfaultfind-21';

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
  /**
   * 'repair' (default) — fixes this fault; only listed when the verdict says so.
   * 'consumable' — bar oil, chains, blades, discs, bags: normal running stock.
   * Rendered under separate headings so a consumable never reads as the fix.
   */
  kind?: 'repair' | 'consumable';
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
