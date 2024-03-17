<script setup lang="ts">
import { MenuItem, MenuItems } from '@headlessui/vue'
import type { DropdownOptionsProps } from '@/types/components'
import { computed } from 'vue'
import { DROPDOWN_ALIGN_CLASS, DROPDOWN_TRANSITION_CLASS } from './constants'

const props = defineProps<DropdownOptionsProps>()

const transitionClass = computed(() => DROPDOWN_TRANSITION_CLASS[props.align!])
const hasOptions = computed(() => !!props.options?.length)

const transitions = computed(() => ({
  enterActiveClass: 'transition-[opacity,transform] duration-150',
  enterFromClass: `${transitionClass.value.from} opacity-0`,
  enterToClass: `${transitionClass.value.to} opacity-100`,
  leaveActiveClass: 'transition-[opacity,transform] duration-150',
  leaveToClass: `${transitionClass.value.from} opacity-0`,
  leaveFromClass: `${transitionClass.value.to} opacity-100`
}))
</script>

<template>
  <Transition v-bind="transitions">
    <MenuItems
      class="absolute menu z-[1] p-2 shadow bg-base-100 dark:bg-base-200 rounded-box"
      :style="{
        width: dropdownWidth
      }"
      as="ul"
    >
      <template v-if="hasOptions">
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
            @click.prevent="close"
          >
            {{ option.label }}
          </Component>
        </MenuItem>
      </template>
      <template v-else>
        <MenuItem as="div" @click.prevent>
          <slot name="content" />
        </MenuItem>
      </template>
    </MenuItems>
  </Transition>
</template>
