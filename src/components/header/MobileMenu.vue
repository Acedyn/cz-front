<script lang="ts">
import router from '../../router/'
export default {
  methods: {
    openNav() {
      const nav = document.getElementById("myNav");
      if (nav) {
        nav.style.width = "100%";
      }
    },
    closeNav() {
      const nav = document.getElementById("myNav");
      if (nav) {
        nav.style.width = "0%";
      }
    },
    click(element: string) {
      this.closeNav()
      router.push(element)
    }
  },
};
</script>

<template>
  <div id="myNav" class="overlay">
    <div class="overlay-content">
      <div>
      <button class="button enabled" @click="click('/')">Home</button>
      <button class="button disabled">Warehouse</button>
      <button class="button enabled" @click="click('/roadmap')">Bill of Lading</button>
      <button class="button enabled" @click="click('/team')">Team</button>
      <button class="button disabled">Boutique</button>
      <button class="button disabled">Break Room</button>
      </div>
      <div class="social">
        <a href="https://twitter.com/CardboardCtzNFT"><img src="../../assets/logos/twitter.svg"></a>
        <a><img src="../../assets/logos/discord.svg"></a>
      </div>
    </div>
  </div>

  <div @click="openNav" class="hamburger">
    <div class="top-bun"></div>
    <div class="meat"></div>
    <div class="bottom-bun"></div>
  </div>
</template>

<style scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.3s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 100%; /* 100% width */
  height: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
}

.overlay .button {
  padding: 8px;
  font-family: BlockHeadFace;
  text-decoration: none;
  line-height: 40px;
  font-size: 45px;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

.disabled {
  color: #373737;
}

.enabled {
  color: #818181;
}

.overlay .enabled:hover,
.overlay .enabled:focus {
  color: #f1f1f1;
}

button{
  margin: 20px 0px;
  padding: 0px;
  border: 0px;
  background: transparent;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}

@media screen and (max-height: 500px) {
  .overlay .button {
    font-size: 30px;
    line-height: 10px;
  }
}

.hamburger {
  position: absolute;
  top: 5em;
  right: 2em;
  margin-left: -2em;
  margin-top: -45px;
  width: 3em;
  height: 45px;
  transition: 0.2s;
}

.hamburger:hover {
  filter: sepia(8%) saturate(100%) brightness(150%);
}

.hamburger div {
  position: relative;
  width: 100%;
  height: 7px;
  border-radius: 2px;
  background-color: #503d2d;
  margin-top: 4px;
  transition: all 0.3s ease-in-out;
}

.social {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

img {
  height: 5vh;
}
</style>
