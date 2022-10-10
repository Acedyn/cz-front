<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { getBreakpoint, Breakpoint } from "@/utils/breakpoints";
import { useRoute } from "vue-router";

import TypographyText from "../utils/TypographyText.vue";
import LanguagePicker from "../interaction/LanguagePicker.vue";
import MenuItem from "@/components/atoms/MenuItem.vue";

import type { LogoImageType } from "@/types/logoImage";

const props = defineProps<{
  navButtons: {
    name: string;
    click: () => void;
    soon: boolean;
    path: string;
    icon: LogoImageType;
  }[];
  show?: boolean;
}>();

const emit = defineEmits<{
  (e: "exited"): void;
}>();

const buttonClass = (path: string) => {
  return `menu-button ${
    useRoute().fullPath.includes(path) || useRoute().name === path
      ? "button-current"
      : ""
  }`;
};

const checkActive = (path: string) => {
  return useRoute().fullPath.includes(path) || useRoute().name === path;
};

const breakpoint = getBreakpoint(onMounted, onUnmounted);

const miniVariant = ref(true);
</script>

<template>
  <transition
    :name="breakpoint < Breakpoint.SM ? 'slide-mobile' : 'slide'"
    @after-leave="emit('exited')"
    @mouseenter="miniVariant = false"
    @mouseleave="miniVariant = true"
  >
    <div
      ref="topHeader"
      :class="`panel-container ${
        breakpoint < Breakpoint.SM ? 'panel-mobile' : 'panel-mini'
      }`"
      v-if="props.show"
    >
      <div class="panel-title">
        <img class="main-logo" src="@/assets/logos/brand_logo.png" />
        <TypographyText size="big" color="white" font="Poppins" weight="bold"
          ><p class="title-text" @click="props.navButtons[0].click">
            Cardboard Citizens
          </p></TypographyText
        >
      </div>

      <div class="panel-options">
        <LanguagePicker class="language-picker" />
        <!--
        <button class="signin-button">
          <span class="material-icons signin-icon"> person </span>
          <TypographyText size="big" weight="bold" font="Poppins" color=""
            ><p class="signin-text">
              {{ t("preferences.login") }}
            </p></TypographyText
          >
        </button>
      --></div>

      <nav class="menu">
        <MenuItem
          v-for="(navButton, index) in props.navButtons"
          :key="index"
          :text="navButton.name.toUpperCase()"
          :icon="navButton.icon"
          :mini="breakpoint > Breakpoint.SM && miniVariant"
          :active="checkActive(navButton.path)"
          @click="navButton.click"
        />
      </nav>
    </div>
  </transition>
</template>

<style scoped>
.panel-container {
  position: absolute;
  padding: 2rem 1.25rem;
  top: 0;
  left: 0;
  height: 100vh;
  /*background: var(--global-color-dark);*/
  background-color: #893a27;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.panel-mini:hover {
  width: 30rem;
}

.panel-mobile {
  width: 100vw;
  height: fit-content;
  min-height: 70vh;
}

.panel-mini {
  width: 120px;
}

.panel-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  align-self: center;
}

.panel-title p {
  display: none;
}

.panel-container:hover .panel-title p {
  display: block;
}

.main-logo {
  filter: invert(100%) brightness(200%);
  height: 5rem;
  object-fit: contain;
}

.title-text {
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
  transition: 0.2s;
  font-weight: inherit;
}

.title-text:hover {
  color: var(--global-color-hover);
}

.panel-options {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  justify-content: end;
}

.panel-mini .panel-options {
  justify-content: center;
}

.panel-mini:hover .panel-options {
  justify-content: end;
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

.menu {
  /*margin-top: 4rem;*/
  max-width: 55%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  margin: 0 auto;
}

/*.menu div {*/
/*  width: 100%;*/
/*}*/

.panel-mini .menu {
  align-items: center;
  align-self: center;
}

.panel-full .menu,
.panel-mini:hover .menu {
  align-items: start;
  align-self: start;
}

.menu-button {
  font-size: 2.5rem;
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

.slide-enter-active,
.slide-leave-active {
  transition: 0.2s ease-out;
  transform: translateX(0%) translateY(0%);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-mobile-enter-active,
.slide-mobile-leave-active {
  transition: 0.2s ease-out;
  transform: translateX(0%) translateY(0%);
}

.slide-mobile-enter-from,
.slide-mobile-leave-to {
  transform: translateY(-100%);
}

.language-picker {
  z-index: 1;
}

@media only screen and (min-width: 768px) {
  .panel-container {
    border-width: 0;
    border-right: 20px solid;
    border-image: url("/src/assets/header/header_border.png") 0 100%;
  }

  .menu {
    min-width: 55%;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
