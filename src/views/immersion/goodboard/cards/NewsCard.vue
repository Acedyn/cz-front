<script setup lang="ts">
import { computed } from "vue";
import TypographyText from "@/components/utils/TypographyText.vue";
import TypographyDropShadow from "@/components/utils/TypographyDropShadow.vue";
import Count from "@/components/atoms/Count.vue";
import UserStrip from "@/components/atoms/UserStrip.vue";

import type News from "../../../../types/news";

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

const backgroundColor = computed(() =>
  props.type === "discord" ? "#858FF5" : "#673226"
);
const borderColor = computed(() =>
  props.type === "discord" ? "#5865F2" : "#512F23"
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
        <img class="logo" :src="props.news.data.logo" alt="logo" />
        <TypographyDropShadow font="Paytone One" size="big">
          {{ props.news.data.title }}
        </TypographyDropShadow>
      </div>
      <TypographyText font="Quicksand" weight="light" :color="props.textColor">
        {{ creationDate }}
      </TypographyText>
    </div>
    <div class="news-card-content">
      <img
        v-if="props.showImage"
        :src="props.news.data.image"
        alt="news image"
      />
      <TypographyText
        weight="light"
        class="news-card-description"
        font="Marvel"
        font-style="italic"
        :color="textColor"
      >
        {{ props.news.data.description }}
      </TypographyText>
    </div>
    <div v-if="props.showFooter" class="news-card-footer">
      <UserStrip :users="props.news.data.users" />
      <div class="count">
        <Count
          :count="1"
          singular="comment"
          plural="comments"
          :text-color="props.textColor"
        />
        <Count
          :count="10"
          singular="like"
          plural="likes"
          :text-color="props.textColor"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-card-container {
  background-color: v-bind("backgroundColor");
  border: v-bind("`4px solid ${borderColor}`");
  border-radius: 0.5rem;
  padding: 2rem;
}

.news-card-header {
  text-align: right;
}

.news-card-header:last-child {
  margin: 1rem 0;
}

.news-card-title {
  display: flex;
  text-align: left;
  justify-content: start;
  align-items: center;
  gap: 1rem;
}

.logo {
  display: block;
  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;
  background-color: #d9d9d9;
  border-radius: 50%;
}

.news-card-content {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.news-card-content img {
  width: 50%;
  background-color: #d9d9d9;
  border: 4px solid #ffd3ba;
  border-radius: 0.75rem;
  object-fit: cover;
}

.news-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.count {
  display: flex;
  gap: 1rem;
}

@media screen and (max-width: 700px) {
  .news-card-content {
    flex-direction: column;
  }
  .news-card-content img {
    width: 100%;
    max-height: 150px;
  }
}
</style>
