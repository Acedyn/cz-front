<script setup lang="ts">
import { ref } from "vue";
import CloseButton from "@/components/interaction/CloseButton.vue";

const props = defineProps<{
  show: boolean;
  margin: string;
  disableCloseButton?: boolean;
}>();

const emit = defineEmits<{
  (e: "exit"): void;
  (e: "entered"): void;
}>();

const backdrop = ref<HTMLDivElement>();

const onClick = (e: MouseEvent, force?: boolean) => {
  if (e.target == backdrop.value || force) {
    emit("exit");
  }
};
</script>

<template>
  <transition name="fade" @after-enter="emit('entered')">
    <div
      class="overlay-backdrop"
      v-if="props.show"
      @click="onClick"
      ref="backdrop"
    >
      <CloseButton
        v-if="!props.disableCloseButton"
        size="40px"
        class="close-button"
        @click="(e) => onClick(e, true)"
        ref="closeButton"
      />
      <slot />
    </div>
  </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
