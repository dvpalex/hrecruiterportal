<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="['max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', $props.class]">
    <slot />
  </div>
</template>
