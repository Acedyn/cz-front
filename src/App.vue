<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from "./components/header/HeaderNav.vue"
</script>

<template>
  <header>
    <HeaderNav />
  </header>

  <RouterView v-slot="{ Component }">
    <transition name="fadeFast">
      <component :is="Component" />
    </transition>
  </RouterView>
  
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/animations.css';
@import '@/assets/fonts.css';

#app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;

  font-weight: normal;
}

.roadmap-background {
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 50%,
    rgba(62, 48, 31, 0.2)
  ),
  url(@/assets/background/roadmap_background.png);
  background-size: contain;
}

body {
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 50%,
    rgba(62, 48, 31, 0.2)
  ),
  url(@/assets/background/main_background.png);
  background-size: contain;
}

header {
  padding: 0 20px;
}

</style>
