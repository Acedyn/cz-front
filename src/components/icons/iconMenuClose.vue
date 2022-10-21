<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fill?: string;
    size?: string;
  }>(),
  {
    fill: "#FFD3BA",
    size: "1rem",
  }
);
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.30039 19.0999L0.900391 17.6999L8.60039 9.9999L0.900391 2.2999L2.30039 0.899902L10.0004 8.5999L17.7004 0.899902L19.1004 2.2999L11.4004 9.9999L19.1004 17.6999L17.7004 19.0999L10.0004 11.3999L2.30039 19.0999Z"
      :fill="props.fill"
    />
  </svg>
</template>
