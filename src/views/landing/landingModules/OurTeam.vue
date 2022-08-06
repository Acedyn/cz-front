<script setup lang="ts">
import TitleBlock from "../../../components/utils/TitleBlock.vue";
import TypographyText from "../../../components/utils/TypographyText.vue";
import SimpleButton from "../../../components/interaction/SimpleButton.vue";

import { useI18n } from "vue-i18n";
import locales from "./ourTeamLocales.json";

const { t } = useI18n({
  messages: locales,
});

const teamMembers = [
  {
    name: "John doe",
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
    job: t("johndoe.job"),
  },
  {
    name: "John doe",
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
    job: t("johndoe.job"),
  },
  {
    name: "John doe",
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
    job: t("johndoe.job"),
  },
  {
    name: "John doe",
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
    job: t("johndoe.job"),
  },
];

const cardWidth = "10.625rem";
const cardAspectRatio = 1.8;
</script>

<template>
  <div class="container">
    <TitleBlock :title="t('title.main')" maxWidth="34rem">
      <p>{{ t("title.details") }}</p>
    </TitleBlock>
    <div class="members-scroll">
      <div class="member-cards">
        <div
          v-for="(teamMember, index) in teamMembers"
          :key="index"
          class="member-card"
        >
          <div class="member-image"></div>
          <div class="argument-details">
            <TypographyText color="var(--global-color-primary)" weight="bold">
              {{ teamMember.name }}
            </TypographyText>
            <TypographyText color="var(--global-color-disable)">
              {{ teamMember.job }}
            </TypographyText>
            <SimpleButton color="var(--global-color-primary)" textSize="small"
              >Follow</SimpleButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.063rem;
}

.members-scroll {
  overflow-x: scroll;
  width: 100vw;
  display: flex;
}

.member-cards {
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-left: auto;
  margin-right: auto;
}

.member-card {
  --argument-card-width: 18.75rem;
  width: v-bind("cardWidth");
  height: v-bind("`calc(${cardWidth} * ${cardAspectRatio})`");
  background: var(--global-color-paragraph);
  outline: solid 0.4rem var(--global-color-primary);
  outline-offset: -0.4rem;

  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 1.225rem;
}

.member-image {
  width: 100%;
  height: v-bind("`calc(${cardWidth} - 4rem`");
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
}

.argument-details {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
</style>
