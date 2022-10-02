<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import SocialButton from "../../../src/components/interaction/SocialButton.vue";

const discordState = () => {
  return {
    state: {
      social: "discord",
    },
  };
};

const twitterState = () => {
  return {
    state: {
      social: "twitter",
    },
  };
};

const solanaState = () => {
  return {
    state: {
      social: "solana",
    },
  };
};

const magicedenState = () => {
  return {
    state: {
      social: "magiceden",
    },
  };
};
</script>

<template>
  <Story title="Global/Interaction/Social Button" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Discord" :initState="discordState">
      <template #default="{ state }">
        <SocialButton v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Twitter" :initState="twitterState">
      <template #default="{ state }">
        <SocialButton v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Solana" :initState="solanaState">
      <template #default="{ state }">
        <SocialButton v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Magic eden" :initState="magicedenState">
      <template #default="{ state }">
        <SocialButton v-bind="state.state" />
      </template>
    </Variant>
  </Story>
</template>
