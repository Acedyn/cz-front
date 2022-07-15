<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/explore">Explore</RouterLink>
      <RouterLink to="/tools">Tools</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  width: 100vw;
  height: 100vh;
}
</style>
