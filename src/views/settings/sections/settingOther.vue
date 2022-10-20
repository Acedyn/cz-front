<script setup lang="ts">
import { ref, computed } from "vue";
import ReferralCode from "../../../components/atoms/ReferralCode.vue";
import TextInput from "../../../components/interaction/TextInput.vue";
import IconChecked from "@/components/icons/iconCheckedSolid.vue";
import IconUncheked from "@/components/icons/iconUncheckedOutline.vue";

// Temp Data
const referralCode = ref("");
const correctReferralCode = ref("X234SQ12");
const isReferralCorrect = computed(
  () => referralCode.value === correctReferralCode.value
);
</script>

<template>
  <div class="settings-other-container">
    <ReferralCode label="Your Referral Code" code="D23ZE0" />
    <TextInput
      v-model="referralCode"
      label="Referral Code"
      icon="tools"
      type="text"
      placeholder="X234SQ12"
      :invalid="referralCode.length > 0 && !isReferralCorrect"
    />
    <div v-if="referralCode.length > 0" class="validation-container">
      <p>
        <IconChecked v-if="isReferralCorrect" size="1.2rem" />
        <IconUncheked v-else size="1.2rem" />
        {{
          isReferralCorrect
            ? "Correct referral Code !"
            : "Please enter a correct referral code"
        }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.settings-other-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.validation-container p {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: Quicksand, sans-serif;
  font-size: 1rem;
  color: var(--global-color-typography);
}
</style>
