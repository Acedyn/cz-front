<script setup lang="ts">
import DiscoverCz from "./landingModules/DiscoverCz.vue";
import GoodToEarn from "./landingModules/GoodToEarn.vue";
</script>

<template>
  <div class="landing-view">
    <DiscoverCz class="discover-cz module" />
    <GoodToEarn class="good-to-earn module" />
  </div>
</template>

<style scoped>
.landing-view {
  padding: 0 5.313rem;
  background-color: #3e200f;

  display: flex;
  flex-direction: column;
  gap: 3.125rem;
}

.landing-view:before {
  content: "";
  opacity: 0.2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;

  background: url("@/assets/landing/background.jpg");
  background-size: 50vw;
}

.module {
  flex-shrink: 0;
}

.discover-cz {
  height: 95vh;
}
</style>
