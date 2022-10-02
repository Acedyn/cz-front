<script setup lang="ts">
import TypographyDropShadow from "../utils/TypographyDropShadow.vue";

const props = withDefaults(
  defineProps<{
    color: string;
    fontSize?: "big" | "regular" | "small";
  }>(),
  {
    size: 1,
    fontSize: "regular",
  }
);
</script>

<template>
  <div class="category-tag-container">
    <TypographyDropShadow font="Paytone One" :size="props.fontSize">
      <slot />
    </TypographyDropShadow>
  </div>
</template>

<style scoped>
.category-tag-container {
  background: v-bind("props.color");
  padding: 0.25rem 0.5rem;
  width: fit-content;
  height: fit-content;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
