<script setup lang="ts">
import TypographyText from "../../../src/components/utils/TypographyText.vue";
import ControlsGenerator from "../../ControlsGenerator.vue";

const smallLightState = () => {
  return {
    state: { size: "small", weight: "light" },
  };
};

const smallRegularState = () => {
  return {
    state: { size: "small", weight: "regular" },
  };
};

const smallBoldState = () => {
  return {
    state: { size: "small", weight: "bold" },
  };
};

const regularLightState = () => {
  return {
    state: { size: "regular", weight: "light" },
  };
};

const regularRegularState = () => {
  return {
    state: { size: "regular", weight: "regular" },
  };
};

const regularBoldState = () => {
  return {
    state: { size: "regular", weight: "bold" },
  };
};

const largeLightState = () => {
  return {
    state: { size: "big", weight: "light" },
  };
};

const largeRegularState = () => {
  return {
    state: { size: "big", weight: "regular" },
  };
};

const largeBoldState = () => {
  return {
    state: { size: "big", weight: "bold" },
  };
};

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in consequat odio. Suspendisse mauris ante, mollis porta elementum non, maximus et sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
</script>

<template>
  <Story title="Global/Utils/Typography Text" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Small Light" :initState="smallLightState">
      <template #default="{ state }">
        <TypographyText v-bind="state.state">{{ text }}</TypographyText>
      </template>
    </Variant>

    <Variant title="Small Regular" :initState="smallRegularState">
      <template #default="{ state }">
        <TypographyText v-bind="state.state">{{ text }}</TypographyText>
      </template>
    </Variant>

    <Variant title="Small Bold" :initState="smallBoldState">
      <template #default="{ state }">
        <TypographyText v-bind="state.state">{{ text }}</TypographyText>
      </template>
    </Variant>

    <Variant title="Regular Light" :initState="regularLightState">
      <template #default="{ state }">
        <TypographyText v-bind="state.state">{{ text }}</TypographyText>
      </template>
    </Variant>

    <Variant title="Regular Regular" :initState="regularRegularState">
      <template #default="{ state }">
        <TypographyText v-bind="state.state">{{ text }}</TypographyText>
      </template>
    </Variant>

    <Variant title="Regular Bold" :initState="regularBoldState">
      <template #default="{ state }">
        <TypographyText v-bind="state.state">{{ text }}</TypographyText>
      </template>
    </Variant>

    <Variant title="Large Light" :initState="largeLightState">
      <template #default="{ state }">
        <TypographyText v-bind="state.state">{{ text }}</TypographyText>
      </template>
    </Variant>

    <Variant title="Large Regular" :initState="largeRegularState">
      <template #default="{ state }">
        <TypographyText v-bind="state.state">{{ text }}</TypographyText>
      </template>
    </Variant>

    <Variant title="Large Bold" :initState="largeBoldState">
      <template #default="{ state }">
        <TypographyText v-bind="state.state">{{ text }}</TypographyText>
      </template>
    </Variant>
  </Story>
</template>
