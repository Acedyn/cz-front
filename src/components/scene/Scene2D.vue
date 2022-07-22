<script setup lang="ts">
import { usePreferencesStore } from "@/stores/preferences";
import { preloadImages } from "@/utils/loader";
import { onBeforeMount, ref, computed } from "vue";
import { storeToRefs } from "pinia";

const props = withDefaults(
  defineProps<{
    name: string;
    highlight?: Record<string, { new: string; visited: string }>;
    root?: string;
    background?: string;
    aspectRatio?: number;
    noScrolling?: boolean;
    noDark?: boolean;
  }>(),
  {
    root: "src/assets/scenes",
    background: "background",
    aspectRatio: 16 / 9,
    noScrolling: false,
    noDark: false,
  }
);

const containerRef = ref<HTMLDivElement>();
const backgroundRef = ref<HTMLImageElement>();
const preferences = usePreferencesStore();
const { theme } = storeToRefs(preferences);

const sceneRoot = `${props.root}/${props.name}`;

const backgroundImages = {
  light: new URL(`/${sceneRoot}/${props.background}.jpg`, import.meta.url).href,
  dark: new URL(`/${sceneRoot}/${props.background}_dark.jpg`, import.meta.url)
    .href,
};

if (props.noDark) {
  backgroundImages.dark = backgroundImages.light;
}

const backgroundImage = computed(() => {
  if (theme.value.includes("dark")) {
    return backgroundImages.dark;
  }

  return backgroundImages.light;
});

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
  noDark: props.noDark,
};

onBeforeMount(() => {
  preloadImages([backgroundImage.value]);

  if (props.noScrolling) {
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
  overflow-x: v-bind("!props.noScrolling ? 'auto' : 'hidden'");
  overflow-y: hidden;
}

.background-image {
  width: auto;
  min-width: 100%;
  min-height: v-bind("`calc(100vw / ${props.aspectRatio})`");
  transform: translateY(calc((100vh - 100%) / 2));
}

.scene-elements {
  width: v-bind("`calc(100vh * ${props.aspectRatio})`");
  min-width: 100%;
  min-height: v-bind("`calc(100vw / ${props.aspectRatio})`");
  transform: translateY(calc((100vh - 100%) / 2));
}
</style>
