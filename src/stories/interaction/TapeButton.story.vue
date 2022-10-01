<script setup lang="ts">
import ControlsGenerator from "../../../histoire/ControlsGenerator.vue";
import TapeButton from "../../components/interaction/TapeButton.vue";

const learnMoreState = () => {
  return {
    state: {
      size: 1,
    },
  };
};
</script>

<template>
  <Story title="Interaction/Tape Button" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Learn more" :initState="learnMoreState">
      <template #default="{ state }">
        <TapeButton v-bind="state.state"> LEARN MORE </TapeButton>
      </template>
    </Variant>
  </Story>
</template>
