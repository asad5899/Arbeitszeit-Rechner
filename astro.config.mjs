import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://arbeitszeit-rechner.de',
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
