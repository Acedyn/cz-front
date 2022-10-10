<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import Count from "../../../src/components/atoms/Count.vue";

const commentState = () => {
  return {
    state: {
      icon: "circle",
      count: 1,
      singular: "comment",
      plural: "comments",
    },
  };
};

const likeState = () => {
  return {
    state: {
      icon: "circle",
      count: 1,
      singular: "like",
      plural: "likes",
    },
  };
};
</script>

<template>
  <story title="Global/Atoms/Count" :layout="{ type: 'grid' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>
    <variant title="Comment" :initState="commentState">
      <template #default="{ state }">
        <Count v-bind="state.state" />
      </template>
    </variant>
    <variant title="Likes" :initState="likeState">
      <template #default="{ state }">
        <Count v-bind="state.state" />
      </template>
    </variant>
  </story>
</template>
