<script setup lang="ts">
import NewsCard from "./NewsCard.vue";
import CloseButton from "@/components/interaction/CloseButton.vue";

import type News from "@/types/news";

const props = withDefaults(
  defineProps<{
    news: News;
    type: "default" | "discord";
    showImage: boolean;
    showFooter: boolean;
    textColor: string;
  }>(),
  {
    type: "default",
    showImage: true,
    showFooter: true,
    textColor: "var(--global-color-paragraph)",
  }
);

const emit = defineEmits<{(e: "handleClose"): void }>()

const handleClose = () => emit("handleClose");
</script>

<template>
  <NewsCard
    :news="props.news"
    :type="props.type"
    :showImage="props.showImage"
    :showFooter="props.showFooter"
    :textColor="props.textColor"
    :textClip="false"
  />
  <CloseButton class="close-button" size="30px" @click="handleClose" />
</template>

<style scoped>
.close-button {
  z-index: 20;
  position: absolute;
  margin: 2.5%;
  top: 0;
  right: 0;
}
</style>
