<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import MissionCard from "../../../src/views/goodboard/cards/MissionCard.vue";
import Mission from "../../../src/types/mission";

const discordState = () => {
  return {
    state: {
      mission: new Mission({
        name: "Discord Mission",
        category: "discord",
        logo: "toto",
        class: "like-post",
        reward: 20,
        canceled: false,
        initialized: true,
        closeAt: 20,
        parameters: {},
        shortDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque nulla, fermentum sed nulla quis, ornare congue sem.",
        longDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque nulla, fermentum sed nulla quis, ornare congue sem. Nulla facilisi. Sed ultricies ex vel tempor accumsan. Donec sagittis felis tortor, eget viverra mi semper a. Aliquam mauris sapien, pulvinar sit amet mattis at, pretium sit amet urna. Curabitur mauris enim, finibus sed justo in, tristique suscipit felis.",
      }),
    },
  };
};

const twitterState = () => {
  return {
    state: {
      mission: new Mission({
        name: "Twitter Mission",
        category: "twitter",
        logo: "toto",
        class: "like-post",
        reward: 48,
        canceled: false,
        initialized: true,
        closeAt: 20,
        parameters: {},
        shortDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque nulla, fermentum sed nulla quis, ornare congue sem.",
        longDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque nulla, fermentum sed nulla quis, ornare congue sem. Nulla facilisi. Sed ultricies ex vel tempor accumsan. Donec sagittis felis tortor, eget viverra mi semper a. Aliquam mauris sapien, pulvinar sit amet mattis at, pretium sit amet urna. Curabitur mauris enim, finibus sed justo in, tristique suscipit felis.",
      }),
    },
  };
};
</script>

<template>
  <Story
    title="Goodboard/Cards/Mission Card"
    :layout="{ type: 'single', iframe: false }"
  >
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Discord" :initState="discordState">
      <template #default="{ state }">
        <MissionCard v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Twitter" :initState="twitterState">
      <template #default="{ state }">
        <MissionCard v-bind="state.state" />
      </template>
    </Variant>
  </Story>
</template>

<style>
.mission-card-container {
  margin: 1.5rem;
}
</style>
