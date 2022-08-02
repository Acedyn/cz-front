<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = withDefaults(
  defineProps<{
    index: number;
    distance: number;
    width?: number;
    height?: number;
    gap?: number;
  }>(),
  {
    gap: 10,
    width: 400,
    height: 600,
  }
);

const isApeared = ref<boolean>(false);
const windowWidth = ref<number>(window.innerWidth);
const fullWidth = computed(() => props.width + props.gap);
const isSelected = computed(() => props.distance === 0);
const isVisible = computed(
  () =>
    Math.abs(props.distance) * fullWidth.value - fullWidth.value / 2 <
    window.innerWidth
);

const computedStyle = computed(() => {
  const style: Partial<CSSStyleDeclaration> = {
    left: `${
      windowWidth.value / 2 +
      props.distance * fullWidth.value -
      fullWidth.value / 2
    }px`,
  };

  style.transform = isApeared.value ? "" : "translateY(20%)";
  style.opacity = isApeared.value ? "1" : "0";

  if (!isSelected.value) {
    style.filter = "brightness(50%)";
  }

  if (isSelected.value) {
    style.transform += " scale(1.30) translateY(-2%)";
    style.zIndex = "2";
  }

  return style as Record<string, string | null>;
});

const setWindowSize = () => {
  windowWidth.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", setWindowSize);
  setTimeout(() => {
    isApeared.value = true;
  }, Math.random() * 200);
});
onUnmounted(() => {
  window.removeEventListener("resize", setWindowSize);
});
</script>

<template>
  <div v-if="isVisible" class="slide-container" :style="computedStyle">
    <slot />
  </div>
</template>

<style scoped>
.slide-container {
  width: v-bind("`${props.width}px`");
  height: v-bind("`${props.height}px`");

  position: absolute;
  transition: left 0.5s, transform 0.2s, opacity 0.3s;

  margin: auto 0px;
  top: 0px;
  bottom: 0px;
}
</style>
