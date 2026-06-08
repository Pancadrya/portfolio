// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    techStack: z.array(z.string()),
    isFeatured: z.boolean().default(false),
    githubUrl: z.string().url().optional(),
  }),
});

const digitalGardenCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/digital-garden" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    awsServices: z.array(z.string()),
    description: z.string(),
  }),
});

// WAJIB ADA: Ini yang diminta oleh Astro (yang bikin error undefined tadi)
export const collections = {
  projects: projectsCollection,
  "digital-garden": digitalGardenCollection,
};
