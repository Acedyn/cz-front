<script setup lang="ts">
import NavigationButton from "../interaction/NavigationButton.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    textColor?: string;
    description?: string;
    noButton?: boolean;
  }>(),
  {
    textColor: "white",
  }
);
</script>

<template>
  <div class="details-container">
    <h3 class="text title">{{ props.title }}</h3>
    <p class="text description">{{ props.description }}</p>
    <NavigationButton
      v-if="!props.noButton"
      colorLine="#ffffff"
      colorBG="#bd7947"
      >{{ `Enter the ${props.title}` }}</NavigationButton
    >
  </div>
</template>

<style scoped>
.details-container {
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0% 10%;
  gap: 10px;

  overflow-y: auto;
}

.text {
  color: v-bind("props.textColor");
}

.title {
  font-size: 20px;
  font-weight: bolder;
  text-transform: uppercase;
}

.description {
  font-size: 15px;
  text-align: center;
}
</style>
