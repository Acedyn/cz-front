<script setup lang="ts">
import OverlayPopup from "@/components/popup/OverlayPopup.vue";
import MissionCardDetails from "../goodboard/cards/MissionCardDetails.vue";

import type Mission from "@/types/mission";

const props = withDefaults(
  defineProps<{
    show: boolean;
    payload: Mission;
  }>(),
  {}
);

const emit = defineEmits<{ (e: "handleClose"): void }>();

const handleClose = () => {
  emit("handleClose");
};
</script>

<template>
  <OverlayPopup :show="props.show" disable-close-button margin="5rem">
    <MissionCardDetails :mission="props.payload" @handleClose="handleClose" />
  </OverlayPopup>
</template>

<style scoped></style>
