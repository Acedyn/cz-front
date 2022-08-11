<script setup lang="ts">
import ImageRegion2D from "@/components/scene/ImageRegion2D.vue";
import DetailsRegion from "@/components/scene/DetailsRegion.vue";
import Scene2D from "@/components/scene/Scene2D.vue";
import OverlayPopup from "@/components/popup/OverlayPopup.vue";
import { YoutubeVue3 } from "youtube-vue3";
import { useI18n } from "vue-i18n";

import { usePreferencesStore } from "@/stores/preferences";
import { ref } from "vue";
import router from "@/router";
import locales from "./postOfficeLocales.json";

const preferences = usePreferencesStore();
const hightlightConfig = {
  dark: {
    visited: "#ffffff54",
    new: "#86f1ff",
  },
  light: {
    visited: "black",
    new: "#86f1ff",
  },
};

const openLink = (url: string) => {
  window.open(url, "_blank");
};

const isTvVisibile = ref(false);
const tvVideoSize = ref<number[]>([
  window.innerWidth * 0.8,
  window.innerHeight * 0.6,
]);
const youtubeVideoID = "aPLlCBuKmFE";
const toggleTV = () => {
  isTvVisibile.value = !isTvVisibile.value;
};

const { t } = useI18n({
  messages: locales,
});
</script>

<template>
  <Scene2D
    name="post_office"
    :highlight="hightlightConfig"
    :noAutoScrolling="isTvVisibile"
  >
    <template #elements="{ sceneConfig }">
      <ImageRegion2D
        name="tv"
        :config="sceneConfig"
        :top="64.89"
        :left="24.47"
        :width="7.03"
        :height="13.98"
        noHoverBackground
        @click="toggleTV"
        class="front-element"
        ><template #hover><span /></template
      ></ImageRegion2D>

      <ImageRegion2D
        name="lightmode"
        :config="sceneConfig"
        :top="11.71"
        :left="47.63"
        :width="4.45"
        :height="6.99"
        noHoverImage
        noHoverBackground
        class="front-element"
        @click="preferences.toggleTheme"
        ><template #hover><span /></template
      ></ImageRegion2D>

      <ImageRegion2D
        name="discord"
        :config="sceneConfig"
        :top="11.71"
        :left="51.95"
        :width="4.45"
        :height="6.99"
        noHoverImage
        noHoverBackground
        class="front-element"
        @click="() => openLink('http://discord.gg/cardboardcz')"
        ><template #hover><span /></template
      ></ImageRegion2D>

      <ImageRegion2D
        name="twitter"
        :config="sceneConfig"
        :top="11.85"
        :left="56.61"
        :width="4.47"
        :height="6.9"
        noHoverImage
        noHoverBackground
        class="front-element"
        @click="() => openLink('https://twitter.com/CardboardCtzNFT')"
        ><template #hover><span /></template
      ></ImageRegion2D>

      <ImageRegion2D
        name="post_office"
        :config="sceneConfig"
        :top="15.47"
        :left="38.93"
        :width="24.11"
        :height="47.05"
        @click="() => router.push('/')"
        ><template #hover>
          <DetailsRegion
            icon="local_post_office"
            title="Post Office"
            :description="t('sections.post_office.description')"
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="team"
        :config="sceneConfig"
        :top="57.15"
        :left="67.23"
        :width="17.89"
        :height="27.46"
        disabled
        ><template #hover>
          <DetailsRegion
            title="Team"
            icon="groups"
            disabled
            noButton
            :description="t('sections.team.description')"
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="bill_of_lading"
        :config="sceneConfig"
        :top="62.57"
        :left="36.77"
        :width="25.75"
        :height="32.0"
        @click="() => router.push('/immersion/bill-of-lading')"
        ><template #hover>
          <DetailsRegion
            title="Bill of Lading"
            icon="local_library"
            :description="t('sections.bill_of_lading.description')"
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="warehouse"
        :config="sceneConfig"
        :top="11.9"
        :left="64.45"
        :width="35.54"
        :height="46.08"
        @click="() => router.push('/immersion/warehouse')"
        ><template #hover>
          <DetailsRegion
            title="Warehouse"
            icon="warehouse"
            :description="t('sections.warehouse.description')"
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="breakroom"
        :config="sceneConfig"
        :top="29.27"
        :left="13.12"
        :width="22.96"
        :height="35.34"
        disabled
        ><template #hover>
          <DetailsRegion
            title="Break Room"
            icon="sports_esports"
            disabled
            :description="t('sections.breakroom.description')"
            noButton
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="boutique"
        :config="sceneConfig"
        :top="10.88"
        :left="29.45"
        :width="9.01"
        :height="17.87"
        disabled
        ><template #hover>
          <DetailsRegion
            title="Boutique"
            icon="shopping_cart"
            disabled
            :description="t('sections.boutique.description')"
            noButton
          /> </template
      ></ImageRegion2D>
    </template>

    <template #overlay>
      <OverlayPopup :show="isTvVisibile" margin="10%" @exit="toggleTV">
        <YoutubeVue3
          :videoid="youtubeVideoID"
          :width="tvVideoSize[0]"
          :height="tvVideoSize[1]"
          :controls="1"
          :autoplay="0"
          class="tv-container"
        />
      </OverlayPopup>
    </template>
  </Scene2D>
</template>

<style>
.tv-container {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.front-element {
  z-index: 1;
}
</style>
