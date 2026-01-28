<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const props = defineProps<{
  title: string
  subtitle: string
  cta?: string
  ctaLink?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden gradient-bg">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 -right-40 w-96 h-96 bg-primary-200 rounded-full blur-3xl animate-pulse-soft" />
      <div class="absolute -bottom-20 -left-20 w-72 h-72 bg-primary-100 rounded-full blur-3xl animate-pulse-soft delay-500" />
    </div>

    <div class="container-custom relative">
      <div class="py-18 md:py-28 text-center max-w-4xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 animate-fade-in-down">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          {{ t('hero.badge') }}
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight animate-fade-in-up delay-100">
          {{ title }}
        </h1>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-secondary-600 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          {{ subtitle }}
        </p>

        <!-- CTA Buttons -->
        <div v-if="cta" class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <NuxtLink :to="ctaLink || localePath('/servicos')" class="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform">
            {{ cta }}
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink :to="localePath('/sobre')" class="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform">
            {{ t('cta.learnMore') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
