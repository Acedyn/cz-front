<script setup lang="ts">
const props = defineProps<{
  colorLine: string;
  colorBG: string;
  round?: boolean;
  size: string;
}>();

const emit = defineEmits<{
  (e: "click", eventType: MouseEvent): void;
}>();
</script>

<template>
  <button class="button-container" @click="(e: MouseEvent) => emit('click', e)">
    <span class="background" />
    <span class="cross" @click="(e: MouseEvent) => emit('click', e)" />
  </button>
</template>

<style scoped>
.button-container {
  --line-thickness: v-bind("`calc(${props.size} / 15)`");

  background: v-bind("props.colorBG");
  margin: 0;
  padding: 0;
  outline: inherit;
  position: relative;

  border: v-bind("`solid var(--line-thickness) ${props.colorLine}`");
  cursor: pointer;

  border-radius: v-bind("props.round ? '50%' : '4px'");
}

.background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: black;
  opacity: 0;
  transition: opacity 0.2s;
  border-radius: v-bind("props.round ? '50%' : '4px'");
}

.button-container:hover .background {
  opacity: 0.2;
}

.cross {
  color: v-bind("props.colorLine");
  font-weight: bolder;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: v-bind("props.size");
  height: v-bind("props.size");
}

.cross:before {
  content: "";
  position: absolute;
  background: v-bind("props.colorLine");
  top: calc(50% - (var(--line-thickness) / 2));
  bottom: calc(50% - (var(--line-thickness) / 2));
  right: 10%;
  left: 10%;

  transform: rotate(45deg);
  border-radius: 2px;
}

.cross:after {
  content: "";
  position: absolute;
  background: v-bind("props.colorLine");
  top: calc(50% - (var(--line-thickness) / 2));
  bottom: calc(50% - (var(--line-thickness) / 2));
  right: 10%;
  left: 10%;

  transform: rotate(-45deg);
  border-radius: 2px;
}
</style>
