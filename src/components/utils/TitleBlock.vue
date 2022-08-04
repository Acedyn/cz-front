<script setup lang="ts">
import TypographyTitle from "./TypographyTitle.vue";
import TypographyText from "./TypographyText.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    titleSize?: "small" | "regular" | "big";
    titleLevel?: number;
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
    <TypographyTitle :size="props.titleSize" :level="props.titleLevel">
      {{ props.title }}
    </TypographyTitle>
    <TypographyText>
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
