<script setup lang="ts">
const { locale } = useI18n()

// Determine collection based on current locale with fallback to 'pt'
const currentLocale = locale.value || 'pt'
const collectionName = `content_${currentLocale}` as 'content_pt' | 'content_en' | 'content_es'

const { data: page } = await useAsyncData(
  `home-${currentLocale}`,
  async () => {
    // Try '/' first, then '/index'
    let result = await queryCollection(collectionName).path('/').first()
    if (!result) {
      result = await queryCollection(collectionName).path('/index').first()
    }
    return result
  }
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
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
