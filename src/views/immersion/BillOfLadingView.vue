<script setup lang="ts">
import ImageRegion2D from "@/components/scene/ImageRegion2D.vue";
import DetailsRegion from "@/components/scene/DetailsRegion.vue";
import Scene2D from "@/components/scene/Scene2D.vue";

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
</script>

<template>
  <Scene2D
    name="bill_of_lading"
    :highlight="hightlightConfig"
    :aspectRatio="2429 / 1050"
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
        ><template #hover> <DetailsRegion title="proof of water" /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="proof_scrap"
        :config="sceneConfig"
        :top="59.67"
        :left="7.53"
        :width="14.11"
        :height="14.05"
        noHoverImage
        ><template #hover> <DetailsRegion title="proof of scrap" /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="proof_knowledge"
        :config="sceneConfig"
        :top="27.47"
        :left="83.93"
        :width="16.11"
        :height="20.55"
        noHoverImage
        ><template #hover>
          <DetailsRegion title="proof of knowledge" /> </template
      ></ImageRegion2D>

      <ImageRegion2D
        name="proof_forest"
        :config="sceneConfig"
        :top="55.0"
        :left="43.85"
        :width="15.22"
        :height="16.66"
        noHoverImage
        ><template #hover> <DetailsRegion title="proof of forest" /> </template
      ></ImageRegion2D>
    </template>
  </Scene2D>
</template>
