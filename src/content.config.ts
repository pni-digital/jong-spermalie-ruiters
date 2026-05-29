import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const editions = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        location: z.string(),
        heroImage: z.string(),
        countdown: z.string(),
    }),
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
    schema: z.object({
        hero: z.object({
            title: z.string(),
            subtitle: z.string(),
            ctas: z.array(z.object({
                label: z.string(),
                href: z.string(),
                variant: z.enum(['outline', 'gold']),
            })),
        }),
        club: z.object({
            title: z.string(),
            description: z.string(),
            cta: z.object({
                label: z.string(),
                href: z.string(),
            }),
            showCta: z.boolean().optional().default(true),
            images: z.array(z.object({
                src: z.string(),
                alt: z.string(),
            })),
        }),
        activities: z.object({
            eyebrow: z.string(),
            title: z.string(),
            description: z.string(),
            cta: z.object({ label: z.string(), href: z.string() }),
            bottomCta: z.object({ label: z.string(), href: z.string() }),
        }),
        sponsors: z.object({
            eyebrow: z.string(),
            title: z.string(),
            description: z.string(),
            cta: z.object({ label: z.string(), href: z.string() }),
            logos: z.array(z.object({
                name: z.string(),
                src: z.string(),
                url: z.string().optional(),
            })),
        }),
    }),
});

const navigation = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/navigation' }),
    schema: z.object({
        items: z.array(z.object({
            label: z.string(),
            href: z.string(),
        })),
    }),
});

const activities = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/activities' }),
    schema: z.object({
        title: z.string(),
        type: z.string(),
        date: z.string(),
        day: z.string(),
        month: z.string(),
        location: z.string().optional(),
        time: z.string().optional(),
        image: z.string().optional(),
        order: z.number(),
    }),
});

export const collections = { editions, pages, navigation, activities };
