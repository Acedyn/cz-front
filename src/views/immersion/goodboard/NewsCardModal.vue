<script setup lang="ts">
import OverlayPopup from "@/components/popup/OverlayPopup.vue";
import MissionCardDetails from "../goodboard/cards/MissionCardDetails.vue";
import NewsCardDetails from "../goodboard/cards/NewsCardDetails.vue";

import type Mission from "@/types/mission";
import type News from "@/types/news";

const props = withDefaults(
  defineProps<{
    show: boolean;
    payload: News;
  }>(),
  {}
);

const emit = defineEmits<{ (e: "handleClose"): void }>();

const handleClose = () => {
  emit("handleClose");
};
</script>

<template>
  <OverlayPopup margin="40px" :show="props.show" disable-close-button>
    <NewsCardDetails :news="props.payload" @handleClose="handleClose" />
  </OverlayPopup>
</template>

<style scoped></style>
