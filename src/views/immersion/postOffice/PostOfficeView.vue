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
    new: "#fffa00",
  },
  light: {
    visited: "black",
    new: "#fffa00",
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
        name="post_office"
        :config="sceneConfig"
        :top="15.47"
        :left="38.93"
        :width="24.11"
        :height="47.05"
        @click="() => router.push('/')"
        ><template #hover>
          <DetailsRegion
            title="post office"
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
        ><template #hover>
          <DetailsRegion
            title="team"
            description="lorem ipsum id dolor els istum dale rictus dolores ed astam maelicutis rotore"
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
            title="bill of lading"
            description="lorem ipsum id dolor els istum dale rictus dolores ed astam maelicutis rotore"
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="warehouse"
        :config="sceneConfig"
        :top="11.9"
        :left="64.45"
        :width="35.54"
        :height="46.08"
        ><template #hover>
          <DetailsRegion
            title="warehouse"
            description="lorem ipsum id dolor els istum dale rictus dolores ed astam maelicutis rotore"
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
            title="break room"
            description="Comming soon !"
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
            title="boutique"
            description="Comming soon !"
            noButton
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="tv"
        :config="sceneConfig"
        :top="64.89"
        :left="24.47"
        :width="7.03"
        :height="13.98"
        noHoverBackground
        @click="toggleTV"
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
        @click="() => openLink('https://twitter.com/CardboardCtzNFT')"
        ><template #hover><span /></template
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
</style>