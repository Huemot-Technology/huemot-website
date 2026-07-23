import { defineConfig } from 'astro/config';

// Custom domain: https://huemot.com  (served from GitHub Pages apex)
// sitemap.xml + robots.txt are maintained as static files in /public.
export default defineConfig({
  site: 'https://huemot.com',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
