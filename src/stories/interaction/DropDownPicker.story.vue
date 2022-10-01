<script setup lang="ts">
import ControlsGenerator from "../../../histoire/ControlsGenerator.vue";
import DropDownPicker from "../../components/interaction/DropDownPicker.vue";
import LanguagePicker from "../../components/interaction/LanguagePicker.vue";

const genericState = () => {
  return {
    state: {
      icon: "menu",
      options: ["Foo", "Bar", "Baz"],
      defaultOption: "Bar",
    },
  };
};

const languageState = () => {
  return {
    state: {},
  };
};
</script>

<template>
  <Story title="Interaction/Dropdown Picker" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Generic" :initState="genericState">
      <template #default="{ state }">
        <DropDownPicker v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Language" :initState="languageState">
      <template #default="{ state }">
        <LanguagePicker v-bind="state.state" />
      </template>
    </Variant>
  </Story>
</template>

<style>
.dropdown-container {
  min-height: 200px;
}
</style>
