<script setup lang="ts">
import { ref, onMounted } from "vue";
import TitleBlock from "../../../components/utils/TitleBlock.vue";
import TypographyText from "../../../components/utils/TypographyText.vue";

import { useI18n } from "vue-i18n";
import locales from "./ourTeamLocales.json";

const { t } = useI18n({
  messages: locales,
});

const teamMembers = [
  {
    name: "Willie",
    description: t("willie.description"),
    image: new URL("/src/assets/landing/members/willie.jpg", import.meta.url)
      .href,
    job: t("willie.job"),
    jobIcon: "build",
  },
  {
    name: "Modsiw",
    description: t("modsiw.description"),
    image: new URL("/src/assets/landing/members/modsiw.jpg", import.meta.url)
      .href,
    job: t("modsiw.job"),
    jobIcon: "local_florist",
  },
  {
    name: "Steven",
    description: t("steven.description"),
    image: new URL("/src/assets/landing/members/steven.jpg", import.meta.url)
      .href,
    job: t("steven.job"),
    jobIcon: "palette",
  },
  {
    name: "Serge",
    description: t("serge.description"),
    image: new URL("/src/assets/landing/members/serge.jpg", import.meta.url)
      .href,
    job: t("serge.job"),
    jobIcon: "memory",
  },
];

const cardWidth = "22.5rem";
const cardAspectRatio = 1.53;

const cards = ref<Element>();

onMounted(() => {
  if (!cards.value) {
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation-card-popup");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove("animation-card-popup");
      }
    });
  });

  // Tell the observer which elements to track
  observer.observe(cards.value);
});
</script>

<template>
  <div class="container">
    <TitleBlock
      :title="t('title.main')"
      maxWidth="34rem"
      titleWordSize="3.75rem"
    >
      <p>{{ t("title.details") }}</p>
    </TitleBlock>
    <div class="members-scroll">
      <div class="member-cards" ref="cards">
        <div
          v-for="(teamMember, index) in teamMembers"
          :key="index"
          :style="`--i:${index}`"
          class="member-card"
        >
          <span class="member-image" :class="teamMember.name.toLowerCase()" />
          <div class="argument-details">
            <div class="member-name">
              <TypographyText
                color="var(--global-color-primary)"
                font="Poppins"
                weight="bold"
                size="big"
              >
                {{ teamMember.name }}
              </TypographyText>
              <span class="material-icons job-icon">
                {{ teamMember.jobIcon }}
              </span>
              <TypographyText
                color="var(--global-color-primary)"
                weight="light"
                size="big"
              >
                {{ teamMember.job }}
              </TypographyText>
            </div>
            <span class="line-separator" />
            <TypographyText color="var(--global-color-dark)">
              {{ teamMember.description }}
            </TypographyText>
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
  overflow-x: auto;
  width: 100vw;
  display: flex;
}

.member-cards {
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.625rem;
  margin-left: auto;
  margin-right: auto;
}

.member-card {
  --argument-card-width: 18.75rem;
  width: v-bind("cardWidth");
  height: v-bind("`calc(${cardWidth} * ${cardAspectRatio})`");
  background: var(--global-color-paragraph);
  box-shadow: rgb(0 0 0 / 20%) 0px 0.313rem 0.938rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.625rem 1.9rem;
  border-radius: 0.938rem;
  opacity: 0;
  row-gap: 1.063rem;

  outline: solid 0.188rem var(--global-color-primary);
  outline-offset: -0.188rem;
}

.member-image {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: v-bind("`calc(${cardWidth} * 0.92 - 4rem)`");
  border-radius: 0.625rem;
  margin-left: auto;
  margin-right: auto;
}

.argument-details {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.063rem;
  width: 100%;
  flex-grow: 1;
}

.member-name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.job-icon {
  color: var(--global-color-primary);
  margin-left: auto;
  margin-right: 0.5rem;
}

.line-separator {
  background: var(--global-color-primary);
  width: 100%;
  height: 0.118rem;
}

.follow-button {
  margin-top: auto;
}

.animation-card-popup .member-card {
  animation: words-slide-left 0.4s ease-out;
  animation-delay: calc(0.1s * var(--i));
  animation-fill-mode: forwards;
}

.modsiw {
  background-size: cover;
  background-image: url(@/assets/landing/members/modsiw.jpg);
}

.willie {
  background-image: url(@/assets/landing/members/willie.jpg);
}

.steven {
  background-image: url(@/assets/landing/members/steven.jpg);
}

.serge {
  background-image: url(@/assets/landing/members/serge.jpg);
}

@keyframes words-slide-left {
  0% {
    transform: translateX(500%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
</style>
