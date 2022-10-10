<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import NewsCard from "../../../src/views/immersion/goodboard/cards/NewsCard.vue";
import News from "../../../src/types/news";
import User from "../../../src/types/user";

const defaultState = () => {
  return {
    state: {
      news: new News({
        title: "How To Make A News On Cardboard Citizens",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        createdAt: 1640975400000,
        logo: "/src/assets/landing/profile/04.png",
        image: "/src/assets/landing/profile/02.png",
        users: [
          new User({
            name: "John",
            image: "/src/assets/landing/profile/01.png",
          }),
          new User({
            name: "Jane",
            image: "/src/assets/landing/profile/02.png",
          }),
          new User({
            name: "Lua",
            image: "/src/assets/landing/profile/03.png",
          }),
        ],
      }),
      type: "default",
      showImage: true,
      showFooter: true,
    },
  };
};

const discordState = () => {
  return {
    state: {
      news: new News({
        title: "How To Make A News On Cardboard Citizens",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        createdAt: 1640975400000,
        logo: "/src/assets/landing/profile/01.png",
        image: "/src/assets/landing/profile/04.png",
        users: [
          new User({
            name: "John",
            image: "/src/assets/landing/profile/01.png",
          }),
          new User({
            name: "Jane",
            image: "/src/assets/landing/profile/02.png",
          }),
          new User({
            name: "Lua",
            image: "/src/assets/landing/profile/03.png",
          }),
        ],
      }),
      type: "discord",
      showImage: true,
      showFooter: true,
      textColor: "white",
    },
  };
};
</script>

<template>
  <Story
    title="Goodboard/Cards/News Card"
    :layout="{ type: 'single', iframe: false }"
  >
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Default" :initState="defaultState">
      <template #default="{ state }">
        <NewsCard v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Discord" :initState="discordState">
      <template #default="{ state }">
        <NewsCard v-bind="state.state" />
      </template>
    </Variant>
  </Story>
</template>

<style>
.mission-card-container {
  margin: 1.5rem;
}
</style>
