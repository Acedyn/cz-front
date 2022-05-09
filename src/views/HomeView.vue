<template>
  <div class="title">
    <img src="../assets/images/banner_site_v02.png" class="main-image" />
  </div>
</template>

<style scoped>
.title {
  height: calc(100vh - 130px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.main-image {
  height: 100%;
}

@media screen and (max-width: 640px) {
  .main-image {
    height: 60%;
  }
}
</style>
