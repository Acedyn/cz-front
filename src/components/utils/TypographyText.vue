<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: "small" | "regular" | "big";
    color?: string;
    weight?: "bold" | "regular" | "light";
    font?: string;
    spacing?: number;
    fontStyle?: "normal" | "italic";
  }>(),
  {
    spacing: 1.5,
    size: "regular",
    color: "var(--global-color-paragraph)",
    weight: "regular",
    font: "SegoeUi",
    fontStyle: "normal",
  }
);

function getClass() {
  return `typographySize__${props.size} typographyWeight__${props.weight} typographyStyle__${props.fontStyle} typographyColor`;
}
</script>

<template>
  <div :class="getClass()">
    <slot />
  </div>
</template>

<style scoped>
.typographySize__small {
  font-size: 0.813rem;
}

.typographySize__regular {
  font-size: 1rem;
}

.typographySize__big {
  font-size: 1.306rem;
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

.typographyStyle__normal {
  font-style: normal;
}

.typographyStyle__italic {
  font-style: italic;
}

.typographyColor {
  color: v-bind("props.color");
  font-family: v-bind("props.font");
}
</style>
