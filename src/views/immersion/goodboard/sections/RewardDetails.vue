<script setup lang="ts">
import CTAButton from "@/components/interaction/CtaButton.vue";
import CounterButton from "@/components/interaction/CounterButton.vue";
import TypographyText from "@/components/utils/TypographyText.vue";
import TypographyTitle from "@/components/utils/TypographyTitle.vue";
import LogoImage from "@/components/atoms/LogoImage.vue";
import { post } from "@/utils/restClient";
import { useAuthStore } from "@/stores/auth";
import { useWallet } from "solana-wallets-vue";

const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    show: boolean;
    price: number;
    count: number;
    type: string;
  }>(),
  {}
);

const emit = defineEmits<{
  (e: "exit"): void;
  (e: "up"): void;
  (e: "down"): void;
}>();

const missionsUrl = `${import.meta.env.VITE_MISSION_API}`;
const { currentUser } = useAuthStore();
const { wallet } = useWallet();

const buyReward = () => {
  if (!wallet.value) {
    return;
  }
  post(
    `${missionsUrl}/rewards/claim/${props.type}?user=${currentUser.data.id}&address=${wallet.value.publicKey}?amount=${props.count}`,
    null
  );
};
</script>

<template>
  <div class="reward-details-container" v-if="props.show">
    <div class="reward-details-top">
      <TypographyTitle
        font="RubikOne"
        class="reward-title"
        color="var(--global-color-paragraph)"
        size="big"
        weight="light"
        >{{ props.title }}</TypographyTitle
      >
      <TypographyText size="big" font="quicksand" weight="light">
        <p v-html="props.description" class="reward-description"></p>
      </TypographyText>
    </div>
    <div class="reward-details-bottom">
      <div class="reward-details-price">
        <TypographyTitle font="Paytone One" color="#F1A54F">
          <label style="font-size: 3.5rem">{{
            props.price * props.count
          }}</label>
        </TypographyTitle>
        <LogoImage type="box_point" :size="2" />
      </div>
      <div class="reward-details-buttons">
        <CounterButton
          :value="props.count"
          :max="10"
          :min="0"
          @up="() => emit('up')"
          @down="() => emit('down')"
        />
        <CTAButton @click="buyReward">
          <div style="display: flex; gap: 1rem; align-items: center">
            <LogoImage type="tools" :size="1.5" />
            <TypographyTitle
              font="quicksand"
              size="small"
              color="var(--global-color-paragraph)"
            >
              <label style="font-size: 2rem">Add to cart</label>
            </TypographyTitle>
          </div>
        </CTAButton>
      </div>
    </div>
  </div>
</template>

<style>
.reward-details-container {
  position: absolute;
  gap: 4rem;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem;
  height: 100%;
  width: 60%;
  z-index: 25;
}

.reward-title {
  text-transform: uppercase;
}

.reward-details-top {
  overflow: auto;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.reward-details-bottom {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.reward-details-buttons {
  align-items: center;
  display: flex;
  gap: 3.5rem;
  flex-wrap: wrap;
}

.reward-details-price {
  align-items: center;
  display: flex;
  gap: 1rem;
}

.reward-description > ul > li {
  margin: 2rem 0;
}
</style>
