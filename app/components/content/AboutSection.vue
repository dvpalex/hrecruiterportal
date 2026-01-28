<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  features?: string[]
}>()
</script>

<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="animate-slide-in-left">
          <h2 class="section-title mb-6">{{ title }}</h2>
          <p class="text-lg text-secondary-600 mb-8 leading-relaxed">
            {{ description }}
          </p>

          <!-- Features List -->
          <ul v-if="features && features.length" class="space-y-4">
            <li
              v-for="(feature, index) in features"
              :key="feature"
              class="flex items-start space-x-3 animate-fade-in-up"
              :style="{ animationDelay: `${300 + index * 100}ms` }"
            >
              <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-secondary-700">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Image -->
        <div class="relative animate-slide-in-right delay-200">
          <div class="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
            <img
              src="/talent_team.png"
              alt="Equipe de talentos"
              class="w-full h-auto object-cover"
            />
          </div>
          <!-- Decorative Element -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-50 rounded-2xl -z-10" />
        </div>
      </div>
    </div>
  </section>
</template>
