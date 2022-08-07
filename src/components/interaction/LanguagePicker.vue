<script setup lang="ts">
import { usePreferencesStore } from "../../stores/preferences";
import DropDownPicker from "./DropDownPicker.vue";
import { useI18n } from "vue-i18n";

const preferences = usePreferencesStore();
const { locale } = useI18n({ useScope: "global" });

const props = defineProps<{
  color?: string;
}>();

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
    icon="language"
    :options="['en', 'es', 'fr'].map((l) => l.toUpperCase())"
    @select="selectLanguage"
    :defaultOption="preferences.language.toUpperCase()"
  />
</template>
