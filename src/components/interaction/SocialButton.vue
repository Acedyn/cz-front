<script setup lang="ts">
import DiscordLogo from "../../assets/social/discord.svg";
import TwitterLogo from "../../assets/social/twitter.svg";
import InstagramLogo from "../../assets/social/instagram.svg";
import YoutubeLogo from "../../assets/social/youtube.svg";
import MagicEdenLogo from "../../assets/social/magiceden.svg";
import OpenseaLogo from "../../assets/social/opensea.svg";
import SolanaLogo from "../../assets/social/solana.svg";

const props = withDefaults(
  defineProps<{
    social:
      | "discord"
      | "twitter"
      | "instagram"
      | "youtube"
      | "magiceden"
      | "opensea"
      | "solana";
    color?: string;
    fill?: string;
    size?: number;
    colorHover?: string;
    invert?: boolean;
    colorHoverInvert?: string;
    thickness?: string;
  }>(),
  {
    size: 1,
    thickness: "0.094rem",
    fill: "var(--global-color-primary)",
    color: "var(--global-color-unavailable)",
    colorHover: "var(--global-color-hover)",
    colorHoverInvert: "var(--global-color-secondary)",
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const links = {
  discord: "http://discord.gg/cardboard",
  twitter: "https://twitter.com/CardboardCtzNFT",
  instagram: "https://www.instagram.com/cardboardctz/",
  youtube: "https://www.youtube.com/channel/UChi9hIKIzGNTEzWQufm5r6g",
  magiceden: "https://magiceden.io/marketplace/cardboard_citizens",
  opensea: "https://opensea.io/collection/cardboard-citizens-solana",
  solana: "https://solana.com/",
};

const onClick = () => {
  emit("click");
  const w = window.open(links[props.social], "_blank");
  if (w) w.focus();
};
</script>

<template>
  <button
    :class="`clear-button-style social-button ${
      props.invert ? 'inverted' : ''
    }`"
    @click="onClick"
  >
    <DiscordLogo class="logo" v-if="props.social === 'discord'" />
    <TwitterLogo class="logo" v-if="props.social === 'twitter'" />
    <InstagramLogo class="logo" v-if="props.social === 'instagram'" />
    <YoutubeLogo class="logo" v-if="props.social === 'youtube'" />
    <MagicEdenLogo class="logo" v-if="props.social === 'magiceden'" />
    <OpenseaLogo class="logo" v-if="props.social === 'opensea'" />
    <SolanaLogo class="logo" v-if="props.social === 'solana'" />
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

.inverted {
  background: transparent;
  color: v-bind("props.color");

  outline: v-bind("`solid ${props.thickness} ${props.fill}`");
  outline-offset: v-bind("`-${props.thickness}`");
}

.inverted:hover {
  background: v-bind("props.colorHoverInvert");
}

.logo {
  fill: v-bind("props.fill");
  width: v-bind("`calc(3rem * ${props.size})`");
  height: v-bind("`calc(3rem * ${props.size})`");
}
</style>
