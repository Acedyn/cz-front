<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import Ranking from "../../../src/components/interaction/Ranking.vue";

import User from "../../../src/types/user";

const genericState = () => {
  return {
    state: {
      user: new User({
        name: "Cardboard",
        image: "/src/assets/landing/profile/01.png",
      }),
      rank: "20",
    },
  };
};
</script>

<template>
  <Story title="Global/Interaction/User Rank">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Default" :initState="genericState">
      <template #default="{ state }">
        <Ranking v-bind="state.state" />
      </template>
    </Variant>
  </Story>
</template>
