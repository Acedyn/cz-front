<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import "@/components/circular-progress/circle-progress.css";
import CircleProgress from "@/components/circular-progress/CircularProgress.vue";
import ImageRegion from "./ImageRegion.vue";

const onMobile = window.mobileAndTabletCheck();
const totalImages = onMobile ? 1 : 14;
const imagesLoaded = ref<number>(0);
const getLoadingProgress = () => Math.floor((imagesLoaded.value / totalImages) * 100)

const loadImage = () => {
  if (imagesLoaded.value !== totalImages) {
    imagesLoaded.value += 1;
  }
}

onBeforeMount(() => {
  document.body.style.overflow = 'hidden';
});

onBeforeUnmount(() => document.body.style.overflow = "auto");
</script>

<template>
  <div v-if="onMobile">
    <img src="@/assets/background/smartphone_brackground.jpg" class="smartphone-background fade-in" @load="loadImage" />
  </div>

  <div v-else>
    <div class="background-container">
      <img src="@/assets/background/scene_no_houses.jpg" class="full-width background origin-corner fade-in"
        @load="loadImage" />

      <ImageRegion name="post_office" :onImageLoaded="loadImage" :close="true" />
      <ImageRegion name="warehouse" :onImageLoaded="loadImage" :close="true" />

      <ImageRegion name="breakroom" :onImageLoaded="loadImage" :close="true" :soon="true" />
      <ImageRegion name="boutique" :onImageLoaded="loadImage" :soon="true" />

      <ImageRegion name="bill_of_lading" :onImageLoaded="loadImage" :close="true" to="/bill-of-lading" />

      <ImageRegion name="team" :onImageLoaded="loadImage" to="/team" :close="true" />

      <ImageRegion name="discord" :onImageLoaded="loadImage" />
      <ImageRegion name="twitter" :onImageLoaded="loadImage" />
    </div>
  </div>

  <div class="backdrop">
    <div>
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

  /* Resolution in pixels of background image */
  --bg-width: 3840;
  --bg-height: 2159;
}
</style>

<style scoped>
.smartphone-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 100vh;
  width: auto;
}

.background {
  animation: fadeIn 0.2s;
}

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

.post_office {
  --rect-top-left-x: 1495;
  --rect-top-left-y: 334;
  --rect-w: 926;
  --rect-h: 1016;
}

.warehouse {
  --rect-top-left-x: 2475;
  --rect-top-left-y: 257;
  --rect-w: 1365;
  --rect-h: 995;
}

.breakroom {
  --rect-top-left-x: 504;
  --rect-top-left-y: 632;
  --rect-w: 882;
  --rect-h: 763;
}

.boutique {
  --rect-top-left-x: 1131;
  --rect-top-left-y: 235;
  --rect-w: 346;
  --rect-h: 386;
}

.bill_of_lading {
  --rect-top-left-x: 1412;
  --rect-top-left-y: 1351;
  --rect-w: 989;
  --rect-h: 691;
}

.team {
  --rect-top-left-x: 2582;
  --rect-top-left-y: 1234;
  --rect-w: 687;
  --rect-h: 593;
}

.twitter {
  --rect-top-left-x: 2174;
  --rect-top-left-y: 256;
  --rect-w: 172;
  --rect-h: 149;
}

.discord {
  --rect-top-left-x: 1995;
  --rect-top-left-y: 253;
  --rect-w: 171;
  --rect-h: 151;
}


.highlight {
  cursor: pointer;
  transition: all 0.2s ease;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.05)) brightness(0.9);
}

.soon {
  transition: all 0.2s ease;
  filter: brightness(0.7);
}

.soon:hover {
  filter: brightness(0.5);
}

.highlight:hover {
  transform: scale(1.02);
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5)) brightness(1.05);
}
</style>