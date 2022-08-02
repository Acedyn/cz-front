<script setup lang="ts">
import { computed } from "vue";
import type { Citizen } from "../../../legacy/types/citizen";

const props = defineProps<{
  citizen: Citizen;
}>();

const pictureRotation = computed(() => Math.random() * 5 + 1);
</script>

<template>
  <div class="nft-card-container">
    <div class="picture profile-container">
      <transition name="appear" appear>
        <div class="approved-stamp" v-if="props.citizen.commited">
          <img
            class="stamp-picture"
            src="@/assets/immersion/warehouse/approved_stamp.png"
          />
        </div>
      </transition>
      <div class="center-profile">
        <img class="profile" :src="props.citizen.image" />
        <div class="profile-name">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 300 100"
            class="svg-name"
          >
            <text
              x="50%"
              y="50%"
              lengthAdjust="spacingAndGlyphs"
              textLength="300"
              text-anchor="middle"
              class="svg-center"
            >
              {{ citizen.name }}
            </text>
          </svg>
        </div>
      </div>
      <img
        class="picture pin"
        src="@/assets/immersion/warehouse/card_pin.png"
      />
    </div>
    <div class="card-content">
      <div class="content-slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.nft-card-container {
  width: 100%;
  height: 100%;
  max-width: 70vw;
  max-height: calc(100vw * 1.15);
  margin-left: auto;
  margin-right: auto;

  background-image: url(@/assets/immersion/warehouse/nft_card.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  display: flex;
  flex-direction: column;
}

.picture {
  object-fit: contain;
  width: 100%;
  z-index: 1;
}

.pin {
  position: absolute;
  right: 20%;
  top: -8%;
  height: 30%;
}

.center-profile {
  width: 65%;
}

.profile-container {
  margin-top: 5%;
  transform: v-bind("`rotate(${pictureRotation}deg)`");
  transform-origin: 35% 8%;
  transition: transform 0.2s ease-out;
  display: flex;
  justify-content: center;
}

.profile {
  height: auto;
  width: 100%;
  box-shadow: 0px 0px 6px black;
}

.nft-card-container:hover .profile-container {
  transform: rotate(0deg);
}

.card-content {
  height: 100%;
  padding-left: 8%;
  padding-right: 8%;
  overflow: hidden;
}

.content-slot {
  padding: 2%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.profile-name {
  position: absolute;
  top: 83%;
  bottom: 2%;
  left: 10%;
  right: 10%;
  padding: 0 2%;

  text-transform: uppercase;
  font-family: BlockHeadSide;
  font-size: 100%;
  text-align: center;

  background-color: #d9d9d9;
  border: solid 2px #b6b6b6;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 40%);
  transform: v-bind("`rotate(${Math.random()*8-4}deg)`");
  display: flex;
}

.svg-name {
  width: 100%;
  height: 100%;
}

.svg-center {
  transform: scaleY(5) translateY(5%);
  transform-origin: center center;
}

.approved-stamp {
  position: absolute;
  width: 50%;
  z-index: 2;
  right: 5%;
  top: -5%;
}

.stamp-picture {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.appear-enter-active,
.appear-leave-active {
  transition: transform 0.1s ease-in;
}
.appear-enter-from,
.appear-leave-to {
  transform: scale(0);
}
</style>
