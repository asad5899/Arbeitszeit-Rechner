import fs from 'fs';
import path from 'path';

const dir = path.resolve('src/content/blog');
const files = fs.readdirSync(dir);

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const lines = content.split('\n');
  const getField = (prefix) => {
    const l = lines.find(x => x.startsWith(prefix));
    return l ? l.replace(prefix, '').trim().replace(/['"]/g, '') : '';
  };
  console.log({
    file: f,
    locale: getField('locale:'),
    author: getField('author:'),
    publishDate: getField('publishDate:'),
    title: getField('title:'),
    bodyLines: lines.length
  });
}
