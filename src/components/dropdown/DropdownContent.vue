<script setup lang="ts">
import { MenuItem, MenuItems } from '@headlessui/vue'
import type { DropdownContentProps } from '@/types/components'
import { computed } from 'vue'
import { DROPDOWN_ALIGN_CLASS, DROPDOWN_TRANSITION_CLASS } from './constants'
import DropdownOption from './DropdownOption.vue'

const props = defineProps<DropdownContentProps>()

const alignClass = computed(() => DROPDOWN_ALIGN_CLASS[props.align!])
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
      :class="alignClass"
      class="dropdown-content menu absolute z-[1] p-2 shadow bg-base-100 dark:bg-base-200 rounded-box"
      :style="{
        width: dropdownWidth
      }"
      as="ul"
    >
      <template v-if="hasOptions">
        <DropdownOption v-bind="{ options, optionsAs }">
          <template v-for="(_, slot) of $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope" />
          </template>
        </DropdownOption>
      </template>
      <template v-else>
        <MenuItem as="div" @click.prevent>
          <slot name="content" />
        </MenuItem>
      </template>
    </MenuItems>
  </Transition>
</template>
