<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: number;
  }>(),
  {
    size: 1,
  }
);
</script>

<template>
  <button class="tape-button-container">
    <slot />
  </button>
</template>

<style scoped>
.tape-button-container {
  background-image: url(@/assets/goodboard/tape_button.png);
  background-size: cover;
  font-family: "Paytone One", sans-serif;
  padding: 0.625rem;
}
</style>
