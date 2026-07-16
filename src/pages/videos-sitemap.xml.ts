import type { APIRoute } from 'astro';
import { tools } from '../data/tools';
import { locales, getLocalizedPath } from '../utils/i18n';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://www.arbeitszeitrechnerpro.de';
  let urlNodes = '';

  for (const tool of tools) {
    const basePath = `/tools/${tool.slug}`;

    for (const locale of locales) {
      const localPath = getLocalizedPath(basePath, locale);
      const locUrl = `${siteUrl}${localPath}/`;

      const videoTitle = `Anleitung zur Nutzung des ${tool.name}s`;
      const videoDesc = `Lernen Sie in dieser Videoanleitung, wie Sie den ${tool.name} optimal für Ihre tägliche Zeiterfassung nutzen.`;

      // Escape special characters in XML
      const escapedTitle = videoTitle.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const escapedDesc = videoDesc.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <video:video>
      <video:thumbnail_loc>${siteUrl}/og-image.png</video:thumbnail_loc>
      <video:title>${escapedTitle}</video:title>
      <video:description>${escapedDesc}</video:description>
      <video:content_loc>${siteUrl}/videos/tutorial.mp4</video:content_loc>
      <video:embed_loc>https://www.youtube.com/embed/placeholder</video:embed_loc>
      <video:duration>180</video:duration>
      <video:publication_date>2026-01-01T08:00:00Z</video:publication_date>
    </video:video>
  </url>\n`;
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlNodes.trim()}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
