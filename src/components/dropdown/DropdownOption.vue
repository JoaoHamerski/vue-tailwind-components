<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
import type { DropdownOption, DropdownOptionProps } from '@/types/components'
import { inject } from 'vue'
import { onOptionClickKey } from './constants'
defineProps<DropdownOptionProps>()

const onOptionClick = inject(onOptionClickKey, () => {})
</script>

<template>
  <MenuItem
    v-for="(option, index) in options"
    v-slot="{ active, close }"
    :key="option.id || index"
    as="li"
  >
    <Component
      :is="optionsAs"
      :class="{
        'bg-base-300': active
      }"
      :href="option.href"
      @click="[close, onOptionClick(option)]"
    >
      <slot v-if="$slots['custom-option']" name="custom-option" v-bind="{ option }" />
      <template v-else>
        <FWIcon v-if="option.icon" :icon="option.icon" />
        {{ option.label }}
      </template>
    </Component>
  </MenuItem>
</template>
