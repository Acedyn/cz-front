<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" class="app-view" />
  </router-view>
</template>

<style scoped>
.app-view {
  --app-padding-side: 10.625rem;
  min-height: 100vh;
  background-repeat: repeat;
  background-image: url("/src/assets/background/background.png"),
    radial-gradient(76.99% 76.99% at 50% 53.41%, #925637 0%, #411f12 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-dark-enter-active,
.fade-dark-leave-active {
  transition: 1s ease;
  filter: brightness(1);
}

.fade-dark-enter-from,
.fade-dark-leave-to {
  filter: brightness(0);
  opacity: 0.7;
}
</style>
