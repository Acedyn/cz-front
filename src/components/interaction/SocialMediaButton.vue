<script setup lang="ts">
import { ref } from "vue";
import TypographyTitle from "../utils/TypographyTitle.vue";

const props = withDefaults(
  defineProps<{
    type: string;
    height?: string;
    disabled?: boolean;
  }>(),
  {
    height: "58px",
    disabled: false,
  }
);

const icon = ref(
  new URL(`/src/assets/social_icons/${props.type}.png`, import.meta.url).href
);

const textColor = ref(
  props.type === "google" ? "var(--text-dark)" : "var(--text-light)"
);
const backgroundColor = ref(`var(--${props.type})`);

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    class="cta-button"
    :disabled="props.disabled"
    @click="() => emit('click')"
  >
    <img
      :src="icon"
      :alt="icon"
      style="width: 24px; height: 24px; margin-right: 1rem"
    />
    <TypographyTitle size="small" :color="textColor" :level="4" font="Poppins">
      <slot />
    </TypographyTitle>
  </button>
</template>

<style scoped>
* {
  --facebook: #00a3ff;
  --google: #f5f5f5;
  --discord: #9095ff;
  --twitter: #90d7ff;
  --text-light: #f5f5f5;
  --text-dark: #3f1103;
}
.cta-button {
  background-color: v-bind("backgroundColor");
  color: v-bind("textColor");
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
  cursor: pointer;
}
</style>
