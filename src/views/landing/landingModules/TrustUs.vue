<script setup lang="ts">
import { ref, onMounted } from "vue";
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
    image: new URL("/src/assets/logos/rocket.png", import.meta.url).href,
  },
  {
    title: t("arguments.one.title"),
    details: t("arguments.one.details"),
    image: new URL("/src/assets/logos/user.png", import.meta.url).href,
  },
  {
    title: t("arguments.one.title"),
    details: t("arguments.one.details"),
    image: new URL("/src/assets/logos/planet.png", import.meta.url).href,
  },
  {
    title: t("arguments.one.title"),
    details: t("arguments.one.details"),
    image: new URL("/src/assets/logos/art.png", import.meta.url).href,
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
      console.log(entry);
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
    <TitleBlock :title="t('title.main')" maxWidth="34rem">
      <p>{{ t("title.details") }}</p>
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
            <img :src="trustArgument.image" class="argument-image" />
          </div>
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
    </div>
    <TypographyText size="big">
      <p>
        Community of +40.000<a
          href="https://magiceden.io/marketplace/cardboard_citizens"
          class="important-footer"
          >Cardboard Citizens</a
        >
      </p>
    </TypographyText>
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
  background: var(--global-color-primary);

  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  padding: 2rem;
  border-radius: 2rem;
  opacity: 0;
}

.argument-icon {
  width: 25%;
  height: v-bind("`calc((${cardWidth} - 4rem) * 0.25`");
  margin-left: auto;
  margin-right: auto;
}

.argument-image {
  filter: invert(100%);
  opacity: 0.8;
  width: 100%;
  height: 100%;
}

.important-footer {
  color: var(--global-color-primary);
  padding: 0 0.5rem;
  text-decoration: none;
}

.animation-card-popup .argument-card {
  animation: words-slide-left 0.4s ease-out;
  animation-delay: calc(0.1s * var(--i));
  animation-fill-mode: forwards;
}

@keyframes words-slide-left {
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
