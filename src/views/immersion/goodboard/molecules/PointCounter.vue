<script setup lang="ts">
import TypographyDropShadow from "../../../../components/utils/TypographyDropShadow.vue";
import StickerImage from "../../../../components/atoms/StickerImage.vue";
import LogoImage from "../../../../components/atoms/LogoImage.vue";

const props = withDefaults(
  defineProps<{
    count: number;
    hue?: number;
    size?: number;
    ratio?: number;
  }>(),
  {
    size: 1,
    hue: 0,
    ratio: 86 / 28,
  }
);
</script>

<template>
  <StickerImage type="small" v-bind="props" class="point-counter-container">
    <TypographyDropShadow
      class="point-counter-count"
      font="Rubik Mono One"
      color="var(--global-color-primary)"
    >
      <p :style="{ fontSize: '2rem', letterSpacing: '-0.1rem' }">
        {{ props.count }}
      </p>
    </TypographyDropShadow>
    <div class="point-counter-logo">
      <LogoImage type="box_point" />
    </div>
  </StickerImage>
</template>

<style scoped>
.point-counter-container {
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: v-bind("`${2.5 * props.size}rem`");
  width: v-bind("`${2.5 * props.size * props.ratio}rem`");
  min-width: auto;
  min-height: auto;
}

.point-counter-count {
  text-align: center;
  width: 100%;
}

.point-counter-logo {
  display: flex;
  position: absolute;
  right: 0;
  translate: 50%;
  scale: 1.2;
}
</style>
