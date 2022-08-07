<script setup lang="ts">
import NavigationButton from "../interaction/NavigationButton.vue";
import TypographyTitle from "../utils/TypographyText.vue";
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    textColor?: string;
    description?: string;
    noButton?: boolean;
    icon?: string;
  }>(),
  {
    textColor: "white",
  }
);
</script>

<template>
  <div class="details-container">
    <div class="region-header">
      <span v-if="props.icon" class="material-icons icon-title">
        {{ props.icon }}
      </span>
      <TypographyTitle :level="3" color="white"
        ><span class="region-title">{{ props.title }}</span></TypographyTitle
      >
    </div>
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

.region-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.region-title {
  font-size: 2.464rem;
  font-weight: bolder;
  text-transform: uppercase;
}

.icon-title {
  font-size: 2.464rem;
  font-weight: bolder;
  color: white;
}

.description {
  font-size: 15px;
  text-align: center;
}
</style>
