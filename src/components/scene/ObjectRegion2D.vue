<script setup lang="ts">
import { usePreferencesStore } from "@/stores/preferences";

const props = defineProps<{
  top: number;
  left: number;
  width: number;
  height: number;

  name: string;
  root: string;

  disabled?: boolean;
}>();

const preferences = usePreferencesStore();

let objectImageBase = `/${props.root}/${props.name}`;
if (preferences.theme.includes("dark")) {
  objectImageBase += "_dark";
}

const objectImage = {
  default: new URL(`${objectImageBase}.jpeg`, import.meta.url).href,
  hover: new URL(`${objectImageBase}_hover.jpeg`, import.meta.url).href,
};
</script>

<template></template>
