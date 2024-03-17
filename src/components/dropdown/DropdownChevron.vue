<script setup lang="ts">
import type { DropdownChevronProps } from '@/types/components'

defineProps<DropdownChevronProps>()
</script>

<template>
  <FWIcon
    :icon="['fas', 'fa-chevron-down']"
    class="transition-transform"
    :class="{
      'rotate-180': open
    }"
  />
</template>
