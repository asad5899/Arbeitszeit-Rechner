import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://www.arbeitszeitrechnerpro.de';
  const today = new Date().toISOString().split('T')[0];

  const sitemaps = [
    'pages-sitemap.xml',
    'calculators-sitemap.xml',
    'tools-sitemap.xml',
    'categories-sitemap.xml',
    'blog-sitemap.xml',
    'images-sitemap.xml',
    'videos-sitemap.xml',
    'news-sitemap.xml',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${siteUrl}/${sitemap}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
