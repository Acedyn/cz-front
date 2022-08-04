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
      <img
        :src="argument.image"
        :class="`hero-image ${index % 2 === 0 ? '' : 'right-argument'}`"
      />
      <div :class="`argument-text ${index % 2 === 0 ? 'right-argument' : ''}`">
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

<style scoped>
.container {
  padding: 6.25rem 8.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.625rem;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.063rem;
  max-width: 34rem;
  text-align: center;
}

.argument {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-start: 1;
  grid-row-start: 1;
  max-height: 50vh;
  gap: 5.625rem;
}

.hero-image {
  height: 50vh;

  object-fit: contain;
  border-radius: 1.25rem;
}

.argument-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  max-width: 90%;
  text-align: center;
}

.right-argument {
  order: 1;
  justify-self: end;
}
</style>
