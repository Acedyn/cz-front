<script setup lang="ts">
import { computed } from "vue";

interface PropsDef {
  props: {
    name: string;
    types: string[];
    default: number | string | boolean;
  }[];
}

const props = withDefaults(
  defineProps<{
    modelValue: Record<string, number | string | boolean>;
    propsDef: PropsDef;
    ignore?: string[];
  }>(),
  {
    ignore: () => [],
  }
);

const emit = defineEmits<{
  (
    e: "update:modelValue",
    value: Record<string, number | string | boolean>
  ): void;
}>();

const onUpdate = (name, value) => {
  const foo = {};
  foo[name] = value;
  emit("update:modelValue", { ...props.modelValue, ...foo });
};

const stateProps = computed(() => {
  return props.propsDef.props.filter((p) => !props.ignore.includes(p.name));
});
</script>

<template>
  <template v-for="(prop, index) in stateProps" :key="index">
    <HstCheckbox
      @update:modelValue="(value) => onUpdate(prop.name, value)"
      :modelValue="props.modelValue[prop.name] || prop.default"
      :title="
        prop.name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
          return str.toUpperCase();
        })
      "
      v-if="prop.types.includes('boolean')"
    />
    <HstNumber
      @update:modelValue="(value) => onUpdate(prop.name, value)"
      :modelValue="props.modelValue[prop.name] || prop.default"
      :title="
        prop.name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
          return str.toUpperCase();
        })
      "
      v-else-if="prop.types.includes('number')"
    />
    <HstText
      @update:modelValue="(value) => onUpdate(prop.name, value)"
      :modelValue="props.modelValue[prop.name] || prop.default"
      :title="
        prop.name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
          return str.toUpperCase();
        })
      "
      v-else-if="prop.types.includes('string')"
    />
  </template>
</template>
