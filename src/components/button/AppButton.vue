<script setup lang="ts">
import { computed } from 'vue'
import type { AppButtonProps } from '@/types/components'
import { SIZES_CLASS } from './constants'

import ButtonSpinner from './ButtonSpinner.vue'
import ButtonLabel from './ButtonLabel.vue'

const props = withDefaults(defineProps<AppButtonProps>(), {
  loading: false,
  disabled: false,
  rounded: false,
  circle: false,
  size: 'md'
})

const isDisabled = computed(() => props.loading || props.disabled)

const sizesClass = computed(() => SIZES_CLASS[props.size])

const classes = computed(() => [
  sizesClass.value.btn,
  {
    'rounded-full': props.rounded,
    'btn-circle': props.circle
  }
])
</script>

<template>
  <button class="btn" :class="classes" :disabled="isDisabled || undefined">
    <ButtonSpinner v-if="loading" :class="sizesClass.spinner" />
    <ButtonLabel
      v-else
      v-bind="{
        icon,
        iconRight,
        label,
        size
      }"
    />
  </button>
</template>
