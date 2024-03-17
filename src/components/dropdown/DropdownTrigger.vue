<script setup lang="ts">
import { MenuButton } from '@headlessui/vue'
import type { DropdownTriggerProps } from '@/types/components'
import DropdownChevron from './DropdownChevron.vue'
defineProps<DropdownTriggerProps>()
</script>

<template>
  <MenuButton v-if="label" v-slot="{ open }" :class="labelClass">
    <span>{{ label }}</span>
    <DropdownChevron v-if="chevron" :open="open" />
  </MenuButton>

  <template v-else>
    <MenuButton v-slot="{ open }">
      <slot name="trigger" v-bind="{ open }" />
    </MenuButton>
  </template>
</template>
