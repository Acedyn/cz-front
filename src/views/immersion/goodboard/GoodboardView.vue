<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import TypographyText from "@/components/utils/TypographyText.vue";
import LogoImage from "@/components/atoms/LogoImage.vue";
import MissionCardSlider from "./molecules/MissionCardsSlider.vue";
import NewsCardSlider from "./molecules/NewsCardsSlider.vue";
import RankingCard from "./cards/RankingCard.vue";
import MissionCardModal from "../goodboard/MissionCardModal.vue";
import NewsCardModal from "../goodboard/NewsCardModal.vue";

import type Mission from "@/types/mission";
import type News from "@/types/news";
import User from "@/types/user";

const rankingItems = [
  {
    id: 1,
    user: new User({
      name: "cardboard",
      image: "/src/assets/landing/profile/01.png",
    }),
    rank: 19,
  },
  {
    id: 2,
    user: new User({
      name: "cardboard",
      image: "/src/assets/landing/profile/02.png",
    }),
    rank: 20,
  },
  {
    id: 3,
    user: new User({
      name: "cardboard",
      image: "/src/assets/landing/profile/03.png",
    }),
    rank: 21,
  },
  {
    id: 4,
    user: new User({
      name: "cardboard",
      image: "/src/assets/landing/profile/04.png",
    }),
    rank: 22,
  },
  {
    id: 5,
    user: new User({
      name: "cardboard",
      image: "/src/assets/landing/profile/05.png",
    }),
    rank: 23,
  },
  {
    id: 6,
    user: new User({
      name: "cardboard",
      image: "/src/assets/landing/profile/06.png",
    }),
    rank: 24,
  },
  {
    id: 7,
    user: new User({
      name: "cardboard",
      image: "/src/assets/landing/profile/07.png",
    }),
    rank: 25,
  },
];

const missionModal = reactive({
  show: false,
  payload: <Mission>{},
});

const newsModal = reactive({
  show: false,
  payload: <News>{},
});

const handleMissionModal = (mission: Mission) => {
  missionModal.payload = mission;
  missionModal.show = true;
};

const handleNewsClick = (news: News) => {
  newsModal.payload = news;
  newsModal.show = true;
};

const handleClose = () => {
  missionModal.show = false;
  newsModal.show = false;
};

const currentToggleActive = ref("raidTask")
const raidTaskClass = computed(() => currentToggleActive.value === 'raidTask' ? 'text active' : 'text')
const completedTaskClass = computed(() => currentToggleActive.value === 'completedTask' ? 'text active' : 'text')

const handleToggle = (e: any) => {
  currentToggleActive.value = e.target.id
}
</script>

<template>
  <div class="goodboard">
    <TypographyText class="page-title" font="Rubik Mono One">
      <h1>The Goodboard</h1>
    </TypographyText>

    <div class="task-selection">
      <div>
        <LogoImage type="envelope_open" />
        <TypographyText id="raidTask" :class="raidTaskClass" font="Paytone One" color="#ffd3ba" @click="handleToggle">
          Raid Task
        </TypographyText>
      </div>
      <div>
        <LogoImage type="envelope_close" />
        <TypographyText id="completedTask" :class="completedTaskClass" font="Paytone One" @click="handleToggle"> Completed </TypographyText>
      </div>
      <div style="margin: 0 auto" />
      <div>
        <span class="material-icons" style="color: #ffd3ba">
          chevron_left
        </span>
      </div>
      <div>
        <span class="material-icons" style="color: #ffd3ba">
          chevron_right
        </span>
      </div>
    </div>

    <MissionCardSlider @handleLearnMore="handleMissionModal" />

    <div style="display: flex">
      <div style="flex: 2; overflow: hidden">
        <NewsCardSlider @handleClick="handleNewsClick" style="height: 100%" />
      </div>
      <RankingCard style="flex: 1" :items="rankingItems" />
    </div>
  </div>

  <MissionCardModal
    :show="missionModal.show"
    :payload="missionModal.payload"
    @handleClose="handleClose"
  />

  <NewsCardModal :payload="newsModal.payload" :show="newsModal.show" @handleClose="handleClose"/>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.goodboard {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-image: url("/src/assets/goodboard/goodboard.png"),
    radial-gradient(76.99% 76.99% at 50% 53.41%, #925637 0%, #411f12 100%);
  margin-left: 120px;
  padding: 2rem 1rem;
}

.page-title h1 {
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: underline dashed;
  text-underline-offset: 1rem;
}

.task-selection {
  display: flex;
  gap: 2rem;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ffd3ba;
}

.task-selection div {
  display: flex;
  gap: 0.5rem;
}

.task-selection div * {
  align-self: center;
}

.task-selection div:hover {
  cursor: pointer;
}

.text.active {
  padding: 5px;
  background-color: #d47642;
  border-radius: 0.75rem;
}

@media only screen and (max-width: 767px) {
  .page-title h1 {
    font-size: 2rem;
    text-align: center;
  }
}
</style>
