import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://toolfaultfinder.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
