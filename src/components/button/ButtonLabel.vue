<script setup lang="ts">
import type { ButtonLabelProps } from '@/types/components'

defineProps<ButtonLabelProps>()
</script>

<template>
  <AppIcon v-if="icon" :icon="icon" fixed-width :size="size" />
  <span v-if="label">{{ label }}</span>
  <AppIcon v-if="iconRight" :icon="iconRight" fixed-width :size="size" />
</template>
