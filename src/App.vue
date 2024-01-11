<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterView } from 'vue-router';
const route = useRoute();

const layout = computed(() => {
  return route.meta.layout || 'div';
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

