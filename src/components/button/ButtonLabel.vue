<script setup lang="ts">
import type { ButtonLabelProps } from '@/types/components'

defineProps<ButtonLabelProps>()
</script>

<template>
  <FWIcon v-if="icon" :icon="icon" fixed-width />
  <span v-if="label">{{ label }}</span>
  <FWIcon v-if="iconRight" :icon="iconRight" fixed-width />
</template>
