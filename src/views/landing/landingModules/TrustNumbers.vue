<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { getBreakpoint, Breakpoint } from "../../../utils/breakpoints";

import TypographyTitle from "../../../components/utils/TypographyTitle.vue";
import TypographyText from "../../../components/utils/TypographyText.vue";

import { useI18n } from "vue-i18n";
import locales from "./trustNumbersLocales.json";

const { t } = useI18n({
  messages: locales,
});

const statistics = [
  {
    value: 0,
    end: 6767,
    suffix: "",
    data: ref("0"),
    details: "NFTs",
  },
  {
    value: 0,
    end: 80,
    suffix: "K+",
    data: ref("0K+"),
    details: "Trading volume (SOL)",
  },
  {
    value: 0,
    end: 40,
    suffix: "K",
    data: ref("0K"),
    details: "Followers",
  },
];

const breakpoint = getBreakpoint(onMounted, onUnmounted);

const counter = (stat: any, index: number) => {
  stat.value = 0;
  const duration = 800 + 200 * index; // Animate all counters equally for a better UX

  const start = stat.value;
  const end = stat.end;
  if (start === end) return; // If equal values, stop here.

  const range = end - start; // Get the range
  let curr = start; // Set current at start position
  const startTime = new Date();

  const loop = () => {
    const currentTime = new Date();
    let raf = currentTime.getTime() - startTime.getTime();
    if (raf > duration) raf = duration; // Stop the loop
    const frac = raf / duration; // Get the time fraction
    const step = frac * range; // Calculate the value step
    curr = start + step; // Increment or Decrement current value
    stat.data.value = Math.floor(curr).toString() + stat.suffix;
    if (raf < duration) requestAnimationFrame(loop); // Loop
  };

  requestAnimationFrame(loop); // Start the loop!
};

const stats = ref<Element>();

onMounted(() => {
  if (!stats.value) {
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statistics.forEach(counter);
      }
    });
  });

  observer.observe(stats.value);
});
</script>

<template>
  <div
    :class="`container ${
      breakpoint < Breakpoint.SM ? 'numbers-small' : 'numbers-large'
    }`"
  >
    <TypographyTitle :level="3" size="big" class="trust-title"
      ><p class="trust-title">{{ t("title.main") }}</p></TypographyTitle
    >
    <div class="statistics" ref="stats">
      <div
        class="statistic"
        v-for="(statistic, index) in statistics"
        :key="index"
      >
        <TypographyTitle :level="5" size="big">{{
          `${statistic.data.value}`
        }}</TypographyTitle>
        <TypographyText class="stats-details">{{
          statistic.details
        }}</TypographyText>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  padding-top: 6.25rem;
  padding-bottom: 2.25rem;
}

.trust-title {
  display: flex;
  align-items: center;
  font-size: 3.75rem;
  align-self: start;
}

.statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.statistic {
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 20%;
  margin-right: auto;
  margin-left: auto;
}

.numbers-small {
  grid-template-rows: 1fr 1fr;
  row-gap: 20%;
}

.numbers-large {
  grid-template-columns: 5fr 5fr;
  column-gap: 15%;
}

.stats-details {
  text-align: center;
}
</style>
