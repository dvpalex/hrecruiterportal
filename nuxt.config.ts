// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  // i18n Configuration
  i18n: {
    locales: [
      { code: 'pt', language: 'pt-BR', name: 'Portugues', file: 'pt.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Espanol', file: 'es.json' },
    ],
    defaultLocale: 'pt',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    baseUrl: 'https://hrecruiter.com.br',
    detectBrowserLanguage: false,
  },

  // App Head Configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600;700&display=swap' },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-YRRSVB3C4H',
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-YRRSVB3C4H');`,
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // CSS
  css: ['~/assets/css/main.css'],
})
