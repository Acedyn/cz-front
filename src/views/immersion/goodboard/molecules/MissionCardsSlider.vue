<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import MissionCard from "../cards/MissionCard.vue";

import Mission from "@/types/mission";

const missionItem = new Mission({
  name: "Cardboard Citizen News On Web",
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
  >
    <slide v-for="slide in 10" :key="slide">
      <div style="margin-top: 1rem">
        <MissionCard
          :mission="missionItem"
          @handleLearnMore="handleLearnMore"
        />
      </div>
    </slide>
  </carousel>
</template>

<style scoped></style>
