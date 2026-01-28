import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    content_pt: defineCollection({
      type: 'page',
      source: { include: 'pt/**', prefix: '' },
      schema: pageSchema,
    }),
    content_en: defineCollection({
      type: 'page',
      source: { include: 'en/**', prefix: '' },
      schema: pageSchema,
    }),
    content_es: defineCollection({
      type: 'page',
      source: { include: 'es/**', prefix: '' },
      schema: pageSchema,
    }),
  },
})
