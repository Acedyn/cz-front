<script setup lang="ts">
import TypographyText from "../utils/TypographyText.vue";
import Avatar from "../../../src/components/atoms/Avatar.vue";
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
    <Avatar class="rank-circle" :user="props.user" />
    <div class="rank-title"></div>
    <div class="rank-circle rank-value">
      <TypographyText
        font="Paytone One"
        size="big"
        weight="bold"
        color="#ffd3ba"
      >
        {{ props.rank }}
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
  min-height: 40px;
  margin: 0.75rem 0;
}

.rank-container:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.rank-circle {
  min-height: 36px;
  min-width: 36px;
  max-height: 36px;
  max-width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rank-container:hover .rank-circle {
  min-height: 40px;
  min-width: 40px;
  max-height: 40px;
  max-width: 40px;
}

.rank-avatar {
  border: 3px solid #ffd3ba;
}

.rank-title {
  width: 80%;
  height: 36px;
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
