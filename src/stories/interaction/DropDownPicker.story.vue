<script setup lang="ts">
import { reactive } from "vue";
import DropDownPicker from "../../components/interaction/DropDownPicker.vue";
import LanguagePicker from "../../components/interaction/LanguagePicker.vue";

const state = reactive({
  icon: "menu",
  options: ["Foo", "Bar", "Baz"],
});
</script>

<template>
  <Story title="Interaction/Dropdown Picker" :layout="{ type: 'grid' }">
    <template #controls>
      <HstText v-model="state.icon" title="Icon" />
    </template>

    <Variant title="Generic">
      <DropDownPicker v-bind="{ ...state }" />
    </Variant>

    <Variant title="Language">
      <LanguagePicker />
    </Variant>
  </Story>
</template>

<style>
.dropdown-container {
  min-height: 200px;
}
</style>
