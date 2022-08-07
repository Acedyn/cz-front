<script setup lang="ts">
import { usePreferencesStore } from "@/stores/preferences";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const preferences = usePreferencesStore();
const { theme } = storeToRefs(preferences);
const transition = computed(() =>
  theme.value.includes("dark") ? "fade-dark" : "fade"
);
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition :name="transition">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-dark-enter-active,
.fade-dark-leave-active {
  transition: 1s ease;
  filter: brightness(1);
}

.fade-dark-enter-from,
.fade-dark-leave-to {
  filter: brightness(0);
  opacity: 0.7;
}
</style>
