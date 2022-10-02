<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import LogoImage from "../../../src/components/atoms/LogoImage.vue";

const worldState = () => {
  return {
    state: {
      type: "world",
    },
  };
};

const toolsState = () => {
  return {
    state: {
      type: "tools",
    },
  };
};

const timeWatchState = () => {
  return {
    state: {
      type: "time_watch",
    },
  };
};

const profileState = () => {
  return {
    state: {
      type: "profile",
    },
  };
};

const homeState = () => {
  return {
    state: {
      type: "home",
    },
  };
};

const dashboardState = () => {
  return {
    state: {
      type: "dashboard",
    },
  };
};

const boxPointState = () => {
  return {
    state: {
      type: "box_point",
    },
  };
};

const boxOpenedState = () => {
  return {
    state: {
      type: "box_opened",
    },
  };
};

const boxClosedState = () => {
  return {
    state: {
      type: "box_closed",
    },
  };
};
</script>

<template>
  <Story title="Global/Atoms/Logo Image" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Box Closed" :initState="boxClosedState">
      <template #default="{ state }">
        <LogoImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Box Opened" :initState="boxOpenedState">
      <template #default="{ state }">
        <LogoImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Box Point" :initState="boxPointState">
      <template #default="{ state }">
        <LogoImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Dashboard" :initState="dashboardState">
      <template #default="{ state }">
        <LogoImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Home" :initState="homeState">
      <template #default="{ state }">
        <LogoImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Profile" :initState="profileState">
      <template #default="{ state }">
        <LogoImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Time Watch" :initState="timeWatchState">
      <template #default="{ state }">
        <LogoImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Tools" :initState="toolsState">
      <template #default="{ state }">
        <LogoImage v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="World" :initState="worldState">
      <template #default="{ state }">
        <LogoImage v-bind="state.state" />
      </template>
    </Variant>
  </Story>
</template>
