<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import TextInput from "@/components/interaction/TextInput.vue";
import FileUpload from "@/components/interaction/FileUpload.vue";
import IconChecked from "@/components/icons/iconCheckedSolid.vue";
import IconUncheked from "@/components/icons/iconUncheckedOutline.vue";

// Temporary Data
const accountDetail = reactive({
  username: "",
  password: "",
  passwordConfirm: "",
});

const isValidated = ref<boolean>(false);

const validations = computed(() => {
  const capitalLetterRegex = new RegExp("(?=.*[A-Z])");
  const smallLeterRegEx = new RegExp("(?=.*[a-z])");
  return {
    length:
      accountDetail.password.length >= 8 &&
      accountDetail.passwordConfirm.length >= 8,
    hasCapitalLetter:
      capitalLetterRegex.test(accountDetail.password) &&
      capitalLetterRegex.test(accountDetail.passwordConfirm),
    hasSmallLetter:
      smallLeterRegEx.test(accountDetail.password) &&
      smallLeterRegEx.test(accountDetail.passwordConfirm),
    bothPasswordMatch: accountDetail.password === accountDetail.passwordConfirm,
  };
});
</script>

<template>
  <div class="my-detail-container">
    <div class="text-container">
      <TextInput
        v-model="accountDetail.username"
        type="email"
        label="Email"
        icon="tools"
        placeholder="randomadress@gmail.com"
      />
      <div></div>
    </div>
    <div class="text-container">
      <TextInput
        v-model="accountDetail.password"
        label="Password"
        icon="tools"
        placeholder="ChopChop54!"
        type="password"
      />
      <TextInput
        v-model="accountDetail.passwordConfirm"
        label="Password"
        icon="tools"
        placeholder="ChopChop54!"
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
    <FileUpload label="Upload your picture" />
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
