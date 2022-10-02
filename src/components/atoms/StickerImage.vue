<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type: "thin" | "bold" | "small";
    size?: number;
    hue?: number;
  }>(),
  {
    size: 1,
    hue: 0,
  }
);

const imageUrl = new URL(
  `/src/assets/stickers/sticker_${props.type}.png`,
  import.meta.url
).href;

const ratioMapping = {
  thin: 433 / 114,
  bold: 230 / 67,
  small: 86 / 28,
};
</script>

<template>
  <div class="sticker-image-container">
    <img :src="imageUrl" class="sticker-image" />
    <slot />
  </div>
</template>

<style scoped>
.sticker-image {
  filter: v-bind("`hue-rotate(${props.hue}deg)`");
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.sticker-image-container {
  min-height: v-bind("`${2.5 * props.size}rem`");
  min-width: v-bind("`${2.5 * props.size * ratioMapping[props.type]}rem`");
}
</style>
