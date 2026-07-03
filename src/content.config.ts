import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The "faults" collection: one markdown file per tool fault entry.
// Structured fields live in frontmatter (rendered as the "quick facts"
// spec plate); the markdown body is the full narrative writeup.
//
// Schema is kept flat and typed so it could map 1:1 onto a database
// table later (Phase 2), but nothing here depends on one.
const faults = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faults' }),
  schema: ({ image }) => z.object({
    // Optional illustration/photo, path relative to the markdown file,
    // e.g. "./img/triton-tpt125.png". Optimized by Astro at build time.
    image: image().optional(),
    image_alt: z.string().optional(),
    brand: z.string(),
    model: z.string(),
    category: z.string(),
    symptom: z.string(),
    likely_cause: z.string(),
    diagnostic_steps: z.array(z.string()),
    fix_or_verdict: z.string(),
    source_type: z.enum(['firsthand', 'researched']),
    sources: z.array(z.string()).optional(),
    date_published: z.coerce.date(),
  }),
});

export const collections = { faults };
