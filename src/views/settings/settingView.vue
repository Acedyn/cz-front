<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getBreakpoint, Breakpoint } from "@/utils/breakpoints";
import SectionButton from "@/components/interaction/SectionButton.vue";
import AvatarBubble from "../../components/atoms/AvatarBubble.vue";
import TypographyTitle from "../../components/utils/TypographyTitle.vue";
import CTAButton from "../../components/interaction/CtaButton.vue";
import LoadingModal from "../../components/popup/LoadingPopup.vue";
import { useAuthStore } from "@/stores/auth";

const { currentUser } = useAuthStore();

const isLoading = ref(false);

const breakpoints = getBreakpoint(onMounted, onUnmounted);

const isSmallScreen = computed(() => {
  return breakpoints.value < Breakpoint.SM;
});

type SectionBtnType = {
  title: string;
  pathName: string;
};

const route = useRoute();
const router = useRouter();

const user = currentUser;

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
  router.push({ name: btn.pathName });
};

const handleSaveBtn = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 30 * 1000);
};

onMounted(async () => {
  if (!currentUser.data) {
    router.push("/immersion/goodboard/login");
  }
});
</script>

<template>
  <div style="padding-top: 0">
    <div class="header-image"></div>
    <div class="title-row">
      <div style="display: flex">
        <AvatarBubble
          :size="isSmallScreen ? 'xl' : '2xl'"
          :user="user"
          :style="{
            marginTop: `${isSmallScreen ? '-20%' : '-25%'}`,
            marginRight: '5%',
          }"
        />
        <TypographyTitle
          font="Paytone One"
          color="var(--global-color-typography"
          :style="{
            fontSize: `${
              isSmallScreen ? '24px !important' : '34px !important'
            }`,
          }"
        >
          Settings
        </TypographyTitle>
      </div>
      <div v-if="!isSmallScreen" class="action-button-container">
        <CTAButton invert no-icon :disabled="true">Cancel</CTAButton>
        <CTAButton invert no-icon :disabled="true" @click="handleSaveBtn"
          >Save</CTAButton
        >
      </div>
    </div>
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
      <router-view class="setting-router-view" />
      <div v-if="isSmallScreen" class="action-button-container">
        <CTAButton invert no-icon :disabled="true"> Cancel </CTAButton>
        <CTAButton invert no-icon :disabled="true" @click="handleSaveBtn">
          Save
        </CTAButton>
      </div>
    </div>
    <LoadingModal :show="isLoading" />
  </div>
</template>

<style scoped>
.header-image {
  width: 100%;
  height: 286px;
  background-image: url("/src/assets/settings/header.png");
  background-size: cover;
  background-position: center;
}

.title-row {
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-around;
}

.action-button-container {
  display: flex;
  gap: 1rem;
}

.settings-inner-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 60%;
  margin: 4rem auto;
}

.section-selector-row {
  display: flex;
  gap: 3rem;
}

.setting-router-view {
  padding-right: 20rem;
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .setting-router-view {
    padding-right: 10rem;
  }
}

@media screen and (max-width: 1023px) {
  .header-image {
    height: 77px;
  }

  .section-selector-row {
    justify-content: space-around;
    gap: 0.75rem;
  }

  .setting-router-view {
    padding-right: 0;
  }
}

@media screen and (max-width: 767px) {
  .settings-inner-container {
    max-width: 90%;
  }
  .title-row {
    margin-left: 2.5rem;
    justify-content: flex-start;
  }
}
</style>
