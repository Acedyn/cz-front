<script setup lang="ts">
import { computed } from "vue";
import TypographyText from "../../../../components/utils/TypographyText.vue";
import LogoImage from "../../../../components/atoms/LogoImage.vue";
import StickerButton from "../../../../components/interaction/StickerButton.vue";
import CloseButton from "@/components/interaction/CloseButton.vue";
import { validateMission } from "@/types/mission";

import type Mission from "../../../../types/mission";

const props = withDefaults(
  defineProps<{
    mission: Mission;
  }>(),
  {}
);

const emit = defineEmits<{
  (e: "participate"): void;
  (e: "claim"): void;
  (e: "handleClose"): void;
}>();

const deadline = computed(() => {
  const closeDate = props.mission.data.closeAt?.getTime() || Date.now();
  const difference = new Date(closeDate - Date.now());
  return `${difference.getDate()}D ${difference.getHours()}H`;
});

const handleClose = () => {
  emit("handleClose");
};

const participateMission = () => {
  emit("participate");
  if (props.mission.data.parameters?.link) {
    const w = window.open(props.mission.data.parameters.link, "_blank");
    if (w) w.focus();
  }
};

const claimMission = async () => {
  await validateMission(props.mission);
  setTimeout(() => {
    emit("claim");
    handleClose();
  }, 1000);
};
</script>

<template>
  <transition appear>
    <div class="mission-detail-container">
      <div class="content">
        <TypographyText
          class="title"
          font="Paytone One"
          size="big"
          weight="bold"
        >
          <h3>{{ props.mission.data.name }}</h3>
        </TypographyText>
        <div class="mini-image">
          <CloseButton class="close-button" size="30px" @click="handleClose" />
          <img :src="props.mission.data.image" alt="mission image" />
        </div>
        <TypographyText font="Marvel" size="regular" weight="light">
          <p class="description">{{ props.mission.data.longDescription }}</p>
        </TypographyText>
        <div class="timer-point">
          <div>
            <LogoImage type="time_watch" :size="2" />
            <TypographyText font="RubikOne" size="big" weight="bold">
              <p class="mission-stats">{{ deadline }}</p>
            </TypographyText>
          </div>
          <div>
            <LogoImage type="box_point" :size="2" />
            <TypographyText font="RubikOne" size="big" weight="bold">
              <p class="mission-stats">
                {{ `${props.mission.data.reward} BP` }}
              </p>
            </TypographyText>
          </div>
        </div>
        <div class="buttons-row">
          <StickerButton
            class="cta-button"
            :hue="props.mission.getColors().hue"
            @click="participateMission"
            v-if="props.mission.data.parameters?.link"
          >
            <label style="font-size: 1.5rem">PARTICIPATE</label>
          </StickerButton>
          <StickerButton
            class="cta-button"
            :hue="props.mission.getColors().hue"
            @click="claimMission"
          >
            <label style="font-size: 1.5rem">CLAIM REWARD</label>
          </StickerButton>
        </div>
      </div>
      <div class="image">
        <CloseButton
          class="close-button"
          size="30px"
          @click="handleClose"
          colorLine="#530f03"
          colorBD="var(--global-color-primary)"
        />
        <img :src="props.mission.data.image" alt="mission image" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.mission-detail-container {
  display: flex;
  gap: 3rem;
  padding: 3rem;
  border-width: 20px;
  border-style: solid;
  border-image-source: url("/src/assets/goodboard/mission_card_detail.png");
  border-image-repeat: round;
  border-image-slice: 60 fill;
  height: fit-content;
  margin-block: auto;
  min-height: 70vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 50%;
}

.title h3 {
  font-size: 3.75rem;
  text-decoration: underline var(--global-color-paragraph);
}

.timer-point {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timer-point div {
  display: flex;
  gap: 1rem;
}

.timer-point p {
  align-self: center;
}

.image .mini-image {
  background-color: #3f1103;
  border: 6px solid #ffd3ba;
  border-radius: 8px;
}

.image {
  display: block;
  width: 50%;
}

.image img {
  height: 100%;
  width: 100%;
  position: absolute;
  border: solid var(--global-color-primary) 0.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
}

.mission-stats {
  font-size: 2.25rem;
}

.mini-image {
  display: none;
  width: 100%;
}

.description {
  font-style: italic;
  font-size: 1.5rem;
}

.cta-button {
  max-width: 25rem;
  width: 100%;
  cursor: pointer;
  border: 0;
  padding: 1.5rem 0;
}

.cta-text label {
  font-size: 2rem;
}

.buttons-row {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.close-button {
  z-index: 20;
  position: absolute;
  top: 0;
  right: 0;
}

@media only screen and (max-width: 767px) {
  .title {
    text-align: center;
  }

  .image {
    display: none;
  }
  .content {
    width: 100%;
  }
  .mini-image {
    display: block;
    width: 100%;
  }
  .mini-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}

.v-enter-active,
.v-leave-active {
  animation: bounce-in 0.5s;
}

@keyframes pulse {
  from {
    scale: 1;
  }

  50% {
    scale: 1.05;
  }

  to {
    scale: 1;
  }
}
</style>
