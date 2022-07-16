<script setup lang="ts">
  const props = defineProps<{
    label: string
    colorLine: string
    colorBG: string
  }>()
</script>

<template>
  {{ label }}
</template>
