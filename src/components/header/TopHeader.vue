<script setup lang="ts">
import TypographyText from "../utils/TypographyText.vue";
import LanguagePicker from "../interaction/LanguagePicker.vue";
import CtaButton from "../interaction/CtaButton.vue";
import { useRoute } from "vue-router";

import { useI18n } from "vue-i18n";
import locales from "./topHeaderLocales.json";

const { t } = useI18n({
  messages: locales,
});

const buttonClass = (name: string) => {
  return `menu-button ${useRoute().name === name ? "button-current" : ""}`;
};
</script>

<template>
  <header class="header-container">
    <div class="header-left header-sides">
      <div class="logo">
        <TypographyText size="big" color="white" font="Poppins" weight="bold"
          >Cardboard Citizens</TypographyText
        >
      </div>
      <nav class="menu">
        <TypographyText size="big" weight="bold" font="Poppins" color=""
          ><p :class="buttonClass('home')">
            {{ t("buttons.home") }}
          </p></TypographyText
        >
        <TypographyText size="big" weight="bold" font="Poppins" color="inerit"
          ><p :class="buttonClass('immersion')">
            {{ t("buttons.world") }}
          </p></TypographyText
        >
        <TypographyText size="big" weight="bold" font="Poppins" color=""
          ><p :class="buttonClass('tools')">
            {{ t("buttons.tools") }}
          </p></TypographyText
        >
        <TypographyText size="big" weight="bold" font="Poppins" color=""
          ><p :class="buttonClass('market')">
            {{ t("buttons.market") }}
          </p></TypographyText
        >
      </nav>
    </div>
    <div class="header-right header-sides">
      <LanguagePicker />
      <CtaButton icon="person" color="transparent">
        <TypographyText size="big" weight="bold" font="Poppins" color=""
          ><p class="signin-button">
            {{ t("preferences.login") }}
          </p></TypographyText
        >
      </CtaButton>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  width: 100%;
}

.header-container,
.header-sides {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 7.5rem;
  gap: 1rem;
  justify-content: space-between;
}

.header-sides {
  border-bottom: 0.079rem solid rgba(255, 255, 255, 0.8);
}

.header-left {
  min-width: 50%;
}

.menu {
  min-width: 60%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
}

.menu-button {
  cursor: pointer;
  color: white;
  transition: 0.2s;
  font-weight: inherit;
}

.menu-button:hover {
  color: var(--global-color-hover);
}

.button-current {
  color: var(--global-color-primary);
}

.signin-button {
  color: white;
  font-weight: inherit;
}
</style>
