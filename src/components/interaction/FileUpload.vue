<script setup lang="ts">
import { ref } from "vue";
import { useDropZone, useFileDialog } from "@vueuse/core";
import LogoImage from "../atoms/LogoImage.vue";
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    defaultImage: string;
  }>(),
  {}
);

const { files, open, reset } = useFileDialog();

const dropZone = ref<HTMLDivElement>();
const onDrop = (files: File[] | null) => {
  console.log(files);
};
const { isOverDropZone } = useDropZone(dropZone, onDrop);
</script>

<template>
  <div class="file-upload-container">
    <p v-if="props.label" class="file-upload-label">{{ props.label }}</p>
    <div ref="dropZone" class="file-upload-inner-container" @click="open()">
      <LogoImage type="tools" />
      <TypographyText font="Quicksand" color="var(--global-color-typography)">
        <p>Click to upload</p>
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
  cursor: pointer;
}

.file-upload-inner-container:before {
  content: "";
  position: absolute;
  inset: 0;
  filter: contrast(0.5) brightness(0.5);
  background: url("https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeic4fhsqfehej4z5gg53osxiktlbkdllpz2wta4gubdtez7c55m62u.ipfs.dweb.link/")
    no-repeat;
  background-size: cover;
  background-position: center;
}

.file-upload-label {
  font-family: Quicksand, serif;
  font-weight: 700;
  font-size: 1rem;
  color: var(--global-color-typography);
}
</style>
