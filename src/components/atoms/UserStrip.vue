<script setup lang="ts">
import type User from "../../types/user";

const props = withDefaults(
  defineProps<{
    users: User[];
    size?: number;
  }>(),
  {
    size: 1,
  }
);
</script>

<template>
  <div class="user-strip-container">
    <img
      v-for="(user, index) in props.users"
      :key="index"
      :src="user.data.image"
      class="user-strip-image"
      :style="`--user-index: ${index}`"
    />
  </div>
</template>

<style>
.user-strip-image {
  height: v-bind("`${2.25 * props.size}rem`");
  width: v-bind("`${2.25 * props.size}rem`");
  object-fit: cover;
  border-radius: 100%;
  overflow: hidden;
  translate: calc(-30% * var(--user-index));

  border: solid 0.2rem var(--global-color-unavailable);
}
</style>
