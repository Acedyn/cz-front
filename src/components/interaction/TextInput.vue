<script setup lang="ts">
import { ref } from "vue";
import LogoImage from "../atoms/LogoImage.vue";
import IconEye from "../icons/iconEye.vue";

import type { InputType } from "@/types/inputType";
import type { LogoImageType } from "@/types/logoImage";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label?: string;
    placeholder: string;
    type: InputType;
    required?: boolean;
    disabled?: boolean;
    icon: LogoImageType;
    invalid?: boolean;
  }>(),
  {
    label: " ",
    type: "text" as InputType,
    disabled: false,
    required: false,
    invalid: false,
  }
);

const eyeStatus = ref<"open" | "close">("close");
const inputType = ref(props.type);

const emits = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const updateValue = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};

const handleEye = () => {
  inputType.value = eyeStatus.value === "close" ? "text" : "password";
  eyeStatus.value = eyeStatus.value === "close" ? "open" : "close";
};
</script>

<template>
  <div class="text-input-container">
    <p v-if="props.label" class="text-input-label">{{ props.label }}</p>
    <div :class="`text-input ${props.invalid ? 'invalid' : ''}`">
      <div class="leading-icon">
        <LogoImage :type="props.icon" />
      </div>
      <div class="input">
        <input
          :class="props.invalid ? 'invalid' : ''"
          :type="inputType"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          :required="props.required"
          :value="props.modelValue"
          @input="updateValue"
        />
      </div>
      <div v-if="props.type === 'password'" class="trailing-icon">
        <IconEye :type="eyeStatus" size="2rem" @update:eye="handleEye" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  --detail-dark: #f1a54f;
  --detail-light: #ffd3ba;
}

.text-input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.text-input {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid var(--detail-dark);
  border-radius: 8px;
  background-color: var(--detail-light);
}

.text-input.invalid {
  border: 2px solid #ff2f00;
}

.input {
  flex: 2;
}

.text-input-label {
  font-family: Quicksand, serif;
  font-weight: 700;
  font-size: 1rem;
  color: var(--global-color-typography);
}

input {
  width: 100%;
  height: 40px;
  padding: 1rem 0 1rem 1rem;
  outline: none;
  color: var(--global-color-typography-dark);
  border: 0;
  border-radius: 8px;
  font-family: "Quick Sand", serif;
  font-weight: 700;
  font-size: 16px;
  background-color: var(--detail-light);
}

input::placeholder {
  font-weight: 400;
  color: var(--detail-dark);
  opacity: 0.75;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  box-shadow: 0 0 0 1000px var(--detail-light) inset;
}

input.invalid {
  color: #ff2f00;
}
</style>
