<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { preloadImages } from "../../../utils/loader";
import { getBreakpoint, Breakpoint } from "../../../utils/breakpoints";
import TypographyTitle from "../../../components/utils/TypographyTitle.vue";
import TypographyText from "../../../components/utils/TypographyText.vue";
import CtaButton from "../../../components/interaction/CtaButton.vue";
import SocialButton from "../../../components/interaction/SocialButton.vue";
import router from "@/router";

import { useI18n } from "vue-i18n";
import locales from "./discoverCzLocales.json";

const { t } = useI18n({
  messages: locales,
});

const socialButtons = ["solana", "magiceden", "opensea"];
const breakpoint = getBreakpoint(onMounted, onUnmounted);
const slideIndex = ref(0);

const images = ["01", "02", "03", "04", "05", "06", "07", "08"].map((name) => {
  return new URL(`/src/assets/landing/profile/${name}.png`, import.meta.url);
});

const nextSlide = () => {
  slideIndex.value = (slideIndex.value + 1) % images.length;
  setTimeout(nextSlide, 1000 * 3);
};

onMounted(() => {
  preloadImages(images.map((image) => image.href));
  nextSlide();
});
</script>

<template>
  <div class="container">
    <div
      :class="`details ${breakpoint <= Breakpoint.SM ? 'details-mobile' : ''}`"
    >
      <div class="main-text">
        <TypographyTitle size="big" :level="1" :spacing="1.2">
          {{ t("mainText.discover") }}
        </TypographyTitle>

        <div class="image-container" v-if="breakpoint <= Breakpoint.SM">
          <img src="@/assets/landing/frame.png" class="slider-frame" />

          <div class="paint-container">
            <transition name="slide">
              <img
                :src="
                  images[(slideIndex + (slideIndex % 2)) % images.length].href
                "
                class="hero-image"
                v-if="slideIndex % 2 == 0"
              />
              <img
                :src="
                  images[(slideIndex + (slideIndex % 2) + 1) % images.length]
                    .href
                "
                class="hero-image"
                v-else-if="slideIndex % 2 == 1"
              />
            </transition>
          </div>
        </div>
        <TypographyText :spacing="1.2" size="big">
          <p v-html="t('mainText.detailsOne')"></p>
        </TypographyText>
      </div>
      <div
        :class="`cta-buttons ${
          breakpoint <= Breakpoint.SM ? 'button-row-small' : ''
        }`"
      >
        <CtaButton icon="public" @click="() => router.push('/immersion')"
          >World</CtaButton
        >
        <CtaButton icon="handyman" invert tooltip="Coming soon"
          >Tools</CtaButton
        >
      </div>
      <div
        :class="`trust ${
          breakpoint <= Breakpoint.SM ? 'button-row-small' : ''
        }`"
      >
        <TypographyText
          color="var(--global-color-primary)"
          size="big"
          weight="bold"
        >
          Powered by
        </TypographyText>
        <div class="social-buttons">
          <SocialButton
            invert
            :social="socialButton as 'solana'"
            :size="0.6"
            colorHover="var(--global-color-unavailable)"
            v-for="(socialButton, index) in socialButtons"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="image-container" v-if="breakpoint > Breakpoint.SM">
      <img src="@/assets/landing/frame.png" class="slider-frame" />

      <div class="paint-container">
        <transition name="slide">
          <img
            :src="images[(slideIndex + (slideIndex % 2)) % images.length].href"
            class="hero-image"
            v-if="slideIndex % 2 == 0"
          />
          <img
            :src="
              images[(slideIndex + (slideIndex % 2) + 1) % images.length].href
            "
            class="hero-image"
            v-else
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
}

.details {
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.details-mobile {
  max-width: 100%;
  text-align: center;
}

.main-text {
  display: flex;
  flex-direction: column;
  gap: 1.313rem;
  max-width: 40.25rem;
}

.cta-buttons {
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
}

.button-row-small {
  justify-content: center;
}

.slider-frame {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  filter: drop-shadow(2px 13px 15px rgba(0, 0, 0, 0.3));
}

.image-container {
  border-radius: 1.25rem;
  height: 45rem;
  width: 45rem;
  max-height: min(70vh, 50vw);
  max-width: 50vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}

.paint-container {
  overflow: hidden;
  width: 85%;
  height: 90%;
  position: relative;
}

.hero-image {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.trust {
  display: flex;
  flex-direction: row;
  gap: 2.875rem;
  align-items: center;
}

.social-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.5s ease;
}

.slide-enter-from {
  transform: translate(100%);
}
.slide-leave-to {
  transform: translate(-100%);
}

*[tooltip]:before {
  content: attr(tooltip);
  transform: scale(0);
  transition: transform ease-out 100ms;
  background-color: #000;
  color: #fff;
  right: 100%;
  position: absolute;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);

  background: var(--global-color-dark);
  font-weight: bolder;
  color: white;
  font-family: Poppins;
  font-size: 1rem;
  width: 10rem;
  text-align: center;
  left: 120%;
  z-index: 50;
}
*[tooltip]:hover:before {
  transform: scale(1);
}
</style>
