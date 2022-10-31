<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type: string;
    size?: number;
    hue?: number;
    active?: boolean;
    stack?: number;
  }>(),
  {
    size: 1,
    active: false,
    hue: 0,
    stack: 1,
  }
);

const imageUrl = computed(
  () =>
    new URL(`/src/assets/goodboard/reward_${props.type}.png`, import.meta.url)
      .href
);

const cardDisplayCount = computed(() => {
  return Math.max(Math.min(props.stack, props.active ? 4 : 1), 1);
});

const getCardRotation = (index: number) => {
  const angle = 10;
  return `${-(
    angle * index -
    (angle * Math.abs(Math.min(cardDisplayCount.value, 4) + 1)) / 2
  )}deg`;
};
</script>

<template>
  <div class="reward-top-parent">
    <div class="reward-container">
      <TransitionGroup>
        <img
          class="reward-image"
          :src="imageUrl"
          v-for="index in cardDisplayCount"
          :key="index"
          :style="`--card-rotation: ${getCardRotation(index)}; --card-index: ${
            4 - index
          }`"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style>
.reward-container {
  height: v-bind("`${props.size * 2}rem`");
  width: v-bind("`${props.size * 2 * 0.68}rem`");
  transition: 0.5s ease-in-out;
  filter: drop-shadow(0px 24px 12px rgba(0, 0, 0, 0.4));
}

.reward-image {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: var(--card-index);
  rotate: var(--card-rotation);
  transform-origin: center 100%;
  transition: 0.1s all cubic-bezier(0.52, -0.27, 0.66, 1.23);
}
.reward-container:after {
  content: "";
  position: absolute;
  inset: v-bind("props.active ? '-20%' : '-30%'");
  filter: v-bind("`hue-rotate(${props.hue}deg)`");
  background: url("@/assets/goodboard/reward_halo.png");
  background-size: 100% 90%;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.2s ease-out;
  opacity: 0;
  pointer-events: none;
}

.reward-top-parent:hover > .reward-container:after {
  opacity: v-bind("props.active ? '0' : '1'");
  animation-fill-mode: forwards;
  animation-name: bounceHalo;
  animation-duration: 0.8s;
  animation-delay: 0.05s;
  transition: 0.2s cubic-bezier(0.74, -0.14, 0.44, 1.51);
}

.reward-top-parent:hover > .reward-container {
  filter: drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.3));
  animation-fill-mode: forwards;
  animation-name: v-bind("props.active ? '' : 'bounceCard'");
  animation-duration: 0.8s;
}

@keyframes bounceCard {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    scale: 1;
  }

  20% {
    scale: 1.3;
  }

  40% {
    scale: 1.15;
  }

  60% {
    scale: 1.31;
  }

  80% {
    scale: 1.29;
  }

  to {
    scale: 1.3;
  }
}

@keyframes bounceHalo {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    scale: 1;
  }

  20% {
    scale: 1.1;
  }

  40% {
    scale: 0.95;
  }

  60% {
    scale: 1.02;
  }

  80% {
    scale: 0.98;
  }

  to {
    scale: 1;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
