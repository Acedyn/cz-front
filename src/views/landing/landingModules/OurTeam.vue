<script setup lang="ts">
import { ref, onMounted } from "vue";
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
    tag: t("johndoe.tag"),
    description: t("johndoe.description"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
    job: t("johndoe.job"),
    jobIcon: "palette",
  },
  {
    name: "John doe",
    tag: t("johndoe.tag"),
    description: t("johndoe.description"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
    job: t("johndoe.job"),
    jobIcon: "palette",
  },
  {
    name: "John doe",
    tag: t("johndoe.tag"),
    description: t("johndoe.description"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
    job: t("johndoe.job"),
    jobIcon: "palette",
  },
  {
    name: "John doe",
    tag: t("johndoe.tag"),
    description: t("johndoe.description"),
    image: "https://dummyimage.com/650x540/ffecd6/aaa",
    job: t("johndoe.job"),
    jobIcon: "palette",
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
          <div class="member-image">
            <div class="member-tag">
              <TypographyText
                color="white"
                font="Poppins"
                weight="bold"
                size="regular"
              >
                {{ teamMember.tag }}
              </TypographyText>
            </div>
          </div>
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
            <TypographyText color="var(--global-color-disable)">
              {{ teamMember.description }}
            </TypographyText>
            <SimpleButton
              color="var(--global-color-primary)"
              textSize="big"
              class="follow-button"
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
  width: 100%;
  height: v-bind("`calc(${cardWidth} * 0.92 - 4rem)`");
  background: rgba(226, 156, 116, 0.35);
  border-radius: 0.625rem;
  margin-left: auto;
  margin-right: auto;
}

.member-tag {
  border-radius: 0.1rem;
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  width: fit-content;
  padding: 0.2rem 1rem;
  background: var(--global-color-primary);
}

.argument-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
