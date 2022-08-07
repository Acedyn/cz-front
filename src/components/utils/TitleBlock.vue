<script setup lang="ts">
import { ref, onMounted } from "vue";
import TypographyTitle from "./TypographyTitle.vue";
import TypographyText from "./TypographyText.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    titleSize?: "small" | "regular" | "big";
    titleWordSize?: string;
    titleAnimation?: "words-slide-left" | "words-slide-right";
    titleLevel?: number;
    titleColor?: string;
    textSize?: "small" | "regular" | "big";
    textAlign?: "center" | "justify" | "left" | "right";
    textColor?: string;
    textAnimation?: "slide-up";
    maxWidth?: string;
    gap?: string;
    quotes?: boolean;
  }>(),
  {
    textAlign: "center",
    gap: "1.063rem",
    textSize: "big",
    titleSize: "big",
    titleLevel: 2,
  }
);

const root = ref<Element>();

onMounted(() => {
  if (!root.value) {
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`animation-${props.titleAnimation}`);
        entry.target.classList.add(`animation-${props.textAnimation}`);
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove(`animation-${props.titleAnimation}`);
        entry.target.classList.remove(`animation-${props.textAnimation}`);
      }
    });
  });

  // Tell the observer which elements to track
  observer.observe(root.value);
});
</script>

<template>
  <div class="title-block" ref="root">
    <TypographyTitle
      :size="props.titleSize"
      :level="props.titleLevel"
      :color="props.titleColor"
      :quotes="props.quotes"
    >
      <span
        v-for="(titleWord, index) in props.title.split(' ')"
        :key="index"
        :style="`--i:${index}`"
        :class="`title-words idle-${props.titleAnimation}`"
        >{{ titleWord + " " }}</span
      >
    </TypographyTitle>
    <TypographyText
      :size="props.textSize"
      :class="`details-text idle-${props.textAnimation}`"
      :color="props.textColor"
    >
      <slot />
    </TypographyText>
  </div>
</template>

<style scoped>
.title-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: v-bind("props.gap");
  max-width: v-bind("props.maxWidth");
  text-align: v-bind("props.textAlign");
}

.title-words {
  font-weight: inherit;
  font-size: v-bind("props.titleWordSize || 'inherit'");
}

.idle-words-slide-left {
  opacity: 0;
}

.animation-words-slide-left .title-words {
  margin: 0 0.4rem;
  display: inline-block;
  animation: words-slide-left 0.6s;
  animation-delay: calc(0.1s * var(--i));
  animation-fill-mode: forwards;
}

@keyframes words-slide-left {
  0% {
    transform: translateX(200%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.idle-words-slide-right {
  opacity: 0;
}

.animation-words-slide-right .title-words {
  margin: 0 0.4rem;
  display: inline-block;
  animation: words-slide-right 0.6s;
  animation-delay: calc(0.1s * var(--i));
  animation-fill-mode: forwards;
}

@keyframes words-slide-right {
  0% {
    transform: translateX(-200%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.idle-slide-up {
  opacity: 0;
}

.animation-slide-up .details-text {
  display: inline-block;
  animation: slide-up 0.4s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
