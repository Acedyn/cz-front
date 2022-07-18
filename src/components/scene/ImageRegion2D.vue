<script setup lang="ts">
import { preloadImages } from "@/utils/loader";
import { usePreferencesStore } from "@/stores/preferences";
import { onBeforeMount, ref, computed } from "vue";

const props = defineProps<{
  top: number;
  left: number;
  width: number;
  height: number;

  name: string;
  config: {
    root: string;
    highlight?: string;
  };

  disabled?: boolean;
  highlight?: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const isHover = ref(false);
const preferences = usePreferencesStore();

const highlightColor = computed(() => {
  return props.highlight || props.config.highlight;
});

let imageBase = `${props.config.root}/${props.name}`;
if (preferences.theme.includes("dark")) {
  imageBase += "_dark";
}

const imageUrl = {
  idle: new URL(`/${imageBase}.png`, import.meta.url).href,
  hover: new URL(`/${imageBase}_hover.png`, import.meta.url).href,
};

onBeforeMount(() => {
  preloadImages(Object.values(imageUrl));
});
</script>

<template>
  <div
    class="region-container"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <template v-if="isHover">
      <div class="hover-content" @click="() => emit('click')">
        <slot name="hover">
          <p class="hover-text">{{ props.name }}</p>
        </slot>
      </div>
      <img
        :src="imageUrl.hover"
        :alt="props.name"
        :class="`region-image hover ${props.disabled ? 'disabled' : ''}`"
      />
    </template>

    <template v-else>
      <img
        :src="imageUrl.idle"
        :alt="props.name"
        :class="`region-image ${props.disabled ? 'disabled' : ''}`"
      />
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
  top: 0;
  left: 0;
  background: radial-gradient(
    closest-side,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0)
  );
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;

  transition: opacity 0.3s ease-out, background-size 0.1s ease-out;
  opacity: 0;
  background-size: 20% 20%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
}

.hover-content:hover {
  opacity: 1;
  background-size: 100% 100%;
}

.hover-content:hover + .region-image {
  transform: scale(1.02);
  filter: v-bind(
    "highlightColor ? `drop-shadow(0px 0px 6px ${highlightColor})` : ''"
  );
}

.hover-text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
