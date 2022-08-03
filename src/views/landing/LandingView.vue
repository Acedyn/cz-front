<script setup lang="ts">
import { useI18n } from "vue-i18n";
import locales from "./landingLocales.json";
import TypographyText from "@/components/utils/TypographyText.vue";

const { t } = useI18n({
  messages: locales,
});
</script>

<template>
  <TypographyText>
    <p>{{ t("hello") }}</p>
  </TypographyText>
</template>
