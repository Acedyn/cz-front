<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits<{
  (e: "click"): void;
}>();

const props = defineProps<{
  open: boolean;
}>();
const button = ref<HTMLDivElement>();

const activate = () => {
  emit("click");
};
</script>

<template>
  <div
    :class="`confirm-button-container ${props.open ? 'open' : ''}`"
    @click="activate"
    ref="button"
  ></div>
</template>

<style scoped>
.confirm-button-container {
  position: absolute;
  background-image: url(@/assets/immersion/warehouse/inventory_closed.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 25vw;
  height: calc(25vw * 259 / 646);
  max-height: 20vh;
  bottom: 0px;
  left: 0px;
  z-index: 4;
  transform-origin: bottom;
  transition: transform 0.1s;
  filter: brightness(1);
}
.confirm-button-container:hover {
  filter: brightness(0.7);
  transform: scale(1.05);
}
.confirm-button-container:active {
  filter: brightness(0.7);
  transform: scale(1.1);
}
.activate {
  animation: pulse 0.1s;
}

.open {
  background-image: url(@/assets/immersion/warehouse/inventory_open.png);
}

@media screen and (max-width: 640px) {
  .confirm-button-container {
    width: 40vw;
    height: calc(40vw * 259 / 646);
  }
}
</style>
