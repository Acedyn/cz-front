<script setup lang="ts">
import { ref } from "vue";
import TeamCard from "../components/cards/TeamCard.vue";

import serge from "../assets/profiles/serge.jpg";
import steven from "../assets/profiles/steven.jpg";
import kodaz from "../assets/profiles/kodaz.jpg";
import willie from "../assets/profiles/willie.jpg";

const members = ref([
  {
    name: "Willie, Co-Founder",
    description: "With an engineer background, Willie is a becoming leader in developing project and community in Web3.  Decided to group his childhood friends to make something great !",
    image: willie,
    social: "https://twitter.com/willie_ctz",
  },
  {
    name: "Steven, Co-Founder",
    description: "Steven brings a range of knowledge as an artist. Specialized in 3d and video game development, his singular art characterizes our strength. He is passionate about comics",
    image: steven,
    social: "https://twitter.com/StevenBoxy",
  },
  {
    name: "Kodaz, Illustrator",
    description: "Experienced graphic designer, Kodaz has a deep interest in characters illustration. Always writing stories on his books",
    image: kodaz,
    social: "https://twitter.com/KodazTheGreat",
  },
  {
    name: "Serge, Full-stack dev",
    description: "A deeply experienced web developper,  Serge codes as he breathes. always looking for innovation, he has not finished to surprise you",
    social: undefined,
    image: serge,
  },
]);
</script>

<template>
  <h2>Team</h2>

  <div class="team-presentation">
    <TeamCard
      v-for="member in members"
      :name="member.name"
      :src="member.image"
      :description="member.description"
      social="member.social"
    />
  </div>
</template>

<style scoped>
.team-presentation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
}

h2 {
  font-family: BlockHeadFace;
  font-size: 70px;
  line-height: 70px;
  color: #503d2d;
  font-weight: lighter;
  text-align: left;
  margin: 20px 4vw;
}
</style>
