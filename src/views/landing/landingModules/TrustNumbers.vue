<script setup lang="ts">
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
</script>

<template>
  <div class="container">
    <TypographyTitle :level="3" size="big">{{
      t("title.main")
    }}</TypographyTitle>
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
  grid-template-columns: 4fr 5fr;
  column-gap: 15%;
  padding: 6.25rem 0;
}

.statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.statistic {
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 20%;
}

.stats-details {
  text-align: center;
}
</style>
