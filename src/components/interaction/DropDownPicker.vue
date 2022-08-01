<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  options: string[];
}>();

const emit = defineEmits<{
  (e: "select", selection: string): void;
}>();

const selection = ref(props.options[0]);

const selectOptions = () => {
  emit("select", selection.value);
};
</script>

<template>
  <select @change="selectOptions" v-model="selection">
    <option
      v-for="(option, index) in props.options"
      :value="option"
      :key="index"
    >
      {{ option }}
    </option>
  </select>
</template>
