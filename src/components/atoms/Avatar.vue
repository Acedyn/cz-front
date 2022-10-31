<script setup lang="ts">
import { computed } from "vue";

import type User from "@/types/user";

const props = withDefaults(
  defineProps<{
    user: User;
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    borderColor?: string;
  }>(),
  {
    borderColor: "#FFD3BA",
  }
);

const imageUrl = computed(
  () => new URL(props.user.data.image, import.meta.url).href
);
const imageSize = computed(() => {
  switch (props.size) {
    case "2xl":
      return "130px";
    case "xl":
      return "60px";
    case "lg":
      return "36px";
    case "md":
      return "30px";
    default:
      return "24px";
  }
});
</script>

<template>
  <img :src="imageUrl" alt="avatar" />
</template>

<style scoped>
img {
  height: v-bind("imageSize");
  width: v-bind("imageSize");
  border: v-bind("`3px solid ${borderColor}`");
  border-radius: 50%;
}
</style>
