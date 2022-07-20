<script setup lang="ts">
const props = defineProps<{
  colorLine: string;
  colorBG: string;
}>();
</script>

<template>
  <button class="button-container">
    <span class="background" />
    <div class="content">
      <slot>Click Me</slot>
    </div>
  </button>
</template>

<style scoped>
.button-container {
  background: v-bind("props.colorBG");
  padding: 10px 20px;
  margin: 0;
  border: none;
  outline: inherit;
  border-radius: 2px;
  position: relative;

  cursor: pointer;
}

.background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: black;
  opacity: 0;
}

.button-container:hover .background {
  opacity: 0.2;
}

.content {
  color: v-bind("props.colorLine");
  font-weight: bolder;
}
</style>
