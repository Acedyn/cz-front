<script setup lang="ts">
import UserStrip from "../../../src/components/atoms/UserStrip.vue";
import ControlsGenerator from "../../ControlsGenerator.vue";

import User from "../../../src/types/user";

const smallState = () => {
  return {
    state: {
      users: [
        new User({
          name: "John Doe",
          image:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        }),
        new User({
          name: "Ziwa spotr",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }),
      ],
    },
  };
};

const largeState = () => {
  return {
    state: {
      users: [
        new User({
          name: "John Doe",
          image:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        }),
        new User({
          name: "Dowa apeo",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }),
        new User({
          name: "Eoax coes",
          image:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }),
        new User({
          name: "Tords cless",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        }),
        new User({
          name: "ToTo deia",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }),
        new User({
          name: "Ziwa spotr",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }),
      ],
    },
  };
};
</script>

<template>
  <Story title="Global/Atoms/UserStrip" :layout="{ type: 'grid', width: '100%' }">
    <template #controls="{ state }">
      <ControlsGenerator
        v-model="state.state"
        :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Small" :initState="smallState">
      <template #default="{ state }">
        <UserStrip v-bind="state.state" />
      </template>
    </Variant>

    <Variant title="Large" :initState="largeState">
      <template #default="{ state }">
        <UserStrip v-bind="state.state" />
      </template>
    </Variant>
  </Story>
</template>
