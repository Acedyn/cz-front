<script setup lang="ts">
import TextInput from "@/components/interaction/TextInput.vue";
import FileUpload from "@/components/interaction/FileUpload.vue";
</script>

<template>
  <div class="my-detail-container">
    <div class="text-container">
      <TextInput label="Email" icon="tools" placeholder="Email" />
      <div></div>
    </div>
    <div class="text-container">
      <TextInput label="Password" icon="tools" placeholder="" type="password" />
      <TextInput label="Password" icon="tools" placeholder="" type="password" />
    </div>
    <FileUpload label="Upload your picture" />
  </div>
</template>

<style scoped>
.my-detail-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text-container {
  display: flex;
  width: 100%;
  gap: 2rem;
}

.text-container * {
  flex: 1;
}
</style>
