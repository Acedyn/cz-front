<script setup lang="ts">
import ControlsGenerator from "../../../histoire/ControlsGenerator.vue";
import LogoImage from "../../components/atoms/LogoImage.vue";

const worldState = () => {
  return {
    state: {
      logo: "world",
    },
  };
};

const toolsState = () => {
  return {
    state: {
      logo: "tools",
    },
  };
};

const timeWatchState = () => {
  return {
    state: {
      logo: "time_watch",
    },
  };
};

const profileState = () => {
  return {
    state: {
      logo: "profile",
    },
  };
};

const homeState = () => {
  return {
    state: {
      logo: "home",
    },
  };
};

const dashboardState = () => {
  return {
    state: {
      logo: "dashboard",
    },
  };
};

const boxPointState = () => {
  return {
    state: {
      logo: "box_point",
    },
  };
};

const boxOpenedState = () => {
  return {
    state: {
      logo: "box_opened",
    },
  };
};

const boxClosedState = () => {
  return {
    state: {
      logo: "box_closed",
    },
  };
};
</script>

<template>
  <Story title="Atoms/Logo Image" :layout="{ type: 'grid' }">
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
