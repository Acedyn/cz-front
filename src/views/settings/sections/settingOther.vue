<script setup lang="ts">
import ReferralCode from "@/components/atoms/ReferralCode";
import TextInput from "@/components/interaction/TextInput";
</script>

<template>
  <div class="settings-other-container">
    <ReferralCode label="Your Referral Code" code="D23ZE0" />
    <TextInput label="Referral Code" icon="tools" placeholder="D23ZE0" />
  </div>
</template>

<style scoped>
.settings-other-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
