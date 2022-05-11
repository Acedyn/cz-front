<script setup lang="ts">
import { ref, onMounted } from "vue";
import RoadmapCard from "../components/cards/RoadmapCard.vue";

const state = ref(-1)
const text = ref([
  {
    title: "The Post Office",
    paragraphs: [
      {
        head: "The Break Room",
        text: "Some Cardboard Citizens find themselves spending entirely too much time in the break room. But the coffee is good, you can smoke a cig, and the vibes are chill, so who can blame them? Beats delivering packages. Until the mail room gets overcrowded with boxes and Mr. Uggated goes on one of his hangover laden tirades. It can be a bit of a problem. Marvin claimed to have stayed back there without delivering a single package for 30 days one time. Uggated never found out, but for some reason, Marvin was different after those 30 days. No one could quite pin it down, just… an air about him.",
      },
      {
        head: "Deliveries",
        text: "We deliver. Not always on time. Sometimes the boxes are a bit chewed up. Sometimes your mail smells like an ashtray. But get over yourself, you don’t spend all day in a truck with dispatch hounding you, so take your judgment, put it on a post card and mail it to us so we can lose it forever behind the sorting machine. Otherwise, check your mail for what we actually do deliver and thank your lucky stars we don’t open your letters. We’re looking at you, Mrs. Dildonna, you dirty, dirty girl, you. We wouldn’t know anything about Mr. X, would we?",
      },
    ],
  },
  {
    title: "The Warehouse",
    paragraphs: [
      {
        head: "The Inventory",
        text: "There are 6,666 Citizens, all unique, all half-heartedly sorting and delivering, waiting for you to breathe life into them. We need you to tell our story, so pick one of us up, turn on the old noggin, and spit something out that you think we would do.",
      },
      {
        head: "The Corkboard",
        text: "You Citizen holders are a talented group of degenerates and while most post offices have pictures of wanted criminals and lost children and sometimes wanted criminals who are lost children, we decided to hell with that, let’s put pictures of ourselves up there. Only thing is, you all are the artists, not us, so we put up the best pictures of us on the Corkboard that you fine folk produce. Don’t forget to put your name on it. We aren’t mind readers. Return to Sender is a thing for a reason.",
      },
    ],
  },
  {
    title: "The Brand",
    paragraphs: [
      {
        head: "Boutique",
        text: "Let’s just say we know people and those people like the way we look. So we’re going to have those people put us on some streetwear in exclusive collections designed by our team and a Parisian fashion creator. Cz attitude never looked so good. Only on our website.",
      },
      {
        head: "Collaborations",
        text: "Bring Cardboard Citizens outfits to the fashion world with limited editions partnering streetwear, sport brands.",
      },
    ],
  },
])

const show = ref(false)

onMounted(() => {
  show.value = true
})

const setState = (newState: number) => {
  state.value = newState;
}
</script>

<template>
  <transition name="fade">
    <div id="template" v-if="show">
      <div id="template-overlay">

        <div id="office" class="overlay highlight" @click="setState(0)">
          <img class="horizontal-title" src="../assets/images/carboard_template_office.png" />
        </div>
        <div id="warehouse" class="overlay highlight" @click="setState(1)">
          <img class="horizontal-title" src="../assets/images/carboard_template_warehouse.png" />
        </div>
        <div id="brand" class="overlay highlight" @click="setState(2)">
          <img class="vertical-title" src="../assets/images/carboard_template_brand.png" />
        </div>
        <div id="menu" class="overlay highlight" @click="setState(-1)">
          <img class="vertical-title" src="../assets/images/carboard_template_menu.png" />
        </div>

        <transition name="fade">
          <RoadmapCard
            v-if="state >= 0"
            class="overlay"
            id="paragraph"
            :title="text[state].title"
            :paragraphs="text[state].paragraphs"
          />
        </transition>
      </div>
    </div>
  </transition>
</template>

<style scoped>
#template {
  max-width: 100vw;
  max-height: calc(100vh - 150px);
  height: 100vh;
  position: relative;
  background-image: url(@/assets/images/carboard_template.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}

#template-overlay {
  max-height: 100%;
  width: 100%;
  aspect-ratio: 1.9 / 1;
  position: absolute;
  cursor: context-menu;
  display: grid;
  grid-template-columns: 3% 19% 2% 54% 1% 16.5%;
  grid-template-rows: 4% 21% 4% 2% 38% 2% 5% 20%;
}

.horizontal-title {
  height: 60%;
  width: auto;
  transition: 0.1s;
}

.vertical-title {
  height: auto;
  width: 60%;
  transition: 0.1s;
}

.overlay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.overlay:hover .highlight{
  backdrop-filter: contrast(120%);
}

.overlay:hover .horizontal-title {
  height: 63%;
}

.overlay:hover .vertical-title {
  width: 63%;
}

#office {
  grid-column: 4 / 5;
  grid-row: 2 / 4;
}
#warehouse {
  grid-row: 7 / 9;
  grid-column: 4 / 5;
}
#brand {
  grid-row: 2 / 9;
  grid-column: 6 / 7;
}
#menu {
  grid-row: 3 / 8;
  grid-column: 2 / 3;
  padding-bottom: 50%;
}
#paragraph {
  grid-row: 1 / 10;
  grid-column: 4 / 7;
  transform: scale(1.01);
}


@media screen and (max-width: 640px) {
  #template {
    transform: rotate(90deg) scale(1.9);
    max-width: 100vw;
    max-height: calc(100vh - 150px);
    height: 100vh;
  }
}
</style>

