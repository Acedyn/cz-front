<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type:
      | "box_closed"
      | "box_opened"
      | "box_point"
      | "dashboard"
      | "home"
      | "profile"
      | "time_watch"
      | "tools"
      | "world";
    size?: number;
  }>(),
  {
    size: 1,
  }
);

const imageUrl = new URL(`/src/assets/logos/${props.type}.png`, import.meta.url)
  .href;
</script>

<template>
  <img class="logo" :src="imageUrl" />
</template>

<style>
.logo {
  height: v-bind("`${props.size * 2}rem`");
  width: auto;
}
</style>
