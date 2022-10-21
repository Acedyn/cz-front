<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import MissionCard from "../cards/MissionCard.vue";

import Mission from "@/types/mission";

const missionItem = new Mission({
  name: "NEW RAID",
  shortDescription:
    "To complete the mission blabla until you do the twitter thingy and yaba bado ubdub",
  longDescription:
    "To complete the mission blabla until you do the twitter thingy and yaba bado ubdub To complete the mission blabla until you do the twitter thingy and yaba bado ubdub .....To complete the mission blabla until you do the twitter thingy and yaba bado ubdub To complete the mission blabla until you do the twitter thingy and yaba bado ubdub To complete the mission blabla until you do the twitter thingy and yaba bado ubdub .....To complete the mission blabla until you do the twitter thingy and yaba bado ubdub .....To complete the mission blabla until you do the twitter thingy and yaba bado ubdub To complete the mission blabla until you do the twitter thingy and yaba bado ubdub .....To complete the mission blabla until you do the twitter thingy and yaba bado ubdub .....",
  category: "twitter",
  image: "/src/assets/landing/profile/01.png",
  logo: "",
  class: "",
  reward: 20,
  canceled: false,
  initialized: true,
});

const emit = defineEmits<{
  (e: "handleLearnMore", payload: Mission): void;
}>();

const handleLearnMore = (mission: Mission) => {
  emit("handleLearnMore", mission);
};
</script>

<template>
  <carousel
    :items-to-show="1"
    :breakpoints="{ 700: { itemsToShow: 2 }, 1024: { itemsToShow: 4 } }"
    class="carousel-wrapper"
  >
    <slide v-for="slide in 10" :key="slide" style="width: 24rem">
      <div style="margin-top: 1.5rem">
        <MissionCard
          :flip="slide % 2 == 0"
          :mission="missionItem"
          @handleLearnMore="handleLearnMore"
          class="mission-instance"
        />
      </div>
    </slide>
  </carousel>
</template>

<style scoped>
.mission-instance {
  height: 20rem;
  margin: 0 1rem;
}
</style>

<style>
.carousel-wrapper > .carousel__viewport {
  overflow: inherit;
}
</style>
