<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
]

const isOpen = ref(false)

const currentLanguage = computed(() =>
  languages.find(lang => lang.code === locale.value) || languages[0]
)

const switchLanguage = (code: string) => {
  isOpen.value = false
  navigateTo(switchLocalePath(code as 'pt' | 'en' | 'es'))
}

// Close dropdown when clicking outside
const dropdownRef = ref<HTMLElement | null>(null)

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
      isOpen.value = false
    }
  })
})
</script>

<template>
  <div ref="dropdownRef" class="relative">
    <!-- Current Language Button -->
    <button
      type="button"
      class="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
      @click="isOpen = !isOpen"
    >
      <span class="text-xl leading-none">{{ currentLanguage.flag }}</span>
      <span class="text-sm font-medium text-secondary-700 hidden sm:inline">{{ currentLanguage.code.toUpperCase() }}</span>
      <svg
        class="w-4 h-4 text-secondary-500 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <div
        v-show="isOpen"
        class="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          type="button"
          class="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-primary-50 transition-colors"
          :class="locale === lang.code ? 'bg-primary-50 text-primary-700' : 'text-secondary-700'"
          @click="switchLanguage(lang.code)"
        >
          <span class="text-xl leading-none">{{ lang.flag }}</span>
          <span class="text-sm font-medium">{{ lang.name }}</span>
          <svg
            v-if="locale === lang.code"
            class="w-4 h-4 ml-auto text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>
