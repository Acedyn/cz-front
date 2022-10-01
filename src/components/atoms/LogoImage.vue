<script setup lang="ts">
import BoxClosedLogo from "../../assets/logos/box_closed.png";
import BoxOpenedLogo from "../../assets/logos/box_opened.png";
import BoxPointLogo from "../../assets/logos/box_point.png";
import DashboardLogo from "../../assets/logos/dashboard.png";
import HomeLogo from "../../assets/logos/home.png";
import ProfileLogo from "../../assets/logos/profile.png";
import TimeWatchLogo from "../../assets/logos/time_watch.png";
import ToolsLogo from "../../assets/logos/tools.png";
import WorldLogo from "../../assets/logos/world.png";

const props = withDefaults(
  defineProps<{
    logo:
      | "box_closed"
      | "box_opened"
      | "box-point"
      | "dashboard"
      | "home"
      | "profile"
      | "time_watch"
      | "tools"
      | "world";
    size?: number;
  }>(),
  {
    size: 1,
  }
);
</script>

<template>
  <img class="logo" v-if="props.logo === 'box_closed'" :src="BoxClosedLogo" />
  <img class="logo" v-if="props.logo === 'box_opened'" :src="BoxOpenedLogo" />
  <img class="logo" v-if="props.logo === 'box_point'" :src="BoxPointLogo" />
  <img class="logo" v-if="props.logo === 'dashboard'" :src="DashboardLogo" />
  <img class="logo" v-if="props.logo === 'home'" :src="HomeLogo" />
  <img class="logo" v-if="props.logo === 'profile'" :src="ProfileLogo" />
  <img class="logo" v-if="props.logo === 'time_watch'" :src="TimeWatchLogo" />
  <img class="logo" v-if="props.logo === 'tools'" :src="ToolsLogo" />
  <img class="logo" v-if="props.logo === 'world'" :src="WorldLogo" />
</template>

<style>
.logo {
  width: v-bind("`${props.size * 2}rem`");
  height: auto;
}
</style>
