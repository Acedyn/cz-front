<script setup lang="ts">
import { onMounted, onUnmounted, computed } from "vue";
import { getBreakpoint, Breakpoint } from "./utils/breakpoints";
import TopHeader from "./components/header/TopHeader.vue";

const breakpoint = getBreakpoint(onMounted, onUnmounted);
const isSmall = computed(() => {
  return breakpoint.value < Breakpoint.MD;
});
</script>

<template>
  <TopHeader :class="`app-header ${isSmall ? 'app-header-small' : ''}`" />
  <RouterView class="app-view" />
</template>

<style>
@import "@/styles/fonts.css";
@import "@/styles/base.css";

#app {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
}

.app-header {
  position: absolute;
  z-index: 10;
  padding: 0 10.625rem;
}

.app-header-small {
  padding: 0 5vw;
}

.app-view {
  padding-top: 8.225rem;
}
</style>
