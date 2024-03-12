<script setup lang="ts">
import type { AppButtonProps } from '@/types/components'
import { computed } from 'vue'

import ButtonSpinner from './ButtonSpinner.vue'

const props = withDefaults(defineProps<AppButtonProps>(), {
  loading: false,
  disabled: false
})

const isDisabled = computed(() => props.loading || props.disabled)
</script>

<template>
  <button class="btn" :disabled="isDisabled || undefined">
    <ButtonSpinner v-if="loading" />
    <template v-else>
      <AppIcon v-if="icon" :icon="icon" fixed-width />
      <span>{{ label }}</span>
      <AppIcon v-if="iconRight" :icon="iconRight" fixed-width />
    </template>
  </button>
</template>
