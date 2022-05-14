<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import NavigationButton from "./NavigationButton.vue";
import SocialButton from "./SocialButton.vue";
import MobileMenu from "./MobileMenu.vue";

import discord from "../../assets/logos/discord.svg";
import twitter from "../../assets/logos/twitter.svg";


const desktopMode = ref(true)
const refresh = () => {
  window.location.reload();
}
const checkWindowSize = () => {
  desktopMode.value = window.innerWidth > 1000;
}

onMounted(() => {
  checkWindowSize()
  window.addEventListener("resize", checkWindowSize);
})

onUnmounted(() => {
  window.removeEventListener("resize", checkWindowSize);
})

const socialNetworks = ref([
  {
    image: twitter,
    link: "https://twitter.com/CardboardCtzNFT",
  },
  {
    image: discord,
    link: "https://discord.com/invite/6M4C2dGzWc",
  },
])
const navigations = ref([
  {
    route: "/",
    title: "home",
    soon: false
  },
  {
    route: "",
    title: "warehouse",
    soon: true
  },
  {
    route: "/billoflading",
    title: "bill of lading",
    soon: false
  },
  {
    route: "/team",
    title: "team",
    soon: false
  },
  {
    route: "",
    title: "boutique",
    soon: true
  },
  {
    route: "",
    title: "break room",
    soon: true
  },
]);
</script>

<template>
  <div class="wrapper">
    <button id="main-logo" @click="refresh">
      <img class="cardboard-logo" src="../../assets/logos/brand_logo.png" />
    </button>

    <nav class="desktop-nav" v-if="desktopMode">
      <RouterLink
        class="link"
        v-for="navigation in navigations"
        :key="navigation.route"
        :to="navigation.route"
        ><NavigationButton :title="navigation.title" :soon="navigation.soon"
      /></RouterLink>
      <SocialButton
        class="link"
        v-for="socialNetwork in socialNetworks"
        :src="socialNetwork.image"
        :link="socialNetwork.link"
      />
    </nav>
    <MobileMenu v-else/>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#main-logo {
  margin: 0px;
  padding: 0px;
  border: 0px;
  background: transparent;
}

.cardboard-logo {
  height: 10em;
  transition: 0.2s;
}

.cardboard-logo:hover {
  filter: sepia(8%) saturate(100%) brightness(150%);
  transform: scale(1.02);
}

.desktop-nav {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.link {
  height: 35px;
}

@media screen and (max-width: 640px) {
  .cardboard-logo {
    height: 7em;
  }
}
</style>
