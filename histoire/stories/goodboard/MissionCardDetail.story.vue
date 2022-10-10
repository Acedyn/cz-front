<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import MissionCardDetails from "../../../src/views/immersion/goodboard/cards/MissionCardDetails.vue";

import Mission from "../../../src/types/mission";

const defaultState = () => {
  return {
    state: {
      mission: new Mission({
        name: "RAID TWITTER",
        shortDescription:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        longDescription:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        category: "",
        logo: "",
        class: "",
        reward: 10,
        canceled: false,
        initialized: false,
      }),
      image: "/src/assets/landing/profile/01.png",
    },
  };
};
</script>

<template>
  <story title="Goodboard/Cards/Mission Card Details">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>
    <variant title="Mission Card Detail" :initState="defaultState">
      <template #default="{ state }">
        <MissionCardDetails v-bind="state.state"></MissionCardDetails>
      </template>
    </variant>
  </story>
</template>
