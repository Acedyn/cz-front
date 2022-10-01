<script setup lang="ts">
import { reactive } from "vue";
import SocialButton from "../../components/interaction/SocialButton.vue";

const state = reactive({
  size: 1,
});
</script>

<template>
  <Story
    title="Interaction/Social Button"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <template #controls>
      <HstSlider
        v-model="state.size"
        title="Size"
        :min="0"
        :max="4"
        :step="0.1"
      />
    </template>

    <Variant title="Discord">
      <SocialButton v-bind="{ ...state, social: 'discord' }" />
    </Variant>

    <Variant title="Twitter">
      <SocialButton v-bind="{ ...state, social: 'twitter' }" />
    </Variant>

    <Variant title="Solana">
      <SocialButton v-bind="{ ...state, social: 'solana' }" />
    </Variant>

    <Variant title="Magic eden">
      <SocialButton v-bind="{ ...state, social: 'magiceden' }" />
    </Variant>
  </Story>
</template>
