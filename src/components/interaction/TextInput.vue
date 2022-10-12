<script setup lang="ts">
import type { InputType } from "@/types/inputType";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label: string;
    placeholder: string;
    type: InputType;
    required: boolean;
    disabled: boolean;
    icon: string;
  }>(),
  {
    label: " ",
    type: "text" as InputType,
    disabled: false,
    required: false,
  }
);

const emits = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const updateValue = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>

<template>
  <label v-if="props.label">
    {{ props.label }}
    <div>
      <span class="prepend-icon material-icons">{{ props.icon }}</span>
      <input
        :type="props.type"
        :placeholder="props.placeholder ? props.placeholder : props.label || ''"
        @input="updateValue"
        :value="props.modelValue"
      />
    </div>
  </label>
</template>

<style scoped>
* {
  --detail-dark: #f1a54f;
  --detial-light: #ffd3ba;
}

label {
  color: var(--global-color-typography);
}

input {
  width: 100%;
  height: 40px;
  padding: 2rem 0 2rem 3.5rem;
  outline: none;
  color: var(--detail-dark);
  border: 2px solid var(--detail-dark);
  border-radius: 8px;
  font-family: "Quick Sand", serif;
  font-weight: 700;
  font-size: 16px;
  background-color: var(--detial-light);
}

input::placeholder {
  font-weight: 400;
  color: var(--detail-dark);
  opacity: 0.75;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input:autofill,
input:autofill:hover,
input:autofill:focus,
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  border: 3px solid darkorange;
  background-color: var(--detial-light) !important;
}

.prepend-icon {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem 8px;
  color: var(--detail-dark);
  font-size: 38px;
  z-index: 99;
}
</style>
