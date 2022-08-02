<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { WalletMultiButton } from "solana-wallets-vue";
import { useWallet } from "solana-wallets-vue";

import CitizenCarousel from "./CitizenCarousel.vue";
import { getOwnedCitizens } from "../../../legacy/utils/fetchNfts";
import { preloadImages } from "../../../utils/loader";
import type { Citizen } from "../../../legacy/types/citizen";

const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);
const citizens = ref<Citizen[]>([]);
const wallet = useWallet();

const fetchCitizens = async () => {
  isLoading.value = true;
  try {
    citizens.value = await getOwnedCitizens();
  } catch (e) {
    console.log(e);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};

onBeforeMount(async () => {
  fetchCitizens();

  const imagesRootURL = "src/assets/immersion/warehouse";
  preloadImages([
    new URL(`/${imagesRootURL}/story_display.png`, import.meta.url).href,
    new URL(`/${imagesRootURL}/holder_base.png`, import.meta.url).href,
    new URL(`/${imagesRootURL}/holder_background.png`, import.meta.url).href,
    new URL(`/${imagesRootURL}/inventory_closed.png`, import.meta.url).href,
    new URL(`/${imagesRootURL}/inventory_open.png`, import.meta.url).href,
  ]);
});
</script>

<template>
  <div class="warehouse-container">
    <div class="header band" />
    <div class="banner band" />
    <CitizenCarousel :citizens="citizens" v-if="citizens.length > 0" />
    <div class="carousel-fallback" v-else>
      <template v-if="isError">
        <h4 class="fallback-text">
          An error occured while fetching your citizens
        </h4>
        <p class="fallback-text">
          This issue might come from the solana network, you can retry in a few
          minutes
        </p>
        <span class="cz-icon" />
      </template>
      <template v-else-if="!wallet.connected.value">
        <h4 :style="{ margin: '2vh 0vh' }" class="fallback-text">
          Connect your wallet to start commiting your story
        </h4>
        <h4 class="fallback-text">Commit closed</h4>
      </template>
      <template v-else-if="isLoading">
        <h4 class="fallback-text">Fetching your citizens</h4>
        <img class="anim-loading" src="@/assets/animation/loading_anim.gif" />
      </template>
      <h4 v-else>No cardboard citizens fount</h4>
    </div>

    <div class="button wallet">
      <wallet-multi-button dark></wallet-multi-button>
    </div>
  </div>
</template>

<style scoped>
.warehouse-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.band {
  position: absolute;
  background-size: auto 100%;
  background-repeat-x: repeat;
  background-repeat-y: no-repeat;
  background-position-y: center;
}

.banner {
  top: 170px;
  bottom: 40px;
  left: 0px;
  right: 0px;
  margin: 5vh 0%;

  background-image: url(@/assets/immersion/warehouse/center_band.jpg);
}

.header {
  top: 0px;
  left: 0px;
  right: 0px;
  height: 150px;

  background-image: url(@/assets/immersion/warehouse/header.jpg);
}

.button {
  position: absolute;
  margin: 25px;
  z-index: 1;
  left: 0px;
  top: 120px;
}

.carousel-fallback {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fallback-text {
  z-index: 1;

  text-align: center;
  color: #efd7bc;
  font-family: BlockHeadFace;
  text-transform: uppercase;
  font-size: var(--text-medium);
  font-weight: light;
}

.carousel-fallback > h4 {
  font-size: var(--text-large);
  font-weight: lighter;
}

.cz-icon {
  height: 200px;
  width: 200px;
  background-image: url(@/assets/logos/brand_logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(200%);
}

.anim-loading {
  height: 30%;
  width: auto;
  z-index: 1;
}
</style>
