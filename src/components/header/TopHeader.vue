<script setup lang="ts">
// import OverlayPopup from "../popup/OverlayPopup.vue";
// import TypographyText from "../utils/TypographyText.vue";
// import LanguagePicker from "../interaction/LanguagePicker.vue";
import TopHeaderPanel from "./TopHeaderPanel.vue";
import type { LogoImageType } from "@/types/logoImage";
import { useRoute } from "vue-router";
import { getBreakpoint, Breakpoint } from "@/utils/breakpoints";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { usePreferencesStore } from "@/stores/preferences";
import { storeToRefs } from "pinia";
import router from "@/router";
import { useI18n } from "vue-i18n";
import locales from "./topHeaderLocales.json";
const { t } = useI18n({
  messages: locales,
});
const preferences = usePreferencesStore();
const { headerCollapse } = storeToRefs(preferences);
// const showOverlay = ref(false);
const showPanel = ref(false);
const breakpoint = getBreakpoint(onMounted, onUnmounted);
const navButtons = [
  {
    name: t("buttons.home"),
    click: () => {
      router.push("/");
      showPanel.value = false;
    },
    soon: false,
    path: "home",
    icon: "home" as LogoImageType,
  },
  {
    name: t("buttons.world"),
    click: () => {
      router.push("/immersion/post-office");
      showPanel.value = false;
    },
    soon: false,
    path: "immersion/post-office",
    icon: "world" as LogoImageType,
  },
  {
    name: t("buttons.tools"),
    click: () => {},
    soon: true,
    path: "tools",
    icon: "tools" as LogoImageType,
  },
  {
    name: t("buttons.profile"),
    click: () => {
      router.push("/auth");
      showPanel.value = false;
    },
    soon: false,
    path: "auth",
    icon: "profile" as LogoImageType,
  },
  {
    name: t("buttons.goodboard"),
    click: () => {
      router.push("/immersion/goodboard");
      showPanel.value = false;
    },
    soon: false,
    path: "goodboard",
    icon: "dashboard" as LogoImageType,
  },
];
</script>

<template>
  <TopHeaderPanel :navButtons="navButtons" :show="true" />
</template>

<style scoped>
.header-container {
  width: 100%;
}
.container-collapsed {
  width: fit-content;
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
  gap: 1rem;
}
.main-logo {
  filter: invert(100%) brightness(200%);
  height: 4.5rem;
  object-fit: contain;
}
.colapsed-logo {
  padding: 0 1rem;
  filter: invert(100%) brightness(200%);
  height: 4rem;
  object-fit: contain;
}
.menu {
  min-width: 55%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
}
.nav-button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
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
.collapsed-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  font-size: 4rem;
}
.colapsed-logo {
  transition: 0.2s ease-out;
}
.colapsed-logo:hover {
  transform: scale(1.1);
}
.handburger-icon {
  transition: 0.2s;
  color: white;
}
.handburger-icon:hover {
  color: var(--global-color-hover);
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
  top: 120%;
  left: -100%;
  z-index: 50;
}
*[tooltip]:hover:before {
  transform: scale(1);
}
</style>
