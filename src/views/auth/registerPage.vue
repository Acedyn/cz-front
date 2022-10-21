<script setup lang="ts">
import { reactive, computed } from "vue";
import { RouterLink } from "vue-router";
import TypographyTitle from "@/components/utils/TypographyTitle.vue";
import TextInput from "@/components/interaction/TextInput.vue";
import Button from "@/components/interaction/Button.vue";
import SocialMediaButton from "@/components/interaction/SocialMediaButton.vue";
import { useAuthStore } from "@/stores/auth";

const { signin } = useAuthStore();

const registerState = reactive({
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
});

const isRegisterDisabled = computed(() => {
  return !(
    registerState.email &&
    registerState.username &&
    registerState.password &&
    registerState.confirmPassword &&
    registerState.confirmPassword === registerState.password
  );
});

const signinUser = () => {
  signin(registerState.username, registerState.password, registerState.email);
};
</script>

<template>
  <div class="auth-container">
    <div class="login-register-container">
      <div class="page-selector">
        <TypographyTitle
          class="selection"
          font="Paytone One"
          color="var(--global-color-typography)"
        >
          <router-link :to="{ name: 'loginPage' }"> Se connecter </router-link>
        </TypographyTitle>
        <TypographyTitle
          class="selection active"
          font="Paytone One"
          color="var(--global-color-typography)"
        >
          <a> S’inscrire </a>
        </TypographyTitle>
      </div>

      <TextInput
        v-model="registerState.email"
        type="email"
        placeholder="E-mail"
        icon="tools"
      />
      <TextInput
        v-model="registerState.username"
        type="text"
        placeholder="Nom d’utilisateur"
        icon="tools"
      />
      <TextInput
        v-model="registerState.password"
        type="password"
        placeholder="Mot de passe"
        icon="tools"
      />
      <TextInput
        v-model="registerState.confirmPassword"
        type="password"
        placeholder="Répéter le mot de passe"
        icon="tools"
      />

      <Button
        :disabled="isRegisterDisabled"
        height="58px"
        color="#D77A37"
        @click="signinUser"
      >
        S’inscrire
      </Button>

      <div class="divider"></div>

      <SocialMediaButton type="facebook">
        Continue with Facebook
      </SocialMediaButton>
      <SocialMediaButton type="google">
        Continue with Google
      </SocialMediaButton>

      <div class="text-line">
        <p>Vous êtes déjà inscrit ?</p>
        <p>
          <router-link
            :to="{ name: 'loginPage' }"
            style="text-decoration: underline"
            >Se connecter</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  height: 100%;
  font-family: "Quicksand", serif;
  background-image: url("/src/assets/background/background.png"),
    radial-gradient(76.99% 76.99% at 50% 53.41%, #925637 0%, #411f12 100%);
}

.login-register-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 50%;
}

.login-register-container * {
  margin: 1rem 0;
}

.page-selector {
  display: flex;
  justify-content: space-between;
}

.selection {
  opacity: 0.5;
}

.selection.active {
  opacity: 1;
}

p {
  font-family: "Quicksand", sans-serif;
  color: var(--global-color-typography);
  font-size: 16px;
}

.divider {
  height: 1px;
  background-color: var(--global-color-typography);
}

.text-line {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 768px) {
  .login-register-container {
    width: 100%;
    max-width: 400px;
    padding: 0 2rem 0;
    overflow: auto;
  }

  .selection a {
    font-size: 2rem;
  }

  .text-line {
    justify-content: center;
    gap: 1rem;
  }
}
</style>
