<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { getBreakpoint, Breakpoint } from "../../utils/breakpoints";
import TypographyTitle from "../../components/utils/TypographyTitle.vue";
import TypographyText from "../../components/utils/TypographyText.vue";
import SocialButton from "../../components/interaction/SocialButton.vue";

import { useI18n } from "vue-i18n";
import locales from "./footerSectionLocales.json";

const { t } = useI18n({
  messages: locales,
});

const breakpoint = getBreakpoint(onMounted, onUnmounted);
</script>

<template>
  <div class="container">
    <div
      :class="`content ${
        breakpoint < Breakpoint.SM
          ? 'footer-content-small'
          : 'footer-content-large'
      }`"
    >
      <div class="infos">
        <div class="infos-text">
          <TypographyTitle color="white">Cardboard Citizens</TypographyTitle>
          <TypographyText size="small"
            ><p class="disclamer">{{ t("infos.text") }}</p></TypographyText
          >
        </div>
        <div class="infos-socials">
          <SocialButton social="discord" :size="0.4" fill="#39221dbd" />
          <SocialButton social="twitter" :size="0.4" fill="#39221dbd" />
          <SocialButton social="instagram" :size="0.4" fill="#39221dbd" />
          <SocialButton social="youtube" :size="0.4" fill="#39221dbd" />
        </div>
      </div>
      <div class="navigation">
        <RouterLink to="/" style="text-decoration: none" class="current-route">
          <TypographyText>Home</TypographyText>
        </RouterLink>
        <RouterLink to="/immersion" style="text-decoration: none">
          <TypographyText color="white">World</TypographyText>
        </RouterLink>
        <RouterLink to="/" style="text-decoration: none">
          <TypographyText color="white">Tools</TypographyText>
        </RouterLink>
        <RouterLink to="/marketplace" style="text-decoration: none">
          <TypographyText color="white">Marketplace</TypographyText>
        </RouterLink>
      </div>
      <div class="join">
        <TypographyText weight="light">{{ t("join.title") }}</TypographyText>
        <TypographyText size="small" weight="light">
          <a
            href="mailto:cardboardctz@gmail.com"
            style="text-decoration: underline"
            >cardboardctz@gmail.com</a
          >
        </TypographyText>
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
  padding: 0 var(--app-padding-side);
  background: #39221dbd;
  min-height: 25rem;
  width: 100%;

  display: grid;
  grid-template-rows: 1fr 4rem;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 3rem 0;
  gap: 11rem;
}

.footer-content-small {
  flex-direction: column;
  gap: 2.876rem;
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
  width: 100%;
  border-top: solid 0.02rem white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.disclamer {
  padding: 1rem 0;
}
</style>
