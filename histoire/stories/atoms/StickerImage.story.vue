<script setup lang="ts">
import StickerImage from "../../../src/components/atoms/StickerImage.vue";
import ControlsGenerator from "../../ControlsGenerator.vue";

const discordBoldState = () => {
  return {
    state: {
      hue: 150,
      type: "bold",
    },
  };
};

const discordThinState = () => {
  return {
    state: {
      hue: 150,
      type: "thin",
    },
  };
};

const twitterBoldState = () => {
  return {
    state: {
      hue: 180,
      type: "bold",
    },
  };
};

const twitterThinState = () => {
  return {
    state: {
      hue: 180,
      type: "thin",
    },
  };
};

const eventBoldState = () => {
  return {
    state: {
      hue: 50,
      type: "bold",
    },
  };
};

const eventThinState = () => {
  return {
    state: {
      hue: 50,
      type: "thin",
    },
  };
};

const basicBoldState = () => {
  return {
    state: {
      type: "bold",
    },
  };
};

const basicThinState = () => {
  return {
    state: {
      type: "thin",
    },
  };
};

const basicSmallState = () => {
  return {
    state: {
      type: "small",
    },
  };
};
</script>

<template>
  <Story title="Global/Atoms/Sticker Image" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Discord Bold" :initState="discordBoldState">
      <template #default="{ state }">
        <StickerImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Discord Thin" :initState="discordThinState">
      <template #default="{ state }">
        <StickerImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Twitter Bold" :initState="twitterBoldState">
      <template #default="{ state }">
        <StickerImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Twitter Thin" :initState="twitterThinState">
      <template #default="{ state }">
        <StickerImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Event Bold" :initState="eventBoldState">
      <template #default="{ state }">
        <StickerImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Event Thin" :initState="eventThinState">
      <template #default="{ state }">
        <StickerImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Basic Bold" :initState="basicBoldState">
      <template #default="{ state }">
        <StickerImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Basic Thin" :initState="basicThinState">
      <template #default="{ state }">
        <StickerImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Basic Small" :initState="basicSmallState">
      <template #default="{ state }">
        <StickerImage v-bind="state.state" />
      </template>
    </Variant>
  </Story>
</template>
