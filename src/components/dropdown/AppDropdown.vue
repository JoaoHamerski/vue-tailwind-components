<script setup lang="ts">
import type { AppDropdownProps } from '@/types/components'
import { Menu } from '@headlessui/vue'
import { computed } from 'vue'
import { DROPDOWN_ALIGN_CLASS } from './constants'

import DropdownTrigger from './DropdownTrigger.vue'
import DropdownOptions from './DropdownOptions.vue'
import { Component } from 'react'

const props = withDefaults(defineProps<AppDropdownProps>(), {
  align: 'br',
  labelClass: 'btn',
  optionsAs: 'a',
  dropdownWidth: '225px'
})

const dropdownClass = computed(() => DROPDOWN_ALIGN_CLASS[props.align])
</script>

<template>
  <Menu as="div" class="relative inline-block" :class="dropdownClass">
    <DropdownTrigger v-bind="{ label, labelClass }">
      <template v-if="$slots['trigger']" #trigger="scope">
        <slot name="trigger" v-bind="scope" />
      </template>
    </DropdownTrigger>

    <DropdownOptions v-bind="{ options, optionsAs, align, dropdownWidth }">
      <template v-if="$slots['content']" #content="scope">
        <slot name="content" v-bind="scope" />
      </template>
    </DropdownOptions>
  </Menu>
</template>
