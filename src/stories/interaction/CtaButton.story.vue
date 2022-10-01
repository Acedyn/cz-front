<script setup lang="ts">
import { reactive } from "vue";
import CtaButton from "../../components/interaction/CtaButton.vue";

const state = reactive({
  invert: false,
});
</script>

<template>
  <Story
    title="Interaction/CTA Button"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <template #controls>
      <HstCheckbox v-model="state.invert" title="Invert" />
    </template>

    <Variant title="World">
      <CtaButton v-bind="{ ...state, icon: 'public' }">World</CtaButton>
    </Variant>

    <Variant title="Tools">
      <CtaButton v-bind="{ ...state, icon: 'handyman' }">Tools</CtaButton>
    </Variant>
  </Story>
</template>
