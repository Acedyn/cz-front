<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string;
    code: string;
  }>(),
  {}
);
</script>

<template>
  <div class="referral-code-container">
    <p class="referral-label">{{ props.label }}</p>
    <div class="referral-code-inner-container">
      <p>{{ props.code }}</p>
    </div>
  </div>
</template>

<style scoped>
.referral-code-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.referral-code-inner-container {
  border-radius: 8px;
  padding: 8px 16px;
  background-color: #d77a37;
}

.referral-code-inner-container p {
  font-family: "Paytone One", sans-serif;
  font-size: 2.6rem;
  color: var(--global-color-typography);
}

.referral-label {
  font-family: Quicksand, serif;
  font-weight: 700;
  font-size: 1rem;
  color: var(--global-color-typography);
}
</style>
