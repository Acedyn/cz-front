<script setup lang="ts">
const props = defineProps<{
  colorLine: string;
  colorBG: string;
  noArrow?: boolean;
}>();
</script>

<template>
  <button class="button-container">
    <span class="background" />
    <div class="content">
      <span class="arrow" />
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
  transition: opacity 0.2s;
}

.button-container:hover .background {
  opacity: 0.2;
}

.content {
  color: v-bind("props.colorLine");
  font-weight: bolder;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.arrow {
  position: relative;
  width: 30px;
  height: 0;
  border-bottom: v-bind("`4px solid ${props.colorLine}`");
  margin-right: 10px;

  transition: width 0.2s ease-in-out;
}

.arrow::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 15px;
  bottom: 0;

  border-bottom: v-bind("`4px solid ${props.colorLine}`");

  transform: translateY(1px) rotate(45deg);
  transform-origin: right;
}

.arrow::before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 15px;
  bottom: 0;

  border-bottom: v-bind("`4px solid ${props.colorLine}`");

  transform: translateY(-1px) rotate(-45deg);
  transform-origin: right;
}

.button-container:hover .arrow {
  width: 40px;
}
</style>
