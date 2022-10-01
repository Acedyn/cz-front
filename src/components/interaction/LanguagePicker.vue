<script setup lang="ts">
import { usePreferencesStore } from "../../stores/preferences";
import DropDownPicker from "./DropDownPicker.vue";
import { useI18n } from "vue-i18n";

const preferences = usePreferencesStore();
const { locale } = useI18n({ useScope: "global" });

const props = withDefaults(
  defineProps<{
    color?: string;
    colorHover?: string;
  }>(),
  {
    color: "var(--global-color-primary)",
    colorHover: "var(--global-color-hover)",
  }
);

const selectLanguage = (language: string) => {
  language = language.toLowerCase();
  if (!["en", "es", "fr"].includes(language)) {
    return;
  }
  preferences.setLanguage(language as "en" | "es" | "fr", locale);
};
</script>

<template>
  <DropDownPicker
    :color="props.color"
    :colorHover="props.colorHoover"
    icon="language"
    :options="['en', 'es', 'fr'].map((l) => l.toUpperCase())"
    @select="selectLanguage"
    :defaultOption="preferences.language.toUpperCase()"
  />
</template>
