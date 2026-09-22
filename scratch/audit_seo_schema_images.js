import fs from 'fs';
import path from 'path';

const blogDir = 'src/content/blog';
const publicDir = 'public';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

console.log(`=== AUDITING ${files.length} BLOG POSTS ===\n`);

let totalIssues = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    console.error(`❌ [${file}] No frontmatter found!`);
    totalIssues++;
    return;
  }

  const fm = fmMatch[1];
  const title = (fm.match(/title:\s*['"]?(.*?)['"]?$/m) || [])[1];
  const desc = (fm.match(/description:\s*['"]?(.*?)['"]?$/m) || [])[1];
  const image = (fm.match(/image:\s*['"]?(.*?)['"]?$/m) || [])[1];
  const imageAlt = (fm.match(/imageAlt:\s*['"]?(.*?)['"]?$/m) || [])[1];
  const author = (fm.match(/author:\s*['"]?(.*?)['"]?$/m) || [])[1];
  const pubDate = (fm.match(/publishDate:\s*(.*?)$/m) || [])[1];

  console.log(`📄 Post: ${file}`);
  console.log(`   Title: "${title?.substring(0, 50)}..."`);
  console.log(`   Featured Image: ${image}`);
  console.log(`   Featured Image Alt: "${imageAlt}"`);

  // Check featured image existence
  if (!image) {
    console.warn(`   ⚠️ Missing featured image!`);
    totalIssues++;
  } else {
    const relImagePath = image.startsWith('/') ? image.slice(1) : image;
    const fullImagePath = path.join(publicDir, relImagePath);
    if (!fs.existsSync(fullImagePath)) {
      console.error(`   ❌ Featured image not found on disk: ${fullImagePath}`);
      totalIssues++;
    } else {
      const stats = fs.statSync(fullImagePath);
      console.log(`   ✅ Featured image exists (${(stats.size / 1024).toFixed(1)} KB)`);
    }
  }

  // Check alt text
  if (!imageAlt || imageAlt.trim().length === 0) {
    console.warn(`   ⚠️ Missing or empty imageAlt in frontmatter!`);
    totalIssues++;
  } else if (imageAlt.length < 10) {
    console.warn(`   ⚠️ imageAlt might be too short: "${imageAlt}"`);
  }

  // Check inline images in body
  const body = content.replace(fmMatch[0], '');
  const inlineImgRegex = /!\[(.*?)\]\((.*?)\)/g;
  let match;
  let inlineCount = 0;
  while ((match = inlineImgRegex.exec(body)) !== null) {
    inlineCount++;
    const [_, alt, src] = match;
    console.log(`   🖼️ Inline image #${inlineCount}:`);
    console.log(`      Alt: "${alt}"`);
    console.log(`      Src: ${src}`);
    if (!alt || alt.trim().length === 0) {
      console.warn(`      ⚠️ Empty inline image alt text!`);
      totalIssues++;
    }
    const relSrc = src.startsWith('/') ? src.slice(1) : src;
    const fullSrcPath = path.join(publicDir, relSrc);
    if (!fs.existsSync(fullSrcPath)) {
      console.error(`      ❌ Inline image not found on disk: ${fullSrcPath}`);
      totalIssues++;
    } else {
      const stats = fs.statSync(fullSrcPath);
      console.log(`      ✅ Exists (${(stats.size / 1024).toFixed(1)} KB)`);
    }
  }

  console.log('');
});

console.log(`=== SUMMARY: ${totalIssues} issue(s) found ===\n`);
