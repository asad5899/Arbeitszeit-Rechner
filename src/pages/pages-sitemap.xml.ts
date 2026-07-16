import type { APIRoute } from 'astro';
import { locales, defaultLocale, getLocalizedPath } from '../utils/i18n';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://www.arbeitszeitrechnerpro.de';
  const today = new Date().toISOString().split('T')[0];

  // Base paths for core pages
  const corePages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.6', changefreq: 'weekly' },
    { path: '/contact', priority: '0.6', changefreq: 'weekly' },
    { path: '/faq', priority: '0.6', changefreq: 'weekly' },
    { path: '/blog', priority: '0.7', changefreq: 'weekly' },
    { path: '/authors', priority: '0.6', changefreq: 'weekly' },
    { path: '/categories', priority: '0.8', changefreq: 'weekly' },
    { path: '/tags', priority: '0.6', changefreq: 'weekly' },
    { path: '/archives', priority: '0.6', changefreq: 'weekly' },
    { path: '/privacy', priority: '0.4', changefreq: 'yearly' },
    { path: '/terms', priority: '0.4', changefreq: 'yearly' },
    { path: '/cookie-policy', priority: '0.4', changefreq: 'yearly' },
    { path: '/disclaimer', priority: '0.4', changefreq: 'yearly' },
    { path: '/accessibility', priority: '0.4', changefreq: 'yearly' },
    { path: '/editorial', priority: '0.4', changefreq: 'yearly' },
  ];

  // Map locale codes to hreflang codes
  const getHreflangCode = (locale: string) => {
    if (locale === 'de') return 'de-DE';
    return locale; // 'en', 'fr', 'ar'
  };

  let urlNodes = '';

  for (const page of corePages) {
    for (const locale of locales) {
      // Calculate loc URL for this specific locale
      const localPath = getLocalizedPath(page.path, locale);
      const locUrl = `${siteUrl}${localPath}${localPath.endsWith('/') ? '' : '/'}`;

      // Generate hreflang elements
      const alternates = locales
        .map((loc) => {
          const altPath = getLocalizedPath(page.path, loc);
          const altUrl = `${siteUrl}${altPath}${altPath.endsWith('/') ? '' : '/'}`;
          const hreflang = getHreflangCode(loc);
          return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${altUrl}" />`;
        })
        .join('\n');

      // Add x-default hreflang pointing to default locale (de)
      const defaultPath = getLocalizedPath(page.path, defaultLocale);
      const defaultUrl = `${siteUrl}${defaultPath}${defaultPath.endsWith('/') ? '' : '/'}`;
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`;

      urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
