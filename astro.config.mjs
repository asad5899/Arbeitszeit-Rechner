import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.arbeitszeitrechnerpro.de',
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

