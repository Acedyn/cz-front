<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import RankingCard from "../../../src/views/immersion/goodboard/cards/RankingCard.vue";

import User from "../../../src/types/user";

const genericState = () => {
  return {
    state: {
      items: [
        {
          id: 1,
          user: new User({
            name: "cardboard",
            image: "/src/assets/landing/profile/01.png",
          }),
          rank: 19,
        },
        {
          id: 2,
          user: new User({
            name: "cardboard",
            image: "/src/assets/landing/profile/02.png",
          }),
          rank: 20,
        },
        {
          id: 3,
          user: new User({
            name: "cardboard",
            image: "/src/assets/landing/profile/03.png",
          }),
          rank: 21,
        },
        {
          id: 4,
          user: new User({
            name: "cardboard",
            image: "/src/assets/landing/profile/04.png",
          }),
          rank: 22,
        },
        {
          id: 5,
          user: new User({
            name: "cardboard",
            image: "/src/assets/landing/profile/05.png",
          }),
          rank: 23,
        },
        {
          id: 6,
          user: new User({
            name: "cardboard",
            image: "/src/assets/landing/profile/06.png",
          }),
          rank: 24,
        },
        {
          id: 7,
          user: new User({
            name: "cardboard",
            image: "/src/assets/landing/profile/07.png",
          }),
          rank: 25,
        },
      ],
    },
  };
};
</script>

<template>
  <Story title="Goodboard/Cards/Ranking Card">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>
    <variant title="default" :initState="genericState">
      <template #default="{ state }">
        <RankingCard v-bind="state.state" />
      </template>
    </variant>
  </Story>
</template>
