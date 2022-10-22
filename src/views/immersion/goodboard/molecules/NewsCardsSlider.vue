<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import NewsCard from "../cards/NewsCard.vue";
import ProfileOne from "@/assets/landing/profile/01.png";
import ProfileTwo from "@/assets/landing/profile/02.png";
import ProfileThree from "@/assets/landing/profile/04.png";

import News from "@/types/news";
import User from "@/types/user";

const newsItem = new News({
  title: "How to make news on cardboard citizen",
  description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
  logo: ProfileOne,
  image: ProfileTwo,
  users: [
    new User({
      name: "Jake",
      image: ProfileThree,
    }),
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
      <carousel :items-to-show="2" snapAlign="start">
        <slide v-for="slide in 10" :key="slide">
          <div style="margin-top: 1rem; margin-inline: 1rem">
            <NewsCard :news="newsItem" @handleClick="handleNewsClick" />
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<style scoped>
.news-slider {
  display: flex;
  flex-direction: column;
  flex: 2;
  overflow: hidden;

  border-width: 35px;
  border-style: solid;
  border-image-source: url("/src/assets/goodboard/news_container.png");
  border-image-repeat: round;
  border-image-slice: 60 fill;
}

.pin-img {
  display: flex;
  gap: 1.5rem;
}

.pins {
  width: 9rem;
  height: 3.2rem;
  border: 0;
  background-color: transparent;
  background-image: url("/src/assets/goodboard/news_pin.png");
  background-size: 100% 100%;
  filter: saturate(0);
}

.pins.active {
  filter: saturate(1);
}
</style>
