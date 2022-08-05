<script setup lang="ts">
import TitleBlock from "../../../components/utils/TitleBlock.vue";

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
    title: t("arguments.two.title"),
    details: t("arguments.two.details"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
  },
  {
    title: t("arguments.three.title"),
    details: t("arguments.three.details"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
  },
];
</script>

<template>
  <div class="container">
    <TitleBlock :title="t('title.main')" maxWidth="34rem">
      <p>{{ t("title.details") }}</p>
    </TitleBlock>

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
        <TitleBlock
          quotes
          :title="argument.title"
          titleSize="regular"
          :titleLevel="3"
        >
          <p>{{ argument.details }}</p>
        </TitleBlock>
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

.argument-details::before {
  content: open-quote;
}

.argument-details::after {
  content: open-quote;
}
</style>
