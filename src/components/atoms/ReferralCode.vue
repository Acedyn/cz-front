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
  <div>
    <p class="referral-label">{{ props.label }}</p>
    <span class="referral-code-inner-container">
      {{ props.code }}
    </span>
  </div>
</template>

<style scoped>
.referral-code-inner-container {
  font-family: "Paytone One", sans-serif;
  font-size: 2.6rem;
  color: var(--global-color-typography);
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
  margin-bottom: 1rem;
}
</style>
