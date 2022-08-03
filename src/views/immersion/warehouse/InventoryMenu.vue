<script setup lang="ts">
import { ref, watch, computed } from "vue";
import type { Citizen } from "../../../legacy/types/citizen";
import OverlayPopup from "../../../components/popup/OverlayPopup.vue";
import NFTHolder from "./NFTHolder.vue";
import NFTCard from "./NFTCard.vue";

const props = defineProps<{
  show: boolean;
  citizens: Citizen[];
}>();

const cardsStyle = computed<Partial<CSSStyleDeclaration>[]>(() => {
  return props.citizens.map((citizen) => {
    if (citizen.commited) {
      return { filter: "drop-shadow(0px 0px 10px #9fc168)" };
    }

    for (const attribute of citizen.attributes) {
      if (attribute.selectedStory === undefined) {
        return {};
      }
    }
    return { filter: "drop-shadow(0px 0px 5px #ffd676)" };
  });
});

const emit = defineEmits<{
  (e: "exit"): void;
  (e: "select", index: number): void;
}>();

const selectCitizen = (index: number) => {
  emit("select", index);
  emit("exit");
};

const visibleCards = ref<boolean[]>(props.citizens.map((_) => false));

watch(props, () => {
  props.citizens.forEach((_, index) => {
    setTimeout(() => {
      visibleCards.value[index] = props.show;
    }, index * 30);
  });
});
</script>

<template>
  <OverlayPopup
    :show="props.show"
    margin="0%"
    @exit="
      () => {
        emit('exit');
      }
    "
  >
    <div class="inventory-container" @click="() => emit('exit')">
      <template v-for="(citizen, index) in citizens">
        <NFTHolder
          class="holder-container"
          @click="() => selectCitizen(index)"
          :visible="visibleCards[index]"
          :name="citizen.name"
        >
          <NFTCard :citizen="citizen" :style="cardsStyle[index]" />
        </NFTHolder>
      </template>
    </div>
  </OverlayPopup>
</template>

<style scoped>
.inventory-container {
  position: absolute;
  top: 142px;
  min-height: 100vh;
  width: 100vw;
  z-index: 2;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5vh;
  padding-bottom: 20vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  background-image: url(@/assets/immersion/warehouse/holder_background.png),
    radial-gradient(circle, rgba(103, 84, 70, 1) 50%, rgba(44, 36, 30, 1));
  background-size: contain;
  background-repeat: repeat;

  box-shadow: 0px 0px 40px black;
}

.holder-container {
  width: 300px;
  height: 300px;
}

@media screen and (max-width: 1600px) {
  .holder-container {
    width: 250px;
    height: 250px;
  }
}

@media screen and (max-width: 1200px) {
  .holder-container {
    width: 200px;
    height: 200px;
  }
}
@media screen and (max-width: 800px) {
  .holder-container {
    width: 150px;
    height: 150px;
  }
}
</style>
