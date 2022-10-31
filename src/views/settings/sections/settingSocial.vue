<script setup lang="ts">
import { reactive } from "vue";
import TypographyText from "../../../components/utils/TypographyText.vue";
import SocialMediaButton from "../../../components/interaction/SocialMediaButton.vue";
import IconCheckedSolid from "../../../components/icons/iconCheckedSolid.vue";
import IconClose from "../../../components/icons/iconClose.vue";
import IconLink from "../../../components/icons/iconLink.vue";
import { WalletMultiButton, useWallet } from "solana-wallets-vue";
import { useAuthStore } from "@/stores/auth";

const oauthUrl = `${import.meta.env.VITE_OAUTH_API}`;
const authStore = useAuthStore();
const { connected } = useWallet();

const socialMediaBtn = reactive({
  discord: "Discord",
  twitter: "Twitter",
});

const activeSocialAccount = reactive({
  account: { Discord: false, Twitter: false, Wallet: connected },
});

const linkSocial = (social: string) => {
  window.open(
    `${oauthUrl}/auth/${social}/callback?id=${authStore.user.data.id}`,
    "_blank"
  );
};
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
        <p
          v-for="(active, social) in activeSocialAccount.account"
          :key="social"
        >
          <IconCheckedSolid size="1.5rem" v-if="active" />
          <IconClose size="1.5rem" v-else />
          My {{ social }}
        </p>
      </div>
    </div>
    <div class="button-grid-container buttons">
      <SocialMediaButton
        v-for="(v, k) in socialMediaBtn"
        :key="k"
        :type="k"
        @click="() => linkSocial(k)"
        >{{ v }}
      </SocialMediaButton>
      <wallet-multi-button dark></wallet-multi-button>
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

<style>
.swv-dark > button {
  height: 58px;
  width: 100%;
  font-family: Poppins, serif;
  border-radius: 8px;
  font-size: 1.375rem;
  display: flex;
  justify-content: center;
}

.swv-dark > .swv-dropdown > button {
  height: 58px;
  width: 100%;
  font-family: Poppins, serif;
  border-radius: 8px;
  font-size: 1.375rem;
  display: flex;
  justify-content: center;
}

.swv-dark > .swv-dropdown {
  width: 100%;
}
</style>
