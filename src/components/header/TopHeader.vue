<script setup lang="ts">
import TypographyText from "../utils/TypographyText.vue";
import LanguagePicker from "../interaction/LanguagePicker.vue";
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
      <div class="header-title">
        <img class="main-logo" src="@/assets/logos/brand_logo.png" />
        <TypographyText size="big" color="white" font="Poppins" weight="bold"
          ><p class="menu-button">Cardboard Citizens</p></TypographyText
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
      <button class="signin-button">
        <span class="material-icons signin-icon"> person </span>
        <TypographyText size="big" weight="bold" font="Poppins" color=""
          ><p class="signin-text">
            {{ t("preferences.login") }}
          </p></TypographyText
        >
      </button>
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
  height: 7.8rem;
  gap: 1rem;
  justify-content: space-between;
}

.header-sides {
  border-bottom: 0.079rem solid rgba(255, 255, 255, 0.8);
}

.header-left {
  min-width: 50%;
}

.header-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.main-logo {
  filter: brightness(80%);
  height: 5rem;
  object-fit: contain;
}

.menu {
  min-width: 55%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
}

.menu-button {
  font-size: 1.118rem;
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
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  padding: 0.344rem 0.782rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.2s;
  gap: 0.688rem;
}

.signin-button:hover {
  background: var(--global-color-hover);
}

.signin-text {
  color: white;
  font-weight: inherit;
  font-size: 1.118rem;
}

.signin-icon {
  color: var(--global-color-primary);
  font-size: 2rem;
}
</style>
