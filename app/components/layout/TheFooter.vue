<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const currentYear = new Date().getFullYear()

// Define paths per locale
const localeRoutes = {
  pt: { about: '/sobre', services: '/servicos', contact: '/contato', terms: '/termos-de-uso', privacy: '/politica-de-privacidade' },
  en: { about: '/about', services: '/services', contact: '/contact', terms: '/terms-of-use', privacy: '/privacy-policy' },
  es: { about: '/nosotros', services: '/servicios', contact: '/contacto', terms: '/terminos-de-uso', privacy: '/politica-de-privacidad' },
} as const

type LocaleKey = keyof typeof localeRoutes
const paths = computed(() => localeRoutes[locale.value as LocaleKey] ?? localeRoutes.pt)

const quickLinks = computed(() => [
  { name: t('nav.home'), path: localePath('/') },
  { name: t('nav.about'), path: localePath(paths.value.about) },
  { name: t('nav.services'), path: localePath(paths.value.services) },
  { name: t('nav.contact'), path: localePath(paths.value.contact) },
])
</script>

<template>
  <footer class="bg-secondary-900 text-white">
    <div class="container-custom py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <NuxtLink :to="localePath('/')" class="inline-block mb-4">
            <img src="/logo_branco.png" alt="HRecruiter" class="h-12" />
          </NuxtLink>
          <p class="text-secondary-400 max-w-md mb-4">
            {{ t('footer.description') }}
          </p>
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
              href="https://www.instagram.com/hrecruiterbr"
              target="_blank"
              rel="noopener noreferrer"
              class="text-secondary-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/hrecruiter/about/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-secondary-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-lg mb-4">{{ t('footer.quickLinks') }}</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                :to="link.path"
                class="text-secondary-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold text-lg mb-4">{{ t('footer.contactInfo') }}</h4>
          <ul class="space-y-3 text-secondary-400">
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 mt-0.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contato@hrecruiter.com.br" class="hover:text-white transition-colors">
                contato@hrecruiter.com.br
              </a>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 mt-0.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Av. Paulista 2202, Sao Paulo - SP</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-400 text-sm">
        <p>&copy; {{ currentYear }} HRecruiter. {{ t('footer.rights') }}.</p>
        <div class="flex gap-4">
          <NuxtLink
            :to="localePath(paths.terms)"
            class="hover:text-white transition-colors"
          >
            {{ t('footer.terms') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath(paths.privacy)"
            class="hover:text-white transition-colors"
          >
            {{ t('footer.privacy') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
