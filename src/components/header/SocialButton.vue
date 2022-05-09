<script lang="ts">
export default {
  props: {
    src: String,
    link: String,
  },
};
</script>

<template>
  <a :href="link" :class="link !== undefined ? 'enable': ''" class="logo">
    <img :src="src" />
  </a>
</template>

<style scoped>
a {
  background-color: #664f3c;
  box-shadow: 0px 2px 6px 2px rgb(0 0 0 / 20%);
  display: flex;
  transition: 0.1s;
  padding: 5px;

  border: 4px solid transparent;
  border-radius: 2px;
  border-image: url(@/assets/dots/dots_2-1.png) 20 round;
}

img {
  height: 20px;
}

.enable:hover {
  background-color: #503d2d;
}
</style>
