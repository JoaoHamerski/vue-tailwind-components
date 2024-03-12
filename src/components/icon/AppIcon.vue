<script setup lang="ts">
import type { AppIconProps } from '@/types/components'

defineProps<AppIconProps>()
</script>

<template>
  <FWIcon v-bind="$props" />
</template>
