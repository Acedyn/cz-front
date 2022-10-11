<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import NewsCard from "../cards/NewsCard.vue";

import News from "@/types/news";
import User from "@/types/user";

const newsItem = new News({
  title: "How to make news on cardboard citizen",
  description:
    `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
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

const emit = defineEmits<{ (e: "handleClick", payload: News): void}>();

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
      <carousel
        :items-to-show="2"
        snapAlign="start"
      >
        <slide v-for="slide in 10" :key="slide">
          <div style="margin-top: 1rem">
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
</style>
