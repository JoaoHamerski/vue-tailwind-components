<script setup lang="ts">
import { TransitionChild } from '@headlessui/vue'
</script>

<template>
  <TransitionChild
    class="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm"
    as="div"
    enter="transition-all"
    enter-from="backdrop-opacity-0 opacity-0"
    enter-to="backdrop-opacity-100 opacity-100"
    leave="transition-all"
    leave-from="backdrop-opacity-100 opacity-100"
    leave-to="backdrop-opacity-0 opacity-0"
  />
</template>
