<script setup lang="ts">
import TypographyTitle from "../../../components/utils/TypographyTitle.vue";
import TypographyText from "../../../components/utils/TypographyText.vue";
import CtaButton from "../../../components/interaction/CtaButton.vue";
import router from "@/router";

import { useI18n } from "vue-i18n";
import locales from "./discoverCzLocales.json";

const { t } = useI18n({
  messages: locales,
});
</script>

<template>
  <div class="discover-container">
    <div class="discover-content">
      <div class="discover-details">
        <div class="main-text">
          <TypographyTitle size="big" :level="1">{{
            t("mainText.discover")
          }}</TypographyTitle>
          <TypographyText
            ><p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              egestas proin integer sollicitudin tincidunt tellus. Leo quis
              cursus euismod b Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p></TypographyText
          >
        </div>
        <div class="cta-buttons">
          <CtaButton icon="public" @click="() => router.push('/immersion')"
            >World</CtaButton
          >
          <CtaButton icon="handyman" invert>Tools</CtaButton>
        </div>
        <div class="trust">
          <TypographyText>Supported by</TypographyText>
        </div>
      </div>
      <div class="image-container">
        <img
          src="https://dummyimage.com/780x680/ffecd6/aaa"
          class="hero-image"
        />
      </div>
    </div>
    <div class="see-more">
      <TypographyText><p>See more</p></TypographyText>
      <span class="material-icons button-icon">arrow_downward</span>
    </div>
  </div>
</template>

<style scoped>
.discover-container {
  max-height: 20vh;
  display: flex;
  flex-direction: column;
}

.discover-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  flex-grow: 1;
}

.discover-details {
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 70%;
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
}

.see-more {
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.button-icon {
  text-align: center;
}
</style>
