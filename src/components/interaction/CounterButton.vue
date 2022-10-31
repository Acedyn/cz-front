<script setup lang="ts">
import TypographyTitle from "@/components/utils/TypographyTitle.vue";

const props = withDefaults(
  defineProps<{
    value: number;
    max: number;
    min: number;
    color?: string;
    colorHover?: string;
    size?: number;
  }>(),
  {
    size: 1,
    color: "var(--global-color-primary)",
    colorHover: "var(--global-color-hover)",
  }
);

const emit = defineEmits<{
  (e: "up"): void;
  (e: "down"): void;
}>();
</script>

<template>
  <div class="counter-button-container">
    <button
      :class="`clear-button-style cta-button button-left ${
        value < 1 ? 'disabled' : ''
      }`"
      @click="
        () => {
          if (value > props.min) emit('down');
        }
      "
    >
      <TypographyTitle
        class="button-offset"
        font="Paytone One"
        color="var(--global-color-typography-dark)"
        >-</TypographyTitle
      >
    </button>
    <TypographyTitle
      class="counter-value"
      font="Paytone One"
      color="var(--global-color-typography-dark)"
      >{{ value }}</TypographyTitle
    >
    <button
      :class="`clear-button-style cta-button button-right ${
        value >= props.max ? 'disabled' : ''
      }`"
      @click="
        () => {
          if (value < props.max) emit('up');
        }
      "
    >
      <TypographyTitle
        class="button-offset"
        font="Paytone One"
        color="var(--global-color-typography-dark)"
        >+</TypographyTitle
      >
    </button>
  </div>
</template>

<style scoped>
.counter-button-container {
  display: flex;
}

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
  flex-direction: row;
  align-items: center;
  transition: 0.2s;
  font-family: Poppins;
  padding: v-bind("`calc(0.688rem * ${props.size}) 1.4rem`");
}

.button-left {
  border-radius: v-bind("`calc(0.5rem * ${props.size})`") 0 0
    v-bind("`calc(0.5rem * ${props.size})`");
}
.button-right {
  border-radius: 0 v-bind("`calc(0.5rem * ${props.size})`")
    v-bind("`calc(0.5rem * ${props.size})`") 0;
}

.cta-button:hover {
  background: v-bind("props.colorHover");
}

.cta-button.disabled,
.cta-button.disabled:hover {
  cursor: default;
  filter: contrast(0.2) brightness(1.2);
}

.button-icon {
  font-size: v-bind("`calc(2rem * ${props.size})`");
  color: var(--global-color-typography-dark);
  font-weight: bolder;
}

.button-offset {
  bottom: 0.3rem;
}

.counter-value {
  color: var(--global-color-typography-dark);
  background: var(--global-color-paragraph);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  min-width: 6rem;
  justify-content: center;
}
</style>
