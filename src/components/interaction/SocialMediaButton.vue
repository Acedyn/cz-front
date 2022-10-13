<script setup lang="ts">
import { ref } from "vue";
import TypographyTitle from "../utils/TypographyTitle.vue";

const props = withDefaults(
  defineProps<{
    icon: string;
    color?: string;
    textColor?: string;
    textWeight?: "bold" | "regular" | "light";
    height?: string;
    disabled?: boolean;
  }>(),
  {
    height: "58px",
    color: "var(--global-color-primary)",
    textColor: "var(--global-color-typography)",
    disabled: false,
  }
);

const icon = ref(
  new URL(`/src/assets/social_icons/${props.icon}.png`, import.meta.url).href
);

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    class="clear-button-style cta-button"
    :disabled="props.disabled"
    @click="() => emit('click')"
  >
    <img :src="icon" :alt="props.icon" style="width: 24px; height: 24px; margin-right: 1rem"/>
    <TypographyTitle
      size="small"
      :color="props.textColor"
      :level="4"
      :weight="props.textWeight"
      font="Poppins"
    >
      <slot />
    </TypographyTitle>
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

.cta-button {
  background: v-bind("props.color");
  color: white;
  display: flex;
  align-items: center;
  outline: 0;
  border: 0;
  border-radius: 8px;
  font-family: Poppins, serif;
  justify-content: center;
  height: v-bind("props.height");
  transition: 0.2s ease;
}

.cta-button:disabled,
.cta-button[disabled] {
  cursor: default;
}

:not(.cta-button:disabled).cta-button:hover {
  filter: brightness(0.8);
}
</style>
