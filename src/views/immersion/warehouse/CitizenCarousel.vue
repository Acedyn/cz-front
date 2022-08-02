<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import CitizenSlide from "./CitizenSlide.vue";
import type { Citizen } from "../../../legacy/types/citizen";
import CarouselSlide from "./CarouselSlide.vue";
import InventoryButton from "./InventoryButton.vue";
import InventoryMenu from "./InventoryMenu.vue";

const props = defineProps<{
  citizens: Citizen[];
}>();

const globalCommitProgress = ref<[number, number]>([0, 0]);
const root = ref<HTMLDivElement>();
const hoverElement = ref<HTMLElement>();
const leftScroll = ref<HTMLDivElement>();
const rightScroll = ref<HTMLDivElement>();

const mouseDown = ref<boolean>(false);
const dragStart = ref<number>(0);
const selectedCard = ref<number>(0);
const onMobile = false;

const selectCard = (index: number) => {
  const clampedIndex =
    index < 0
      ? 0
      : index >= props.citizens.length
      ? props.citizens.length - 1
      : index;
  if (index < 0 || index > props.citizens.length - 1) {
    selectedCard.value = index;
    setTimeout(() => {
      selectedCard.value = clampedIndex;
    }, 200);
  } else {
    selectedCard.value = clampedIndex;
  }
};

const selectNextCard = () => {
  selectCard(selectedCard.value + 1);
};
const selectPreviousCard = () => {
  selectCard(selectedCard.value - 1);
};

const inventoryVisibility = ref<boolean>(false);

const toggleInventoryVisibility = () => {
  inventoryVisibility.value = !inventoryVisibility.value;
};

const slideSize = ref<[number, number]>([0, 0]);
const computeSlideSize = () => {
  const baseHeight = root.value
    ? root.value.clientHeight
    : window.innerHeight - 150;
  const slideHeight: number = baseHeight * 0.7;
  slideSize.value[0] = slideHeight;
  slideSize.value[1] = slideHeight * 0.6;
};

const handleMouseDown = (e: MouseEvent | TouchEvent) => {
  mouseDown.value = true;
  dragStart.value = "touches" in e ? e.touches[0].clientX : e.clientX;
};

const handleMouseUp = () => {
  mouseDown.value = false;
};

const handleMouseMove = (e: MouseEvent | TouchEvent) => {
  hoverElement.value = e.target as HTMLElement;
  const SWIPE_THRESHOLD = 100;
  if (!mouseDown.value) {
    return;
  }
  const eventPosX = "touches" in e ? e.touches[0].clientX : e.clientX;
  if (dragStart.value - eventPosX > SWIPE_THRESHOLD) {
    selectNextCard();
    mouseDown.value = false;
  } else if (dragStart.value - eventPosX < -SWIPE_THRESHOLD) {
    selectPreviousCard();
    mouseDown.value = false;
  }
};

const handleScroll = (e: WheelEvent) => {
  if (!leftScroll.value || !rightScroll.value) {
    return;
  }
  for (const scollArea of [leftScroll.value, rightScroll.value]) {
    if (scollArea.contains(hoverElement.value as Node)) {
      const SCROLL_THRESHOLD = 80;
      if (e.deltaY > SCROLL_THRESHOLD) {
        selectNextCard();
      } else if (e.deltaY < -SCROLL_THRESHOLD) {
        selectPreviousCard();
      }
    }
  }
};

onMounted(() => {
  computeSlideSize();

  if (props.citizens.length > 5) {
    inventoryVisibility.value = true;
  }

  selectedCard.value = Math.floor(props.citizens.length / 2);
  window.addEventListener("resize", computeSlideSize);

  if ("ontouchstart" in window) {
    window.addEventListener("touchstart", handleMouseDown, { passive: true });
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove);
  } else {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleScroll);
  }
});
onUnmounted(() => {
  window.removeEventListener("resize", computeSlideSize);

  if ("ontouchstart" in window) {
    window.removeEventListener("touchstart", handleMouseDown);
    window.removeEventListener("touchend", handleMouseUp);
    window.removeEventListener("touchmove", handleMouseMove);
  } else {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("wheel", handleScroll);
  }
});
</script>

<template>
  <div class="carousel-container" ref="root">
    <div class="carousel-slider" v-show="!inventoryVisibility">
      <template v-for="(citizen, index) in props.citizens">
        <CarouselSlide
          :index="index - 1"
          :distance="index - selectedCard"
          :height="slideSize[0]"
          :width="slideSize[1]"
          v-if="Math.abs(index - selectedCard) < 5"
        >
          <CitizenSlide :citizen="citizen" />
        </CarouselSlide>
      </template>
    </div>

    <div
      class="control control-left"
      @click="selectPreviousCard"
      ref="leftScroll"
    />
    <div
      class="control control-right"
      @click="selectNextCard"
      ref="rightScroll"
    />

    <div
      tooltip="Shuffle all citizen stories"
      class="disabled global-button global-shuffle"
      v-if="!onMobile"
    ></div>
    <div
      tooltip="Commit all ready citizen's stories 5 by 5"
      class="disabled global-button global-commit"
      v-if="!onMobile"
    >
      <p
        v-if="globalCommitProgress[1] > 0"
        class="commit-progress"
        :style="{ fontSize: '1.8vh' }"
      >
        Transaction {{ globalCommitProgress[0] }} /
        {{ globalCommitProgress[1] }}
      </p>
      <p v-else :style="{ fontSize: '2.2vh' }" class="commit-progress">
        Commit closed
      </p>
    </div>

    <div class="control-buttons" v-if="!onMobile">
      <div class="button-holder holder-previous" @click="selectPreviousCard">
        <div class="previous-button buttons" />
      </div>
      <div class="button-holder holder-next" @click="selectNextCard">
        <div class="next-button buttons" />
      </div>
    </div>
  </div>

  <InventoryButton
    @click="toggleInventoryVisibility"
    :open="inventoryVisibility"
  />
  <InventoryMenu
    :show="inventoryVisibility"
    @exit="() => (inventoryVisibility = false)"
    @select="selectCard"
    :citizens="citizens"
  />
</template>

<style scoped>
.carousel-container {
  min-height: 1px;
  width: 100%;
  height: 100%;
  z-index: 0;
  margin: 0px auto;
  box-sizing: border-box;
  position: relative;
  overflow-y: visible;
  overflow-x: hidden;
}
.carousel-slider {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

.control {
  position: absolute;
  width: 50%;
  top: 0px;
  height: 100%;
  transition: background 0.2s;
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: "BlockHeadUnplugged";
  font-size: 1000%;
}

.control-left {
  left: 0px;
}
.control-left:hover {
  background-image: radial-gradient(
    ellipse at left,
    rgba(0, 0, 0, 40%),
    rgba(0, 0, 0, 0%) 80%
  );
}
.control-right {
  right: 0px;
}
.control-right:hover {
  background-image: radial-gradient(
    ellipse at right,
    rgba(0, 0, 0, 40%),
    rgba(0, 0, 0, 0%) 80%
  );
}

.control-buttons {
  position: absolute;
  right: 0px;
  top: 25%;
  bottom: 25%;
  aspect-ratio: 0.72 / 1;

  background-image: url(@/assets/immersion/warehouse/button_holder.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
}

.buttons {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}

.buttons:hover {
  filter: brightness(80%);
}

.previous-button {
  top: 15%;
  background-image: url(@/assets/immersion/warehouse/button_out_left.png);
}

.next-button {
  bottom: 15%;
  background-image: url(@/assets/immersion/warehouse/button_out_right.png);
}

.button-holder {
  position: absolute;
  left: 25%;
  width: 45%;
  aspect-ratio: 1 / 1;
  padding: 8%;

  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(@/assets/immersion/warehouse/button_square.png);
}

.holder-next {
  bottom: 8%;
}

.holder-next:active .next-button {
  background-image: url(@/assets/immersion/warehouse/button_in_right.png);
}

.holder-previous {
  top: 12%;
}

.holder-previous:active .previous-button {
  background-image: url(@/assets/immersion/warehouse/button_in_left.png);
}

.global-button {
  position: absolute;
  right: 0px;
  transition: 0.1s;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  cursor: default;
}

/* .global-button:hover { */
/*   cursor: pointer; */
/*   filter: brightness(0.8); */
/*   transform: scale(1.02); */
/*   transform-origin: right; */
/* } */

.global-shuffle {
  top: 5%;
  bottom: 80%;
  aspect-ratio: 763 / 326;

  background-image: url(@/assets/immersion/warehouse/button_shuffle.png);
}

.global-commit {
  top: 78%;
  bottom: 2%;
  aspect-ratio: 770 / 431;

  background-image: url(@/assets/immersion/warehouse/button_commit.png);
}

.commit-progress {
  top: 35%;
  bottom: 35%;
  left: 25%;
  right: 15%;
  position: absolute;

  font-size: 3vh;
  text-transform: uppercase;
  font-family: BlockHeadFace;
  color: #4a2d1e;

  display: flex;
  justify-content: center;
  align-items: center;
}

.disabled {
  filter: brightness(0.5);
}

*[tooltip]:before {
  content: attr(tooltip);
  position: relative;
  border-bottom: dotted 1px #000;
  transform: scale(0);
  transition: transform ease-out 100ms;
  background-color: #000;
  color: #fff;
  right: 100%;
  position: absolute;
  border-radius: 5px;
  padding: 5px;

  background: var(--color-text);
  text-transform: uppercase;
  font-weight: bolder;
  color: #efd7bc;
  font-family: BlockHeadUnplugged;
  font-size: 1.5vh;
  min-width: 100%;
  text-align: center;
  top: 20%;
}
*[tooltip]:hover:before {
  transform: scale(1);
}
</style>
