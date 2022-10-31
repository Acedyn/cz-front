<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import MissionCard from "../cards/MissionCard.vue";
import TypographyText from "@/components/utils/TypographyText.vue";

import type Mission from "@/types/mission";

const props = withDefaults(
  defineProps<{
    missions: Mission[];
  }>(),
  { missions: () => [] }
);

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
    v-if="props.missions.length > 0"
  >
    <slide
      v-for="(missionItem, index) in props.missions"
      :key="index"
      style="width: 24rem"
    >
      <transition name="fade" mode="out-in" appear>
        <div style="margin-top: 1.5rem" :style="`--mission-index: ${index}`">
          <MissionCard
            :flip="index % 2 == 0"
            :mission="missionItem"
            @handleLearnMore="handleLearnMore"
            class="mission-instance"
          />
        </div>
      </transition>
    </slide>
  </carousel>
  <TypographyText v-else font="Paytone One" size="big" class="failback-text"
    >Looks like there is no missions here ¯\_(ツ)_/¯</TypographyText
  >
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
  min-height: 3rem;
}

.failback-text {
  text-align: center;
}

.fade-enter-active {
  transition: 0.2s ease;
  max-height: 1000rem;

  transition-delay: calc(0.05s * var(--mission-index));
}

.fade-enter-from,
.fade-leave-to {
  transform-origin: top;
  scale: 1 0.8;
  opacity: 0;
  max-height: 2rem;
}
</style>
