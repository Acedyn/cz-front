<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { getBreakpoint, Breakpoint } from "../../utils/breakpoints";
import TypographyText from "../utils/TypographyText.vue";
import LanguagePicker from "../interaction/LanguagePicker.vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  navButtons: {
    name: string;
    click: () => void;
    soon: boolean;
    path: string;
  }[];
  show?: boolean;
}>();

const emit = defineEmits<{
  (e: "exited"): void;
}>();

const buttonClass = (path: string) => {
  console.log(useRoute().fullPath);
  return `menu-button ${
    useRoute().fullPath.includes(path) ? "button-current" : ""
  }`;
};

const breakpoint = getBreakpoint(onMounted, onUnmounted);
</script>

<template>
  <transition
    :name="breakpoint < Breakpoint.SM ? 'slide-mobile' : 'slide'"
    @after-leave="emit('exited')"
  >
    <div
      :class="`panel-container ${
        breakpoint < Breakpoint.SM ? 'panel-mobile' : ''
      }`"
      v-if="props.show"
    >
      <div class="panel-title">
        <img class="main-logo" src="@/assets/logos/brand_logo.png" />
        <TypographyText size="big" color="white" font="Poppins" weight="bold"
          ><p class="title-text">Cardboard Citizens</p></TypographyText
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
        <TypographyText
          size="big"
          weight="bold"
          font="Poppins"
          color=""
          v-for="(navButton, index) in props.navButtons"
          @click="navButton.click"
          :key="index"
          ><p :class="buttonClass(navButton.path)">
            {{ navButton.name }}
          </p></TypographyText
        >
      </nav>
    </div>
  </transition>
</template>

<style scoped>
.panel-container {
  position: absolute;
  padding: 2rem;
  top: 0;
  left: 0;
  width: 30rem;
  height: 100vh;
  background: var(--global-color-dark);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.panel-mobile {
  width: 100vw;
  height: fit-content;
  min-height: 70vh;
}

.panel-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  align-self: center;
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
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
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
</style>
