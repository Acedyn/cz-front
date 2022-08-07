<script setup lang="ts">
import TopHeader from "./components/header/TopHeader.vue";
import { useRoute } from "vue-router";

const router = useRoute();
</script>

<template>
  <TopHeader class="app-header" />
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
  padding: 0 8.625rem;
}

.app-view {
  padding-top: 8.225rem;
}
</style>
