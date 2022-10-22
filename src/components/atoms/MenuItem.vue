<script setup lang="ts">
import { computed } from "vue";

import LogoImage from "./LogoImage.vue";
import TypographyText from "@/components/utils/TypographyText.vue";

import type { LogoImageType } from "@/types/logoImage";

const props = withDefaults(
  defineProps<{
    icon: LogoImageType;
    text: string;
    mini?: boolean;
    active?: boolean;
  }>(),
  {
    mini: false,
    active: false,
  }
);

const backgroundImage = computed(() =>
  !props.mini ? "url('/src/assets/stickers/sticker_thin.png')" : ""
);
</script>

<template>
  <div :class="`menu-item-container ${props.active ? 'active' : ''}`">
    <div class="menu-icon">
      <LogoImage :type="props.icon" :size="1.5" />
    </div>

    <transition>
      <TypographyText
        v-if="!props.mini"
        class="menu-text"
        weight="bold"
        font="Paytone One"
        :color="props.active ? '#893a27' : 'var(--global-color-paragraph)'"
      >
        <p class="menu-text-content">
          {{ props.text }}
        </p>
      </TypographyText>
    </transition>
  </div>
</template>

<style scoped>
.menu-item-container {
  gap: 1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  transition: 0.1s;
  border-radius: 0.5rem;
}

.menu-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
}

.menu-text {
  margin-left: 0.5rem;
}

.menu-text-content {
  font-size: 1.25rem;
}

.menu-item-container:hover,
.menu-icon:hover {
  cursor: pointer;
}

.menu-item-container:hover {
  background: #ffd3ba;
}

.active {
  background: #ffd3ba;
}

.v-enter-active,
.v-leave-active {
  transition: 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
