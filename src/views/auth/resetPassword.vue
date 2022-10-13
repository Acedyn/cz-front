<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import TypographyTitle from "@/components/utils/TypographyTitle.vue";
import TextInput from "@/components/interaction/TextInput.vue";
import Button from "@/components/interaction/Button.vue";

const email = ref("");
const isLoginDisabled = computed(() => {
  return !(email.value.length > 0);
});
</script>

<template>
  <div class="auth-container">
    <div class="reset-password-container">
      <TypographyTitle
        font="Paytone One"
        color="var(--global-color-typography)"
      >
        Reset password
      </TypographyTitle>
      <p>To reset your password, we need to send you an email.</p>
      <TextInput
        v-model="email"
        type="email"
        placeholder="E-mail"
        icon="tools"
      />
      <Button
        :invert="true"
        :disabled="isLoginDisabled"
        height="58px"
        :color-hover-invert="isLoginDisabled ? '' : 'var(--global-color-hover)'"
        >Continuer
      </Button>
      <div class="no-account-line">
        <p>Pas encore de compte ?</p>
        <p>
          <router-link
            :to="{ name: 'registerPage' }"
            style="text-decoration: underline"
            >En créer un gratuitement</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  height: 100%;
  background-image: url("/src/assets/background/background.png"),
    radial-gradient(76.99% 76.99% at 50% 53.41%, #925637 0%, #411f12 100%);
}

.reset-password-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
  display: flex;
  flex-direction: column;
}

.reset-password-container * {
  margin: 1rem 0;
}

p {
  font-family: "Quicksand", sans-serif;
  color: var(--global-color-typography);
  font-size: 16px;
}

.no-account-line {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 768px) {
  .reset-password-container {
    width: 100%;
    max-width: 400px;
    padding: 1rem;
  }
}
</style>
