<script setup lang="ts">
import OverlayPopup from "OverlayPopup.vue";
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    show: boolean;
  }>(),
  {}
);
</script>

<template>
  <OverlayPopup :show="props.show" margin="40px" disableCloseButton>
    <div class="loading-modal-container">
      <div class="spinner-circle">
        <div class="spinner-ring"></div>
        <div class="spinner-loader"></div>
      </div>
      <TypographyText
        font="Quicksand"
        color="var(--global-color-typography)"
        size="big"
      >
        Waiting...
      </TypographyText>
      <div class="progress-bar">
        <div class="filled-bar"></div>
        <div class="unfilled-bar"></div>
      </div>
    </div>
  </OverlayPopup>
</template>

<style scoped>
.loading-modal-container {
}

.spinner-circle,
.progress-bar {
  position: relative;
}

.spinner-ring,
.spinner-loader,
.filled-bar,
.unfilled-bar {
  position: absolute;
}

.spinner-ring {
  height: 40px;
  width: 40px;
  border: 4px solid var(--global-color-typography);
  border-radius: 50%;
  opacity: 20%;
}

.unfilled-bar {
  background-color: var(--global-color-typography);
  opacity: 20%;
  width: 100%;
  height: 2px;
  border-radius: 8px;
}
</style>
