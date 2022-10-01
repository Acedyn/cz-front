<script setup lang="ts">
import { reactive } from "vue";
import TapeButton from "../../components/interaction/TapeButton.vue";

const state = reactive({
  size: 1,
});
</script>

<template>
  <Story
    title="Interaction/Tape Button"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <template #controls>
      <HstSlider
        v-model="state.size"
        title="Size"
        :min="0"
        :max="4"
        :step="0.1"
      />
    </template>

    <Variant title="Learn more">
      <TapeButton v-bind="state"> LEARN MORE </TapeButton>
    </Variant>
  </Story>
</template>
