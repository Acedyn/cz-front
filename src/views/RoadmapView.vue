<script lang="ts">
import { defineComponent } from "vue";
import RoadmapCard from "../components/cards/RoadmapCard.vue";

export default defineComponent({
  data() {
    return {
      state: -1,
      text: [
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
      ],
    };
  },
  methods: {
    setState(newState: number) {
      this.state = newState;
    },
  },
  components: {
    RoadmapCard,
  },
});
</script>

<template>
  <div id="template">
    <div id="template-overlay">
      <div id="title" class="overlay" @click="setState(-1)">
        <span class="goal-title" id="main-title">Cardboard Citizens</span>
        <span class="goal-title">Bill of lading</span>
      </div>

      <div>
        <div id="office" class="overlay overlay-button" @click="setState(0)">
          <span class="goal-title">The Post Office</span>
        </div>
        <div id="warehouse" class="overlay overlay-button" @click="setState(1)">
          <span class="goal-title">The Warehouse</span>
        </div>
        <div id="brand" class="overlay overlay-button" @click="setState(2)">
          <span class="goal-title">The Brand</span>
        </div>
      </div>

      <transition name="fade">
        <RoadmapCard
          v-if="state >= 0"
          class="overlay"
          :title="text[state].title"
          :paragraphs="text[state].paragraphs"
        />
      </transition>
    </div>
  </div>
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
}

.goal-title {
  text-align: center;
  color: rgb(46 35 26);
  font-size: 30px;
  line-height: 30px;
  font-family: "BlockHeadFace";
  transition: 0.2s;
}

.overlay {
  position: absolute;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
}

.overlay-button:hover {
  background-color: rgba(102, 72, 60, 0.5);
}

.overlay-button:hover .goal-title {
  font-size: 32px;
  line-height: 32px;
}

#main-title {
  padding: 0px 100px;
  font-size: 60px;
  line-height: 60px;
}

#title {
  left: 37%;
  width: 51%;
  top: 31%;
  height: 38%;
}

#office {
  left: 37%;
  width: 51%;
  top: 3%;
  height: 27%;
}
#warehouse {
  left: 1.4%;
  top: 30%;
  width: 35%;
  height: 40%;
}
#brand {
  left: 37%;
  width: 51%;
  top: 70%;
  height: 27%;
}
</style>

