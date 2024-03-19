<script setup lang="ts">
import type { AppModalProps } from '@/types/components'
import { TransitionChild, TransitionRoot } from '@headlessui/vue'
import { MODAL_SIZES_CLASS } from './constants'
import ModalBackdrop from './ModalBackdrop.vue'

import { computed, ref, type CSSProperties } from 'vue'
import ModalCloseButton from './ModalCloseButton.vue'

withDefaults(defineProps<AppModalProps>(), {
  noPadding: false,
  hideCloseBtn: false,
  size: 'md'
})

const show = defineModel<boolean>('show', { default: false })
const hidden = ref(true)
const header = ref<HTMLElement | null>(null)
const footer = ref<HTMLElement | null>(null)

const modalBoxTransitions = {
  enter: 'transition-[transform,opacity]',
  enterFrom: 'scale-95 opacity-0',
  enterTo: 'scale-100 opacity-100',
  leave: 'transition-[transform,opacity]',
  leaveFrom: 'scale-100 opacity-100',
  leaveTo: 'scale-95 opacity-0'
}

const offsetHeight = computed(() => {
  return (header.value?.offsetHeight || 0) + (header.value?.offsetHeight || 0)
})

const close = () => {
  show.value = false
}

const contentHeightCss = computed<CSSProperties>(() => ({
  maxHeight: `calc(100vh - 5em - ${offsetHeight.value}px)`
}))
</script>

<template>
  <TransitionRoot
    :show="show"
    as="dialog"
    class="fixed inset-0 flex items-center justify-center w-full h-full z-[999] bg-transparent"
    :class="{
      'modal-open transition-none': hidden
    }"
    @after-enter="hidden = true"
    @after-leave="hidden = false"
  >
    <TransitionChild
      as="div"
      v-bind="modalBoxTransitions"
      class="relative w-11/12 z-[999] bg-base-100 rounded-lg shadow-lg overflow-auto"
      :class="MODAL_SIZES_CLASS[size]"
    >
      <ModalCloseButton v-if="!hideCloseBtn" @click="close" />

      <div v-if="$slots['header']" ref="header">
        <slot name="header" />
      </div>

      <div
        class="overflow-auto"
        :class="{
          'p-0': noPadding,
          'p-5': !noPadding
        }"
        :style="contentHeightCss"
      >
        <slot name="content" v-bind="{ close }" />
      </div>

      <div v-if="$slots['footer']" ref="footer">
        <slot name="footer" v-bind="{ close }" />
      </div>
    </TransitionChild>

    <ModalBackdrop @click="close" />
  </TransitionRoot>
</template>
