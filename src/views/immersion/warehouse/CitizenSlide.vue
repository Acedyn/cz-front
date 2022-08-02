<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import type { Citizen } from "../../../legacy/types/citizen";
import CitizenAttribute from "./CitizenAttribute.vue";
import NFTCard from "./NFTCard.vue";
import { czGet } from "../../../legacy/utils/czApi";

const props = defineProps<{
  citizen: Citizen;
}>();

const isSpecialState = computed(() => {
  return (
    props.citizen.isLoading || props.citizen.isError || props.citizen.isSuccess
  );
});

const isCompleted = computed(() => {
  for (const attribute of props.citizen.attributes) {
    if (attribute.selectedStory === undefined) {
      return false;
    }
  }
  return true;
});

const cardStyle = computed<Partial<CSSStyleDeclaration>>(() => {
  let filter = "";
  if (isSpecialState.value) {
    filter += " brightness(30%)";
  }
  if (props.citizen.commited) {
    filter += " drop-shadow(0px 0px 10px #9fc168)";
    return { filter };
  }
  if (isCompleted.value) {
    filter += " drop-shadow(0px 0px 5px #ffd676)";
  }

  return { filter };
});

const isStoryVisible = ref<boolean>(false);
const currentStory = computed(() => {
  const story: string[] = [];

  props.citizen.attributes.forEach((attribute) => {
    if (attribute.selectedStory !== undefined) {
      story.push(attribute.stories[attribute.selectedStory].text);
    }
  });

  return story;
});

const currentStorySelection = ref<number | undefined>();

const toggleStoryPreview = () => {
  isStoryVisible.value = !isStoryVisible.value;
};

watch(props, async () => {
  props.citizen.commited = props.citizen.attributes.every(
    (a) =>
      a.selectedStory !== undefined &&
      a.selectedStory === props.citizen.commit[a.type.toLowerCase()]
  );
});

onMounted(async () => {
  if (props.citizen.attributes.every((a) => a.selectedStory === undefined)) {
    const [commit, _] = await czGet("/citizen/commit", {
      mint: props.citizen.mint,
    });
    Object.assign(props.citizen.commit, commit);
    props.citizen.attributes.forEach((attribute) => {
      attribute.selectedStory = commit[attribute.type.toLowerCase()];
    });
  }
});
</script>

<template>
  <div class="card-overlay" v-if="isSpecialState">
    <span class="loading-icon" v-if="props.citizen.isLoading" />
    <div v-if="props.citizen.isError" class="state-message error">
      <p :style="{ margin: '20px 0px' }">Unexpected error</p>
      <p v-if="props.citizen.message">{{ props.citizen.message }}</p>
    </div>
    <div v-if="props.citizen.isSuccess" class="state-message success">
      <p :style="{ margin: '20px 0px' }">Success</p>
      <p v-if="props.citizen.message">{{ props.citizen.message }}</p>
    </div>
  </div>

  <NFTCard :citizen="props.citizen" class="nft-card" :style="cardStyle">
    <transition name="storySlide">
      <div
        class="citizen-attributes"
        v-if="currentStorySelection === undefined && !isStoryVisible"
      >
        <CitizenAttribute
          v-for="(attribute, index) in props.citizen.attributes"
          :attribute="attribute"
          :key="index"
        />
      </div>
      <div class="citizen-story" v-else>
        <div class="story-scroll">
          <p v-for="(story, index) in currentStory" :key="index">{{ story }}</p>
        </div>
      </div>
    </transition>

    <div class="card-control">
      <div
        tooltip="clear"
        class="disabled button"
        v-if="currentStorySelection === undefined && !isStoryVisible"
      >
        <img src="../../assets/icons/trash.png" />
      </div>
      <div
        tooltip="back"
        class="disabled button"
        @click="
          () => {
            currentStorySelection = undefined;
            isStoryVisible = false;
          }
        "
        v-else
      >
        <img src="../../assets/icons/back.png" />
      </div>
      <div tooltip="suffle" class="disabled button">
        <img src="../../assets/icons/shuffle.png" />
      </div>
      <div
        :class="`button ${isStoryVisible ? 'button-highlight' : ''}`"
        tooltip="read"
        @click="toggleStoryPreview"
      >
        <img src="../../assets/icons/read.png" />
      </div>
      <div
        tooltip="commit"
        :class="`disabled button ${isCompleted ? 'button-highlight' : ''}`"
      >
        <img src="../../assets/icons/commit.png" />
      </div>
    </div>
  </NFTCard>
</template>

<style scoped>
.nft-card {
  transition: 0.2s;
}

.citizen-stories {
  padding: 5% 0%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2%;
}

.citizen-attributes {
  padding-bottom: 6vh;
}

.storySlide-enter-active {
  transition: transform 0.2s ease-out;
}
.storySlide-enter-from {
  transform: translateX(-100%);
}

.card-control {
  position: absolute;
  display: flex;
  bottom: -10px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  width: 90%;
  justify-content: space-around;
}

.citizen-story {
  background: url(@/assets/warehouse/story_display.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 2%;
  margin-bottom: 2%;
  padding-top: 12%;
  padding-bottom: 12%;
  height: 90%;
}

.story-scroll {
  color: #efd7bc;
  font-family: BlockHeadUnplugged;
  font-size: 1.5vh;
  text-align: center;

  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;

  height: 100%;
  overflow-x: auto;
}

.story-selector {
  padding-bottom: 6vh;
  flex-grow: 1;
}

.button {
  border: 0.3vh solid;
  background-color: #824744;
  border-radius: 100%;
  padding: 3%;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 40%);
  transition: 0.1s;
  z-index: 2;
  width: 6vh;
  height: 6vh;
  max-height: 12vw;
  max-width: 12vw;
  display: flex;
  justify-content: center;

  transition: 0.2s;
}

.button-highlight {
  box-shadow: 0px 0px 5px 2px #ffd676;
}

.button:hover {
  background-color: #97524f;
}

.card-overlay {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.loading-icon {
  height: 200px;
  width: 200px;
  background-image: url(@/assets/logos/brand_logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(200%);

  animation: loading-rotation 1.2s infinite;
}

.state-message {
  text-align: center;
  padding: 10%;
  font-family: BlockHeadFace;
  font-size: 3vh;
  text-transform: uppercase;
}

.error {
  animation: shakeX 1s;
  color: #b76641;
}

.disabled {
  filter: brightness(0.5);
}

.success {
  animation: pulse 0.5s;
  color: #95b741;
}

.progress-stepper {
  width: 100%;
  height: 4%;
  min-height: 1vh;
}

*[tooltip]:before {
  content: attr(tooltip);
  position: relative;
  border-bottom: dotted 1px #000;
  transform: scale(0);
  transition: transform ease-out 100ms;
  background-color: #000;
  color: #fff;
  bottom: 100%;
  position: absolute;
  border-radius: 5px;
  padding: 5px;

  background: var(--color-text);
  text-transform: uppercase;
  font-weight: bolder;
  color: #efd7bc;
  font-family: BlockHeadUnplugged;
  font-size: 1.2vh;
}
*[tooltip]:hover:before {
  white-space: nowrap;
  transform: scale(1);
}
</style>
