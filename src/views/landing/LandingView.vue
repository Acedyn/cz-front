<script setup lang="ts">
import DiscoverCz from "./landingModules/DiscoverCz.vue";
import GoodToEarn from "./landingModules/GoodToEarn.vue";
import TrustUs from "./landingModules/TrustUs.vue";
import OurTeam from "./landingModules/OurTeam.vue";
import TrustNumbers from "./landingModules/TrustNumbers.vue";
</script>

<template>
  <div class="landing-view">
    <DiscoverCz class="discover-cz module" />
    <GoodToEarn class="good-to-earn module" />
    <TrustUs class="trust-us module" />
    <OurTeam class="our-team module" />
    <TrustNumbers class="trust-numbers module" />
  </div>
</template>

<style scoped>
.landing-view {
  padding: 3.125rem 5.313rem;
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
  background-size: 30vw;
}

.module {
  flex-shrink: 0;
}

.discover-cz {
  height: calc(95vh - 3.125rem);
}
</style>
