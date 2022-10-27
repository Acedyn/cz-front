<script setup lang="ts">
import { ref } from "vue";
import RewardCard from "./cards/RewardCard.vue";
import RewardDetails from "./sections/RewardDetails.vue";
import RewardHeader from "./sections/RewardHeader.vue";
import OverlayPopup from "@/components/popup/OverlayPopup.vue";
import { useI18n } from "vue-i18n";
import locales from "./rewardViewLocales.json";

const { t } = useI18n({
  messages: locales,
});

const rewards = ref([
  {
    type: "solana",
    hue: 10,
    price: 300,
    title: t("rewards.solana.title"),
    description: t("rewards.solana.description"),
    count: 1,
  },
  {
    type: "nft",
    hue: 120,
    price: 100,
    title: t("rewards.nft.title"),
    description: t("rewards.nft.description"),
    count: 1,
  },
  {
    type: "flower",
    hue: 90,
    price: 40,
    title: t("rewards.flower.title"),
    description: t("rewards.flower.description"),
    count: 1,
  },
]);

const getCardRotation = (index: number, max: number) => {
  const angle = 10;
  const rotation =
    angle * (index + 1) - (angle * Math.abs(Math.min(max, 4) + 1)) / 2;
  return `${rotation}deg`;
};

const toggledCard = ref<number | undefined>();
const toggleCard = (index: number) => {
  toggledCard.value = toggledCard.value === index ? undefined : index;
};

const updateCard = (index: number, count: number) => {
  const rewardTemp = rewards.value;
  rewardTemp[index].count += count;
  rewards.value = [...rewardTemp];
};
</script>

<template>
  <div class="goodboard-rewards">
    <RewardHeader />
    <img
      src="@/assets/immersion/scenes/goodboard/scratch.png"
      class="background-image background-scratch"
    />
    <img
      src="@/assets/immersion/scenes/goodboard/coin_01.png"
      class="background-image coin-01"
    />
    <img
      src="@/assets/immersion/scenes/goodboard/coin_02.png"
      class="background-image coin-02"
    />
    <img
      src="@/assets/immersion/scenes/goodboard/coin_03.png"
      class="background-image coin-03"
    />
    <img
      src="@/assets/immersion/scenes/goodboard/coin_04.png"
      class="background-image coin-04"
    />
    <img
      src="@/assets/immersion/scenes/goodboard/coin_paper_01.png"
      class="background-image coin-paper-01"
    />
    <img
      src="@/assets/immersion/scenes/goodboard/coin_paper_02.png"
      class="background-image coin-paper-02"
    />

    <OverlayPopup
      :show="toggledCard !== undefined"
      margin="5rem"
      disableCloseButton
      @exit="() => (toggledCard = undefined)"
    ></OverlayPopup>
    <template v-for="(reward, index) in rewards" :key="index">
      <RewardCard
        :hue="reward.hue"
        :type="reward.type"
        :size="toggledCard === index ? 26 : 16.5"
        :class="`reward-card ${toggledCard === index ? 'selected-card' : ''}`"
        :style="`--card-stack-rotation: ${getCardRotation(
          index,
          rewards.length
        )}`"
        :active="toggledCard === index"
        @click="() => toggleCard(index)"
        :stack="reward.count"
      />
      <RewardDetails
        class="reward-details"
        :type="reward.type"
        :title="reward.title"
        :description="reward.description"
        :show="toggledCard === index"
        :count="reward.count"
        :price="reward.price"
        @up="() => updateCard(index, 1)"
        @down="() => updateCard(index, -1)"
      />
    </template>
  </div>
</template>

<style scoped>
.goodboard-rewards {
  background: radial-gradient(
    76.99% 76.99% at 50% 53.41%,
    #925637 0%,
    #925637 0.01%,
    #411f12 100%
  );
  overflow: hidden;
}

.reward-card {
  position: absolute;
  left: 50%;
  top: 60%;
  translate: -50% -50%;
  rotate: var(--card-stack-rotation);
  transform-origin: center 500%;
  transition: 0.4s cubic-bezier(0.6, -0.2, 0.4, 1.2);
  cursor: pointer;
  z-index: 2;
}

.selected-card {
  cursor: auto;
  left: 5%;
  translate: 0% -50%;
  top: 50%;
  rotate: 0deg;
  z-index: 20;
}

.background-image {
  position: absolute;
}

.coin-01 {
  bottom: 40%;
  right: 5%;
  height: 15%;
  width: auto;
}

.coin-02 {
  bottom: 30%;
  left: 10%;
  height: 15%;
  width: auto;
}

.coin-03 {
  bottom: -5%;
  left: 0;
  height: 30%;
  width: auto;
}

.coin-04 {
  bottom: 0;
  right: 0;
  height: 30%;
  width: auto;
}

.coin-paper-01 {
  top: 15%;
  left: -2%;
  height: 30%;
  width: auto;
}

.coin-paper-02 {
  top: 15%;
  right: -1%;
  height: 30%;
  width: auto;
}

.background-scratch {
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
