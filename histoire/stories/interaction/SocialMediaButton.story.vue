<script setup lang="ts">
import ControlsGenerator from "../../ControlsGenerator.vue";
import SocialMediaButton from "../../../src/components/interaction/SocialMediaButton.vue";

const facebookState = () => {
  return {
    state: {
      type: "facebook",
    },
  };
};

const googleState = () => {
  return {
    state: {
      type: "google",
    },
  };
};

const discordState = () => {
  return {
    state: {
      type: "discord",
    },
  };
};

const twitterState = () => {
  return {
    state: {
      type: "twitter",
    },
  };
};
</script>

<template>
  <Story title="Global/Interaction/Social Media Button" :layout="{ type: 'grid', width: '100%' }">
    <template #controls="{ state }">
      <ControlsGenerator
          v-model="state.state"
          :propsDef="state._hPropDefs[0]"
      />
    </template>

    <Variant title="Facebook" :initState="facebookState">
      <template #default="{ state }">
        <SocialMediaButton v-bind="state.state">
        Connect with Facebook
        </SocialMediaButton>
      </template>
    </Variant>

    <Variant title="Google" :initState="googleState">
      <template #default="{ state }">
        <SocialMediaButton v-bind="state.state">
          Connect with Google
        </SocialMediaButton>
      </template>
    </Variant>

    <Variant title="Discord" :initState="discordState">
      <template #default="{ state }">
        <SocialMediaButton v-bind="state.state">
          Connect with Discord
        </SocialMediaButton>
      </template>
    </Variant>

    <Variant title="Twitter" :initState="twitterState">
      <template #default="{ state }">
        <SocialMediaButton v-bind="state.state">
          Connect with Twitter
        </SocialMediaButton>
      </template>
    </Variant>
  </Story>
</template>
