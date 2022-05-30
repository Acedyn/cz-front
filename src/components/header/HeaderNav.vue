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

const isMobile = window.mobileAndTabletCheck();

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
    link: import.meta.env.VITE_CZ_TWITTER,
  },
  {
    image: discord,
    link: import.meta.env.VITE_CZ_DISCORD,
  },
])
const navigations = ref([
  {
    route: "/",
    title: "home",
    soon: false
  },
  {
    route: "/warehouse",
    title: "warehouse",
    soon: false
  },
  {
    route: "/bill-of-lading",
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
  <header class="header-container">
    <div class="header-content">
      <router-link to="/" id="main-logo">
        <img class="cardboard-logo" src="../../assets/logos/brand_logo.png" />
      </router-link>

      <nav class="desktop-nav" v-if="desktopMode && !($route.path === '/')">
        <RouterLink class="link" v-for="navigation in navigations" :key="navigation.route" :to="navigation.route">
          <NavigationButton :title="navigation.title" :soon="navigation.soon" />
        </RouterLink>
        <SocialButton class="link" v-for="socialNetwork in socialNetworks" :src="socialNetwork.image"
          :link="socialNetwork.link" />
      </nav>

      <MobileMenu v-else-if="!desktopMode" />
    </div>
  </header>
</template>

<style scoped>
.header-container {
  position: relative;
  z-index: 1;
  width: v-bind("(desktopMode && $route.path === '/') ? '' : '100%'");
  display: inline-block;
}

.header-content {

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

#main-logo {
  margin: 0px;
  padding: 0px;
  border: 0px;
  background: transparent;
}

.cardboard-logo {
  cursor: pointer;
  height: 8em;
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
