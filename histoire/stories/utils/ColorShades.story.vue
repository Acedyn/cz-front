<script lang="ts" setup>
const colors = {
  "--global": {
    "color-primary": "#e29d75",
    "color-hover": "#913b2e",
    "color-secondary": "#fea03338",
    "color-paragraph": "#f4e9de",
    "color-unavailable": "#ffd8aa",
    "color-dark": "#745454",
    "color-disable": "#f9c4a6",
  },
};
</script>

<template>
  <Story
    title="Global/Utils/Color Shades"
    responsive-disabled
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Palette">
      <HstColorShades
        v-for="(shades, key) of colors"
        :key="key"
        :shades="shades"
        :get-name="(shade) => `var(${key}-${shade})`"
      >
        <template #default="{ color }">
          <div
            class="htw-rounded-full htw-w-16 htw-h-16"
            :style="{
              backgroundColor: color,
            }"
          />
        </template>
      </HstColorShades>
    </Variant>

    <Variant title="Text">
      <HstColorShades
        v-for="(shades, key) of colors"
        :key="key"
        :shades="shades"
        :get-name="(shade) => `var(${key}-${shade})`"
      >
        <template #default="{ color }">
          <div
            class="htw-rounded htw-h-[100px] htw-text-5xl htw-flex htw-items-end"
            :style="{
              color: color,
            }"
          >
            Aa
          </div>
        </template>
      </HstColorShades>
    </Variant>

    <Variant title="Border">
      <HstColorShades
        v-for="(shades, key) of colors"
        :key="key"
        :shades="shades"
        :get-name="(shade) => `var(${key}-${shade})`"
      >
        <template #default="{ color }">
          <div
            class="htw-rounded htw-h-[100px] htw-border-solid htw-border-2"
            :style="{
              borderColor: color,
            }"
          />
        </template>
      </HstColorShades>
    </Variant>
  </Story>
</template>
