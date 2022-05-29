<script lang="ts" setup>
import router from "@/router";
import { defineProps, onBeforeMount, ref } from "vue";

const props = defineProps<{
  name: string
  onImageLoaded: () => void
  soon?: boolean
  to?: string
  close?: boolean
}>()

const imagesRootURL = new URL('/src/assets/background', import.meta.url).href;
const mouseOver = ref<boolean>();

const redirect = () => {
  if (props.to) {
    router.push(props.to);
  }
}

const closeURL = `${imagesRootURL}/${props.name}_close.png`
const openURL = `${imagesRootURL}/${props.name}_open.png`

function preloadImage(url: string) {
  const img = new Image();
  img.src = url;
  return img;
}

onBeforeMount(() => {
  const imagesToLoad = [closeURL];
  if (props.close) imagesToLoad.push(openURL);

  // Preload images and decode them
  imagesToLoad.forEach((url) => {
    const img = preloadImage(url);

    img.onload = () => {
      img.decode().then(props.onImageLoaded);
    }
  })
});

</script>

<template>
  <div @mouseover="mouseOver = true" @mouseleave="mouseOver = false" :class="`${name} ${soon ? 'soon' : 'highlight'}`"
    class="images-container crop-region fade-in" @click="redirect()">

    <img :src="closeURL" :style="`display: ${(close && !soon && mouseOver) ? 'none' : ''}`" />
    <img v-if="close" :src="openURL" :style="`display: ${(close && !soon && mouseOver) ? '' : 'none'}`" />
  </div>
</template>

<style scoped>
.images-container {
  position: relative;
}

.images-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>