<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { getBreakpoint, Breakpoint } from "../../../utils/breakpoints";
import TitleBlock from "../../../components/utils/TitleBlock.vue";

import { useI18n } from "vue-i18n";
import locales from "./goodToEarnLocales.json";

import frameOne from "/src/assets/landing/frames/frame_01.png";
import frameTwo from "/src/assets/landing/frames/frame_02.png";
import frameThree from "/src/assets/landing/frames/frame_03.png";

const { t } = useI18n({
  messages: locales,
});

const goodToEarnArguments = [
  {
    title: t("arguments.one.title"),
    details: t("arguments.one.details"),
    image: frameThree,
  },
  {
    title: t("arguments.two.title"),
    details: t("arguments.two.details"),
    image: frameTwo,
  },
  {
    title: t("arguments.three.title"),
    details: t("arguments.three.details"),
    image: frameOne,
  },
];

const breakpoint = getBreakpoint(onMounted, onUnmounted);
const frames = ref<Element[]>();

onMounted(() => {
  if (!frames.value) {
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`animation-frame`);
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove(`animation-frame`);
      }
    });
  });

  frames.value.forEach((frame) => {
    observer.observe(frame);
  });
});
</script>

<template>
  <div
    :class="`container ${breakpoint < Breakpoint.LD ? 'container-small' : ''}`"
  >
    <TitleBlock
      :title="t('title.main')"
      maxWidth="34rem"
      titleBackground="coins"
      titleColor="var(--global-color-paragraph)"
      gap="4rem"
    >
    </TitleBlock>

    <div
      :class="`argument ${
        breakpoint < Breakpoint.SM ? 'argument-small' : 'argument-large'
      }`"
      v-for="(argument, index) in goodToEarnArguments"
      :key="index"
    >
      <img
        ref="frames"
        :src="argument.image"
        :class="`hero-image ${
          index % 2 === 0 && breakpoint > Breakpoint.XS
            ? 'left-argument'
            : 'right-argument'
        } ${index % 2 === 0 ? 'left-frame' : 'right-frame'}`"
      />
      <div
        :class="`argument-text ${
          index % 2 === 0 && breakpoint > Breakpoint.XS
            ? 'right-argument'
            : 'left-argument'
        }`"
      >
        <TitleBlock
          textAlign="justify"
          :title="argument.title"
          :titleAnimation="
            index % 2 === 0 ? 'words-slide-left' : 'words-slide-right'
          "
          textAnimation="slide-up"
          titleSize="regular"
          textSize="big"
          :titleLevel="3"
          gap="1.875rem"
        >
          <p v-html="argument.details"></p>
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

.container-small {
  padding: 3.125rem 0vw;
}

.argument {
  display: grid;
  grid-column-start: 1;
  grid-row-start: 1;
}

.argument-large {
  grid-template-columns: 1fr 1fr;
}

.argument-small {
  gap: 2.313rem;
}

.image-frame {
  position: absolute;
}

.hero-image {
  width: 100%;
  object-fit: contain;
  border-radius: 1.5rem;
  filter: drop-shadow(2px 13px 15px rgba(0, 0, 0, 0.3));
  transform-origin: top;
  transition: 0.5s ease-out;
}

.left-frame {
  transform: rotate(20deg);
}

.right-frame {
  transform: rotate(-20deg);
}

.animation-frame {
  transform: rotate(0deg);
}

.argument-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  max-width: 90%;
  text-align: center;
  justify-self: center;
}

.right-argument {
  order: 1;
  justify-self: center;
}

.right-argument {
  order: 1;
  justify-self: center;
}

.argument-details::before {
  content: open-quote;
}

.argument-details::after {
  content: open-quote;
}
</style>
