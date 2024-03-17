<script setup lang="ts">
import type { AppDropdownProps, DropdownOption } from '@/types/components'
import { Menu } from '@headlessui/vue'
import { computed, provide } from 'vue'
import { DROPDOWN_ALIGN_CLASS, onOptionClickKey } from './constants'

import DropdownTrigger from './DropdownTrigger.vue'
import DropdownContent from './DropdownContent.vue'

type AppDropdownEmits = {
  (event: 'optionClick', param1: DropdownOption): void
}

const emit = defineEmits<AppDropdownEmits>()

const props = withDefaults(defineProps<AppDropdownProps>(), {
  align: 'br',
  labelClass: 'btn',
  optionsAs: 'a',
  dropdownWidth: '225px',
  chevron: true
})

const dropdownClass = computed(() => DROPDOWN_ALIGN_CLASS[props.align])

const onOptionClick = (option: DropdownOption) => {
  emit('optionClick', option)
}

provide(onOptionClickKey, onOptionClick)
</script>

<template>
  <Menu as="div" class="relative inline-block" :class="dropdownClass">
    <DropdownTrigger v-bind="{ label, labelClass, chevron }">
      <template v-for="(_, slot) of $slots" #[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </DropdownTrigger>

    <DropdownContent v-bind="{ options, optionsAs, align, dropdownWidth }">
      <template v-for="(_, slot) of $slots" #[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </DropdownContent>
  </Menu>
</template>
