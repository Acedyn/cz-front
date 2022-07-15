<script setup lang="ts">
import { usePreferencesStore } from "@/stores/preferences";
import { preloadImages } from "@/utils/loader";
import { onBeforeMount, ref } from "vue";

const props = withDefaults(
  defineProps<{
    name: string;
    root?: string;
    background?: string;
    aspectRatio?: number;
  }>(),
  {
    root: "src/assets/scenes",
    background: "background",
    aspectRatio: 16 / 9,
  }
);

const containerRef = ref<HTMLDivElement>();
const backgroundRef = ref<HTMLImageElement>();
const preferences = usePreferencesStore();

let backgroundImageBase = `/${props.root}/${props.name}/${props.background}`;
if (preferences.theme.includes("dark")) {
  backgroundImageBase += "_dark";
}

const backgroundImage = new URL(`${backgroundImageBase}.jpg`, import.meta.url)
  .href;

const scrollToCenter = () => {
  if (containerRef.value && backgroundRef.value) {
    console.log(backgroundRef.value.clientWidth);
    containerRef.value.scrollTo({
      left:
        (backgroundRef.value.clientWidth - containerRef.value.clientWidth) / 2,
      behavior: "smooth",
    });
  }
};

onBeforeMount(() => {
  preloadImages([backgroundImage]);
});
</script>

<template>
  <div class="scene-container">
    <div class="background-container" ref="containerRef">
      <img
        :src="backgroundImage"
        alt="background"
        class="background-image"
        ref="backgroundRef"
        @load="scrollToCenter"
      />
    </div>
  </div>
</template>

<style scoped>
.scene-container,
.background-container,
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

.background-image {
  width: auto;
  min-width: 100%;
  min-height: v-bind("`calc(100vw / ${16 / 9})`");
  transform: translateY(calc((100vh - 100%) / 2));
}
</style>
