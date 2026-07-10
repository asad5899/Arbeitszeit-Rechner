import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Arbeitszeit Rechner Blog',
    description: 'Berechne deine tägliche Netto-Arbeitszeit abzüglich Pausen.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      customData: `<language>${post.data.locale}</language>`,
      link: post.data.locale === 'de' ? `/blog/${post.id}` : `/${post.data.locale}/blog/${post.id}`,
    })),
  });
}
