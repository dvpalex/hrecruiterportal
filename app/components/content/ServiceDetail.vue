<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  features?: string[]
  benefits?: string[]
}>()
</script>

<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">{{ title }}</h1>
          <p class="text-xl text-secondary-600 leading-relaxed">{{ description }}</p>
        </div>

        <!-- Features -->
        <div v-if="features && features.length" class="mb-12">
          <h2 class="text-2xl font-semibold text-secondary-900 mb-6">Recursos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="feature in features"
              :key="feature"
              class="flex items-start space-x-3 p-4 bg-secondary-50 rounded-lg"
            >
              <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-secondary-700">{{ feature }}</span>
            </div>
          </div>
        </div>

        <!-- Benefits -->
        <div v-if="benefits && benefits.length">
          <h2 class="text-2xl font-semibold text-secondary-900 mb-6">Beneficios</h2>
          <ul class="space-y-4">
            <li
              v-for="benefit in benefits"
              :key="benefit"
              class="flex items-start space-x-3"
            >
              <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-secondary-700">{{ benefit }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
