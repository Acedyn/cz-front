<script setup lang="ts">
import { ref, onMounted } from "vue";
import TitleBlock from "../../../components/utils/TitleBlock.vue";

import { useI18n } from "vue-i18n";
import locales from "./trustUsLocales.json";

import CoinImage from "@/assets/landing/coins/coin_values.png";

import humain from "@/assets/logos/humain.png";
import environment from "@/assets/logos/environment.png";
import innovation from "@/assets/logos/innovation.png";
import art from "@/assets/logos/art.png";

const { t } = useI18n({
  messages: locales,
});

const trustArguments = [
  {
    key: "one",
    name: "humain",
    image: humain,
  },
  {
    name: "environment",
    key: "two",
    image: environment,
  },
  {
    key: "three",
    name: "innovation",
    image: innovation,
  },
  {
    key: "four",
    name: "art",
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
      :titleBackground="CoinImage"
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
            class="argument-text"
            :title="t(`arguments.${trustArgument.key}.title`)"
            titleWordSize="2.235rem"
            titleSize="small"
            titleColor="var(--global-color-primary)"
            textSize="regular"
          >
            {{ t(`arguments.${trustArgument.key}.details`) }}
          </TitleBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 2.25rem;
  padding-bottom: 8.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.063rem;
}

.arguments-scroll {
  overflow-x: auto;
  width: 100vw;
  display: flex;
}

.argument-cards {
  display: flex;
  align-items: center;
  gap: 3rem;
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

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.063rem;
  padding: 0 1.5rem;
  border-radius: 0.938rem;
  opacity: 0;
}

.argument-icon {
  width: 25%;
  margin-top: 25%;
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
  transform: scale(2);
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
    opacity: 0;
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.argument-text {
  padding-top: 1rem;
}
</style>
