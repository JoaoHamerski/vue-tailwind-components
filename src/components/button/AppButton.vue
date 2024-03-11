<script setup lang="ts">
import type { AppButtonProps } from '@/types/components'

defineProps<AppButtonProps>()
</script>

<template>
  <div class="btn">
    <AppIcon :icon="['fas', 'fa-user']" />
    {{ label }}
  </div>
</template>
