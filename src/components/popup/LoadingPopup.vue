<script setup lang="ts">
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    show: boolean;
    progress?: number;
  }>(),
  {}
);
</script>

<template>
  <div v-if="props.show" class="loading-overlay-container">
    <div class="loading-modal-container">
      <div class="spinner"></div>
      <TypographyText
        font="Paytone One"
        color="var(--global-color-typography)"
        size="big"
      >
        Waiting...
      </TypographyText>
      <div class="progress-bar"></div>
    </div>
  </div>
</template>

<style scoped>
.loading-overlay-container {
  background: #0000009e;
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  background-color: #893A27;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid rgba(255, 211, 186, 0.2);
  border-bottom-color: rgba(255, 211, 186, 1);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.progress-bar {
  width: 100%;
  height: 4px;
  display: inline-block;
  position: relative;
  background: rgba(255, 211, 186, 0.2);
  overflow: hidden;
}
.progress-bar::after {
  content: "";
  box-sizing: border-box;
  width: 0;
  height: 5px;
  background: rgba(255, 211, 186, 1);
  position: absolute;
  top: 0;
  left: 0;
  animation: progress 30s linear;
}

@keyframes progress {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .loading-modal-container {
    max-width: 80%;
  }
}
</style>
