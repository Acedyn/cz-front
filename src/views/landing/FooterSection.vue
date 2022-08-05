<script setup lang="ts">
import TypographyTitle from "../../components/utils/TypographyTitle.vue";
import TypographyText from "../../components/utils/TypographyText.vue";
import LanguagePicker from "../../components/interaction/LanguagePicker.vue";
import SocialButton from "../../components/interaction/SocialButton.vue";

import { useI18n } from "vue-i18n";
import locales from "./footerSectionLocales.json";

const { t } = useI18n({
  messages: locales,
});
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="infos">
        <div class="infos-text">
          <TypographyTitle color="white">Cardboard Citizens</TypographyTitle>
          <TypographyText>{{ t("infos.text") }}</TypographyText>
        </div>
        <div class="infos-socials">
          <SocialButton social="discord" :size="0.4" />
          <SocialButton social="twitter" :size="0.4" />
          <SocialButton social="instagram" :size="0.4" />
          <SocialButton social="youtube" :size="0.4" />
        </div>
      </div>
      <div class="navigation">
        <RouterLink to="/" style="text-decoration: none" class="current-route">
          <TypographyText>Home</TypographyText>
        </RouterLink>
        <RouterLink to="/immersion" style="text-decoration: none">
          <TypographyText color="white">World</TypographyText>
        </RouterLink>
        <RouterLink to="/tools" style="text-decoration: none">
          <TypographyText color="white">Tools</TypographyText>
        </RouterLink>
        <RouterLink to="/dashboard" style="text-decoration: none">
          <TypographyText color="white">Dashboard</TypographyText>
        </RouterLink>
        <LanguagePicker />
      </div>
      <div class="join">
        <TypographyText weight="light">{{ t("join.title") }}</TypographyText>
        <TypographyText size="small">{{ t("join.text") }}</TypographyText>
      </div>
    </div>
    <div class="copyright">
      <TypographyText size="small">
        Copyright @ Cardboard Citizens 2022
      </TypographyText>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: var(--global-color-primary);
  min-height: 25rem;
  width: 100%;

  display: grid;
  grid-template-rows: 1fr 4rem;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: row;
  padding: 3rem 5.313rem;
  gap: 11rem;
}

.infos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.infos-text {
  display: flex;
  flex-direction: column;
  gap: 0.563rem;
}

.infos-socials {
  display: flex;
  flex-direction: row;
  gap: 0.563rem;
}

.navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none;
}

.join {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.copyright {
  border-top: solid 0.02rem white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5.313rem;
}
</style>
