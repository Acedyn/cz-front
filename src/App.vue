<script setup lang="ts">
import TopHeader from "./components/header/TopHeader.vue";

import { usePreferencesStore } from "./stores/preferences";
import { storeToRefs } from "pinia";

const preferences = usePreferencesStore();
const { headerCollapse } = storeToRefs(preferences);
</script>

<template>
  <TopHeader
    :class="`app-header ${headerCollapse ? 'app-header-collapse' : ''}`"
  />
  <RouterView class="app-view" />
</template>

<style>
@import "@/styles/fonts.css";
@import "@/styles/base.css";

#app {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  scrollbar-width: none;
  display: flex;
}

#app::-webkit-scrollbar {
  display: none;
}

.app-header {
  z-index: 100;
}

.app-view-small {
  padding-top: 7.8rem;
  --app-padding-side: 5vw;
}

.app-view {
  width: 100%;
}

/*@media only screen and (min-width: 768px) {*/
/*  #app {*/
/*    left: 120px;*/
/*  }*/
/*}*/
</style>
