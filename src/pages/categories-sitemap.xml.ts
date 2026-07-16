import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { locales, defaultLocale, getLocalizedPath } from '../utils/i18n';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://www.arbeitszeitrechnerpro.de';
  const today = new Date().toISOString().split('T')[0];

  const posts = await getCollection('blog');
  let urlNodes = '';

  for (const locale of locales) {
    // Filter posts for this locale to find categories that exist
    const localePosts = posts.filter((p) => p.data.locale === locale);
    const uniqueCategories = [...new Set(localePosts.map((p) => p.data.category))];

    for (const cat of uniqueCategories) {
      const catSlug = cat.toLowerCase().replace(/\s+/g, '-');
      const basePath = `/categories/${catSlug}`;
      const localPath = getLocalizedPath(basePath, locale);
      const locUrl = `${siteUrl}${localPath}/`;

      // Since categories are locale-specific taxonomy and not 1-to-1 translations,
      // we list them as individual canonical URLs.
      urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes.trim()}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
