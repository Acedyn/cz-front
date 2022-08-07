<script setup lang="ts">
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    color?: string;
    colorHover?: string;
    textSize?: "small" | "regular" | "big";
    textFont?: string;
    textWeight?: "light" | "regular" | "bold";
  }>(),
  {
    textWeight: "Poppins",
    textFont: "bold",
    color: "var(--global-color-primary)",
    colorHover: "var(--global-color-hover)",
    textSize: "regular",
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button class="clear-button-style simple-button" @click="() => emit('click')">
    <TypographyText
      :textFont="props.textFont"
      :size="props.textSize"
      color="white"
      weight="bold"
      class="button-label"
    >
      <slot />
    </TypographyText>
  </button>
</template>

<style scoped>
.clear-button-style {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.simple-button {
  background: v-bind("props.color");
  color: white;
  display: flex;
  align-items: center;
  padding: 0.688rem 1.375rem;
  border-radius: 0.375rem;
  gap: 0.688rem;

  transition: 0.2s;
}

.simple-button:hover {
  background: v-bind("props.colorHover");
}

.button-label {
  text-align: center;
  width: 100%;
}
</style>
