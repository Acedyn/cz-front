<script setup lang="ts">
import User from "@/types/user";
import router from "@/router";

const props = withDefaults(
  defineProps<{
    user: User;
  }>(),
  {}
);
</script>

<template>
  <div
    class="user-buble-container"
    @click="router.push('/immersion/goodboard/settings')"
  >
    <img :src="props.user.data.image" />
  </div>
</template>

<style scoped>
.user-buble-container {
  transition: 0.2s;
  cursor: pointer;
}

.user-buble-container:hover {
  scale: 1.05;
}

img {
  position: absolute;
  height: 100%;
  width: auto;
  inset: 0;
  translate: -100% 0;
}
</style>
