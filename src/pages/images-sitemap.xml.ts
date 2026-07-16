import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { locales, getLocalizedPath } from '../utils/i18n';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://www.arbeitszeitrechnerpro.de';
  let urlNodes = '';

  // 1. Blog post images
  const posts = await getCollection('blog');
  for (const post of posts) {
    const locale = post.data.locale;
    const basePath = `/blog/${post.id}`;
    const localPath = getLocalizedPath(basePath, locale);
    const locUrl = `${siteUrl}${localPath}/`;
    
    const imageUrl = post.data.image.startsWith('http') 
      ? post.data.image 
      : `${siteUrl}${post.data.image}`;

    // Escape special characters in XML
    const escapedTitle = post.data.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const escapedAlt = post.data.imageAlt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escapedTitle}</image:title>
      <image:caption>${escapedAlt}</image:caption>
    </image:image>
  </url>\n`;
  }

  // 2. Author images
  const authors = await getCollection('authors');
  for (const author of authors) {
    const basePath = `/authors/${author.id}`;

    for (const locale of locales) {
      const localPath = getLocalizedPath(basePath, locale);
      const locUrl = `${siteUrl}${localPath}/`;

      const imageUrl = author.data.image.startsWith('http') 
        ? author.data.image 
        : `${siteUrl}${author.data.image}`;

      const escapedName = author.data.name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const escapedBio = `Profilbild von ${author.data.name}`.replace(/&/g, '&amp;');

      urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escapedName}</image:title>
      <image:caption>${escapedBio}</image:caption>
    </image:image>
  </url>\n`;
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlNodes.trim()}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
