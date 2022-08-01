<script setup lang="ts">
import { useI18n } from "vue-i18n";
import locales from "./landingLocales.json";

const { t } = useI18n({
  messages: locales,
});
</script>
<template>{{ t("hello") }}</template>
