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

    // Publication Name: the site brand name
    const pubName = 'Arbeitszeit Rechner Pro';
    // Format publication_date as ISO-8601 (YYYY-MM-DDTHH:mm:ssZ)
    const rawDate = post.data.publishDate;
    const publishDate = rawDate instanceof Date ? rawDate.toISOString() : new Date().toISOString();

    const escapedTitle = post.data.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const escapedPubName = pubName.replace(/&/g, '&amp;');

    urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapedPubName}</news:name>
        <news:language>${locale}</news:language>
      </news:publication>
      <news:publication_date>${publishDate}</news:publication_date>
      <news:title>${escapedTitle}</news:title>
    </news:news>
  </url>\n`;
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlNodes.trim()}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
