<script setup lang="ts">
import OverlayPopup from "../popup/OverlayPopup.vue";
import TypographyText from "../utils/TypographyText.vue";
import LanguagePicker from "../interaction/LanguagePicker.vue";
import TopHeaderPanel from "./TopHeaderPanel.vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { getBreakpoint, Breakpoint } from "../../utils/breakpoints";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { usePreferencesStore } from "../../stores/preferences";
import { storeToRefs } from "pinia";
import router from "@/router";

import { useI18n } from "vue-i18n";
import locales from "./topHeaderLocales.json";

const { t } = useI18n({
  messages: locales,
});

const preferences = usePreferencesStore();
const { headerCollapse } = storeToRefs(preferences);

const navButtons = [
  {
    name: t("buttons.home"),
    click: () => router.push("/"),
    soon: false,
  },
  {
    name: t("buttons.world"),
    click: () => router.push("/immersion"),
    soon: false,
  },
  {
    name: t("buttons.tools"),
    click: () => router.push("/"),
    soon: true,
  },
  {
    name: t("buttons.market"),
    click: () => router.push("/marketplace"),
    soon: false,
  },
];

const showPanel = ref(false);
const breakpoint = getBreakpoint(onMounted, onUnmounted);

const buttonClass = (name: string) => {
  return `menu-button ${useRoute().name === name ? "button-current" : ""}`;
};

onBeforeRouteLeave((to) => {
  headerCollapse.value = !!to.meta.headerCollased;
});

const isCollapsed = computed(() => {
  return !headerCollapse.value && breakpoint.value > Breakpoint.SM;
});

const togglePanel = () => {
  showPanel.value = !showPanel.value;
};
</script>

<template>
  <header
    :class="`header-container ${isCollapsed ? '' : 'container-collapsed'}`"
  >
    <div class="header-left header-sides" v-if="isCollapsed">
      <div class="header-title">
        <img class="main-logo" src="@/assets/logos/brand_logo.png" />
        <TypographyText size="big" color="white" font="Poppins" weight="bold"
          ><p class="menu-button" @click="navButtons[0].click">
            Cardboard Citizens
          </p></TypographyText
        >
      </div>
      <nav class="menu">
        <button
          class="nav-button toto"
          :tooltip="navButton.soon ? 'Comming soon' : undefined"
          v-for="(navButton, index) in navButtons"
          :key="index"
          @click="navButton.click"
        >
          <TypographyText size="big" weight="bold" font="Poppins" color=""
            ><p :class="buttonClass(navButton.name.toLowerCase())">
              {{ navButton.name }}
            </p></TypographyText
          >
        </button>
      </nav>
    </div>
    <div class="header-right header-sides" v-if="isCollapsed">
      <LanguagePicker />
      <!--
      <button class="signin-button">
        <span class="material-icons signin-icon"> person </span>
        <TypographyText size="big" weight="bold" font="Poppins" color=""
          ><p class="signin-text">
            {{ t("preferences.login") }}
          </p></TypographyText
        >
      </button>
      -->
    </div>

    <div class="collaped-header" v-else>
      <button class="collapsed-button">
        <span
          class="material-icons handburger-icon"
          :style="{ fontSize: '4rem' }"
          @click="togglePanel"
          >menu</span
        >
        <img
          class="colapsed-logo"
          src="@/assets/logos/brand_logo.png"
          @click="navButtons[0].click"
        />
      </button>
    </div>

    <OverlayPopup
      :show="showPanel"
      margin="0"
      disableCloseButton
      @exit="() => (showPanel = false)"
    >
      <TopHeaderPanel :navButtons="navButtons" />
    </OverlayPopup>
  </header>
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
  color: #efd7bc;
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
