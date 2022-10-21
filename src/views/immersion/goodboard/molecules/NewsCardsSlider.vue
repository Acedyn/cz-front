<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import NewsCard from "../cards/NewsCard.vue";
import { getBreakpoint, Breakpoint } from "@/utils/breakpoints";

import News from "@/types/news";
import User from "@/types/user";

const breakpoints = getBreakpoint(onMounted, onUnmounted);

const isSmallScreen = computed(() => {
  return breakpoints.value < Breakpoint.MD;
});

const itemsToShow = computed(() => {
  return isSmallScreen.value ? 1 : 2;
});

const newsCardMargin = computed(() => {
  if (isSmallScreen.value) {
    return {
      margin: "1rem 0.25rem 2rem",
    };
  }
  return {
    margin: "1rem 0.5rem",
  };
});

const newsItem = new News({
  title: "How to make news on cardboard citizen",
  description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet`,
  logo: "/src/assets/landing/profile/01.png",
  image: "/src/assets/landing/profile/02.png",
  users: [
    new User({ name: "Jake", image: "/src/assets/landing/profile/04.png" }),
  ],
  createdAt: 1665481605289,
});

const emit = defineEmits<{ (e: "handleClick", payload: News): void }>();

const handleNewsClick = (news: News) => {
  emit("handleClick", news);
};
</script>

<template>
  <div class="news-slider">
    <div class="pin-img">
      <button class="pins active" />
      <button class="pins" />
      <button class="pins" />
    </div>
    <div style="overflow: hidden">
      <carousel :items-to-show="itemsToShow" snapAlign="start">
        <template #slides>
          <slide v-for="slide in 10" :key="slide">
            <div :style="newsCardMargin">
              <NewsCard :news="newsItem" @handleClick="handleNewsClick" />
            </div>
          </slide>
        </template>
      </carousel>
    </div>
  </div>
</template>

<style scoped>
.news-slider {
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 1.5rem 2rem;
  background-image: url("/src/assets/goodboard/news_container.png");
  background-size: 100% 100%;
  overflow: hidden;
}

.pins {
  width: 120px;
  height: 40px;
  margin: 2rem 0;
  border: 0;
  background-color: transparent;
  background-image: url("/src/assets/goodboard/news_pin.png");
  background-size: 100% 100%;
  filter: saturate(0);
}

.pins.active {
  filter: saturate(1);
}

@media only screen and (max-width: 767px) {
  .news-slider {
    background-image: url("/src/assets/goodboard/news_container_small.png");
  }

  .pins {
    width: 81px;
    height: 32px;
  }
}
</style>
