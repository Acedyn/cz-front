<script setup lang="ts">
import CtaButton from "../../components/interaction/CtaButton.vue";
import ControlsGenerator from "../../../histoire/ControlsGenerator.vue";

const worldState = () => {
  return {
    state: { invert: false, icon: "public" },
  };
};

const toolsState = () => {
  return {
    state: { invert: true, icon: "handyman" },
  };
};
</script>

<template>
  <Story title="Interaction/CTA Button" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="World" :initState="worldState">
      <template #default="{ state }">
        <CtaButton v-bind="state.state">World</CtaButton>
      </template>
    </Variant>

    <Variant title="Tools" :initState="toolsState">
      <template #default="{ state }">
        <CtaButton v-bind="state.state">Tools</CtaButton>
      </template>
    </Variant>
  </Story>
</template>
