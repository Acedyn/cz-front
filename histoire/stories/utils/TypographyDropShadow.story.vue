<script setup lang="ts">
import TypographyDropShadow from "../../../src/components/utils/TypographyDropShadow.vue";
import ControlsGenerator from "../../ControlsGenerator.vue";

const textState = () => {
  return {
    state: { type: "text" },
  };
};

const titleState = () => {
  return {
    state: { type: "title" },
  };
};

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in consequat odio. Suspendisse mauris ante, mollis porta elementum non, maximus et sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
const title = "Lorem ipsum";
</script>

<template>
  <Story title="Global/Utils/Typography Drop Shadow" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Text" :initState="textState">
      <template #default="{ state }">
        <TypographyDropShadow v-bind="state.state">{{
          text
        }}</TypographyDropShadow>
      </template>
    </Variant>

    <Variant title="Title" :initState="titleState">
      <template #default="{ state }">
        <TypographyDropShadow v-bind="state.state">{{
          title
        }}</TypographyDropShadow>
      </template>
    </Variant>
  </Story>
</template>
