import fs from 'fs';
import path from 'path';

const blogDir = path.resolve('src/content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

console.log('--- BLOG ARTICLES AND IMAGES ---');
const usedImages = new Set();
for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const featMatch = content.match(/^image:\s*['"]?([^'"\r\n]+)['"]?/m);
  const inlineMatches = [...content.matchAll(/!\[(.*?)\]\((.*?)\)/g)];
  
  const feat = featMatch ? featMatch[1] : null;
  const inlines = inlineMatches.map(m => m[2]);
  if (feat) usedImages.add(feat);
  inlines.forEach(i => usedImages.add(i));
  console.log(`${file}:`);
  console.log(`  Featured: ${feat}`);
  console.log(`  Inline:   ${inlines.join(', ')}`);
}

console.log('\n--- ALL UNIQUE USED IMAGES ---');
for (const img of usedImages) {
  console.log(img);
}
