<script setup lang="ts">
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    color: string;
    fontSize?: "big" | "regular" | "small";
  }>(),
  {
    size: 1,
    fontSize: "small",
  }
);
</script>

<template>
  <div class="category-tag-container">
    <TypographyText font="Paytone One" :size="props.fontSize">
      <TypographyText
        font="Paytone One"
        :size="props.fontSize"
        class="category-tag-shadow"
      >
        <slot />
      </TypographyText>
      <slot />
    </TypographyText>
  </div>
</template>

<style scoped>
.category-tag-container {
  background: v-bind("props.color");
  padding: 0.25rem 0.5rem;
  width: fit-content;
  border-radius: 0.25rem;
}

.category-tag-shadow {
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.75);
  mix-blend-mode: overlay;
  position: absolute;
  inset: 0;
  filter: none;
}
</style>
