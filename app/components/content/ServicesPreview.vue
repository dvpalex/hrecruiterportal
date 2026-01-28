<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Service {
  title: string
  description: string
  icon: string
  link: string
}

const props = defineProps<{
  services: Service[]
}>()

const iconPaths: Record<string, string> = {
  users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
}
</script>

<template>
  <section class="section bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="section-title animate-fade-in-up">{{ t('services.title') }}</h2>
        <p class="section-subtitle mx-auto animate-fade-in-up delay-100">{{ t('services.subtitle') }}</p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <NuxtLink
          v-for="(service, index) in services"
          :key="service.title"
          :to="service.link"
          class="card group p-8 text-center hover:-translate-y-2 hover:shadow-lg animate-fade-in-up"
          :style="{ animationDelay: `${200 + index * 150}ms` }"
        >
          <!-- Icon -->
          <div class="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
            <svg class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="iconPaths[service.icon] || iconPaths.users" />
            </svg>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-secondary-600">
            {{ service.description }}
          </p>

          <!-- Arrow -->
          <div class="mt-6 text-primary-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
            <span class="text-sm font-medium">{{ t('cta.learnMore') }}</span>
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
