<script setup lang="ts">
import { ref } from "vue";
import CloseButton from "@/components/interaction/CloseButton.vue";

const props = defineProps<{
  show: boolean;
  margin: string;
}>();

const emit = defineEmits<{
  (e: "exit"): void;
}>();

const backdrop = ref<HTMLDivElement>();

const onClick = (e: MouseEvent, force?: boolean) => {
  if (e.target == backdrop.value || force) {
    emit("exit");
  }
};
</script>

<template>
  <div
    class="overlay-backdrop"
    v-if="props.show"
    @click="onClick"
    ref="backdrop"
  >
    <CloseButton
      colorLine="black"
      colorBG="#664f3c"
      size="40px"
      class="close-button"
      @click="(e) => onClick(e, true)"
      ref="closeButton"
    />
    <slot />
  </div>
</template>

<style scoped>
.overlay-backdrop {
  background: #0000009e;
  z-index: 10;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  overflow-y: auto;
  overflow-x: hidden;
  padding: v-bind("props.margin");

  display: grid;
}

.close-button {
  z-index: 20;
  margin: 1%;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
