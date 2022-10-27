<script setup lang="ts">
import { reactive, computed } from "vue";
import TypographyTitle from "@/components/utils/TypographyTitle.vue";
import TextInput from "@/components/interaction/TextInput.vue";
import CheckBox from "@/components/interaction/Checkbox.vue";
import Button from "@/components/interaction/Button.vue";
import SocialMediaButton from "@/components/interaction/SocialMediaButton.vue";
import { useAuthStore } from "@/stores/auth";
import { RouterLink } from "vue-router";

const { login } = useAuthStore();

const loginState = reactive({
  email: "",
  password: "",
  remember: false,
});

const isLoginDisabled = computed(() => {
  return !(loginState.email.length > 1 && loginState.password.length > 1);
});

const loginUser = () => {
  login(loginState.email, loginState.password);
};
</script>

<template>
  <div class="auth-container">
    <div class="login-register-container">
      <div class="page-selector">
        <TypographyTitle
          class="selection active"
          font="Paytone One"
          color="var(--global-color-typography)"
        >
          <a> Se connecter </a>
        </TypographyTitle>
        <TypographyTitle
          class="selection"
          font="Paytone One"
          color="var(--global-color-typography)"
        >
          <router-link :to="{ name: 'registerPage' }"> S’inscrire</router-link>
        </TypographyTitle>
      </div>

      <TextInput
        ref="email"
        v-model="loginState.email"
        type="email"
        placeholder="Nom d'utilisateur"
        icon="tools"
      />
      <TextInput
        ref="password"
        v-model="loginState.password"
        type="password"
        placeholder="Mot de passe"
        icon="tools"
      />

      <div class="text-line">
        <CheckBox label="Se souvenir de moi" />
        <p>
          <router-link
            :to="{ name: 'resetPassword' }"
            style="text-decoration: underline"
            >Mot de passe oublié ?
          </router-link>
        </p>
      </div>

      <Button
        :disabled="isLoginDisabled"
        color="#D77A37"
        height="58px"
        :color-hover-invert="isLoginDisabled ? '' : 'var(--global-color-hover)'"
        @click="loginUser"
        >Login
      </Button>

      <div class="divider"></div>

      <SocialMediaButton type="facebook">
        Continue with Facebook
      </SocialMediaButton>
      <SocialMediaButton type="google">
        Continue with Google
      </SocialMediaButton>

      <div class="text-line">
        <p>Pas encore de compte ?</p>
        <p>
          <router-link
            :to="{ name: 'registerPage' }"
            style="text-decoration: underline"
            >En créer un gratuitement
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  overflow: auto;
  font-family: "Quicksand", serif;
  height: 100%;
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
  .auth-container {
    padding-top: 160px;
    height: 100vh;
  }

  .login-register-container {
    width: 100%;
    max-width: 400px;
    padding: 0 2rem 0;
  }

  .selection a {
    font-size: 2rem;
  }

  .text-line {
    text-align: center;
  }
}
</style>
