<script setup lang="ts">
import { useFileDialog } from "@vueuse/core";
import LogoImage from "../atoms/LogoImage.vue";
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    defaultImage: string;
  }>(),
  {}
);

const { files, open } = useFileDialog();
const uploadImage = () => {
  open();

  if (!files.value) {
    return;
  }
  const reader = new FileReader();

  reader.onload = () => {
    const dataURL = reader.result;

    fetch("https://upload.gyazo.com/api/upload", {
      method: "post",
      headers: {
        Authorization: "Client-ID jRC49zXUyjXibRwFiSVgp1IXm1kfTw2nKeKrop7JfOc",
      },
      body: JSON.stringify({
        imagedata: dataURL,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });
  };
  reader.readAsDataURL(files.value[0]);
};
</script>

<template>
  <div class="file-upload-container">
    <p v-if="props.label" class="file-upload-label">{{ props.label }}</p>
    <div class="file-upload-inner-container" @click="uploadImage">
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
  background: v-bind("`url('${defaultImage}') no-repeat`");
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
