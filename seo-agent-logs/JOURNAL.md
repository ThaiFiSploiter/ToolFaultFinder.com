# ToolFaultFinder — SEO Agent Journal

Newest entries at the bottom. Every scheduled run appends one entry: date, run type,
clicks vs the prior period, what changed and why, what was pushed live, what was staged
for Nick, and anything flagged NEEDS HUMAN.

---

## 2026-08-23 — Baseline (set up by hand, not an agent run)

**Traffic, 90 days to 21 Aug:** 851 impressions, 20 clicks, CTR 2.35%.
Impressions/day 12.8 (6–24 Jul) → 22.5 (25 Jul–21 Aug), roughly +75%.
First impressions landed 6 July, so this is ~7 weeks of real data.

**Positions:** almost every page sits at 9–12. Rankings are not the problem;
CTR and library size are.

**Top pages:**

```
 10 clk   87 imp  pos  9.1  /tools/triton/tpt125/      CTR 11.5%
  5 clk  161 imp  pos 11.2  /tools/karcher/k4/         CTR  3.1%
  3 clk  424 imp  pos  9.0  /tools/bambu-lab/a1/       CTR  0.7%
  1 clk   54 imp  pos  9.7  /tools/dewalt/dws774/
  0 clk   32 imp  pos 12.4  /tools/makita/5704r/
  0 clk   21 imp  pos 11.7  /tools/record-power/bs250/
```

**Coverage sweep (`gsc-coverage.mjs`), 25 URLs in the sitemap:**

- 18 Submitted and indexed
- 6 Discovered – currently not indexed (uncrawled): dcf887, hr2470, 2606-20,
  hvr200, mk3s, ms-250. Note dcf887 and hr2470 have been live since ~3 July —
  seven weeks uncrawled. This is discovery throttling on a young domain, not a
  quality signal.
- 1 URL is unknown to Google: `/tools/bosch/gws-7-115/` — in the sitemap yet
  undiscovered. Internal-linking gap; worth fixing early.

**Open items handed to the agent (see playbook BASELINE section):**

1. All 18 entry titles run 102–179 chars before " · ToolFaultFinder"; Google shows
   ~60. Template: `src/pages/tools/[brand]/[model].astro`. Highest-value fix.
2. `/tools/bambu-lab/a1/` ranks pos 9 on the error string "printer is busy with
   another job" (~380 impressions across ~12 variants) but that exact phrase appears
   nowhere on the page. 0.7% CTR as a result.
3. No JSON-LD on any template.
4. Nothing published since 11 July — six weeks of no new entries.

**Decisions recorded this session:**

- Split authority: technical SEO ships autonomously to `main`; new/rewritten fault
  entries stage on a `content/` branch for Nick to fact-check and illustrate.
- Cadence: 3–5 entries/week, ~15–20/month. Not a 100-article batch — the coverage
  sweep above shows discovery is already the bottleneck at 25 URLs.
