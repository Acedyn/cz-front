<script setup lang="ts">
import { onMounted, onUnmounted, computed } from "vue";
import { getBreakpoint, Breakpoint } from "./utils/breakpoints";
import TopHeader from "./components/header/TopHeader.vue";

import { usePreferencesStore } from "./stores/preferences";
import { storeToRefs } from "pinia";

const breakpoint = getBreakpoint(onMounted, onUnmounted);
const isSmall = computed(() => {
  return breakpoint.value < Breakpoint.MD;
});

const preferences = usePreferencesStore();
const { headerCollapse } = storeToRefs(preferences);
</script>

<template>
  <TopHeader
    :class="`app-header ${headerCollapse ? 'app-header-collapse' : ''} ${
      isSmall ? 'app-header-small' : ''
    }`"
  />
  <RouterView :class="`app-view ${isSmall ? 'app-view-small' : ''}`" />
</template>

<style>
@import "@/styles/fonts.css";
@import "@/styles/base.css";

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.app-header {
  position: absolute;
  z-index: 10;
  padding: 0 10.625rem;
}

.app-header-collapse {
  padding: 0 2.625rem;
}

.app-header-small {
  padding: 0 5vw;
}

.app-view {
  padding-top: 7.8rem;
  --app-padding-side: 10.625rem;
}

.app-view-small {
  padding-top: 7.8rem;
  --app-padding-side: 5vw;
}
</style>
