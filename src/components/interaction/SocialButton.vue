<script setup lang="ts">
import DiscordLogo from "../../assets/social/discord.svg";
import TwitterLogo from "../../assets/social/twitter.svg";
import InstagramLogo from "../../assets/social/instagram.svg";
import YoutubeLogo from "../../assets/social/youtube.svg";

const props = withDefaults(
  defineProps<{
    social: "discord" | "twitter" | "instagram" | "youtube";
    color?: string;
    size?: number;
    colorHover?: string;
  }>(),
  {
    size: 1,
    color: "var(--global-color-unavailable)",
    colorHover: "var(--global-color-hover)",
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button class="clear-button-style social-button" @click="() => emit('click')">
    <DiscordLogo class="logo" v-if="props.social === 'discord'" />
    <TwitterLogo class="logo" v-if="props.social === 'twitter'" />
    <InstagramLogo class="logo" v-if="props.social === 'instagram'" />
    <YoutubeLogo class="logo" v-if="props.social === 'youtube'" />
  </button>
</template>

<style scoped>
.clear-button-style {
  background: var(--global-color-unavailable);
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.social-button {
  background: v-bind("props.color");
  color: white;
  display: flex;
  align-items: center;
  padding: v-bind("`calc(0.75rem * ${props.size})`");
  border-radius: v-bind("`calc(0.313rem * ${props.size})`");

  transition: 0.2s;
}

.social-button:hover {
  background: v-bind("props.colorHover");
}

.logo {
  fill: var(--global-color-primary);
  width: v-bind("`calc(3rem * ${props.size})`");
  height: v-bind("`calc(3rem * ${props.size})`");
}
</style>
