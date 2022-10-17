<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SectionButton from "@/components/interaction/SectionButton.vue";

type SectionBtnType = {
  title: string;
  pathName: string;
};

const route = useRoute();
const router = useRouter();

const section_btn = ref<SectionBtnType[]>([
  {
    title: "My details",
    pathName: "settings-my-detail",
  },
  {
    title: "Socials",
    pathName: "settings-socials",
  },
  {
    title: "Other",

    pathName: "settings-other",
  },
]);

const handleSectionBtn = (btn: SectionBtnType) => {
  console.log(`${btn.title} Clicked`);
};
</script>

<template>
  <div style="padding-top: 0">
    <div class="header-image"></div>
    <div class="title-row"></div>
    <div class="settings-inner-container">
      <div class="section-selector-row">
        <SectionButton
          v-for="btn in section_btn"
          :key="btn.pathName"
          :title="btn.title"
          :active="route.name === btn.pathName"
          @click="handleSectionBtn(btn)"
        />
      </div>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.header-image {
  width: 100%;
  height: 286px;
  background-image: url("/src/assets/settings/header.png");
  background-size: 100% 100%;
  background-position: top;
}

.settings-inner-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 60%;
  margin: 1rem auto;
}

.section-selector-row {
  display: flex;
  gap: 3rem;
}
</style>
