<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
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
    data: "6767",
    details: "NFTs Minted",
  },
  {
    data: "10M+",
    details: "Trading volume",
  },
  {
    data: "1M+",
    details: "Followers",
  },
];

const breakpoint = getBreakpoint(onMounted, onUnmounted);
</script>

<template>
  <div
    :class="`container ${
      breakpoint < Breakpoint.SM ? 'numbers-small' : 'numbers-large'
    }`"
  >
    <TypographyTitle :level="3" size="big"
      ><p class="trust-title">{{ t("title.main") }}</p></TypographyTitle
    >
    <div class="statistics">
      <div
        class="statistic"
        v-for="(statistic, index) in statistics"
        :key="index"
      >
        <TypographyTitle :level="5" size="big">{{
          statistic.data
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
  padding: 6.25rem 0;
}

.trust-title {
  font-size: 3.75rem;
}

.statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.statistic {
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 20%;
}

.numbers-small {
  grid-template-rows: 1fr 1fr;
  row-gap: 20%;
}

.numbers-large {
  grid-template-columns: 4fr 5fr;
  column-gap: 15%;
}

.stats-details {
  text-align: center;
}
</style>
