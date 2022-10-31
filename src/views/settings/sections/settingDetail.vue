<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import TextInput from "@/components/interaction/TextInput.vue";
import FileUpload from "@/components/interaction/FileUpload.vue";
import IconChecked from "@/components/icons/iconCheckedSolid.vue";
import IconUncheked from "@/components/icons/iconUncheckedOutline.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

// Temporary Data
const accountDetail = ref({
  username: authStore.user.data?.name || "",
  image: authStore.user.data?.image || "",
  mail: authStore.user.data?.email || "",
  password: "",
  passwordConfirm: "",
});

const validations = computed(() => {
  const capitalLetterRegex = new RegExp("(?=.*[A-Z])");
  const smallLeterRegEx = new RegExp("(?=.*[a-z])");
  return {
    length:
      accountDetail.value.password.length >= 8 &&
      accountDetail.value.passwordConfirm.length >= 8,
    hasCapitalLetter:
      capitalLetterRegex.test(accountDetail.value.password) &&
      capitalLetterRegex.test(accountDetail.value.passwordConfirm),
    hasSmallLetter:
      smallLeterRegEx.test(accountDetail.value.password) &&
      smallLeterRegEx.test(accountDetail.value.passwordConfirm),
    bothPasswordMatch:
      accountDetail.value.password === accountDetail.value.passwordConfirm,
  };
});

onMounted(() => {
  console.log(authStore.user);
  console.log(authStore.user.data);
  console.log(authStore.user.data.name);
  const accountDetailCopy = accountDetail.value;
  accountDetailCopy.username = authStore.user.data?.name || "";
  accountDetailCopy.image = authStore.user.data?.image || "";
  accountDetailCopy.mail = authStore.user.data?.email || "";
  accountDetail.value = { ...accountDetailCopy };
});
</script>

<template>
  <div class="my-detail-container">
    <div class="text-container">
      <TextInput
        v-model="accountDetail.username"
        type="text"
        label="Username"
        icon="tools"
        placeholder="username"
      />
      <div></div>
    </div>
    <div class="text-container">
      <TextInput
        v-model="accountDetail.mail"
        type="email"
        label="Email"
        icon="tools"
        placeholder="email@mail.com"
      />
      <div></div>
    </div>
    <div class="text-container">
      <TextInput
        v-model="accountDetail.password"
        label="Password"
        icon="tools"
        placeholder="insert new password"
        type="password"
      />
      <TextInput
        v-model="accountDetail.passwordConfirm"
        label="Confirm Password"
        icon="tools"
        placeholder="confirm new password"
        type="password"
        :invalid="
          accountDetail.passwordConfirm.length > 0 &&
          Object.values(validations).some((item) => item === false)
        "
      />
    </div>
    <div
      v-if="accountDetail.passwordConfirm.length > 0"
      class="validation-container"
    >
      <p>
        <IconChecked v-if="validations?.length" size="1.2rem" />
        <IconUncheked v-else size="1.2rem" />
        Must contain at least 8 characters
      </p>
      <p>
        <IconChecked v-if="validations?.hasCapitalLetter" size="1.2rem" />
        <IconUncheked v-else size="1.2rem" />
        Must contain one uppercase letter (A through Z)
      </p>
      <p>
        <IconChecked v-if="validations?.hasSmallLetter" size="1.2rem" />
        <IconUncheked v-else size="1.2rem" />
        Must contain one lowercase letter (a through z)
      </p>
      <p>
        <IconChecked v-if="validations?.bothPasswordMatch" size="1.2rem" />
        <IconUncheked v-else size="1.2rem" />
        The two passwords{{
          validations?.bothPasswordMatch ? " " : " do not "
        }}match
      </p>
    </div>
    <FileUpload
      label="Upload your picture"
      :defaultImage="authStore.user.data?.image"
    />
  </div>
</template>

<style scoped>
.my-detail-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text-container {
  display: flex;
  width: 100%;
  gap: 2rem;
}

.text-container * {
  flex: 1;
}

.validation-container p {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: Quicksand, sans-serif;
  font-size: 1rem;
  color: var(--global-color-typography);
}

@media only screen and (max-width: 767px) {
  .text-container {
    flex-direction: column;
  }
}
</style>
