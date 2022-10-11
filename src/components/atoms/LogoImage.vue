<script setup lang="ts">
import { computed } from "vue";
import type { LogoImageType } from "@/types/logoImage";

const props = withDefaults(
  defineProps<{
    type: LogoImageType;
    size?: number;
  }>(),
  {
    size: 1,
  }
);

const imageUrl = computed(
  () => new URL(`/src/assets/logos/${props.type}.png`, import.meta.url).href
);
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
