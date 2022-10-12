<script setup lang="ts">
import TypographyTitle from "../utils/TypographyTitle.vue";

const props = withDefaults(
  defineProps<{
    icon?: string;
    color?: string;
    colorHover?: string;
    colorHoverInvert?: string;
    textColor?: string;
    textWeight?: "bold" | "regular" | "light";
    noIcon?: boolean;
    invert?: boolean;
    thickness?: number;
    size?: number;
    height?: string;
    disabled: boolean;
  }>(),
  {
    size: 1,
    height: "50px",
    thickness: 0.188,
    textWeight: "bold",
    color: "var(--global-color-primary)",
    colorHover: "var(--global-color-hover)",
    colorHoverInvert: "var(--global-color-secondary)",
    textColor: "var(--global-color-typography)",
    disabled: false,
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    :class="`clear-button-style cta-button ${props.invert ? 'inverted' : ''}`"
    :disabled="props.disabled"
    @click="() => emit('click')"
  >
    <i v-if="!props.noIcon" :class="props.icon" class="button-icon"></i>
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
  padding: v-bind(
    "`calc(0.688rem * ${props.size}) calc(1.375rem * ${props.size})`"
  );
  border-radius: v-bind("`calc(0.5rem * ${props.size})`");
  gap: v-bind("`calc(0.688rem * ${props.size})`");

  transition: 0.2s;
  font-family: Poppins;
  display: flex;
  justify-content: center;
  height: v-bind("props.height");
}

.cta-button:disabled,
.cta-button[disabled] {
  cursor: default;
}

:not(.cta-button:disabled).cta-button:hover {
  background: v-bind("props.colorHover");
}

.no-text {
  padding: v-bind("`calc(0.688rem * ${props.size})`");
}

.inverted {
  background: transparent;
  color: v-bind("props.color");

  outline: v-bind(
    "`solid calc(${props.thickness}rem * ${props.size}) ${props.color}`"
  );
  outline-offset: v-bind("`-${props.thickness}rem`");
}

:not(.button:disabled).inverted:hover {
  background: v-bind("props.colorHoverInvert");
}

.button-icon {
  font-size: calc(2rem * v-bind("props.size"));
  color: v-bind("props.textColor");
}
</style>
