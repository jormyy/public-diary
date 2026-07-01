import { defineConfig } from 'astro/config';

// Set SITE to your GitHub Pages URL: https://<username>.github.io
// Set BASE to your repo name if it's a project page (e.g. /public-diary)
// If you use a custom domain or <username>.github.io repo, set BASE to ''
const SITE = 'https://jormyy.github.io';
const BASE = '/public-diary';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
