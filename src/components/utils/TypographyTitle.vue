<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    size?: "small" | "regular" | "big";
    color?: string;
    weight?: "bold" | "regular" | "light";
    level?: number;
    font?: string;
    quotes?: boolean;
    spacing?: number;
  }>(),
  {
    spacing: 1,
    size: "regular",
    color: "var(--global-color-primary)",
    weight: "bold",
    level: 1,
    font: "Inter",
  }
);

const titleClass = computed(() => {
  return `typographySize__${props.size} typographyWeight__${props.weight} ${
    props.quotes ? "title-quotes" : ""
  }`;
});
</script>

<template>
  <div class="typography">
    <h1 v-if="props.level === 1" :class="titleClass">
      <slot />
    </h1>
    <h2 v-else-if="props.level === 2" :class="titleClass">
      <slot />
    </h2>
    <h3 v-else-if="props.level === 3" :class="titleClass">
      <slot />
    </h3>
    <h4 v-else-if="props.level === 4" :class="titleClass">
      <slot />
    </h4>
    <h5 v-else-if="props.level === 5" :class="titleClass">
      <slot />
    </h5>
    <h6 v-else-if="props.level === 6" :class="titleClass">
      <slot />
    </h6>
    <template v-else>
      <slot :class="titleClass" />
    </template>
  </div>
</template>

<style scoped>
.typographySize__small {
  font-size: 1.375rem;
  line-height: v-bind("`calc(1.375rem * ${props.spacing})`");
}

.typographySize__regular {
  font-size: 2.75rem;
  line-height: v-bind("`calc(2.75rem * ${props.spacing})`");
}

.typographySize__big {
  font-size: 4rem;
  line-height: v-bind("`calc(4rem * ${props.spacing})`");
}

.typographyWeight__light {
  font-weight: 300;
}

.typographyWeight__regular {
  font-weight: 500;
}

.typographyWeight__bold {
  font-weight: 700;
}

.typography {
  color: v-bind("props.color");
  font-family: v-bind("props.font");
}

.title-quotes::before {
  content: open-quote;
}

.title-quotes::after {
  content: close-quote;
}
</style>
