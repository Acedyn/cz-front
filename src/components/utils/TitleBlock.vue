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
    gap?: string;
    quotes?: boolean;
  }>(),
  {
    gap: "1.063rem",
    textSize: "big",
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
      :quotes="props.quotes"
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
  gap: v-bind("props.gap");
  max-width: v-bind("props.maxWidth");
  text-align: center;
}
</style>
