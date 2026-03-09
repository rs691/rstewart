// src/content/config.ts
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';




export const collections = {
  work: defineCollection({
    loader: glob({ base: '../rstewart/src/content/work', pattern: ['**/*.md', '**/*.mdx'] }),
    // When using content, the loader is automatically set to glob
    // type: 'content', // 'content' for Markdown/MDX. Use 'data' for JSON/YAML
  }),
  schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
      email: z.string().email().optional(), // Use .email() for email validation
      website: z.string().url().optional(), // Use .url() for URL validation
      github: z.string().url().optional(),  // Use .url() for URL validation
      project_image: z.string().optional(), // Optional project image
      project_image_alt: z.string().optional(), // Optional alt text for project image
		}),
  }


