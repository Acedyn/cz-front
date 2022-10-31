<script setup lang="ts">
import TypographyText from "../utils/TypographyText.vue";
import AvatarBubble from "../../../src/components/atoms/AvatarBubble.vue";
import type User from "@/types/user";

const props = withDefaults(
  defineProps<{
    user: User;
    rank?: number;
  }>(),
  {}
);
</script>

<template>
  <div class="rank-container">
    <AvatarBubble class="rank-circle" :user="props.user" />
    <div class="rank-title">
      <TypographyText font="Paytone One" size="big">
        {{ user.data?.name }}
      </TypographyText>
    </div>
    <div class="rank-circle rank-value">
      <TypographyText
        font="Paytone One"
        size="big"
        weight="bold"
        color="#ffd3ba"
      >
        {{ props.user.data.points }}
      </TypographyText>
    </div>
  </div>
</template>

<style scoped>
.rank-container {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  height: 3rem;
  margin: 0.75rem 0;
}

.rank-container:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.rank-circle {
  height: 3rem;
  min-width: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rank-container:hover .rank-circle {
  scale: 1.1;
}

.rank-avatar {
  border: 3px solid #ffd3ba;
}

.rank-title {
  width: 100%;
  height: 100%;
  background-color: #783a28;
  border: 4px solid #633825;
  border-radius: 1rem;
  margin: 0 11px;
  text-align: center;
}

.rank-container:hover .rank-title {
  background-color: #ac4e3d;
  border: 4px solid #ca6343;
}

.rank-value {
  border: 4px solid #ffd3ba;
}
</style>
