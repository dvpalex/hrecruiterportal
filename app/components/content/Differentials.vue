<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  items: string[]
}>()

const icons = [
  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
]
</script>

<template>
  <section class="section bg-secondary-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="section-title animate-fade-in-up">{{ t('differentials.title') }}</h2>
        <p class="section-subtitle mx-auto animate-fade-in-up delay-100">{{ t('differentials.subtitle') }}</p>
      </div>

      <!-- Differentials Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in items"
          :key="item"
          class="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
          :style="{ animationDelay: `${200 + index * 100}ms` }"
        >
          <!-- Icon -->
          <div class="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300 group">
            <svg class="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="icons[index % icons.length]" />
            </svg>
          </div>

          <!-- Text -->
          <p class="font-medium text-secondary-900">{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
