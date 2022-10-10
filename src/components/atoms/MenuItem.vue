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
      <LogoImage :type="props.icon" />
    </div>

    <TypographyText
      v-if="!props.mini"
      class="menu-text"
      size="big"
      weight="bold"
      font="Poppins"
      color="var(--global-color-paragraph)"
    >
      <p>
        {{ props.text }}
      </p>
    </TypographyText>
  </div>
</template>

<style scoped>
.menu-item-container {
  display: flex;
  align-items: center;
  width: 100%;
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

.menu-item-container:hover,
.menu-icon:hover {
  cursor: pointer;
}

.menu-item-container:hover,
.active {
  background-image: v-bind("backgroundImage");
  background-size: 100% 60%;
  background-position: right;
  background-repeat: no-repeat;
}

.menu-item-container:hover .menu-icon,
.menu-icon:hover,
.active .menu-icon {
  background-image: url("/src/assets/stickers/sticker_bold.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
