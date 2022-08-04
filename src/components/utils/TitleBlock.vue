<script setup lang="ts">
import TypographyTitle from "./TypographyTitle.vue";
import TypographyText from "./TypographyText.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    titleSize?: "small" | "regular" | "big";
    titleLevel?: number;
    titleColor?: string;
    textSize?: "small" | "regular" | "big";
    maxWidth?: string;
  }>(),
  {
    titleSize: "big",
    titleLevel: 2,
  }
);
</script>

<template>
  <div class="title-block">
    <TypographyTitle
      :size="props.titleSize"
      :level="props.titleLevel"
      :color="props.titleColor"
    >
      {{ props.title }}
    </TypographyTitle>
    <TypographyText :size="props.textSize">
      <slot />
    </TypographyText>
  </div>
</template>

<style scoped>
.title-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.063rem;
  max-width: v-bind("props.maxWidth");
  text-align: center;
}
</style>
