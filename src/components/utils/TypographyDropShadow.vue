<script setup lang="ts">
import TypographyText from "./TypographyText.vue";
import TypographyTitle from "./TypographyTitle.vue";

const props = withDefaults(
  defineProps<{
    type?: "title" | "text";
    size?: "small" | "regular" | "big";
    color?: string;
    weight?: "bold" | "regular" | "light";
    font?: string;
    spacing?: number;
  }>(),
  {
    type: "text",
    spacing: 1.5,
    size: "regular",
    weight: "regular",
  }
);
</script>

<template>
  <TypographyText v-bind="props" v-if="props.type === 'text'">
    <TypographyText v-bind="props" class="typography-shadow">
      <slot />
    </TypographyText>
    <TypographyText v-bind="props" class="typography-shadow-top">
      <slot />
    </TypographyText>
    <slot />
  </TypographyText>
  <TypographyTitle v-bind="props" v-else-if="props.type === 'title'">
    <TypographyTitle v-bind="props" class="typography-shadow">
      <slot />
    </TypographyTitle>
    <TypographyTitle v-bind="props" class="typography-shadow-top">
      <slot />
    </TypographyTitle>
    <slot />
  </TypographyTitle>
</template>

<style scoped>
.typography-shadow {
  text-shadow: 0px 2.5px 1px rgba(0, 0, 0, 0.7);
  mix-blend-mode: overlay;
  position: absolute;
  inset: 0;
}

.typography-shadow-top {
  position: absolute;
  inset: 0;
}
</style>
