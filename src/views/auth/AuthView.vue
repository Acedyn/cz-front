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
</style>
