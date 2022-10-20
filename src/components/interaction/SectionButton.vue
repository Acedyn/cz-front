<script setup lang="ts">
import LogoImage from "../atoms/LogoImage.vue";
import TypographyText from "@/components/utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    active: boolean;
  }>(),
  {
    active: false,
  }
);
</script>

<template>
  <div class="section-btn-container" :class="active ? 'active' : ''">
    <LogoImage :size="0.9" type="tools" />
    <TypographyText
      style="font-size: 1.2rem"
      font="Quicksand"
      :weight="active ? 'bold' : 'regular'"
      color="var(--global-color-typography)"
    >
      {{ props.title }}
    </TypographyText>
  </div>
</template>

<style scoped>
.section-btn-container {
  display: flex;
  gap: 0.75rem;
}

.section-btn-container * {
  pointer-events: none;
}

.section-btn-container:hover {
  cursor: pointer;
}

.section-btn-container.active {
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-color-typography);
}
</style>
