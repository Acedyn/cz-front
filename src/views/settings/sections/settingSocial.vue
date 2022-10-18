<script setup lang="ts">
import { reactive } from "vue";
import TypographyText from "../../../components/utils/TypographyText.vue";
import SocialMediaButton from "../../../components/interaction/SocialMediaButton.vue";
import IconClose from "../../../components/icons/iconClose.vue";
import IconLink from "../../../components/icons/iconLink.vue";

const socialMediaBtn = reactive({
  facebook: "Facebook",
  discord: "Discord",
  google: "Google",
  twitter: "Twitter",
});

const activeSocialAccount = reactive({
  account: ["Facebook", "Discord", "Google", "Twitter"],
});
</script>

<template>
  <div class="flex-container setting-social-container">
    <div class="flex-container account-container">
      <TypographyText
        class="flex-container"
        font="Quicksand"
        weight="bold"
        color="var(--global-color-typography)"
      >
        <p>
          <IconLink size="1.5rem" Link your social medias />
          Link you social medias
        </p>
      </TypographyText>
      <div class="button-grid-container">
        <p v-for="btn in activeSocialAccount.account" :key="btn">
          <IconClose size="1.5rem" />
          My {{ btn }}
        </p>
      </div>
    </div>
    <div class="button-grid-container buttons">
      <SocialMediaButton v-for="(v, k) in socialMediaBtn" :key="k" :type="k"
        >{{ v }} Sign-in
      </SocialMediaButton>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  gap: 1rem;
}

.flex-container > p {
  align-items: center;
}

.setting-social-container {
  flex-direction: column;
}

.account-container {
  justify-content: space-between;
}

.button-grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
}

.button-grid-container p {
  display: flex;
  gap: 1rem;
  align-content: center;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  color: var(--global-color-typography);
}

@media screen and (max-width: 767px) {
  .flex-container {
    flex-direction: column;
  }
  .button-grid-container.buttons {
    grid-template-columns: 1fr;
  }
}
</style>
