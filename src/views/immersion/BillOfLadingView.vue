<script setup lang="ts">
import ImageRegion2D from "@/components/scene/ImageRegion2D.vue";
import DetailsRegion from "@/components/scene/DetailsRegion.vue";
import Scene2D from "@/components/scene/Scene2D.vue";

import router from "@/router";

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
  <Scene2D name="post_office" :highlight="hightlightConfig">
    <template #elements="{ sceneConfig }">
      <ImageRegion2D
        name="post_office"
        :config="sceneConfig"
        :top="15.47"
        :left="38.93"
        :width="24.11"
        :height="47.05"
        @click="() => router.push('/immersion/post-office')"
        ><template #hover>
          <DetailsRegion
            title="post office"
            description="lorem ipsum id dolor els istum dale rictus dolores ed astam maelicutis rotore"
          /> </template
      ></ImageRegion2D>
    </template>
  </Scene2D>
</template>
