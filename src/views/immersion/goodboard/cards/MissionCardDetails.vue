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

const emit = defineEmits<{(e: "handleClose"): void }>()

const handleClose = () => {
  emit("handleClose");
};
</script>

<template>
  <div class="mission-detail-container">
    <div class="content">
      <TypographyText class="title" font="Paytone One" size="big" weight="bold">
        <p>{{ props.mission.data.name }}</p>
      </TypographyText>
      <div class="mini-image">
        <CloseButton class="close-button" size="30px" @click="handleClose" />
        <img :src="props.mission.data.image" alt="mission image" />
      </div>
      <TypographyText font="Marvel" size="regular" weight="light">
        {{ props.mission.data.longDescription }}
      </TypographyText>
      <div class="timer-point">
        <div>
          <LogoImage type="time_watch" :size="2" />
          <TypographyText font="RubikOne" size="big" weight="bold">
            <p>{{ "1D 12H" }}</p>
          </TypographyText>
        </div>
        <div>
          <LogoImage type="box_point" :size="2" />
          <TypographyText font="RubikOne" size="big" weight="bold">
            <p>{{ "20 BP" }}</p>
          </TypographyText>
        </div>
      </div>
      <StickerButton
        class="cta-button"
        :hue="props.mission.getColors().hue"
        style="width: 80%; align-self: center"
      >
        {{ "LEARN MORE" }}
      </StickerButton>
    </div>
    <div class="image">
      <CloseButton class="close-button" size="30px" @click="handleClose"/>
      <img :src="props.mission.data.image" alt="mission image" />
    </div>
  </div>
</template>

<style scoped>
.mission-detail-container {
  display: flex;
  gap: 1rem;
  padding: 3rem;
  background-image: url("/src/assets/goodboard/mission_card_detail.png");
  background-size: 100% 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
  width: 50%;
}

.title p {
  font-size: 2.5rem;
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
}

.mini-image {
  display: none;
  width: 100%;
}

.cta-button {
  border: 0;
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
