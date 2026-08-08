import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección de proyectos del portafolio.
 * Cada proyecto representa un sistema real desarrollado por Lexicore.
 * Solo deben incluirse datos verificables.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    url: z.string().url(),
    category: z.string(),
    description: z.string().max(160),
    longDescription: z.string().optional(),
    heroImage: z.string().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
      )
      .default([]),
    technologies: z.array(z.string()).default([]),
    services: z.array(z.string()).default([]),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    architecture: z.string().optional(),
    frontend: z.string().optional(),
    backend: z.string().optional(),
    data: z.string().optional(),
    infrastructure: z.string().optional(),
    security: z.string().optional(),
    year: z.number().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'archived', 'in-development']).default('active'),
    externalUrl: z.string().url().optional(),
  }),
});

/**
 * Colección de capacidades técnicas.
 */
const capabilities = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/capabilities' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    shortDescription: z.string().max(160),
    featured: z.boolean().default(false),
    icon: z.string().optional(),
  }),
});

/**
 * Colección de pasos del proceso de trabajo.
 */
const process = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/process' }),
  schema: z.object({
    step: z.string().regex(/^[a-z0-9-]+$/),
    order: z.number(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  projects,
  capabilities,
  process,
};
