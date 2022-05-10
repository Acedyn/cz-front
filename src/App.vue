<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from "./components/header/HeaderNav.vue"
</script>

<template>
  <header>
    <HeaderNav />
  </header>

  <RouterView />
  
</template>

<style>
@import '@/assets/base.css';
@font-face {
  font-family: BlockHeadSide;
  src: local("BlockHead"), url(@/assets/fonts/blockhead-darkside-regular.otf);
}
@font-face {
  font-family: BlockHeadFace;
  src: local("BlockHead"), url(@/assets/fonts/blockhead-blackface-regular.ttf);
}
@font-face {
  font-family: BlockHeadUnplugged;
  src: local("BlockHead"), url(@/assets/fonts/blockhead-unplugged-regular.otf);
}

#app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;

  font-weight: normal;

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
