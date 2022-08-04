<script setup lang="ts">
import TitleBlock from "../../../components/utils/TitleBlock.vue";
import TypographyText from "../../../components/utils/TypographyText.vue";

import { useI18n } from "vue-i18n";
import locales from "./trustUsLocales.json";

const { t } = useI18n({
  messages: locales,
});

const trustArguments = [
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

const cardWidth = "18.75rem";
const cardAspectRatio = 1.2;
</script>

<template>
  <div class="container">
    <TitleBlock :title="t('title.main')" maxWidth="34rem">
      <p>{{ t("title.details") }}</p>
    </TitleBlock>
    <div class="argument-cards">
      <div
        v-for="(trustArgument, index) in trustArguments"
        :key="index"
        class="argument-card"
      >
        <div class="argument-icon"></div>
        <div class="argument-details">
          <TitleBlock
            :title="trustArgument.title"
            titleSize="small"
            titleColor="rgba(0, 0, 0, 0.2)"
            textSize="small"
          >
            {{ trustArgument.details }}
          </TitleBlock>
        </div>
      </div>
    </div>
    <TypographyText>
      <p>
        Community of +40.000<b class="important-footer">Cardboard Citizens</b>
      </p>
    </TypographyText>
  </div>
</template>

<style scoped>
.container {
  padding: 6.25rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.063rem;
}

.argument-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.argument-card {
  --argument-card-width: 18.75rem;
  min-width: v-bind("cardWidth");
  min-height: v-bind("`calc(${cardWidth} * ${cardAspectRatio})`");
  background: var(--global-color-primary);

  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  padding: 2rem;
  border-radius: 0.375rem;
}

.argument-icon {
  width: 25%;
  height: v-bind("`calc((${cardWidth} - 4rem) * 0.25`");
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
}

.important-footer {
  color: var(--global-color-primary);
  padding: 0 0.5rem;
}
</style>
