<script setup lang="ts">
defineProps<{
  theme: string
}>()
</script>

<template>
  <div :class="{ 'storybook-side-by-side': theme === 'side-by-side' }">
    <div :data-theme="theme" class="storybook-theme">
      <slot></slot>
    </div>
    <div v-if="theme === 'side-by-side'" data-theme="light" class="storybook-theme-alt">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.storybook-side-by-side {
  display: flex;
  height: 100%;
}

.storybook-side-by-side .storybook-theme,
.storybook-side-by-side .storybook-theme-alt {
  padding: 1rem;
  position: absolute;
  inset: 0;
  width: 50%;
}

.storybook-side-by-side .storybook-theme-alt {
  left: 50%;
}
</style>
