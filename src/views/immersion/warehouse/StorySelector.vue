<script setup lang="ts">
import type { TraitStory } from "../../types/citizen";

const props = defineProps<{
  stories: TraitStory[]
  attribute: string
  trait: string
  selected?: number
}>()

const emit = defineEmits<{
  (e: "select", index: number): void
}>()

const selectStory = (index: number) => {
  emit("select", index)
}
</script>

<template>
  <div class="select-container">
    <div class="attribute-info">
      <p class="attribute-value">{{ props.attribute }}</p>
      <span class="line-separation" />
      <p class="trait-value">{{ props.trait }}</p>
    </div>
    <template v-for="story, index in props.stories" :key="index">
      <p :class="`story-text ${index === props.selected ? 'selected' : ''}`" @click="() => {selectStory(index)}"> {{ story.text }} </p>
      <span class="line-separation" v-if="index !== stories.length - 1"/>
    </template>
  </div>
</template>

<style scoped>
.select-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.story-text {
  padding: 2px 0px;
  border-radius: 5px;
  color: #efd7bc;
  font-family: BlockHeadUnplugged;
  font-size: 1.5vh;
  flex-grow: 1;
  display: grid;
  justify-content: center;
  align-content: center;
  transition: 0.1s;
  text-align: center;
}

.story-text:hover {
  background: rgba(0%, 0%, 0%, 20%);
  cursor: pointer;
}

.attribute-info {
  color: #efd7bc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 2px;
  font-family: BlockHeadFace;
  font-size: 1.8vh;
  text-transform: uppercase;
  margin-left: 5px;
  margin-right: 5px;
  padding: 0px 10px;

  background: #7a5f4f;
  border: 0.3vh solid transparent;
  border-radius: 0.2vh;
  border-image: url(@/assets/dots/dots_2-1.png) 15 round;
  box-shadow: 0px 2px 5px rgba(0%, 0%, 0%, 80%);
}

.line-separation {
  margin: 10px;
  border: dashed 1px;
  width: 100%;
  height: 0px;
  margin-top: auto;
  margin-bottom: auto;
}

.selected {
  background: rgba(0%, 0%, 0%, 30%);
}
</style>
