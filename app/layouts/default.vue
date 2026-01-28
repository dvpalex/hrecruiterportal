<script setup lang="ts">
const { t, locale } = useI18n()
const head = useLocaleHead({ addSeoAttributes: true } as Parameters<typeof useLocaleHead>[0])
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <Head>
      <template v-for="link in head.link" :key="link.key">
        <Link
          :id="link.key"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.key">
        <Meta
          :id="meta.key"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
    </Head>
    <Body class="min-h-screen bg-white text-secondary-900">
      <LayoutTheHeader />
      <main>
        <slot />
      </main>
      <LayoutTheFooter />
    </Body>
  </Html>
</template>
