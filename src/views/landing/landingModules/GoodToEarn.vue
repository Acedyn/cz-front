<script setup lang="ts">
import TypographyTitle from "../../../components/utils/TypographyTitle.vue";
import TypographyText from "../../../components/utils/TypographyText.vue";

import { useI18n } from "vue-i18n";
import locales from "./goodToEarnLocales.json";

const { t } = useI18n({
  messages: locales,
});

const goodToEarnArguments = [
  {
    title: t("arguments.one.title"),
    details: t("arguments.one.details"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
  },
  {
    title: t("arguments.one.title"),
    details: t("arguments.one.details"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
  },
  {
    title: t("arguments.one.title"),
    details: t("arguments.one.details"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
  },
  {
    title: t("arguments.one.title"),
    details: t("arguments.one.details"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
  },
];
</script>

<template>
  <div class="container">
    <div class="title">
      <TypographyTitle size="big" :level="2">
        {{ t("title.main") }}
      </TypographyTitle>
      <TypographyText>
        <p>{{ t("title.details") }}</p>
      </TypographyText>
    </div>

    <div
      class="argument"
      v-for="(argument, index) in goodToEarnArguments"
      :key="index"
    >
      <div class="image-container">
        <img :src="argument.image" class="hero-image" />
      </div>
      <div class="argument-text">
        <TypographyTitle size="regular" :level="3">
          {{ argument.title }}
        </TypographyTitle>
        <TypographyText>
          <p>{{ argument.details }}</p>
        </TypographyText>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
