<script setup lang="ts">
import TypographyText from "../../../../components/utils/TypographyText.vue";
import LogoImage from "../../../../components/atoms/LogoImage.vue";
import StickerButton from "../../../../components/interaction/StickerButton.vue";
import CloseButton from "@/components/interaction/CloseButton.vue";

import type Mission from "../../../../types/mission";

const props = withDefaults(
  defineProps<{
    mission: Mission;
  }>(),
  {}
);

const emit = defineEmits<{ (e: "handleClose"): void }>();

const handleClose = () => {
  emit("handleClose");
};
</script>

<template>
  <div class="mission-detail-container">
    <div class="content">
      <TypographyText class="title" font="Paytone One" size="big" weight="bold">
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
            <p class="mission-stats">{{ "1D 12H" }}</p>
          </TypographyText>
        </div>
        <div>
          <LogoImage type="box_point" :size="2" />
          <TypographyText font="RubikOne" size="big" weight="bold">
            <p class="mission-stats">{{ "20 BP" }}</p>
          </TypographyText>
        </div>
      </div>
      <StickerButton
        class="cta-button"
        :hue="props.mission.getColors().hue"
        style="width: 80%; align-self: center"
      >
        <label style="font-size: 1.5rem">LEARN MORE</label>
      </StickerButton>
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
  max-width: 30rem;
  border: 0;
  padding: 1.5rem 0;
}

.cta-text label {
  font-size: 2rem;
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
</style>
