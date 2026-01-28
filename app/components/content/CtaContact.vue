<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const props = defineProps<{
  title: string
  buttonText?: string
}>()
</script>

<template>
  <section class="section gradient-primary text-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-soft" />
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse-soft delay-500" />
    </div>

    <div class="container-custom text-center relative">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in-up">
        {{ title }}
      </h2>
      <p class="text-primary-100 text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
        {{ t('contact.subtitle') }}
      </p>
      <NuxtLink :to="localePath('/contato')" class="btn-white text-lg px-8 py-4 hover:scale-105 transition-transform animate-fade-in-up delay-200">
        {{ buttonText || t('cta.contactUs') }}
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>
