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
</script>

<template>
  <NewsCard
    :news="props.news"
    :type="props.type"
    :showImage="props.showImage"
    :showFooter="props.showFooter"
    :textColor="props.textColor"
  />
  <CloseButton class="close-button" size="30px" />
</template>

<style scoped>
.close-button {
  z-index: 20;
  position: absolute;
  margin: 20px;
  top: 0;
  right: 0;
}
</style>
