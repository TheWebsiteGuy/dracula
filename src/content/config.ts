// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    featuredImage: image(),
    pubDate: z.coerce.date(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    featuredImage: image(),
  }),
});

export const collections = {
  'posts': posts,
  'projects': projects,
};
