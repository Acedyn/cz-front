<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import MenuItem from "../../../src/components/atoms/MenuItem.vue";

const homeState = () => {
  return {
    state: {
      icon: "home",
      text: "Home",
      mini: false,
    },
  };
};

const worldState = () => {
  return {
    state: {
      icon: "world",
      text: "World",
      mini: false,
    },
  };
};

const toolState = () => {
  return {
    state: {
      icon: "tools",
      text: "Tools",
      mini: false,
    },
  };
};

const profileState = () => {
  return {
    state: {
      icon: "profile",
      text: "Profile",
      mini: false,
    },
  };
};

const settingState = () => {
  return {
    state: {
      icon: "dashboard",
      text: "Settings",
      mini: false,
    },
  };
};
</script>

<template>
  <Story title="Global/Atoms/Menu Item" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>
    <variant title="Home" :initState="homeState">
      <template #default="{ state }">
        <MenuItem v-bind="state.state" />
      </template>
    </variant>
    <variant title="World" :initState="worldState">
      <template #default="{ state }">
        <MenuItem v-bind="state.state" />
      </template>
    </variant>
    <variant title="Tools" :initState="toolState">
      <template #default="{ state }">
        <MenuItem v-bind="state.state" />
      </template>
    </variant>
    <variant title="Profile" :initState="profileState">
      <template #default="{ state }">
        <MenuItem v-bind="state.state" />
      </template>
    </variant>
    <variant title="Settings" :initState="settingState">
      <template #default="{ state }">
        <MenuItem v-bind="state.state" />
      </template>
    </variant>
  </Story>
</template>
