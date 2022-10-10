<script setup lang="ts">
import { computed } from "vue";
import TypographyText from "../utils/TypographyText.vue";

const title = computed(() => {
  return props.count > 1 ? props.plural : props.singular;
});

const props = withDefaults(
  defineProps<{
    icon?: string;
    count: number;
    singular: string;
    plural: string;
    iconColor?: string;
    textColor?: string;
  }>(),
  {
    icon: "circle",
    iconColor: "#d9d9d9",
    textColor: "var(--global-color-primary)",
  }
);
</script>

<template>
  <div class="count-container">
    <span class="material-icons">{{ props.icon }}</span>
    <TypographyText fontStyle="italic" :color="props.textColor" font="Marvel">
      {{ props.count }} {{ title }}
    </TypographyText>
  </div>
</template>

<style scoped>
.count-container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.material-icons {
  color: v-bind("props.iconColor");
}
</style>
