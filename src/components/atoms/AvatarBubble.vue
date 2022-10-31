<script setup lang="ts">
import { computed } from "vue";

import type User from "@/types/user";
import BoxClosed from "@/assets/logos/box_closed.png";

const props = withDefaults(
  defineProps<{
    user?: User;
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    borderColor?: string;
  }>(),
  {
    borderColor: "#FFD3BA",
  }
);

const imageUrl = computed(() => {
  if (props.user?.data?.image) {
    return new URL(props.user?.data?.image, import.meta.url).href;
  }
  return BoxClosed;
});
const imageSize = computed(() => {
  switch (props.size) {
    case "2xl":
      return "8.5rem";
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
