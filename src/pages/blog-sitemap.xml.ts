import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getLocalizedPath } from '../utils/i18n';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://www.arbeitszeitrechnerpro.de';

  const posts = await getCollection('blog');
  let urlNodes = '';

  for (const post of posts) {
    const locale = post.data.locale;
    const basePath = `/blog/${post.id}`;
    const localPath = getLocalizedPath(basePath, locale);
    const locUrl = `${siteUrl}${localPath}/`;

    // Parse the date safely
    const rawDate = post.data.updateDate || post.data.publishDate;
    const lastmod = rawDate instanceof Date ? rawDate.toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

    urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
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
