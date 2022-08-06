<script setup lang="ts">
import TypographyTitle from "../utils/TypographyTitle.vue";

const props = withDefaults(
  defineProps<{
    icon?: string;
    color?: string;
    colorHover?: string;
    colorHoverInvert?: string;
    noText?: boolean;
    noIcon?: boolean;
    invert?: boolean;
    thickness?: string;
    size?: number;
  }>(),
  {
    size: 1,
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
    <span v-if="!props.noIcon" class="material-icons button-icon">{{
      props.icon
    }}</span>
    <TypographyTitle
      size="small"
      :color="props.invert ? props.color : 'white'"
      :level="4"
      weight="bold"
      font="Poppins"
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
  padding: v-bind(
    "`calc(0.688rem * ${props.size}) calc(1.375rem * ${props.size})`"
  );
  border-radius: v-bind("`calc(0.5rem * ${props.size})`");
  gap: v-bind("`calc(0.688rem * ${props.size})`");

  transition: 0.2s;
  font-family: Poppins;
}

.cta-button:hover {
  background: v-bind("props.colorHover");
}

.no-text {
  padding: v-bind("`calc(0.688rem * ${props.size})`");
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
  font-size: v-bind("`calc(2rem * ${props.size})`");
}
</style>
