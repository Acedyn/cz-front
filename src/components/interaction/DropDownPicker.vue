<script setup lang="ts">
import { ref } from "vue";
import TypographyText from "../utils/TypographyText.vue";

const props = withDefaults(
  defineProps<{
    options: string[];
    defaultOption?: string;
    icon?: string;
    size?: number;
    textColor?: string;
    color?: string;
    colorHover?: string;
  }>(),
  {
    color: "var(--global-color-primary)",
    colorHover: "var(--global-color-hover)",
    textColor: "white",
    size: 1,
  }
);

const emit = defineEmits<{
  (e: "toggle"): void;
  (e: "select", selection: string): void;
}>();

const isSelecting = ref(false);
const selection = ref(
  props.options.find((option) => option === props.defaultOption) ||
    props.options[0]
);

const toggleSelecting = () => {
  isSelecting.value = !isSelecting.value;
  emit("toggle");
};

const selectOption = (option: string) => {
  toggleSelecting();
  selection.value = option;
  emit("select", option);
};
</script>

<template>
  <div class="dropdown-container">
    <button
      :class="`clear-button-style picker-button ${
        isSelecting ? 'picker-selecting' : ''
      }`"
      @click="toggleSelecting"
    >
      <span v-if="props.icon" class="material-icons button-icon main-icon">{{
        props.icon
      }}</span>
      <TypographyText
        size="big"
        :color="props.textColor"
        weight="bold"
        font="Poppins"
      >
        {{ selection }}
      </TypographyText>
      <span v-if="props.icon" class="material-icons button-icon">
        arrow_drop_down
      </span>
    </button>
    <transition name="dropdown">
      <div class="dropdown-menu" v-if="isSelecting">
        <button
          class="clear-button-style"
          v-for="(option, index) in props.options"
          :key="index"
          @click="() => selectOption(option)"
        >
          <TypographyText
            class="option"
            size="big"
            :color="props.textColor"
            weight="bold"
            font="Poppins"
          >
            <p>{{ option }}</p>
          </TypographyText>
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.clear-button-style {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.picker-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: v-bind(
    "`calc(0.344rem * ${props.size}) calc(0.782rem * ${props.size})`"
  );
  border-radius: v-bind("`calc(0.5rem * ${props.size})`");

  transition: 0.2s;
  font-family: Poppins;
  z-index: 1;
}

.picker-selecting {
  background: v-bind("props.colorHover");
}

.picker-button:hover {
  background: v-bind("props.colorHover");
}

.button-icon {
  color: v-bind("props.color");
  font-size: v-bind("`calc(2rem * ${props.size})`");
}

.main-icon {
  margin-right: v-bind("`calc(0.688rem * ${props.size})`");
}

.dropdown-menu {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: v-bind("props.colorHover");
  border-radius: v-bind("`calc(0.5rem * ${props.size})`");
  padding-top: v-bind("`calc(1.563rem * ${props.size})`");
  margin-top: v-bind("`calc(1.563rem * ${props.size})`");
}

.option {
  border-radius: v-bind("`calc(0.5rem * ${props.size})`");
}

.option:hover p {
  color: v-bind("props.color");
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: transform 0.2s ease;
  transform-origin: top;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: scaleY(0);
}
</style>
