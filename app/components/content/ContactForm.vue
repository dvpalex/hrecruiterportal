<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  title?: string
  subtitle?: string
  email?: string
  phone?: string
  address?: string
  area?: string
}>()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    const response = await fetch('https://n8n2.srv01.collabmo.com.br/webhook/hrecruitet-formcontato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        message: form.message,
      }),
    })

    if (!response.ok) {
      throw new Error('Request failed')
    }

    // Reset form
    form.name = ''
    form.email = ''
    form.phone = ''
    form.company = ''
    form.message = ''

    submitStatus.value = 'success'
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div>
          <!-- Header -->
          <div class="mb-8">
            <h2 class="section-title text-left">{{ title || t('contact.title') }}</h2>
            <p class="text-secondary-600 text-lg">{{ subtitle || t('contact.subtitle') }}</p>
          </div>

          <!-- Contact Details -->
          <div class="space-y-6">
            <!-- Email -->
            <div v-if="email" class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-secondary-900">E-mail</h3>
                <a :href="`mailto:${email}`" class="text-primary-600 hover:text-primary-700">{{ email }}</a>
              </div>
            </div>

            <!-- Phone -->
            <div v-if="phone" class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-secondary-900">WhatsApp / Telefone</h3>
                <a :href="`tel:${phone.replace(/\D/g, '')}`" class="text-primary-600 hover:text-primary-700">{{ phone }}</a>
              </div>
            </div>

            <!-- Address -->
            <div v-if="address" class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-secondary-900">Endereço</h3>
                <p class="text-secondary-600">{{ address }}</p>
              </div>
            </div>

            <!-- Area -->
            <div v-if="area" class="mt-6 p-4 bg-secondary-50 rounded-lg">
              <p class="text-secondary-700">{{ area }}</p>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="bg-secondary-50 rounded-2xl p-8">
          <h3 class="text-xl font-semibold text-secondary-900 mb-6">Envie uma mensagem</h3>
          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-secondary-700 mb-2">
                  {{ t('contact.name') }} *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-white"
                >
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-secondary-700 mb-2">
                  {{ t('contact.email') }} *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-white"
                >
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-medium text-secondary-700 mb-2">
                  {{ t('contact.phone') }}
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-white"
                >
              </div>

              <!-- Company -->
              <div>
                <label for="company" class="block text-sm font-medium text-secondary-700 mb-2">
                  {{ t('contact.company') }}
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-white"
                >
              </div>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-secondary-700 mb-2">
                {{ t('contact.message') }} *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none bg-white"
              />
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </span>
                <span v-else>{{ t('contact.submit') }}</span>
              </button>
            </div>

            <!-- Status Messages -->
            <div v-if="submitStatus === 'success'" class="p-4 bg-green-50 text-green-700 rounded-lg text-center">
              {{ t('contact.success') }}
            </div>
            <div v-if="submitStatus === 'error'" class="p-4 bg-red-50 text-red-700 rounded-lg text-center">
              {{ t('contact.error') }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
