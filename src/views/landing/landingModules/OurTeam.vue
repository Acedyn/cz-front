<script setup lang="ts">
import { ref, onMounted } from "vue";
import TitleBlock from "../../../components/utils/TitleBlock.vue";
import TypographyText from "../../../components/utils/TypographyText.vue";

import willie from "@/assets/landing/members/willie.jpg";
import modsiw from "@/assets/landing/members/modsiw.jpg";
import steven from "@/assets/landing/members/steven.jpg";
import serge from "@/assets/landing/members/serge.jpg";

import { useI18n } from "vue-i18n";
import locales from "./ourTeamLocales.json";

import CoinImage from "@/assets/landing/coins/coin_team.png";

const { t } = useI18n({
  messages: locales,
});

const teamMembers = [
  {
    name: "Willie",
    key: "willie",
    image: willie,
    jobIcon: "build",
  },
  {
    name: "Modsiw",
    key: "modsiw",
    image: modsiw,
    jobIcon: "local_florist",
  },
  {
    name: "Steven",
    key: "steven",
    image: steven,
    jobIcon: "palette",
  },
  {
    name: "Serge",
    key: "serge",
    image: serge,
    jobIcon: "memory",
  },
];

const cardWidth = "22.5rem";
const cardAspectRatio = 425 / 332;

const cards = ref<Element>();
const scroll = ref<Element>();

onMounted(() => {
  if (!cards.value || !scroll.value) {
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation-card-popup");
        entry.target.classList.add("scroll-animated");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove("animation-card-popup");
        entry.target.classList.remove("scroll-animated");
      }
    });
  });

  // Tell the observer which elements to track
  observer.observe(cards.value);
  observer.observe(scroll.value);
});
</script>

<template>
  <div class="container">
    <TitleBlock
      :title="t('title.main')"
      :titleBackground="CoinImage"
      maxWidth="34rem"
      titleBackground="coins"
      titleColor="var(--global-color-paragraph)"
      titleWordSize="3.75rem"
    >
    </TitleBlock>
    <div class="members-scroll" ref="scroll">
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
                color="var(--global-color-paragraph)"
                weight="light"
                size="big"
              >
                {{ t(`${teamMember.key}.job`) }}
              </TypographyText>
            </div>
            <span class="line-separator" />
            <TypographyText color="var(--global-color-paragraph)">
              {{ t(`${teamMember.key}.description`) }}
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
  gap: 7.063rem;
}

.members-scroll {
  overflow-x: auto;
  width: 100vw;
  display: flex;
}

.scroll-animated {
  animation: hide-scroll calc(0.4s + 0.1s * 4);
}

@keyframes hide-scroll {
  from,
  to {
    overflow: visible;
  }
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
  height: v-bind("`calc(${cardWidth} * ${cardAspectRatio} * 1.1)`");
  filter: drop-shadow(0px 0.313rem 0.938rem rgb(0 0 0 / 20%));
  background-image: url(@/assets/landing/members/card.png);
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 4.5rem;
  border-radius: 0.938rem;
  opacity: 0;
  row-gap: 2.063rem;
}

.member-image {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: v-bind("`calc(${cardWidth} * 0.8 - 4.5rem)`");
  border-radius: 0.125rem;
  margin-left: auto;
  margin-right: auto;
}

.argument-details {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.3rem;
  width: 100%;
  flex-grow: 1;
}

.member-name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.job-icon {
  color: var(--global-color-paragraph);
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
</style>
