<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
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
</script>

<template>
  <div class="container">
    <div class="details">
      <div class="main-text">
        <TypographyTitle size="big" :level="1" :spacing="1.2">
          {{ t("mainText.discover") }}
        </TypographyTitle>
        <TypographyText :spacing="1.2">
          <p>{{ t("mainText.detailsOne") }}</p>
        </TypographyText>
        <TypographyText :spacing="1.2">
          <p>{{ t("mainText.detailsTwo") }}</p>
        </TypographyText>
        <TypographyText :spacing="1.2">
          <p>{{ t("mainText.detailsThree") }}</p>
        </TypographyText>
      </div>
      <div class="cta-buttons">
        <CtaButton icon="public" @click="() => router.push('/immersion')"
          >World</CtaButton
        >
        <CtaButton icon="handyman" invert>Tools</CtaButton>
      </div>
      <div class="trust">
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
      <img src="https://dummyimage.com/780x680/ffecd6/aaa" class="hero-image" />
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

.image-container {
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  max-height: 70vh;

  object-fit: contain;
  border-radius: 1.25rem;
  opacity: 0.1;
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
</style>
