<script setup lang="ts">
import ImageRegion2D from "@/components/scene/ImageRegion2D.vue";
import DetailsRegion from "@/components/scene/DetailsRegion.vue";
import Scene2D from "@/components/scene/Scene2D.vue";
import OverlayPopup from "@/components/popup/OverlayPopup.vue";
import ProjectPopup from "./ProjectPopup.vue";
import { preloadImages } from "../../../utils/loader";
import { ref, onBeforeMount } from "vue";

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

const selectedProject = ref<string | undefined>();
const selectProject = (name: string | undefined) => {
  selectedProject.value = name;
};

const displaysRootURL = "src/assets/immersion/scenes/bill_of_lading/displays";

onBeforeMount(() => {
  preloadImages([
    new URL(`/${displaysRootURL}/proof_of_water.png`, import.meta.url).href,
    new URL(`/${displaysRootURL}/proof_of_knowledge.png`, import.meta.url).href,
    new URL(`/${displaysRootURL}/proof_of_scrap.png`, import.meta.url).href,
    new URL(`/${displaysRootURL}/proof_of_forest.png`, import.meta.url).href,
  ]);
});
</script>
new URL(`/${displaysRootURL}/proof_of_water.png`, import.meta.url).href

<template>
  <Scene2D
    name="bill_of_lading"
    :noAutoScrolling="selectedProject != undefined"
    :highlight="hightlightConfig"
    :aspectRatio="2395 / 1050"
    noDark
  >
    <template #elements="{ sceneConfig }">
      <ImageRegion2D
        name="proof_water"
        :config="sceneConfig"
        :top="33.65"
        :left="22.93"
        :width="14.11"
        :height="11.25"
        noHoverImage
        @click="() => selectProject('proof_water')"
        ><template #hover>
          <DetailsRegion
            title="Proof of Water"
            backgroundGradiantA="rgb(32 77 106 / 80%)"
            backgroundGradiantB="rgb(10 39 102 / 0%)"
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="proof_scrap"
        :config="sceneConfig"
        :top="59.67"
        :left="7.53"
        :width="14.11"
        :height="14.05"
        noHoverImage
        @click="() => selectProject('proof_scrap')"
        ><template #hover>
          <DetailsRegion
            title="Proof of Scrap"
            backgroundGradiantA="rgb(32 77 106 / 80%)"
            backgroundGradiantB="rgb(10 39 102 / 0%)"
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="proof_knowledge"
        :config="sceneConfig"
        :top="27.47"
        :left="83.93"
        :width="16.11"
        :height="20.55"
        noHoverImage
        @click="() => selectProject('proof_knowledge')"
        ><template #hover>
          <DetailsRegion
            title="Proof of Knowledge"
            backgroundGradiantA="rgb(32 77 106 / 80%)"
            backgroundGradiantB="rgb(10 39 102 / 0%)"
          /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="proof_forest"
        :config="sceneConfig"
        :top="55.0"
        :left="43.85"
        :width="15.22"
        :height="16.66"
        noHoverImage
        @click="() => selectProject('proof_forest')"
        ><template #hover>
          <DetailsRegion
            title="Proof of Forest"
            backgroundGradiantA="rgb(32 77 106 / 80%)"
            backgroundGradiantB="rgb(10 39 102 / 0%)"
          /> </template
      ></ImageRegion2D>
    </template>

    <template #overlay>
      <OverlayPopup
        :show="selectedProject != undefined"
        margin="10%"
        @exit="() => selectProject(undefined)"
      >
        <ProjectPopup
          :source="selectedProject as string"
          backgroundGradiantA="rgb(32 77 106 / 80%)"
          backgroundGradiantB="rgb(10 39 102 / 0%)"
        />
      </OverlayPopup>
    </template>
  </Scene2D>
</template>
