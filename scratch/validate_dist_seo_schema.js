import fs from 'fs';
import path from 'path';

const distDir = 'dist';
const testPages = [
  'index.html',
  'blog/index.html',
  'blog/nachtschicht-ueber-mitternacht-zuschlaege-ruhezeiten/index.html',
  'blog/4-tage-woche-arbeitszeit-berechnen-wochenstunden/index.html',
  'blog/arbeitgeber-erfasst-keine-arbeitszeit-handlungsschritte/index.html',
  'tools/arbeitszeit-rechner/index.html',
  'authors/m-schmidt/index.html',
  'faq/index.html'
];

console.log('=== VALIDATING GENERATED HTML SEO, OPEN GRAPH & SCHEMA ===\n');

testPages.forEach(pageRel => {
  const filePath = path.join(distDir, pageRel);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Page not found in dist: ${filePath}`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  console.log(`📄 Page: /${pageRel.replace('/index.html', '').replace('index.html', '')}`);

  // 1. Check Title & Meta Description
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="(.*?)">/);
  console.log(`   🏷️ Title: "${titleMatch ? titleMatch[1].substring(0, 60) + '...' : 'MISSING'}"`);
  console.log(`   📝 Description: "${descMatch ? descMatch[1].substring(0, 70) + '...' : 'MISSING'}"`);

  // 2. Check Open Graph
  const ogTitle = (html.match(/<meta property="og:title" content="(.*?)">/) || [])[1];
  const ogDesc = (html.match(/<meta property="og:description" content="(.*?)">/) || [])[1];
  const ogImage = (html.match(/<meta property="og:image" content="(.*?)">/) || [])[1];
  const ogType = (html.match(/<meta property="og:type" content="(.*?)">/) || [])[1];
  const ogUrl = (html.match(/<meta property="og:url" content="(.*?)">/) || [])[1];
  console.log(`   🌐 Open Graph:`);
  console.log(`      og:type: ${ogType || 'MISSING'}`);
  console.log(`      og:url: ${ogUrl || 'MISSING'}`);
  console.log(`      og:image: ${ogImage || 'MISSING'}`);

  // 3. Check Twitter
  const twCard = (html.match(/<meta name="twitter:card" content="(.*?)">/) || [])[1];
  const twImage = (html.match(/<meta name="twitter:image" content="(.*?)">/) || [])[1];
  console.log(`   🐦 Twitter:`);
  console.log(`      twitter:card: ${twCard || 'MISSING'}`);
  console.log(`      twitter:image: ${twImage || 'MISSING'}`);

  // 4. Check JSON-LD Schema
  const schemaMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  if (!schemaMatches) {
    console.warn(`   ⚠️ No JSON-LD schema found!`);
  } else {
    schemaMatches.forEach((sm, i) => {
      const rawJson = sm.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
      try {
        const parsed = JSON.parse(rawJson);
        const graph = parsed['@graph'] || [parsed];
        const types = graph.map(item => item['@type']).filter(Boolean);
        console.log(`   📊 Schema (Script #${i+1}): Valid JSON. Types found: [${types.join(', ')}]`);

        // Check specific types
        graph.forEach(node => {
          if (node['@type'] === 'BlogPosting' || node['@type'] === 'Article') {
            console.log(`      - Article Headline: "${node.headline?.substring(0, 40)}..."`);
            console.log(`      - Article Image: ${JSON.stringify(node.image?.url || node.image)}`);
            console.log(`      - Article Author: ${JSON.stringify(node.author?.name || node.author)}`);
            console.log(`      - Article Date: ${node.datePublished}`);
          }
          if (node['@type'] === 'BreadcrumbList') {
            console.log(`      - Breadcrumb Items: ${node.itemListElement?.length || 0}`);
          }
          if (node['@type'] === 'FAQPage' || node.mainEntity?.some(e => e['@type'] === 'Question')) {
            const count = node.mainEntity ? node.mainEntity.length : 0;
            console.log(`      - FAQ Questions: ${count}`);
          }
        });
      } catch (e) {
        console.error(`   ❌ Invalid JSON-LD: ${e.message}`);
      }
    });
  }

  // 5. Check <img> tags & alt text
  const imgMatches = html.match(/<img\s+[^>]*>/g) || [];
  console.log(`   🖼️ Images on page: ${imgMatches.length}`);
  imgMatches.forEach((imgTag, idx) => {
    const src = (imgTag.match(/src="([^"]*)"/) || [])[1];
    const alt = (imgTag.match(/alt="([^"]*)"/) || [])[1];
    if (alt === undefined) {
      console.warn(`      ⚠️ Image #${idx+1} [${src}] is MISSING alt attribute!`);
    } else if (alt.trim() === '') {
      console.warn(`      ⚠️ Image #${idx+1} [${src}] has EMPTY alt attribute!`);
    } else {
      console.log(`      ✅ Image #${idx+1}: alt="${alt.substring(0, 50)}..." src="${src}"`);
    }
  });

  console.log('');
});
