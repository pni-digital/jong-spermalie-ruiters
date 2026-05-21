import { defineCollection} from 'astro:content';
import {z} from "zod";

const editions = defineCollection({ schema: z.object({
        title: z.string(),
        date: z.string(),
        location: z.string(),
        heroImage: z.string(),
        countdown: z.string(),
    }) });

export const collections = { editions };