<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { getBreakpoint, Breakpoint } from "../../utils/breakpoints";

import DiscoverCz from "./landingModules/DiscoverCz.vue";
import GoodToEarn from "./landingModules/GoodToEarn.vue";
import TrustUs from "./landingModules/TrustUs.vue";
import OurTeam from "./landingModules/OurTeam.vue";
import TrustNumbers from "./landingModules/TrustNumbers.vue";
import ExploreWorld from "./landingModules/ExploreWorld.vue";
import FooterSection from "./FooterSection.vue";
import SeeMore from "./SeeMore.vue";

const breakpoint = getBreakpoint(onMounted, onUnmounted);
</script>

<template>
  <div class="landing-view">
    <div class="scatter-layer" v-if="breakpoint >= Breakpoint.MD">
      <img
        src="@/assets/landing/scatter/letters.png"
        :class="`scattered-image letters-${index}`"
        v-for="index in 2"
        :key="index"
      />
      <img
        src="@/assets/landing/scatter/frame_layout_01.png"
        :class="`scattered-image frames-01-${index}`"
        v-for="index in 4"
        :key="index"
      />
    </div>
    <SeeMore />
    <div
      :class="`landing-modules ${
        breakpoint < Breakpoint.MD ? 'landing-small' : ''
      }`"
    >
      <DiscoverCz class="discover-cz module" />
      <GoodToEarn class="good-to-earn module" />
      <TrustUs class="trust-us module" />
      <OurTeam class="our-team module" />
      <TrustNumbers class="trust-numbers module" />
      <ExploreWorld class="explore-world module" />
    </div>
    <FooterSection class="footer-section" />
  </div>
</template>

<style scoped>
.landing-view {
  overflow-x: hidden;
  background-color: #512208;

  display: flex;
  flex-direction: column;
  gap: 3.125rem;
}

.landing-view:before {
  content: "";
  opacity: 0.8;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;

  background: url("@/assets/landing/background.jpg");
  background-size: 44rem;
}

.landing-view:after {
  content: "";
  opacity: 0.8;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;

  background: radial-gradient(
    closest-side,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.6)
  );
}

.landing-modules {
  z-index: 1;
  padding: 3.125rem var(--app-padding-side);
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
}

.landing-small {
  align-items: center;
}

.module {
  flex-shrink: 0;
}

.discover-cz {
  min-height: calc(100vh - 16rem);
}

.scatter-layer {
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.8;
}

.scattered-image {
  width: calc(100% * var(--app-padding-side));
  min-width: 6rem;
  height: auto;
  position: absolute;
}

.letters-1 {
  right: 0;
  transform: translate(0%, 950%) scale(1.5);
}

.letters-2 {
  left: 0;
  transform: translate(0%, 1250%) scale(1.5);
}

.frames-01-1 {
  left: 0;
  transform: translate(-55%, 80%) scale(1.3);
}

.frames-01-2 {
  right: 0;
  transform: translate(65%, 120%) scale(1.3);
}

.frames-01-3 {
  left: 0;
  transform: translate(-45%, 320%) scale(1.3) scaleX(-1);
}

.frames-01-4 {
  right: 0;
  transform: translate(50%, 460%) scale(1.1) scaleX(-1);
}

.footer-section {
  z-index: 1;
}
</style>
