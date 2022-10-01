<script setup lang="ts">
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    size?: number;
    fontSize?: "big" | "regular" | "small";
  }>(),
  {
    size: 1,
    fontSize: "regular",
  }
);
</script>

<template>
  <button class="tape-button-container">
    <img src="@/assets/goodboard/tape_button.png" class="tape-button-image" />
    <img
      src="@/assets/goodboard/tape_button.png"
      class="tape-button-image tape-button-hover"
    />
    <TypographyText font="Paytone One" :size="props.fontSize">
      <TypographyText
        font="Paytone One"
        :size="props.fontSize"
        class="tape-button-shadow"
      >
        <slot />
      </TypographyText>
      <slot />
    </TypographyText>
  </button>
</template>

<style scoped>
.tape-button-container {
  background: transparent;
  padding: v-bind(
    "`${0.375 * props.size}rem ${1.063 * props.size}rem ${0.563 * props.size}rem ${1.063 * props.size}rem`"
  );
}

.tape-button-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.tape-button-hover {
  transition: 0.1s;
  opacity: 0;
  filter: brightness(50%) hue-rotate(350deg) saturate(200%);
}

.tape-button-container:hover > .tape-button-hover {
  opacity: 1;
}

.tape-button-shadow {
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.75);
  mix-blend-mode: overlay;
  position: absolute;
  inset: 0;
  filter: none;
}
</style>
