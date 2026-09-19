import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const authors = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    image: z.string(),
    expertise: z.string(),
    jobTitle: z.string().optional(),
    sameAs: z.array(z.string()).default([]),
    socials: z.object({
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      website: z.string().optional(),
    }).default({}),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['de', 'en', 'fr', 'ar']).default('de'),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    author: z.string(), // Author reference matching filename/slug
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().default('/images/blog-default.jpg'),
    imageAlt: z.string().default('Blog post featured image'),
    readingTime: z.string().optional(),
    draft: z.boolean().optional(),
    canonicalUrl: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    related: z.array(z.string()).default([]), // slugs of related articles
    reviewer: z.string().optional(), // reviewer name
    reviewerBio: z.string().optional(), // reviewer description
    sources: z.array(z.string()).default([]), // bibliography / sources
  }),
});

export const collections = {
  authors,
  blog,
};
