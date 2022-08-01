<script setup lang="ts">
import LanguagePicker from "./components/interaction/LanguagePicker.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/immersion">Immersion</RouterLink>
      <RouterLink to="/tools">Tools</RouterLink>
      <LanguagePicker />
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/styles/fonts.css";
@import "@/styles/base.css";

#app {
  width: 100vw;
  height: 100vh;
}
</style>
