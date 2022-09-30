<script setup lang="ts">
import { usePreferencesStore } from "../../stores/preferences";
import { preloadImages } from "../../utils/loader";
import { onBeforeMount, onUpdated, onBeforeUnmount, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import OverlayPopup from "../../components/popup/OverlayPopup.vue";

const SCROLL_SPEED = 0.001;

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
    sliderColor?: string;
  }>(),
  {
    root: "src/assets/immersion/scenes",
    background: "background",
    aspectRatio: 16 / 9,
    noScrolling: false,
    noDark: false,
    sliderColor: "black",
  }
);

const containerRef = ref<HTMLDivElement>();
const backgroundRef = ref<HTMLImageElement>();
const slideTrigerLeft = ref<Element>();
const slideTrigerRight = ref<Element>();
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
// The fetching of the mouse position and the sliding are asynchronous
const mousePosition = { x: 0, y: 0 };
const isHoveringSlider = ref<boolean>(false);
const sliderEnable = ref<[boolean, boolean]>([true, true]);
const getMousePosition = (e: MouseEvent) => {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
};

// Scoll the view according to the mouse position on every ticks
const slideMouse = (e: number) => {
  const deltaTime = e - lastTimestamp;
  lastTimestamp = e;
  window.requestAnimationFrame(slideMouse);

  if (!isHoveringSlider.value) return;
  if (!containerRef.value || props.noAutoScrolling) {
    return;
  }
  // Safe zone on the top 20% of the screen
  if (mousePosition.y / window.innerHeight < 0.2) {
    return;
  }
  const offset =
    (mousePosition.x - window.innerWidth / 2) * deltaTime * SCROLL_SPEED;
  containerRef.value.scrollTo(containerRef.value.scrollLeft + offset, 10);

  const scrollLeft = containerRef.value.scrollLeft;
  const clientWidth = containerRef.value.clientWidth;
  const child = containerRef.value.firstChild as HTMLElement;
  const fullWidth = child.clientWidth;

  // The tolerance is the scroll distance where the slider will disapear
  // When the user is on the extreme left - the tolerance, the slider will disapear
  const TOLERANCE = 5;
  if (scrollLeft < TOLERANCE) {
    sliderEnable.value[0] = false;
  } else {
    sliderEnable.value[0] = true;
  }
  if (Math.round(scrollLeft + clientWidth) > fullWidth - TOLERANCE) {
    sliderEnable.value[1] = false;
  } else {
    sliderEnable.value[1] = true;
  }
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

onUpdated(() => {
  slideTrigerLeft.value?.addEventListener("mouseenter", () => {
    isHoveringSlider.value = true;
  });
  slideTrigerLeft.value?.addEventListener("mouseleave", () => {
    isHoveringSlider.value = false;
  });
  slideTrigerRight.value?.addEventListener("mouseenter", () => {
    isHoveringSlider.value = true;
  });
  slideTrigerRight.value?.addEventListener("mouseleave", () => {
    isHoveringSlider.value = false;
  });
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
    <span
      :class="`slide-trigger slide-left ${
        sliderEnable[0] ? '' : 'slide-disable'
      }`"
      ref="slideTrigerLeft"
    />
    <span
      :class="`slide-trigger slide-right ${
        sliderEnable[1] ? '' : 'slide-disable'
      }`"
      ref="slideTrigerRight"
    />
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
  scrollbar-width: none;
}

.scene-container::-webkit-scrollbar {
  display: none;
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

.slide-trigger {
  pointer-events: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 30%;
  opacity: 0;
  transition: 0.2s;
}
.slide-trigger:hover {
  opacity: 1;
}
.slide-left {
  left: 0;
  background: v-bind(
    "`linear-gradient(90deg, ${props.sliderColor}, transparent)`"
  );
}
.slide-right {
  right: 0;
  background: v-bind(
    "`linear-gradient(270deg, ${props.sliderColor}, transparent)`"
  );
}
.slide-disable {
  pointer-events: none;
  opacity: 0 !important;
}
</style>
