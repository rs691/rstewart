import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
  work: defineCollection({
    loader: glob({ base: './src/content/work', pattern: ['**/*.md', '**/*.mdx'] }),
    schema: z.object({
      title: z.string(),
      description: z.string().nullable().optional().transform((value) => value ?? ''),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      email: z.string().email().optional(),
      website: z.string().url().optional(),
      github: z.string().url().optional(),
      project_image: z.string().optional(),
      project_image_alt: z.string().optional(),
    }),
  }),
};


