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
        :top="15.47"
        :left="38.93"
        :width="24.11"
        :height="47.05"
      />
    </template>
  </Scene2D>
</template>
