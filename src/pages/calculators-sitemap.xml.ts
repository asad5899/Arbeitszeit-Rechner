import type { APIRoute } from 'astro';
import { tools } from '../data/tools';
import { locales, defaultLocale, getLocalizedPath } from '../utils/i18n';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://www.arbeitszeitrechnerpro.de';
  const today = new Date().toISOString().split('T')[0];

  const getHreflangCode = (locale: string) => {
    if (locale === 'de') return 'de-DE';
    return locale;
  };

  let urlNodes = '';

  for (const tool of tools) {
    const basePath = `/tools/${tool.slug}`;

    for (const locale of locales) {
      const localPath = getLocalizedPath(basePath, locale);
      const locUrl = `${siteUrl}${localPath}/`;

      const alternates = locales
        .map((loc) => {
          const altPath = getLocalizedPath(basePath, loc);
          const altUrl = `${siteUrl}${altPath}/`;
          const hreflang = getHreflangCode(loc);
          return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${altUrl}" />`;
        })
        .join('\n');

      const defaultPath = getLocalizedPath(basePath, defaultLocale);
      const defaultUrl = `${siteUrl}${defaultPath}/`;
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`;

      urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
${alternates}
${xDefault}
  </url>\n`;
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlNodes.trim()}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
