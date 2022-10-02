<script setup lang="ts">
import TypographyDropShadow from "../utils/TypographyDropShadow.vue";
import StickerImage from "../atoms/StickerImage.vue";

const props = withDefaults(
  defineProps<{
    size?: number;
    fontSize?: "big" | "regular" | "small";
    hue?: number;
  }>(),
  {
    size: 1,
    fontSize: "big",
    hue: 0,
  }
);
</script>

<template>
  <button class="sticker-button-container">
    <StickerImage
      type="thin"
      class="sticker-button-image"
      :size="0"
      :hue="props.hue"
    />
    <StickerImage
      type="thin"
      class="sticker-button-image sticker-button-hover"
      :size="0"
      :hue="props.hue"
    />
    <TypographyDropShadow font="Paytone One" :size="props.fontSize">
      <slot />
    </TypographyDropShadow>
  </button>
</template>

<style scoped>
.sticker-button-container {
  background: transparent;
  padding: v-bind("`${0.5 * props.size}rem ${2.625 * props.size}rem`");
}

.sticker-button-image {
  position: absolute;
  inset: 0;
}

.sticker-button-hover {
  transition: 0.1s;
  opacity: 0;
  filter: brightness(50%) hue-rotate(350deg) saturate(200%);
}

.sticker-button-container:hover > .sticker-button-hover {
  opacity: 0.8;
}
</style>
