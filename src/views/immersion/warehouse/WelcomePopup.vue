<script setup lang="ts">
import OverlayPopup from "@/components/overlay-popup/OverlayPopup.vue"
</script>

<template>
  <div class="popup-backdrop" />
  <div class="popup-container">
    <transition name="appear" appear>
      <div class="floating">
        <img class="banner-img" src="@/assets/warehouse/welcome_popup.jpg" />
        <div class="details-container">
          <div class="border-container">
            <div class="welcome">
              <p class="title">Welcome to</p>
              <p class="title">the Warehouse</p>
            </div>
            <div class="slot-container">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.popup-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 40%);
  z-index: 5;

  pointer-events: none;
}

.popup-container {
  overflow: hidden;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0% auto;

  position: relative;
  z-index: 6;
  width: 80%;
}

.floating {
  width: 90%;
  height: 100%;
  box-shadow: 0 5px 20px 5px #0000007f;
  background-image: url(@/assets/images/doodles.png);
  background-repeat: repeat;
  background-size: 500px;
}

.banner-img {
  width: 100%;
  height: 100%;
  max-height: 40vh;
  object-fit: cover;
  border-radius: 5px;
}

.details-container {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 70%);
  border-radius: 3px;
  padding: 3px;
  width: 100%;
}

.border-container {
  min-height: 250px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  flex-direction: row;
  position: relative;
  border: 5px solid transparent;
  border-radius: 2px;
  border-image: url(@/assets/dots/dots_2-1.png) 20 round;
  padding: 5px;
  width: 100%;
}

.appear-enter-active {
  animation: fadeInUp 0.3s;
}
.appear-leave-active {
  transition: opacity 0.9s;
}
.appear-leave-to {
  opacity: 0;
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  color: #efd7bc;
  font-family: "BlockHeadFace";
  font-size: calc(var(--text-extra-large) * 1.2);
  text-transform: uppercase;
  margin: 5px;
  padding: 2px 10px;
  width: fit-content;
  border-radius: 5px;
  border: solid 2px;
}

.slot-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0% 5%;
}

@media screen and (max-width: 640px) {
  .border-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
