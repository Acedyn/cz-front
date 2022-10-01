<script setup lang="ts">
import CategoryTag from "../../components/atoms/CategoryTag.vue";
import ControlsGenerator from "../../../histoire/ControlsGenerator.vue";

const discordState = () => {
  return {
    state: { color: "#6b71ff" },
  };
};

const twitterState = () => {
  return {
    state: { color: "#6BCAFF" },
  };
};

const eventState = () => {
  return {
    state: { color: "#75BC74" },
  };
};

const basicState = () => {
  return {
    state: { color: "#C0590E" },
  };
};
</script>

<template>
  <Story title="Atoms/Category Tag" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Discord" :initState="discordState">
      <template #default="{ state }">
        <CategoryTag v-bind="state.state">DISCORD</CategoryTag>
      </template>
    </Variant>

    <Variant title="Twitter" :initState="twitterState">
      <template #default="{ state }">
        <CategoryTag v-bind="state.state">TWITTER</CategoryTag>
      </template>
    </Variant>

    <Variant title="Event" :initState="eventState">
      <template #default="{ state }">
        <CategoryTag v-bind="state.state">EVENT</CategoryTag>
      </template>
    </Variant>

    <Variant title="Basic" :initState="basicState">
      <template #default="{ state }">
        <CategoryTag v-bind="state.state">BASIC</CategoryTag>
      </template>
    </Variant>
  </Story>
</template>
