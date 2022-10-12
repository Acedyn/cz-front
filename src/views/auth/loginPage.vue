<script setup lang="ts">
import { reactive, computed } from "vue";
import TypographyTitle from "@/components/utils/TypographyTitle.vue";
import TextInput from "@/components/interaction/TextInput.vue";
import CheckBox from "@/components/interaction/Checkbox.vue";
import Button from "@/components/interaction/Button.vue";
import { usePreferencesStore } from "../../stores/preferences";
import { storeToRefs } from "pinia";

const preferences = usePreferencesStore();
const { pageLeft } = storeToRefs(preferences);

const user = reactive({
  email: "",
  password: "",
});

const isLoginDisabled = computed(() => {
  return !(user.email.length > 1 && user.password.length > 1);
});
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
          Se connecter
        </TypographyTitle>
        <TypographyTitle
          class="selection"
          font="Paytone One"
          color="var(--global-color-typography)"
        >
          <a href="/register"> S’inscrire </a>
        </TypographyTitle>
      </div>

      <TextInput
        v-model="user.email"
        type="email"
        placeholder="E-mail"
        icon="handyman"
      />
      <TextInput
        v-model="user.password"
        type="password"
        placeholder="Password"
        icon="handyman"
      />

      <div class="text-line">
        <CheckBox label="Se souvenir de moi" />
        <p>
          <a href="/reset-password" style="text-decoration: underline"
            >Mot de passe oublié ?</a
          >
        </p>
      </div>

      <Button
        :invert="true"
        :disabled="isLoginDisabled"
        height="58px"
        :color-hover-invert="isLoginDisabled ? '' : 'var(--global-color-hover)'"
        >Login
      </Button>

      <div class="divider"></div>

      <Button
        icon="fab fa-facebook-f"
        color="#00A3FF"
        color-hover="#00A3FF"
        text-color="white"
        >Continue with Facebook
      </Button>
      <Button
        icon="fab fa-google"
        color="#F5F5F5"
        color-hover="#F5F5F5"
        text-color="var(--global-color-dark)"
        >Continue with Google
      </Button>

      <div class="text-line">
        <p>Pas encore de compte ?</p>
        <p>
          <a href="/register" style="text-decoration: underline"
            >En créer un gratuitement</a
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
    padding: 1rem;
  }
}
</style>
