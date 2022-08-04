<script setup lang="ts">
import TypographyTitle from "../utils/TypographyTitle.vue";

const props = withDefaults(
  defineProps<{
    icon: string;
    color?: string;
    colorHover?: string;
    colorHoverInvert?: string;
    noTex?: boolean;
    invert?: boolean;
    thickness?: string;
  }>(),
  {
    noText: true,
    invert: false,
    thickness: "0.188rem",
    color: "var(--global-color-primary)",
    colorHover: "var(--global-color-hover)",
    colorHoverInvert: "var(--global-color-secondary)",
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    :class="`clear-button-style cta-button ${props.noText ? 'no-text' : ''} ${
      props.invert ? 'inverted' : ''
    }`"
    @click="() => emit('click')"
  >
    <span class="material-icons button-icon">{{ props.icon }}</span>
    <TypographyTitle
      size="regular"
      :color="props.invert ? props.color : 'white'"
      weight="bold"
      v-if="!props.noText"
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
  padding: 0.688rem 1.375rem;
  border-radius: 0.5rem;
  gap: 0.688rem;

  transition: 0.2s;
  font-family: Poppins;
}

.cta-button:hover {
  background: v-bind("props.colorHover");
}

.no-text {
  padding: 0.688rem;
}

.inverted {
  background: transparent;
  color: v-bind("props.color");
  box-sizing: border-box;

  outline: v-bind("`solid ${props.thickness} ${props.color}`");
  outline-offset: v-bind("`-${props.thickness}`");
}

.inverted:hover {
  background: v-bind("props.colorHoverInvert");
}

.button-icon {
  font-size: 2rem;
}
</style>
