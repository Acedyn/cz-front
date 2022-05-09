<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    soon: Boolean,
  },
});
</script>

<template>
  <div class="root">
    <p :class="soon ? 'enabled' : null">{{ title }}</p>
    <p :class="soon ? 'enabled soon' : 'soon'">soon</p>
  </div>
</template>

<style scoped>
.root {
  display: block;
  height: 100%;
  padding: 0 20px;
  background-color: #664f3c;
  box-shadow: 0px 2px 6px 2px rgb(0 0 0 / 20%);

  border: 5px solid transparent;
  border-radius: 2px;
  border-image: url(@/assets/dots/dots_2-1.png) 20 round;
  transition: 0.1s;

  overflow: hidden;
}

p {
  text-align: center;
  text-transform: uppercase;
  font-family: BlockHeadFace;
  text-decoration: none;
  font-size: 120%;
  line-height: 120%;
  color: #efd7bc;
  transition: 0.2s;
}

.soon {
  margin-top: 10%;
}

.root:hover > .enabled {
  transform: translateY(-150%);
  white-space: nowrap;
  overflow: hidden;
}

.root:hover {
  background-color: #503d2d;
}
</style>
