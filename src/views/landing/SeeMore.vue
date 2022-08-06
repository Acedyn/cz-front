<script setup lang="ts">
import TypographyText from "../../components/utils/TypographyText.vue";

import { useI18n } from "vue-i18n";
import locales from "./seeMoreLocales.json";

const { t } = useI18n({
  messages: locales,
});

const scrollDown = () => {
  window.scroll({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>

<template>
  <div class="see-more" @click="scrollDown">
    <TypographyText color="var(--global-color-primary)" size="big">
      <p>{{ t("seeMore") }}</p>
    </TypographyText>
    <span class="material-icons button-icon">arrow_downward</span>
  </div>
</template>

<style scoped>
.see-more {
  z-index: 20;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--global-color-primary);
  gap: 0.5rem;
  cursor: pointer;
}

.button-icon {
  transition: 0.2s;
  text-align: center;
  font-size: 1.5rem;
}

.see-more:hover .button-icon {
  font-size: 2rem;
}
</style>
