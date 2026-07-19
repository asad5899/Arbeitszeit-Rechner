import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.arbeitszeitrechnerpro.de',
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
