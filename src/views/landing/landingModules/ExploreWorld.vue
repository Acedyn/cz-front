<script setup lang="ts">
import router from "@/router";
</script>

<template>
  <div class="container">
    <img
      src="@/assets/landing/world_title.png"
      class="title-image world-image"
      @click="() => router.push('/immersion')"
    />
    <img
      src="@/assets/landing/world_arrows.png"
      class="arrows-image world-image"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-height: 30vw;
}

.world-image {
  width: 80%;
  max-width: 60rem;
  height: auto;
  position: absolute;
}

.arrows-image {
  transition: 0.2s ease-out;
}

.title-image {
  z-index: 1;
  transform: scale(0.8);
  transition: 0.2s ease-out;
  cursor: pointer;
}

.title-image:hover {
  transform: scale(0.85);
  filter: drop-shadow(0 0 0.5rem rgba(255, 206, 63, 0.3));
}

.title-image:hover + .arrows-image {
  animation: breathing 2s ease-in-out infinite;
}

@keyframes breathing {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}
</style>
