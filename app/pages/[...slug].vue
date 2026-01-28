<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

// Build the path for content query (calculated once, not reactive)
function getContentPath(path: string): string {
  if (path.startsWith('/en/')) {
    return path.replace('/en', '')
  }
  if (path.startsWith('/es/')) {
    return path.replace('/es', '')
  }
  if (path === '/en' || path === '/es') {
    return '/'
  }
  return path || '/'
}

const contentPath = getContentPath(route.path)
const collectionName = `content_${locale.value}` as 'content_pt' | 'content_en' | 'content_es'

// Check if current page is a legal page (terms or privacy)
const legalPaths = [
  '/termos-de-uso', '/terms-of-use', '/terminos-de-uso',
  '/politica-de-privacidade', '/privacy-policy', '/politica-de-privacidad'
]
const isLegalPage = legalPaths.includes(contentPath)

const { data: page } = await useAsyncData(
  `page-${locale.value}-${route.path}`,
  () => queryCollection(collectionName).path(contentPath).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Set page-specific SEO
useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  ogImage: page.value.image,
})
</script>

<template>
  <!-- Legal pages (Terms, Privacy) with prose styling -->
  <div v-if="isLegalPage" class="py-16 md:py-24">
    <div class="container-custom">
      <article class="prose prose-lg max-w-4xl mx-auto">
        <ContentRenderer v-if="page && page.body" :value="page.body" />
      </article>
    </div>
  </div>

  <!-- Regular content pages -->
  <div v-else>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
