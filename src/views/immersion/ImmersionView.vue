<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style scoped>
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
