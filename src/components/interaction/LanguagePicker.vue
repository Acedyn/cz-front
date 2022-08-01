<script setup lang="ts">
import { usePreferencesStore } from "../../stores/preferences";
import DropDownPicker from "./DropDownPicker.vue";
import { useI18n } from "vue-i18n";

const preferences = usePreferencesStore();
const { locale } = useI18n({ useScope: "global" });

const selectLanguage = (language: string) => {
  if (!["en", "es", "fr"].includes(language)) {
    return;
  }
  preferences.setLanguage(language as "en" | "es" | "fr", locale);
};
</script>

<template>
  <DropDownPicker :options="['en', 'es', 'fr']" @select="selectLanguage" />
</template>
