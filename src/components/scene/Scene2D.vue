<script setup lang="ts">
import { usePreferencesStore } from "@/stores/preferences";
import { preloadImages } from "@/utils/loader";
import { onBeforeMount, ref } from "vue";

const props = withDefaults(
  defineProps<{
    name: string;
    highlight?: string;
    root?: string;
    background?: string;
    aspectRatio?: number;
    scrolling?: boolean;
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

const sceneRoot = `${props.root}/${props.name}`;
let backgroundImageBase = `${sceneRoot}/${props.background}`;
if (preferences.theme.includes("dark")) {
  backgroundImageBase += "_dark";
}

const backgroundImage = new URL(`/${backgroundImageBase}.jpg`, import.meta.url)
  .href;

const scrollToCenter = () => {
  if (containerRef.value && backgroundRef.value) {
    containerRef.value.scrollTo({
      left:
        (backgroundRef.value.clientWidth - containerRef.value.clientWidth) / 2,
      behavior: "smooth",
    });
  }
};

const sceneConfig = {
  root: sceneRoot,
  highlight: props.highlight,
};

onBeforeMount(() => {
  preloadImages([backgroundImage]);

  if (!props.scrolling) {
    window.addEventListener("resize", scrollToCenter);
  }
});
</script>

<template>
  <div class="scene-container" ref="containerRef">
    <img
      :src="backgroundImage"
      alt="background"
      class="background-image"
      ref="backgroundRef"
      @load="scrollToCenter"
    />
    <div class="scene-elements">
      <slot name="elements" :sceneConfig="sceneConfig" />
    </div>
  </div>
</template>

<style scoped>
.scene-container,
.background-image,
.scene-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: v-bind("props.scrolling ? 'auto' : 'hidden'");
  overflow-y: hidden;
}

.background-image {
  width: auto;
  min-width: 100%;
  min-height: v-bind("`calc(100vw / ${16 / 9})`");
  transform: translateY(calc((100vh - 100%) / 2));
}

.scene-elements {
  width: v-bind("`calc(100vh * ${16 / 9})`");
  min-width: 100%;
  min-height: v-bind("`calc(100vw / ${16 / 9})`");
  transform: translateY(calc((100vh - 100%) / 2));
}
</style>
