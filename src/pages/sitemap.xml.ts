import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { tools } from '../data/tools';
import { locales, defaultLocale, getLocalizedPath } from '../utils/i18n';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://www.arbeitszeitrechnerpro.de';
  const today = new Date().toISOString().split('T')[0];

  const getHreflangCode = (locale: string) => {
    if (locale === 'de') return 'de-DE';
    return locale;
  };

  const escapeXml = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  let urlNodes = '';

  // 1. CORE PAGES (Home, About, FAQ, and legal pages)
  const corePages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.5', changefreq: 'yearly' },
    { path: '/contact', priority: '0.5', changefreq: 'yearly' },
    { path: '/faq', priority: '0.5', changefreq: 'yearly' },
    { path: '/blog', priority: '0.5', changefreq: 'weekly' },
    { path: '/authors', priority: '0.5', changefreq: 'yearly' },
    { path: '/categories', priority: '0.5', changefreq: 'weekly' },
    { path: '/tags', priority: '0.5', changefreq: 'weekly' },
    { path: '/archives', priority: '0.5', changefreq: 'yearly' },
    { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { path: '/terms', priority: '0.5', changefreq: 'yearly' },
    { path: '/cookie-policy', priority: '0.5', changefreq: 'yearly' },
    { path: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
    { path: '/accessibility', priority: '0.5', changefreq: 'yearly' },
    { path: '/editorial', priority: '0.5', changefreq: 'yearly' },
  ];

  for (const page of corePages) {
    for (const locale of locales) {
      const localPath = getLocalizedPath(page.path, locale);
      const locUrl = `${siteUrl}${localPath}${localPath.endsWith('/') ? '' : '/'}`;

      const alternates = locales
        .map((loc) => {
          const altPath = getLocalizedPath(page.path, loc);
          const altUrl = `${siteUrl}${altPath}${altPath.endsWith('/') ? '' : '/'}`;
          const hreflang = getHreflangCode(loc);
          return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${altUrl}" />`;
        })
        .join('\n');

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
  </url>\n\n`;
    }
  }

  // 2. CALCULATORS / TOOLS (with video sitemap details)
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

      const videoTitle = escapeXml(`Anleitung zur Nutzung des ${tool.name}s`);
      const videoDesc = escapeXml(`Lernen Sie in dieser Videoanleitung, wie Sie den ${tool.name} optimal für Ihre tägliche Zeiterfassung nutzen.`);

      urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
${alternates}
${xDefault}
    <video:video>
      <video:thumbnail_loc>${siteUrl}/og-image.png</video:thumbnail_loc>
      <video:title>${videoTitle}</video:title>
      <video:description>${videoDesc}</video:description>
      <video:content_loc>${siteUrl}/videos/tutorial.mp4</video:content_loc>
      <video:player_loc>https://www.youtube.com/embed/placeholder</video:player_loc>
      <video:duration>180</video:duration>
      <video:publication_date>2026-01-01T08:00:00Z</video:publication_date>
    </video:video>
  </url>\n\n`;
    }
  }

  // 3. BLOG POSTS (with image and news sitemap details)
  const posts = await getCollection('blog');
  for (const post of posts) {
    const locale = post.data.locale;
    const basePath = `/blog/${post.id}`;
    const localPath = getLocalizedPath(basePath, locale);
    const locUrl = `${siteUrl}${localPath}/`;

    const rawDate = post.data.updateDate || post.data.publishDate;
    const lastmod = rawDate instanceof Date ? rawDate.toISOString().split('T')[0] : today;
    const publishDate = post.data.publishDate instanceof Date ? post.data.publishDate.toISOString() : new Date().toISOString();

    const imageUrl = post.data.image.startsWith('http') 
      ? post.data.image 
      : `${siteUrl}${post.data.image}`;

    const escapedTitle = escapeXml(post.data.title);
    const escapedAlt = escapeXml(post.data.imageAlt);
    const escapedPubName = escapeXml('Arbeitszeit Rechner Pro');

    urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escapedTitle}</image:title>
      <image:caption>${escapedAlt}</image:caption>
    </image:image>
    <news:news>
      <news:publication>
        <news:name>${escapedPubName}</news:name>
        <news:language>${locale}</news:language>
      </news:publication>
      <news:publication_date>${publishDate}</news:publication_date>
      <news:title>${escapedTitle}</news:title>
    </news:news>
  </url>\n\n`;
  }

  // 4. AUTHOR PROFILE PAGES (with image sitemap details)
  const authors = await getCollection('authors');
  for (const author of authors) {
    const basePath = `/authors/${author.id}`;

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

      const imageUrl = author.data.image.startsWith('http') 
        ? author.data.image 
        : `${siteUrl}${author.data.image}`;
      
      const escapedName = escapeXml(author.data.name);
      const escapedBio = escapeXml(`Profilbild von ${author.data.name}`);

      urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
${alternates}
${xDefault}
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escapedName}</image:title>
      <image:caption>${escapedBio}</image:caption>
    </image:image>
  </url>\n\n`;
    }
  }

  // 5. CATEGORIES
  for (const locale of locales) {
    const localePosts = posts.filter((p) => p.data.locale === locale);
    const uniqueCategories = [...new Set(localePosts.map((p) => p.data.category))];

    for (const cat of uniqueCategories) {
      const catSlug = cat.toLowerCase().replace(/\s+/g, '-');
      const basePath = `/categories/${catSlug}`;
      const localPath = getLocalizedPath(basePath, locale);
      const locUrl = `${siteUrl}${localPath}/`;

      urlNodes += `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n\n`;
    }
  }

  // Clean trailing spaces and tabs from urlNodes, but keep leading spaces of the first line
  const cleanUrlNodes = urlNodes.replace(/[ \t]+$/gm, '');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${cleanUrlNodes}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
