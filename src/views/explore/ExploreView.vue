<script setup lang="ts">
import ImageRegion2D from "@/components/scene/ImageRegion2D.vue";
import Scene2D from "@/components/scene/Scene2D.vue";
</script>

<template>
  <Scene2D name="post_office" highlight="white">
    <template #elements="{ sceneConfig }">
      <ImageRegion2D
        name="post_office"
        :config="sceneConfig"
        highlight="blue"
        :top="5"
        :left="10"
        :width="20"
        :height="25"
      />

      <ImageRegion2D
        name="team"
        :config="sceneConfig"
        :top="30"
        :left="50"
        :width="20"
        :height="25"
        disabled
      />

      <ImageRegion2D
        name="bill_of_lading"
        :config="sceneConfig"
        :top="70"
        :left="40"
        :width="20"
        :height="25"
      />

      <ImageRegion2D
        name="warehouse"
        :config="sceneConfig"
        :top="70"
        :left="40"
        :width="20"
        :height="25"
      />
    </template>
  </Scene2D>
</template>
