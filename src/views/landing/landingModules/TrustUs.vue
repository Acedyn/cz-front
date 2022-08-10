<script setup lang="ts">
import { ref, onMounted } from "vue";
import TitleBlock from "../../../components/utils/TitleBlock.vue";

import { useI18n } from "vue-i18n";
import locales from "./trustUsLocales.json";

import humain from "@/assets/logos/humain.png";
import environment from "@/assets/logos/environment.png";
import innovation from "@/assets/logos/innovation.png";
import art from "@/assets/logos/art.png";

const { t } = useI18n({
  messages: locales,
});

const trustArguments = [
  {
    title: t("arguments.one.title"),
    name: "humain",
    details: t("arguments.one.details"),
    image: humain,
  },
  {
    title: t("arguments.two.title"),
    name: "environment",
    details: t("arguments.two.details"),
    image: environment,
  },
  {
    title: t("arguments.three.title"),
    name: "innovation",
    details: t("arguments.three.details"),
    image: innovation,
  },
  {
    title: t("arguments.four.title"),
    name: "art",
    details: t("arguments.four.details"),
    image: art,
  },
];

const cardWidth = "18.75rem";
const cardAspectRatio = 1.2;

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
      titleBackground="coins"
      titleColor="var(--global-color-paragraph)"
      titleWordSize="3.75rem"
    >
    </TitleBlock>
    <div class="arguments-scroll">
      <div class="argument-cards" ref="cards">
        <div
          v-for="(trustArgument, index) in trustArguments"
          :key="index"
          :style="`--i:${index}`"
          class="argument-card"
        >
          <div class="argument-icon">
            <img
              :src="trustArgument.image"
              :class="`argument-image ${trustArgument.name}`"
            />
          </div>
          <TitleBlock
            :title="trustArgument.title"
            titleWordSize="1.235rem"
            titleSize="small"
            titleColor="var(--global-color-primary)"
            textSize="regular"
          >
            {{ trustArgument.details }}
          </TitleBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 6.25rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.063rem;
}

.arguments-scroll {
  overflow-x: auto;
  width: 100vw;
  display: flex;
}

.argument-cards {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2rem;
  margin-left: auto;
  margin-right: auto;
  height: v-bind("`calc(${cardWidth} * ${cardAspectRatio} * 1.1)`");
}

.argument-card {
  --argument-card-width: 18.75rem;
  min-width: v-bind("cardWidth");
  width: v-bind("cardWidth");
  height: v-bind("`calc(${cardWidth} * ${cardAspectRatio})`");
  background: rgba(0, 0, 0, 0.1);
  border: solid 0.3rem var(--global-color-primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.063rem;
  justify-content: center;
  padding: 0 1.5rem;
  border-radius: 0.938rem;
  opacity: 0;
}

.argument-icon {
  width: 25%;
  height: v-bind("`calc((${cardWidth} - 3rem) * 0.25`");
  margin-left: auto;
  margin-right: auto;
}

.argument-image {
  opacity: 0.8;
  transform: scale(1.5);
  width: 100%;
  height: 100%;
}

.humain,
.art {
  transform: scale(2);
}

.innovation {
  transform: scale(2.5);
}

.important-footer {
  color: var(--global-color-primary);
  padding: 0 0.5rem;
  text-decoration: none;
}

.animation-card-popup .argument-card {
  animation: card-slide-left 0.4s ease-out;
  animation-delay: calc(0.1s * var(--i));
  animation-fill-mode: forwards;
}

@keyframes card-slide-left {
  0% {
    transform: scale(0.6);
    box-shadow: rgb(0 0 0 / 60%) 0px 0.15rem 0.6rem;
    opacity: 0;
  }
  70% {
    transform: scale(1.1);
    box-shadow: rgb(0 0 0 / 15%) 0px 0.4rem 1.2rem;
  }
  100% {
    transform: scale(1);
    box-shadow: rgb(0 0 0 / 20%) 0px 0.313rem 0.938rem;
    opacity: 1;
  }
}
</style>
