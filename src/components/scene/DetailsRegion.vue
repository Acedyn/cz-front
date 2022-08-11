<script setup lang="ts">
import CtaButton from "../interaction/CtaButton.vue";
import TypographyTitle from "../utils/TypographyTitle.vue";
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    textColor?: string;
    description?: string;
    noButton?: boolean;
    icon?: string;
    disabled?: boolean;
  }>(),
  {
    textColor: "white",
  }
);
</script>

<template>
  <div class="details-container hover-background">
    <div class="region-header">
      <span v-if="props.icon" class="material-icons icon-title">
        {{ props.icon }}
      </span>
      <TypographyTitle :level="3" color="white" weight="bold"
        ><span class="region-title">{{ props.title }}</span></TypographyTitle
      >
    </div>
    <TypographyText>
      <p class="text description">{{ props.description }}</p>
    </TypographyText>
    <div :class="props.disabled ? 'disabled-button' : ''">
      <CtaButton
        :noIcon="!props.icon"
        :size="0.6"
        v-if="!props.noButton"
        :icon="props.icon"
        textWeight="regular"
        >Enter</CtaButton
      >
    </div>
  </div>
</template>

<style scoped>
.details-container {
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0% 10%;
  gap: 10px;

  overflow: visible;
}

.text {
  color: v-bind("props.textColor");
}

.region-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.region-title {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
}

.icon-title {
  font-size: 2.464rem;
  color: white;
}

.description {
  text-align: center;
}

.disabled-button {
  pointer-events: none;
}

.hover-background {
  background: radial-gradient(
    closest-side,
    rgba(103, 55, 11, 0.73) 40%,
    rgba(102, 54, 10, 0)
  );

  transition: opacity 0.3s ease-out, background-size 0.1s ease-out;
  background-size: 20% 20%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
}

.hover-background:hover {
  opacity: 1;
  background-size: 100% 100%;
}
</style>
