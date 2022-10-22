<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import TypographyText from "@/components/utils/TypographyText.vue";
import TypographyDropShadow from "@/components/utils/TypographyDropShadow.vue";
import LogoImage from "@/components/atoms/LogoImage.vue";
import MissionCardSlider from "./molecules/MissionCardsSlider.vue";
import NewsCardSlider from "./molecules/NewsCardsSlider.vue";
import RankingCard from "./cards/RankingCard.vue";
import MissionCardModal from "../goodboard/MissionCardModal.vue";
import NewsCardModal from "../goodboard/NewsCardModal.vue";
import AvatarBubble from "../../../components/atoms/AvatarBubble.vue";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";

import type Mission from "@/types/mission";
import type News from "@/types/news";
import type User from "@/types/user";

import { getAvailableMissions, getCompletedMissions } from "@/types/mission";
import { getTopUsers } from "@/types/user";

const { currentUser, refreshUser } = useAuthStore();

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

const currentToggleActive = ref("raidTask");
const raidTaskClass = computed(() =>
  currentToggleActive.value === "raidTask" ? "text active" : "text"
);
const completedTaskClass = computed(() =>
  currentToggleActive.value === "completedTask" ? "text active" : "text"
);

const handleToggle = (e: any) => {
  currentToggleActive.value = e.target.id;
};

const availableMissions = ref<Mission[]>([]);
const completedMissions = ref<Mission[]>([]);
const topUsers = ref<User[]>([]);

const fetchMissions = async () => {
  availableMissions.value = await getAvailableMissions();
  completedMissions.value = await getCompletedMissions();
  await refreshUser();
};

onMounted(async () => {
  await fetchMissions();
  topUsers.value = await getTopUsers();
  await refreshUser();
});
</script>

<template>
  <div class="goodboard">
    <div class="goodboard-header">
      <TypographyText class="page-title" font="Rubik Dirt" size="big">
        <h1>The Goodboard</h1>
      </TypographyText>

      <div
        class="goodboard-avatar"
        @click="router.push('/immersion/goodboard/settings')"
      >
        <div
          style="display: flex; align-items: center; gap: 0.5rem"
          v-if="currentUser.data"
        >
          <LogoImage type="box_point" :size="1.2" />
          <TypographyText font="RubikOne" size="big" weight="bold">
            <p class="mission-stats">
              {{ `${currentUser.data.points || 0} BP` }}
            </p>
          </TypographyText>
        </div>
        <TypographyText font="RubikOne" size="big" weight="bold" v-else>
          <p class="mission-stats">Signin / Login</p>
        </TypographyText>
        <AvatarBubble :size="'xl'" :user="currentUser" />
      </div>
    </div>

    <div class="task-selection">
      <div>
        <LogoImage :size="2" type="envelope_open" />
        <TypographyDropShadow font="Paytone One" @click="handleToggle">
          <label id="raidTask" :class="`goodboard-tab ${raidTaskClass}`"
            >Raid tasks ( {{ availableMissions.length }} )</label
          >
        </TypographyDropShadow>
      </div>
      <div>
        <LogoImage :size="2" type="envelope_close" />
        <TypographyText font="Paytone One" @click="handleToggle">
          <label
            id="completedTask"
            :class="`goodboard-tab ${completedTaskClass}`"
            >Completed ( {{ completedMissions.length }} )</label
          >
        </TypographyText>
      </div>
      <div style="margin: 0 auto" />
      <div>
        <span class="material-icons" style="color: #ffd3ba; font-size: 3rem">
          chevron_left
        </span>
      </div>
      <div>
        <span class="material-icons" style="color: #ffd3ba; font-size: 3rem">
          chevron_right
        </span>
      </div>
    </div>

    <MissionCardSlider
      @handleLearnMore="handleMissionModal"
      :missions="
        currentToggleActive === 'raidTask'
          ? availableMissions
          : completedMissions
      "
    />

    <div class="bottom-section">
      <div style="flex: 2; overflow: hidden">
        <NewsCardSlider @handleClick="handleNewsClick" style="height: 100%" />
      </div>
      <RankingCard style="flex: 1" :users="topUsers" />
    </div>
  </div>

  <MissionCardModal
    :show="missionModal.show"
    :payload="missionModal.payload"
    @handleClose="handleClose"
    @claim="fetchMissions"
  />

  <NewsCardModal
    :payload="newsModal.payload"
    :show="newsModal.show"
    @handleClose="handleClose"
  />
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.goodboard-avatar {
  position: absolute;
  gap: 1rem;
  height: 100%;
  width: auto;
  right: 0;
  display: flex;
  flex-direction: row;
  transition: 0.2s;
  cursor: pointer;
  align-items: center;
}

.goodboard-avatar:hover {
  scale: 1.05;
}

.goodboard-header {
  display: flex;
  justify-content: space-between;
}

.goodboard-user {
  display: flex;
}

.goodboard {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-image: url("/src/assets/goodboard/goodboard.png"),
    radial-gradient(76.99% 76.99% at 50% 53.41%, #925637 0%, #411f12 100%);
  padding: 2rem 3rem;
  overflow: auto;
}

.page-title h1 {
  font-size: 3.75rem;
  font-weight: 400;
  text-transform: uppercase;
  width: fit-content;
}

.page-title h1:after {
  content: "------------------------------------------------";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  translate: 0px 100%;
  line-height: 0px;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  text-align: center;
}

.goodboard-tab {
  font-size: 1.25rem;
  transition: 0.1s;
  cursor: pointer;
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

.bottom-section {
  display: grid;
  gap: 2rem;
  grid-template-columns: 2fr 1fr;
  margin-top: 3rem;
}

@media only screen and (max-width: 767px) {
  .page-title h1 {
    font-size: 2rem;
    text-align: center;
  }
}
</style>
