<script setup lang="ts">
import { usePreferencesStore } from "../../stores/preferences";
import { preloadImages } from "../../utils/loader";
import { onBeforeMount, onBeforeUnmount, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import OverlayPopup from "../../components/popup/OverlayPopup.vue";

const props = withDefaults(
  defineProps<{
    name: string;
    highlight?: Record<string, { new: string; visited: string }>;
    root?: string;
    background?: string;
    aspectRatio?: number;
    noScrolling?: boolean;
    noAutoScrolling?: boolean;
    noDark?: boolean;
  }>(),
  {
    root: "src/assets/immersion/scenes",
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

let lastTimestamp = 0;
const mousePosition = { x: 0, y: 0 };
const getMousePosition = (e: MouseEvent) => {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
};
const slideMouse = (e: number) => {
  const deltaTime = e - lastTimestamp;
  lastTimestamp = e;
  window.requestAnimationFrame(slideMouse);

  if (!containerRef.value || props.noAutoScrolling) {
    return;
  }
  if (mousePosition.y / window.innerHeight < 0.2) {
    return;
  }
  const offset = (mousePosition.x - window.innerWidth / 2) * deltaTime * 0.001;
  containerRef.value.scrollTo(containerRef.value.scrollLeft + offset, 10);
};

const isReady = ref(false);
const childElements: { [id: string]: { ready: boolean } } = {};

const sceneConfig = {
  root: sceneRoot,
  highlight: props.highlight,
  noDark: props.noDark,
  onLoad: (id: string) => {
    childElements[id] = { ready: false };
    isReady.value = Object.values(childElements).every((e) => e.ready);
  },
  onReady: (id: string) => {
    const childElement = childElements[id];
    if (!childElement) {
      return;
    }

    childElement.ready = true;
    isReady.value = Object.values(childElements).every((e) => e.ready);
  },
};

onBeforeMount(() => {
  sceneConfig.onLoad("background");
  window.requestAnimationFrame(slideMouse);
  window.addEventListener("mousemove", getMousePosition);
  preloadImages([backgroundImage.value], () => {
    sceneConfig.onReady("background");
  });

  if (props.noScrolling) {
    window.addEventListener("resize", scrollToCenter);
  }

  isReady.value = false;
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", getMousePosition);
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
    <slot name="overlay" />
    <slot v-if="!isReady" name="loading">
      <OverlayPopup :show="true" margin="20%" disableCloseButton>
      </OverlayPopup>
    </slot>
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
  overflow-y: hidden;
  overflow-x: auto;
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
  overflow: hidden;
}
</style>
