<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import TypographyText from "@/components/utils/TypographyText.vue";
import TypographyDropShadow from "@/components/utils/TypographyDropShadow.vue";
import Count from "@/components/atoms/Count.vue";
import UserStrip from "@/components/atoms/UserStrip.vue";
import { Breakpoint, getBreakpoint } from "@/utils/breakpoints";

import type News from "@/types/news";

const props = withDefaults(
  defineProps<{
    news: News;
    type?: "default" | "discord";
    showImage?: boolean;
    showFooter?: boolean;
    textColor?: string;
    textClip?: boolean;
    descTextSize?: string;
    isDetailCard?: boolean;
  }>(),
  {
    type: "default",
    showImage: true,
    showFooter: true,
    textClip: true,
    textColor: "var(--global-color-paragraph)",
    descTextSize: "14px",
    isDetailCard: false,
  }
);

const breakpoints = getBreakpoint(onMounted, onUnmounted);

const isSmallScreen = computed(() => {
  return breakpoints.value < Breakpoint.MD;
});

const showScrollbar = computed(() => {
  return isSmallScreen.value || !props.isDetailCard ? "none" : "block";
});

const backgroundColor = computed(() =>
  props.type === "discord" ? "#858FF5" : "#673226"
);
const borderColor = computed(() =>
  props.type === "discord" ? "#5865F2" : "#512F23"
);
const titleClampClass = computed(() => (props.textClip ? "line-clamp" : ""));
const descClampClass = computed(() =>
  props.textClip ? "line-clamp description-clamp" : ""
);

const creationDate = computed(() => {
  const date = new Date(props.news.data.createdAt);
  return date.toLocaleDateString("en");
});

const emit = defineEmits<{ (e: "handleClick", payload: News): void }>();

const handleNewsClick = (news: News) => {
  emit("handleClick", news);
};
</script>

<template>
  <div class="news-card-container" @click="handleNewsClick(props.news)">
    <div class="news-card-header">
      <div class="news-card-title">
        <img class="logo" :src="props.news.data.logo" alt="logo" />
        <TypographyDropShadow
          :class="titleClampClass"
          font="Paytone One"
          size="big"
        >
          {{ props.news.data.title }}
        </TypographyDropShadow>
      </div>
      <TypographyText font="Quicksand" weight="light" :color="props.textColor">
        {{ creationDate }}
      </TypographyText>
    </div>
    <div class="news-card-content">
      <div class="image-container">
        <img
          v-if="props.showImage"
          :src="props.news.data.image"
          alt="news image"
          style="margin: 0 auto"
        />
      </div>
      <TypographyText
        weight="light"
        font="Marvel"
        font-style="italic"
        :color="textColor"
        :style="{ overflowY: 'auto' }"
      >
        <p :class="`description ${descClampClass}`">
          {{ props.news.data.description }}
        </p>
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
::-webkit-scrollbar {
  display: v-bind("showScrollbar");
}

.news-card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: v-bind("backgroundColor");
  border: v-bind("`4px solid ${borderColor}`");
  border-radius: 0.5rem;
  padding: 2rem;
  overflow: hidden;
  /*min-width: 500px;*/
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
  text-transform: uppercase;
}

.logo {
  max-width: 48px;
  max-height: 48px;
  background-color: #d9d9d9;
  border-radius: 50%;
}

.news-card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 2;
  height: 80%;
}

.image-container {
  display: flex;
  /*justify-items: center;*/
  /*align-items: center;*/
}

.news-card-content img {
  /*max-height: 50%;*/
  max-width: 100%;
  background-color: #d9d9d9;
  border: 4px solid #ffd3ba;
  border-radius: 0.75rem;
  object-fit: cover;
}

.news-card-content div {
  flex: 1;
}

.line-clamp {
  overflow: hidden;
  display: -webkit-box;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.description-clamp {
  text-align: left;
  -webkit-line-clamp: 10;
}

.description {
  font-size: v-bind("descTextSize");
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

@media only screen and (min-width: 768px) {
  .news-card-content {
    flex-direction: row;
  }

  .news-card-content img {
    /*max-height: 200px;*/
  }
}
</style>
