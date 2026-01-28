<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

// Define paths per locale
const localeRoutes = {
  pt: { about: '/sobre', services: '/servicos', contact: '/contato' },
  en: { about: '/about', services: '/services', contact: '/contact' },
  es: { about: '/nosotros', services: '/servicios', contact: '/contacto' },
} as const

type LocaleKey = keyof typeof localeRoutes
const paths = computed(() => localeRoutes[locale.value as LocaleKey] ?? localeRoutes.pt)

const navigation = computed(() => [
  { name: t('nav.home'), path: localePath('/') },
  { name: t('nav.about'), path: localePath(paths.value.about) },
  { name: t('nav.services'), path: localePath(paths.value.services) },
  { name: t('nav.contact'), path: localePath(paths.value.contact) },
])

const contactPath = computed(() => localePath(paths.value.contact))

const isMenuOpen = ref(false)

// Check if link is active (exact match for home, starts with for others)
const isActive = (path: string) => {
  const currentPath = route.path
  if (path === '/' || path === '/en' || path === '/es') {
    return currentPath === path
  }
  return currentPath.startsWith(path)
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <div class="container-custom">
      <nav class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center">
          <img src="/logo_preto.png" alt="HRecruiter" class="h-6 md:h-10 w-auto" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="item in navigation" :key="item.name">
            <NuxtLink
              :to="item.path"
              class="relative py-2 font-medium transition-colors"
              :class="isActive(item.path) ? 'text-primary-600' : 'text-secondary-600 hover:text-primary-600'"
            >
              {{ item.name }}
              <span
                v-if="isActive(item.path)"
                class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-full"
              />
            </NuxtLink>
          </li>
        </ul>

        <!-- Language Switcher & CTA -->
        <div class="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <NuxtLink :to="contactPath" class="btn-primary text-sm">
            {{ t('cta.contactUs') }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 text-secondary-600"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div
        v-show="isMenuOpen"
        class="md:hidden py-4 border-t border-gray-100"
      >
        <ul class="space-y-4">
          <li v-for="item in navigation" :key="item.name">
            <NuxtLink
              :to="item.path"
              class="flex items-center gap-2 font-medium transition-colors"
              :class="isActive(item.path) ? 'text-primary-600' : 'text-secondary-600 hover:text-primary-600'"
              @click="isMenuOpen = false"
            >
              <span
                v-if="isActive(item.path)"
                class="w-1.5 h-1.5 bg-primary-600 rounded-full"
              />
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <LanguageSwitcher />
          <NuxtLink
            :to="contactPath"
            class="btn-primary text-sm"
            @click="isMenuOpen = false"
          >
            {{ t('cta.contactUs') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
