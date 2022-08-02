<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    name: string;
    visible?: boolean;
  }>(),
  {
    visible: true,
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const cardTranslate = computed(() =>
  props.visible ? "translateY(10%)" : "translateY(40%)"
);
</script>

<template>
  <div
    class="nft-holder-container"
    @click="
      () => {
        emit('click');
      }
    "
  >
    <div class="card">
      <div class="card-slot">
        <slot />
      </div>
    </div>
    <div class="holder">
      <img
        class="holder-image"
        src="@/assets/immersion/warehouse/holder_base.png"
        rel="preload"
      />
      <div class="profile-name">
        <svg preserveAspectRatio="none" viewBox="0 0 300 100" class="svg-name">
          <text
            x="50%"
            y="50%"
            lengthAdjust="spacingAndGlyphs"
            textLength="300"
            text-anchor="middle"
            class="svg-center"
          >
            {{ props.name }}
          </text>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nft-holder-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.nft-holder-container:hover .card-slot {
  transform: translateY(2%);
}

.nft-holder-container:hover {
  cursor: pointer;
}

.card {
  width: 100%;
  overflow: hidden;
}

.card-slot {
  width: 100%;
  height: 300%;
  transform: v-bind("cardTranslate");
  transition: 0.1s ease-out;
}

.holder {
  width: 100%;
  position: relative;
}

.holder-image {
  object-fit: contain;
  width: 100%;
}

.profile-name {
  position: absolute;

  top: 10%;
  bottom: 75%;
  left: 18%;
  right: 18%;

  text-transform: uppercase;
  font-family: BlockHeadSide;
  font-size: 100%;
  text-align: center;

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
</style>
