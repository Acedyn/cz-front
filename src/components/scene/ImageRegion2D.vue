<script lang="ts">
interface lifeCycleCallback {
  (id: string): void;
}
</script>

<script setup lang="ts">
import DetailsRegion from "./DetailsRegion.vue";

import { preloadImages } from "../../utils/loader";
import { usePreferencesStore } from "../../stores/preferences";
import { useHistoryStore } from "../../stores/history";
import { onBeforeMount, ref, computed } from "vue";
import { storeToRefs } from "pinia";

const props = defineProps<{
  top: number;
  left: number;
  width: number;
  height: number;

  name: string;
  config: {
    root: string;
    onLoad: lifeCycleCallback;
    onReady: lifeCycleCallback;
    highlight?: Record<string, { new: string; visited: string }>;
    noDark?: boolean;
  };

  disabled?: boolean;
  noHoverImage?: boolean;
  noHoverBackground?: boolean;
  noDark?: boolean;
  highlight?: Record<string, { new: string; visited: string }>;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const isHover = ref(false);
const preferences = usePreferencesStore();
const { theme } = storeToRefs(preferences);
const history = useHistoryStore();
const { sceneVisits } = storeToRefs(history);

const imageBase = `${props.config.root}/${props.name}`;

const imageUrls = {
  dark: {
    idle: new URL(
      `/${props.config.root}/${props.name}_dark.png`,
      import.meta.url
    ).href,
    hover: new URL(
      `/${props.config.root}/${props.name}_dark_hover.png`,
      import.meta.url
    ).href,
  },
  light: {
    idle: new URL(`/${props.config.root}/${props.name}.png`, import.meta.url)
      .href,
    hover: new URL(
      `/${props.config.root}/${props.name}_hover.png`,
      import.meta.url
    ).href,
  },
};

if (props.disabled || props.noHoverImage) {
  Object.values(imageUrls).forEach((imageUrl) => {
    if (props.disabled || props.noHoverImage) {
      imageUrl.hover = imageUrl.idle;
    }
  });
}

if (props.noDark || props.config.noDark) {
  imageUrls.dark = imageUrls.light;
}

const imageUrl = computed(() => {
  if (theme.value.includes("dark")) {
    return imageUrls.dark;
  }

  return imageUrls.light;
});

const highlightColor = computed(() => {
  const highlightConfig = props.highlight || props.config.highlight;
  if (props.disabled || !highlightConfig) {
    return "transparent";
  }
  const hightlightTheme = highlightConfig[theme.value];
  return sceneVisits.value[imageBase]
    ? hightlightTheme.visited
    : hightlightTheme.new;
});

const onClick = () => {
  history.storeSceneVisit(imageBase);
  emit("click");
};

onBeforeMount(() => {
  props.config.onLoad(props.name);
  preloadImages(Object.values(imageUrl.value), () => {
    props.config.onReady(props.name);
  });
});
</script>

<template>
  <div
    class="region-container"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    :class="`${props.disabled ? 'disabled' : ''}`"
  >
    <template v-if="isHover">
      <div
        :class="`hover-content ${noHoverBackground ? '' : 'hover-background'}`"
        @click="onClick"
      >
        <slot name="hover">
          <DetailsRegion
            :title="props.name.replaceAll('_', ' ')"
            description="lorem ipsum id dolor els istum dale rictus dolores"
          />
        </slot>
      </div>
      <img :src="imageUrl.hover" :alt="props.name" class="region-image hover" />
    </template>

    <template v-else>
      <img :src="imageUrl.idle" :alt="props.name" class="region-image" />
    </template>
  </div>
</template>

<style scoped>
.region-container {
  position: absolute;
  top: v-bind("`${props.top}%`");
  left: v-bind("`${props.left}%`");
  width: v-bind("`${props.width}%`");
  height: v-bind("`${props.height}%`");
}

.region-image {
  filter: v-bind(
    "highlightColor ? `drop-shadow(0px 0px 4px ${highlightColor})` : ''"
  );
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: transform 0.1s ease-out;
}

.disabled {
  filter: brightness(0.5);
}

.hover-content {
  position: absolute;
  padding-top: 10%;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  display: flex;
}

.hover-content:hover + .region-image {
  transform: scale(1.02);
  filter: v-bind(
    "highlightColor ? `drop-shadow(0px 0px 6px ${highlightColor})` : ''"
  );
}
</style>
