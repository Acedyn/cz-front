<script setup lang="ts">
import { ref, onMounted } from "vue";

const show = ref(false)

onMounted(() => {
  show.value = true
})
</script>

<template>
  <div class="title">
    <transition name="fade">
      <img v-show="show" src="../assets/images/banner_site_v02.png" class="main-image"/>
    </transition>
    <div class="footer">© 2022, Cardboard Citizens </div>
  </div>
</template>

<style scoped>
.title {
  height: calc(100vh - 10em);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

@media screen and (max-width: 640px) {
  .title {
    height: calc(100vh - 7em);
  }
}

.main-image {
  height: 100%;
}

@media screen and (max-width: 640px) {
  .main-image {
    height: 60%;
  }
}

.footer {
  position: absolute;
  bottom: 10px;
  left: 10px;

  font-size: var(--text-medium);
  font-weight: bolder;
  font-family: "BlockHeadUnplugged", monospace;
}
</style>
