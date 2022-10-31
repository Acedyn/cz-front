<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import AvatarBubble from "../../../src/components/atoms/AvatarBubble.vue";

import User from "../../../src/types/user";

const smallAvatar = () => {
  return {
    state: {
      size: "sm",
      user: new User({
        name: "cardboard",
        image: "/src/assets/landing/profile/01.png",
      }),
    },
  };
};

const mediumAvatar = () => {
  return {
    state: {
      size: "md",
      user: new User({
        name: "cardboard",
        image: "/src/assets/landing/profile/02.png",
      }),
    },
  };
};

const largeAvatar = () => {
  return {
    state: {
      size: "lg",
      user: new User({
        name: "cardboard",
        image: "/src/assets/landing/profile/03.png",
      }),
    },
  };
};
</script>

<template>
  <story title="Global/Atoms/Avatar" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>
    <variant title="Small" :initState="smallAvatar">
      <template #default="{ state }">
        <AvatarBubble v-bind="state.state" />
      </template>
    </variant>
    <variant title="Medium" :initState="mediumAvatar">
      <template #default="{ state }">
        <AvatarBubble v-bind="state.state" />
      </template>
    </variant>
    <variant title="Large" :initState="largeAvatar">
      <template #default="{ state }">
        <AvatarBubble v-bind="state.state" />
      </template>
    </variant>
  </story>
</template>
