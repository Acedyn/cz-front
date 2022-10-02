<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import StickerButton from "../../../src/components/interaction/StickerButton.vue";

const discordState = () => {
  return {
    state: {
      hue: 150,
    },
  };
};

const twitterState = () => {
  return {
    state: {
      hue: 180,
    },
  };
};

const eventState = () => {
  return {
    state: {
      hue: 50,
    },
  };
};

const basicState = () => {
  return {
    state: {},
  };
};

const text = "LEARN MORE";
</script>

<template>
  <Story
    title="Global/Interaction/Sticker Button"
    :layout="{ type: 'grid', width: '20rem' }"
  >
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Discord" :initState="discordState">
      <template #default="{ state }">
        <StickerButton v-bind="state.state"> {{ text }} </StickerButton>
      </template>
    </Variant>

    <Variant title="Twitter" :initState="twitterState">
      <template #default="{ state }">
        <StickerButton v-bind="state.state"> {{ text }} </StickerButton>
      </template>
    </Variant>

    <Variant title="Event" :initState="eventState">
      <template #default="{ state }">
        <StickerButton v-bind="state.state"> {{ text }} </StickerButton>
      </template>
    </Variant>

    <Variant title="Basic" :initState="basicState">
      <template #default="{ state }">
        <StickerButton v-bind="state.state"> {{ text }} </StickerButton>
      </template>
    </Variant>
  </Story>
</template>
