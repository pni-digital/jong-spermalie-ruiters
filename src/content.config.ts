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

export const collections = { editions, pages, navigation };