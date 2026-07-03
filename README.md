# ToolFaultFinder

A static fault-finding reference site for power tools and workshop machines.
Built with [Astro](https://astro.build), searched with
[Pagefind](https://pagefind.app), deployed on [Netlify](https://netlify.com).

**Phase 1: static only.** No database, no backend, no user submissions. The
content schema is deliberately flat and typed so it could be migrated to a
database later, but nothing depends on one.

## Quick start

```bash
npm install
npm run dev        # dev server at http://localhost:4321 (search disabled in dev)
npm run build      # builds site to dist/ and generates the Pagefind search index
npm run preview    # serve the production build locally — use this to test search
```

Search only works against a production build, because Pagefind indexes the
built HTML. `npm run dev` shows a hint in the search box instead.

## Adding a new fault entry

Create one markdown file per fault in `src/content/faults/`. The filename
becomes nothing user-visible (URLs are generated from brand + model), but keep
it descriptive, e.g. `makita-dhp458-chuck-slip.md`.

Copy this template:

```markdown
---
brand: "Makita"
model: "DHP458"
category: "Chucks & Gearboxes"
symptom: "One-line description of the symptom as the user experiences it"
likely_cause: "One-line most-likely cause"
diagnostic_steps:
  - "First thing to check"
  - "Second thing to check"
  - "Third thing to check"
fix_or_verdict: "One-line fix summary or repair-vs-replace verdict"
source_type: "firsthand"        # "firsthand" or "researched"
# sources:                      # only for source_type: "researched"
#   - "Service manual name/link"
#   - "Forum thread or video link"
date_published: 2026-07-03
---

## How the fault showed up

Full narrative writeup goes here as normal markdown. It renders below the
quick-facts plate on the entry page.

## What we found

...

## Verdict

...
```

Field notes:

- **`source_type`** must be exactly `firsthand` or `researched` — the build
  fails on anything else (the schema is enforced in `src/content.config.ts`).
- **`sources`** is only meaningful for `researched` entries; it renders as a
  source list on the quick-facts plate. Omit it for firsthand entries.
- **`category`** is free text, but reuse existing category names where possible
  — the `/faults/` page builds its filter buttons from the distinct set of
  categories.
- **URL**: the entry publishes at `/tools/<brand-slug>/<model-slug>/`, e.g.
  brand "Bambu Lab" + model "A1" → `/tools/bambu-lab/a1/`. One entry per
  brand+model pair — if you need multiple faults for the same model later,
  the slug scheme will need extending (e.g. add a fault slug segment).

That's the whole workflow: add the file, commit, push. Netlify rebuilds and the
new entry appears everywhere automatically (homepage grid, fault index, search).

## Deploying to Netlify

1. Push this repo to GitHub (or GitLab/Bitbucket):

   ```bash
   git init
   git add -A
   git commit -m "Initial ToolFaultFinder build"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. In the Netlify dashboard: **Add new site → Import an existing project**,
   pick the repo. Netlify reads `netlify.toml` automatically — build command
   `npm run build`, publish directory `dist`, Node 22. No settings to change.

3. Every subsequent `git push` triggers a rebuild and deploy.

### Contact form

The contact page uses **Netlify Forms** (the `data-netlify="true"` attribute on
the form). Netlify detects it at deploy time — no backend needed. Submissions
appear under **Site → Forms** in the Netlify dashboard; turn on email
notifications there. The form does nothing in local dev; test it on the
deployed site.

## Project layout

```
src/
  content.config.ts          # "faults" collection schema (zod-validated frontmatter)
  content/faults/*.md        # one file per fault entry ← you mostly work here
  pages/
    index.astro              # homepage: search + recent entries grid
    faults/index.astro       # fault index with category filtering
    tools/[brand]/[model].astro  # entry pages, generated from the collection
    about.astro, contact.astro, privacy-policy.astro, how-we-research.astro
  layouts/Base.astro         # shared shell (header, nav, footer)
  components/FaultCard.astro # entry card used on homepage + fault index
  styles/global.css          # all styling; theme colors are CSS variables in :root
netlify.toml                 # Netlify build config
```

## Search (Pagefind)

Pagefind runs as a `postbuild` script (`pagefind --site dist`) after every
`astro build`, indexing the built HTML into `dist/pagefind/`. Only fault entry
pages are indexed (they carry `data-pagefind-body`); nav/static pages stay out
of the results. The homepage search bar loads Pagefind's default UI, themed via
CSS variables in `global.css`.

## Seed content

The three seed entries (Triton TPT125, Axminster AW106PT2, Bambu Lab A1) are
published as finished `researched` entries. When you experience one of these
faults on your own tool, rewrite the entry with your actual account and flip
`source_type` to `firsthand` (and remove the `sources` list).
