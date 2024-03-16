<script setup lang="ts">
import { MenuButton } from '@headlessui/vue'
import type { DropdownTriggerProps } from '@/types/components'

defineProps<DropdownTriggerProps>()
</script>

<template>
  <MenuButton v-if="label" :class="labelClass" v-slot="{ open }">
    <span>{{ label }}</span>
    <FWIcon
      :icon="['fas', 'fa-chevron-down']"
      class="transition-transform"
      :class="{
        'rotate-180': open
      }"
    ></FWIcon>
  </MenuButton>

  <template v-else>
    <MenuButton v-slot="{ open }">
      <slot name="trigger" v-bind="{ open }" />
    </MenuButton>
  </template>
</template>
