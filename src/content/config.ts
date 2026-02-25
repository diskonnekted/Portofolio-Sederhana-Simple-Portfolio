import { defineCollection, z } from 'astro:content';

const heroCollection = defineCollection({
  type: 'data',
  schema: z.object({
    headline: z.string(),
    subheadline: z.string(),
    description: z.string(),
    avatar: z.string().optional(),
    primaryCtaText: z.string(),
    primaryCtaLink: z.string(),
    secondaryCtaText: z.string(),
    secondaryCtaLink: z.string(),
    availableForHire: z.boolean(),
  }),
});

const aboutCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    longDescription1: z.string(),
    longDescription2: z.string(),
    yearsExperience: z.string(),
    projectsCompleted: z.string(),
    commitment: z.string(),
    support: z.string(),
  }),
});

const contactCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    email: z.string(),
    phone: z.string(),
    github: z.string(),
    website: z.string(),
    instagram: z.string(),
  }),
});

const skillsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    category: z.enum(['Device', 'Connectivity', 'Backend', 'Frontend', 'Other']).default('Other'),
    color: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    github: z.string(),
    demo: z.string(),
    imageClass: z.string().optional(),
    image: z.string().optional(),
  }),
});

const experienceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z.coerce.date(),
    description: z.string(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  hero: heroCollection,
  about: aboutCollection,
  contact: contactCollection,
  skills: skillsCollection,
  projects: projectsCollection,
  experience: experienceCollection,
  articles: articlesCollection,
};
