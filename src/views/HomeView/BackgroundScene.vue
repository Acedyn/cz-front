<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import "@/components/circular-progress/circle-progress.css";
import CircleProgress from "@/components/circular-progress/CircularProgress.vue";

const totalImages = 9;
const imagesLoaded = ref<number>(0);
const getLoadingProgress = () => Math.floor((imagesLoaded.value / totalImages) * 100)

const loadImage = () => imagesLoaded.value += 1;

onBeforeMount(() => {
  document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => document.body.style.overflow = "auto");
</script>

<template>
  <div class="background-container">
    <img src="@/assets/background/scene_no_houses.png" class="full-width origin-corner" @load="loadImage" />

    <img src="@/assets/background/post_office_crop.png" class="crop-region post-office highlight" @load="loadImage" />
    <img src="@/assets/background/warehouse_crop.png" class="crop-region warehouse highlight" @load="loadImage" />
    <img src="@/assets/background/breakroom_crop.png" class="crop-region breakroom highlight" @load="loadImage" />
    <img src="@/assets/background/boutique_crop.png" class="crop-region boutique highlight" @load="loadImage" />
    <img src="@/assets/background/bill_of_lading_crop.png" class="crop-region bill-of-lading highlight"
      @load="loadImage" />
    <img src="@/assets/background/team_crop.png" class="crop-region team highlight" @load="loadImage" />
    <img src="@/assets/background/twitter_crop.png" class="crop-region twitter highlight" @load="loadImage" />
    <img src="@/assets/background/discord_crop.png" class="crop-region discord highlight" @load="loadImage" />
  </div>

  <div class="backdrop">
    <div v-if="imagesLoaded !== totalImages" style="position: absolute; top: 50%; left: 50%;">
      <circle-progress :is-gradient="true" :percent="getLoadingProgress()" :gradient="{
        angle: getLoadingProgress(),
        startColor: '#638d85',
        stopColor: '#006168'
      }" :size="80" :border-width="5" :border-bg-width="7" :showPercent="true" empty-color="#302928" />
    </div>
  </div>
</template>

<style>
/* Override background color */
body {
  --color-background: var(--vt-c-white) !important;
}
</style>

<style scoped>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;

  pointer-events: none;

  background-color: rgba(1, 1, 1, 0.8);
  opacity: v-bind("imagesLoaded === totalImages ? 0 : 1");
}

.background-container {
  --background-scale: 1;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  aspect-ratio: 16 / 9;
  min-width: calc(var(--background-scale) * 1920px);
  min-height: calc(var(--background-scale) * 1080px);
  /* height: calc(100vw / 100% * 100vh); */
  /* max-height: 113.4vh; */

  overflow: hidden;
}

@media screen and (max-width: 640px) {
  .background-container {
    --background-scale: 0.8;
  }
}

.full-width {
  width: auto;
  height: 100%;
}

.origin-corner {
  position: absolute;
  top: 0;
  left: 0;
}

.crop-region {
  position: absolute;

  width: calc((100% * var(--rect-w)) / var(--bg-width));
  height: calc((100% * var(--rect-h)) / var(--bg-height));

  left: calc((100% * var(--rect-top-left-x)) / var(--bg-width));
  top: calc((100% * var(--rect-top-left-y)) / var(--bg-height));
}

.post-office {
  --rect-top-left-x: 2339;
  --rect-top-left-y: 523;
  --rect-w: 1443;
  --rect-h: 1587;
}

.warehouse {
  --rect-top-left-x: 3869;
  --rect-top-left-y: 403;
  --rect-w: 2131;
  --rect-h: 1555;
}

.breakroom {
  --rect-top-left-x: 787;
  --rect-top-left-y: 990;
  --rect-w: 1375;
  --rect-h: 1186;
}

.boutique {
  --rect-top-left-x: 1768;
  --rect-top-left-y: 367;
  --rect-w: 542;
  --rect-h: 602;
}

.bill-of-lading {
  --rect-top-left-x: 2208;
  --rect-top-left-y: 2109;
  --rect-w: 1547;
  --rect-h: 1079;
}

.team {
  --rect-top-left-x: 4036;
  --rect-top-left-y: 1928;
  --rect-w: 1070;
  --rect-h: 932;
}

.twitter {
  --rect-top-left-x: 4482;
  --rect-top-left-y: 22;
  --rect-w: 272;
  --rect-h: 238;
}

.discord {
  --rect-top-left-x: 4203;
  --rect-top-left-y: 20;
  --rect-w: 267;
  --rect-h: 234;
}

.highlight {
  cursor: pointer;
  transition: all 0.2s ease;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.05)) brightness(0.8);
}

.highlight:hover {
  transform: scale(1.02);
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5)) brightness(1);
}
</style>