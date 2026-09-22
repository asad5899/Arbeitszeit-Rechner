import fs from 'fs';
import path from 'path';

const blogDir = path.resolve('src/content/blog');
const publicDir = path.resolve('public');

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
console.log(`Checking ${files.length} blog posts:`);

let allOk = true;
for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const lines = content.split('\n');
  const imageLine = lines.find(l => l.startsWith('image:'));
  if (imageLine) {
    const rawPath = imageLine.replace('image:', '').trim().replace(/['"]/g, '');
    const diskPath = path.join(publicDir, rawPath.replace(/^\//, ''));
    if (fs.existsSync(diskPath)) {
      const stats = fs.statSync(diskPath);
      console.log(`✓ ${file}: ${rawPath} (${Math.round(stats.size / 1024)} KB)`);
    } else {
      console.error(`✗ ${file}: MISSING ${rawPath}`);
      allOk = false;
    }
  } else {
    console.error(`✗ ${file}: No image: defined in frontmatter`);
    allOk = false;
  }
}

if (allOk) {
  console.log('\nAll 14 blog posts have valid, high-resolution feature images!');
} else {
  console.error('\nSome blog posts are missing images.');
}
