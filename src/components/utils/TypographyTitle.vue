<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    size?: "small" | "regular" | "big";
    color?: string;
    weight?: "bold" | "regular" | "light";
    level?: number;
    font?: string;
  }>(),
  {
    size: "regular",
    color: "var(--global-color-primary)",
    weight: "bold",
    level: 1,
    font: "Inter",
  }
);

const fontClass = computed(() => {
  return `typographySize__${props.size} typographyWeight__${props.weight}`;
});
</script>

<template>
  <div class="typography">
    <h1 v-if="props.level === 1" :class="fontClass">
      <slot />
    </h1>
    <h2 v-else-if="props.level === 2" :class="fontClass">
      <slot />
    </h2>
    <h3 v-else-if="props.level === 3" :class="fontClass">
      <slot />
    </h3>
    <h4 v-else-if="props.level === 4" :class="fontClass">
      <slot />
    </h4>
    <h5 v-else-if="props.level === 5" :class="fontClass">
      <slot />
    </h5>
    <h6 v-else-if="props.level === 6" :class="fontClass">
      <slot />
    </h6>
    <template v-else>
      <slot :class="fontClass" />
    </template>
  </div>
</template>

<style scoped>
.typographySize__small {
  font-size: 1.375rem;
  line-height: 1.375rem;
}

.typographySize__regular {
  font-size: 2.75rem;
  line-height: 2.75rem;
}

.typographySize__big {
  font-size: 4rem;
  line-height: 4rem;
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
</style>
