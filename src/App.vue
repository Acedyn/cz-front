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
const { headerCollapse, pageLeft, pageTop } = storeToRefs(preferences);
</script>

<template>
  <TopHeader
    :class="`app-header ${headerCollapse ? 'app-header-collapse' : ''} ${
      isSmall ? 'app-header-small' : ''
    }`"
    style="position: fixed"
  />
  <RouterView
    :class="`app-view ${isSmall ? 'app-view-small' : ''}`"
    :style="{ top: pageTop, left: pageLeft }"
    style="overflow: hidden"
  />
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
  overflow: scroll;
  scrollbar-width: none;
  background-image: url("/src/assets/background/background.png"),
  radial-gradient(76.99% 76.99% at 50% 53.41%, #925637 0%, #411f12 100%);
}

#app::-webkit-scrollbar {
  display: none;
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

/*@media only screen and (min-width: 768px) {*/
/*  #app {*/
/*    left: 120px;*/
/*  }*/
/*}*/
</style>
