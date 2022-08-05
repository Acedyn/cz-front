<script setup lang="ts">
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

const scrollDown = () => {
  window.scroll({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>

<template>
  <div class="container">
    <div class="content">
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
            Supported by
          </TypographyText>
          <div class="social-buttons">
            <SocialButton
              social="magiceden"
              :size="0.6"
              color="var(--global-color-dark)"
              colorHover="var(--global-color-unavailable)"
            />
            <SocialButton
              social="opensea"
              :size="0.6"
              color="var(--global-color-dark)"
              colorHover="var(--global-color-unavailable)"
            />
          </div>
        </div>
      </div>
      <div class="image-container">
        <img
          src="https://dummyimage.com/780x680/ffecd6/aaa"
          class="hero-image"
        />
      </div>
    </div>
    <div class="see-more" @click="scrollDown">
      <TypographyText
        color="var(--global-color-primary)"
        font="Inter"
        size="big"
      >
        <p>See more</p>
      </TypographyText>
      <span class="material-icons button-icon">arrow_downward</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  flex-grow: 1;
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

.hero-image {
  width: 100%;
  height: 100%;

  object-fit: contain;
  border-radius: 1.25rem;
  opacity: 0.1;
}

.see-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--global-color-primary);
  gap: 0.5rem;
  cursor: pointer;
}

.button-icon {
  transition: 0.2s;
  text-align: center;
  font-size: 1.5rem;
}

.see-more:hover .button-icon {
  font-size: 2rem;
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
