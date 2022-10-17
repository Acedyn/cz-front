<script setup lang="ts">
import { ref, computed } from "vue";
import { useDropZone, useFileDialog } from "@vueuse/core";
import LogoImage from "../atoms/LogoImage.vue";
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    label?: string;
  }>(),
  {}
);

const { files, open, reset } = useFileDialog();

const dropZone = ref<HTMLDivElement>();
const onDrop = (files: File[] | null) => {
  console.log(files);
};
const { isOverDropZone } = useDropZone(dropZone, onDrop);

const isFileAvailable = computed(() => {
  console.log(isOverDropZone);
  return isOverDropZone;
});
</script>

<template>
  <div class="file-upload-container">
    <p v-if="props.label" class="file-upload-label">{{ props.label }}</p>
    <div ref="dropZone" class="file-upload-inner-container" @click="open">
      <LogoImage type="tools" />
      <TypographyText font="Quicksand" color="var(--global-color-typography)">
        <p>Click to upload or drag and drop</p>
        <p>SVG, PNG, JPG or GIF (max, 800x400px)</p>
      </TypographyText>
    </div>
  </div>
</template>

<style scoped>
.file-upload-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.file-upload-inner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
  border: 2px solid var(--global-color-typography);
  border-radius: 8px;
  background-color: rgba(255, 211, 186, 0.2);
}

.file-upload-label {
  font-family: Quicksand, serif;
  font-weight: 700;
  font-size: 1rem;
  color: var(--global-color-typography);
}
</style>
