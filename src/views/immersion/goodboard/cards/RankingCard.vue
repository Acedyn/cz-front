<script setup lang="ts">
import Ranking from "../../../../components/interaction/Ranking.vue";
import TypographyText from "../../../../components/utils/TypographyText.vue";

import type User from "@/types/user";

interface Rank {
  id: number;
  user: User;
  rank?: number;
}

const props = withDefaults(defineProps<{ items: Rank[] }>(), {});
</script>

<template>
  <div class="ranking-card-container">
    <div class="ranking-container">
      <div class="header">
        <TypographyText
          weight="bold"
          size="big"
          color="#FFD3BA"
          font="Paytone One"
        >
          NAME
        </TypographyText>
        <TypographyText
          weight="bold"
          size="big"
          color="#FFD3BA"
          font="Paytone One"
        >
          RANK
        </TypographyText>
      </div>

      <svg height="30" width="100%">
        <g fill="none" stroke="#FFD3BA" stroke-width="4">
          <line stroke-dasharray="5%, 2%" x1="0" x2="100%" y1="10" y2="10" />
        </g>
      </svg>

      <div class="rankings">
        <Ranking
          v-for="item in props.items"
          :key="item.id"
          :user="item.user"
          :rank="item.rank"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ranking-card-container {
  background-image: url("@/assets/goodboard/ranking_card.png");
  background-size: 100% 100%;
  filter: drop-shadow(0px 8px 9px rgba(0, 0, 0, 0.5));
  min-height: 500px;
  margin: 0 auto;
  padding: 6rem 4rem 2rem;
}

.ranking-card-container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 30%;
  height: 10%;
  transform: translate(-50%, -60%);
  background-image: url("/src/assets/goodboard/clip.png");
  background-size: 100% 100%;
}

.ranking-container {
  margin: 1rem auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rankings {
  background-color: #a26041;
  border: 8px solid #965f3f;
  border-radius: 12px;
  padding: 0 3rem;
}

@media screen and (max-width: 700px) {
  .ranking-card-container {
    padding: 4rem 2rem 2rem;
  }
  .rankings {
    padding: 0 0.75rem;
  }
}
</style>
