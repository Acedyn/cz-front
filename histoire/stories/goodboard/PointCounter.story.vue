<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import PointCounter from "../../../src/views/immersion/goodboard/molecules/PointCounter.vue";

const gainState = () => {
  return {
    state: { count: 69 },
  };
};
</script>

<template>
  <Story title="Goodboard/Molecules/Point Counter" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Mission Gains" :initState="gainState">
      <template #default="{ state }">
        <PointCounter v-bind="state.state" />
      </template>
    </Variant>
  </Story>
</template>
