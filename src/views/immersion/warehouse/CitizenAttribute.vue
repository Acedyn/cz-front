<script setup lang="ts">
import { computed } from "vue";
import type { CitizenAttribute } from "../../../legacy/types/citizen";

const props = defineProps<{
  attribute: CitizenAttribute;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const selectedStory = computed(() => {
  if (props.attribute.selectedStory === undefined) {
    return undefined;
  }

  return props.attribute.stories[props.attribute.selectedStory];
});
</script>

<template>
  <div
    class="attribute-container"
    @click="
      () => {
        emit('click');
      }
    "
  >
    <div class="attribute-info">
      <p class="attribute-value">{{ attribute.type }}</p>
      <span class="line-separation" />
      <p class="trait-value">{{ attribute.value }}</p>
    </div>
    <div :class="`story-container ${selectedStory ? 'selected-story' : ''}`">
      <p class="story-display">
        {{ selectedStory ? selectedStory.text : "select a story" }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.attribute-container {
  border-radius: 5px;
  padding: 2px;
  transition: 0.1s;
}

.attribute-container:hover {
  background: rgba(0%, 0%, 0%, 20%);
  cursor: pointer;
}

.story-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 0.3vh;
  border-radius: 0.4vh;
  transition: 0.1s;
}

.selected-story {
  background: rgba(0%, 0%, 0%, 10%);
  box-shadow: 0px 0px 5px 1px #ffd676;
}

.story-display {
  color: #efd7bc;
  font-family: BlockHeadUnplugged;
  font-size: 1.1vh;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.attribute-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  font-family: BlockHeadUnplugged;
  font-size: 2vh;
  letter-spacing: calc(var(--text-medium) * -0.04);
  text-transform: uppercase;
}

.attribute-name {
  font-weight: bolder;
}
.line-separation {
  margin: 10px;
  border: dashed 1px;
  width: 100%;
  height: 1px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
