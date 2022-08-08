<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { getBreakpoint, Breakpoint } from "../../utils/breakpoints";

import DiscoverCz from "./landingModules/DiscoverCz.vue";
import GoodToEarn from "./landingModules/GoodToEarn.vue";
import TrustUs from "./landingModules/TrustUs.vue";
import OurTeam from "./landingModules/OurTeam.vue";
import TrustNumbers from "./landingModules/TrustNumbers.vue";
import FooterSection from "./FooterSection.vue";
import SeeMore from "./SeeMore.vue";

const breakpoint = getBreakpoint(onMounted, onUnmounted);
</script>

<template>
  <div class="landing-view">
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
    </div>
    <FooterSection />
  </div>
</template>

<style scoped>
.landing-view {
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

.landing-modules {
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
</style>
