<script setup lang="ts">
import { computed } from "vue";
import TypographyText from "../../../components/utils/TypographyText.vue";
import TypographyDropShadow from "../../../components/utils/TypographyDropShadow.vue";
import UserStrip from "../../../components/atoms/UserStrip.vue";

import type News from "../../../types/news";

const props = withDefaults(
  defineProps<{
    news: News;
  }>(),
  {}
);

const creationDate = computed(() => {
  const date = new Date(props.news.data.createdAt);
  return date.toLocaleDateString("en");
});
</script>

<template>
  <div class="news-card-container">
    <div class="news-card-header">
      <div class="news-card-title">
        <TypographyDropShadow font="Paytone One" size="big">
          {{ props.news.data.title }}
        </TypographyDropShadow>
      </div>
      {{ creationDate }}
    </div>
    <div class="news-card-content">
      <img :src="props.news.data.image" />
      <TypographyText
        weight="light"
        color="black"
        class="news-card-description"
      >
        {{ props.news.data.description }}
      </TypographyText>
    </div>
    <div class="news-card-footer"></div>
  </div>
</template>
