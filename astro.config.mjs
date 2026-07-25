import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.arbeitszeitrechnerpro.de',
  // Enforce trailing slashes so that canonical/hreflang URLs always match
  // the crawled page URLs (fixes Semrush "no self-referencing hreflang").
  trailingSlash: 'always',
  // Keep static pages small on the wire. This is especially important for the
  // content-rich homepage on slower mobile connections.
  compressHTML: true,
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
