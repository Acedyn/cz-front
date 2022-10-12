<script setup lang="ts">
const props = withDefaults(defineProps<{ label: string }>(), {});
</script>

<template>
  <label>
    <input type="checkbox" />
    {{ props.label }}
  </label>
</template>

<style scoped>
label {
  display: flex;
  align-items: center;
  color: var(--global-color-typography);
  gap: 1rem;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--global-color-dark);
}
</style>