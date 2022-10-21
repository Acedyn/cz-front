<script setup lang="ts">
import TypographyText from "../../../../components/utils/TypographyText.vue";
import TypographyDropShadow from "../../../../components/utils/TypographyDropShadow.vue";
import CategoryTag from "../../../../components/atoms/CategoryTag.vue";
import StickerButton from "../../../../components/interaction/StickerButton.vue";
import PointCounter from "../molecules/PointCounter.vue";
import LogoImage from "../../../../components/atoms/LogoImage.vue";
import StickerImage from "../../../../components/atoms/StickerImage.vue";

import type Mission from "../../../../types/mission";

const props = withDefaults(
  defineProps<{
    mission: Mission;
    flip: boolean;
  }>(),
  { flip: false }
);

const emit = defineEmits<{
  (e: "handleLearnMore", payload: Mission): void;
}>();

const log = (payload: Mission) => {
  emit("handleLearnMore", payload);
};
</script>

<template>
  <div class="mission-card-container">
    <StickerImage
      type="bold"
      :hue="props.mission.getColors().hue"
      class="mission-card-sticker"
    />
    <div class="mission-card-header">
      <TypographyDropShadow
        font="Paytone One"
        size="big"
        style="text-align: left"
      >
        {{ props.mission.data.name }}
      </TypographyDropShadow>

      <CategoryTag :color="props.mission.getColors().hex">
        {{ props.mission.data.category }}
      </CategoryTag>
    </div>
    <div class="mission-card-separator"></div>
    <div class="mission-card-content">
      <TypographyText
        weight="light"
        color="black"
        class="mission-card-description"
      >
        {{ props.mission.data.shortDescription }}
      </TypographyText>
      <StickerButton
        class="cta-button"
        :hue="props.mission.getColors().hue"
        @click="log(props.mission)"
        >{{ "LEARN MORE" }}</StickerButton
      >
    </div>
    <div class="mission-card-separator"></div>
    <div class="mission-card-footer">
      <div class="mission-card-timer">
        <LogoImage type="time_watch" />

        <TypographyDropShadow font="Rubik Mono One" size="big" color="#3F1103">
          {{ "2d 29h" }}
        </TypographyDropShadow>
      </div>
      <PointCounter :count="props.mission.data.reward" />
    </div>
  </div>
</template>

<style scoped>
.mission-card-container {
  padding: 2rem;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.5));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mission-card-container:before {
  content: "";
  position: absolute;
  scale: v-bind("props.flip ? '1 -100%' : '1'");
  inset: 0;
  background: url(@/assets/goodboard/mission_card.png);
  background-size: 100% 100%;
}

.mission-card-separator {
  height: 0px;
  outline: solid 1px #3f1103;
  outline-offset: 0;
  width: 100%;
  margin: 0.75rem 0;
}

.mission-card-sticker {
  height: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 10.75rem;
  margin-left: auto;
  margin-right: auto;
  translate: 0 -50%;
}

.mission-card-header,
.mission-card-footer {
  gap: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mission-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  gap: 12px;
}

.mission-card-description {
  width: 100%;
  overflow: hidden;
  font-style: italic;
}

.mission-card-timer {
  display: flex;
  align-items: end;
  gap: 0.5rem;
  word-spacing: -0.7rem;
}

.cta-button {
  border: 0;
}
</style>
