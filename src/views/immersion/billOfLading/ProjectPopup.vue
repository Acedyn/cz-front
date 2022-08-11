<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { getBreakpoint, Breakpoint } from "../../../utils/breakpoints";

const props = defineProps<{
  source: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const imagesRootURL = "src/assets/immersion/scenes/bill_of_lading/displays";
const images = ref<
  Record<string, { url: string; colorA: string; colorB: string }>
>({
  proof_water: {
    url: new URL(`/${imagesRootURL}/proof_of_water.png`, import.meta.url).href,
    colorA: "8ecae0",
    colorB: "07417b",
  },
  proof_knowledge: {
    url: new URL(`/${imagesRootURL}/proof_of_knowledge.png`, import.meta.url)
      .href,
    colorA: "343b3e",
    colorB: "151f24",
  },
  proof_scrap: {
    url: new URL(`/${imagesRootURL}/proof_of_scrap.png`, import.meta.url).href,
    colorA: "847169",
    colorB: "452d26",
  },
  proof_forest: {
    url: new URL(`/${imagesRootURL}/proof_of_forest.png`, import.meta.url).href,
    colorA: "5c6923",
    colorB: "5c6923",
  },
});

const breakpoint = getBreakpoint(onMounted, onUnmounted);
const onMobile = computed(() => breakpoint.value < Breakpoint.MD);
const getContainerStyle = () => {
  if (!onMobile) {
    return { backgroundImage: "url(" + images.value[props.source].url + ")" };
  }
  return {};
};
</script>

<template>
  <div
    :class="`project-container ${props.source}-container ${
      onMobile ? 'mobile-container' : ''
    }`"
    @click="() => emit('click')"
    :style="getContainerStyle()"
  >
    <div
      :class="`paragraph ${props.source} ${onMobile ? 'mobile-paragraph' : ''}`"
    >
      <template v-if="props.source === 'proof_water'">
        <img
          src="@/assets/immersion/scenes/bill_of_lading/displays/water_title.png"
          v-if="onMobile"
          class="mobile-title"
        />
        <h4>Description</h4>
        <p>
          “Fear causes hesitation, and hesitation will cause your worst fears to
          come true.” Bohdi, Point Break.
        </p>
        <p>
          Water is the reason why human beings are now living on Earth, Oceans
          represent 71% of our planet's surface. Therefore, Cardboard Citizens
          will make it one of
          <b class="important">
            its main purposes to clean the seas, lakes and rivers. No more
            plastic in the oceans!
          </b>
        </p>
        <p>
          Proof of Water is a protocol powered by the Solana Blockchain which
          aims at providing accountability for the cleaning of the oceans, lakes
          and rivers.. (We won’t be cleaning your swimming pool Marvin !)
        </p>
        <p>
          This solution will follow a validation process quite similar to the
          other protocols. Holders (holding the right citizens with water and
          blue traits) will be validators of our system. Organisations
          specialised in cleaning oceans will work with us to clean the water
          and send proof to our system in order to trace it through the
          blockchain. Validators will be compensated thanks to public and
          private institutions' donations.
        </p>
        <p>
          <b class="important">
            As a Non-profit / Profit Organisations 90% of the funding will be
            redistributed to Cardboard Citizens Holders.
          </b>
        </p>
        <p>
          Notes: Not every Cardboard Citizens will be a key actor in the Proof
          of Water process. Water / Blue traits will be required…
        </p>

        <h4>Timeline</h4>
        <p>
          <b class="important">Q1 2023</b>
        </p>
        <ul>
          <li>Proof of Water process release</li>
          <li>Proof of Water design development</li>
          <li>
            Proof of Water Beta testing only for Cardboard Citizens Holders
          </li>
        </ul>
        <p>
          <b class="important">Q2 2023</b>
        </p>
        <ul>
          <li>
            Cardboard Citizens receive first donation to use Proof of Water
            (Organization TBA)
          </li>
          <li>
            Proof of Water first deployment only for the first Organization
          </li>
        </ul>
        <p>
          <b class="important">Q3 2023</b>
        </p>
        <ul>
          <li>Proof of Water solution available and deployed in the world</li>
        </ul>
      </template>

      <template v-else-if="props.source === 'proof_knowledge'">
        <img
          src="@/assets/immersion/scenes/bill_of_lading/displays/knowledge_title.png"
          v-if="onMobile"
          class="mobile-title"
        />
        <h4>Description</h4>
        <p>
          (Solana is getting Hammered by Cardboard Citizens !) Cardboard Citizen
          was born in the Crypto space, that is why we want to embrace the Web3
          environment by being key actors in its growth.
        </p>
        <p>
          <b class="important">
            Proof of Knowledge is not only one of our protocols BUT a Web3
            toolbox designed by the Cardboard Citizens development team.
          </b>
          It aims at simplifying the daily life of Web3 Users for Crypto and
          NFTs business related.
        </p>
        <p>
          <b class="important">
            As a Non-profit / Profit Organisations 90% of the Tool’s profit will
            be redistributed to Cardboard Citizens Holders ⇒ Good2Earn
          </b>
        </p>
        <p>
          Notes: All Cardboard Citizens tools will be free to use for our
          holders.
        </p>

        <h4>What is inside the Cz_ToolBox ?</h4>
        <p>
          <b class="important">Wallet Management</b>
        </p>
        <ul>
          <li>Cz_Portfolio (NFT User's Portfolio)</li>
          <li>
            Cz_Lifeguard (NFT Individual User Floor Monitoring and Alert floor
            Dashboard)
          </li>
          <li>Multi Wallet Management</li>
          <li>Cz_Radar (Sweep and Sniping NFT tools)</li>
        </ul>
        <p>
          <b class="important">Cardboard Citizens NFT</b>
        </p>
        <ul>
          <li>Banner creation</li>
          <li>Wallpaper Maker</li>
          <li>NFT Collage</li>
        </ul>

        <h4>Timeline</h4>
        <p>
          <b class="important">Q3 2022</b>
        </p>
        <ul>
          <li>Cz_ToolBox Design development to be released</li>
          <li>
            Cz_Lifguard deployed (only for Cardboard Citizens NFT holders)
          </li>
          <li>
            Cz_Banner and Wallpaper creation (only for Cardboard Citizens NFT
            holders)
          </li>
          <li>
            Cz_Portfolio and Cz_Radar deployed (only for Cardboard Citizens NFT
            holders)
          </li>
          <li>Cz_ToolBox available for everyone</li>
        </ul>
      </template>

      <template v-else-if="props.source === 'proof_scrap'">
        <img
          src="@/assets/immersion/scenes/bill_of_lading/displays/scrap_title.png"
          v-if="onMobile"
          class="mobile-title"
        />
        <h4>Description</h4>
        <p>
          Buying, consuming, throwing away, buying, consuming, throwing away…
          This is the current Consumer Cycle. Cardboard Citizens are foremost
          World Citizens who want to make the Earth the core of its
          Cz_Config_System. We want to connect and solve real life issues with
          Web3 solutions.
        </p>
        <p>
          Proof of scrap is the
          <b class="important">
            first protocol providing real accountability in recycling products
            powered by the blockchain. </b
          >This recycling solution aims to educate people's consciousness by
          offering our service to public and private organizations (governments,
          corporations, cities, etc…)
        </p>
        <p>
          This protocol will follow a simple validation process through our
          community and using the Solana Blockchain.
          <b class="important">Our holders will be validators of our system.</b
          >Once a product has been recycled and proof has been sent by the user,
          Cardboard Citizens NFT holders will validate through the blockchain in
          order to close the process (User recycle process TBA)
        </p>
        <p>
          <b class="important">
            Users and Validators will be compensated thanks to public and
            private institutions' donations.
          </b>
        </p>
        <p>
          <b class="important">
            As a Non-profit / Profit Organisations 90% of the funding will be
            redistributed to Cardboard Citizens Holders and Users ⇒ Good2Earn
          </b>
        </p>
        <p>
          Notes: Every Cardboard Citizens NFT holder can be a validator for
          Proof of Scrap (no specific traits needed)
        </p>

        <h4>Timeline</h4>
        <p>
          <b class="important">Q3 2022</b>
        </p>
        <ul>
          <li>Proof of Scrap process release</li>
          <li>Proof of Scrap design development</li>
          <li>
            Proof of Scrap Beta testing only for Cardboard Citizens Holders
          </li>
        </ul>
        <p>
          <b class="important">Q4 2022</b>
        </p>
        <ul>
          <li>
            Cardboard Citizens receive first donation to use Proof of Scrap
            (Organisation TBA)
          </li>
          <li>
            Proof of Scrap first deployment only for the first Organisation
          </li>
        </ul>
        <p>
          <b class="important">Q1 2023</b>
        </p>
        <ul>
          <li>Proof of Scrap solution available and deployed in the world</li>
        </ul>
      </template>

      <template v-else-if="props.source === 'proof_forest'">
        <img
          src="@/assets/immersion/scenes/bill_of_lading/displays/forest_title.png"
          v-if="onMobile"
          class="mobile-title"
        />
        <h4>Description</h4>
        <p>
          As Earth is the core of Cz_Config_System we must take care of it..
          Trees and biodiversity is the essence of life. Trees are the lungs,
          mushrooms are the brains and as a World Citizen we have to respect and
          maintain this 4.5 billion years old beautiful ecosystem.
          <b class="important">
            Elevating people’s consciousness through our protocols and values
            will always be Cardboard Citizens ultimate goal.
          </b>
        </p>
        <p>
          Proof of Forest is the first protocol powered by the Solana blockchain
          providing accountability for reforestation and Biodiversity
          conservation.
        </p>
        <p>
          This reforestation solution will follow a validation process quite
          similar to the other protocols. Holders (holding the right citizens
          with green traits) will serve as validators of our system. We will
          work hand in hand with organisations that specialise in the planting
          of trees and preserve ecosystems. Once a tree has been planted and
          proof has been sent by the organisation, Cardboard Citizens NFT
          holders will validate through the blockchain in order to close the
          process (Proof of Forest process TBA).
        </p>
        <p>
          <b class="important">
            Validators will be compensated thanks to public and private
            institutions' donations.
          </b>
        </p>
        <p>
          Warning: The replanting of trees will not be the unique focus of Proof
          of Forest (more to come…)
        </p>
        <p>
          <b class="important">
            As a Non-profit / Profit Organizations 90% of the funding will be
            redistributed to Cardboard Citizens Holders Good2Earn
          </b>
        </p>
        <p>
          Notes: Not every Cardboard Citizens will be a key actor in the Proof
          of Forest process. Green traits will be required…
        </p>

        <h4>Timeline</h4>
        <p>
          <b class="important">Q4 2022</b>
        </p>
        <ul>
          <li>Proof of Forest process release</li>
          <li>Proof of Forest design development</li>
          <li>
            Proof of Forest Beta testing only for Cardboard Citizens Holders
          </li>
        </ul>
        <p>
          <b class="important">Q1 2023</b>
        </p>
        <ul>
          <li>
            Cardboard Citizens receive first donation to use Proof of Forest
            (Organization TBA)
          </li>
          <li>
            Proof of Forest first deployment only for the first Organization
          </li>
        </ul>
        <p>
          <b class="important">Q2 2023</b>
        </p>
        <ul>
          <li>Proof of Forest solution available and deployed in the world</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
}

.mobile-paragraph {
  padding: 10px;
  border: 5px solid transparent;
  border-radius: 2px;
  border-image: url(@/assets/dots/dots_2-1.png) 20 round;
}

.paragraph {
  overflow: auto;
  position: absolute;

  color: #211f1d;
  font-size: 20px;
  line-height: 1.2em;
  letter-spacing: calc(15px * -0.04);
  text-align: justify;
  padding-right: 10px;
  padding-bottom: 10%;
}

h4 {
  font-size: 24px;
  text-transform: uppercase;
  margin: 1em 0px;
  font-weight: bolder;
}

p {
  margin: 25px 0px;
}

.important {
  font-weight: bolder;
  fon-height: bolder;
}

.proof_forest {
  top: 25%;
  bottom: 15%;
  left: 16%;
  right: 15%;
}

.proof_knowledge {
  top: 25%;
  bottom: 15%;
  left: 18%;
  right: 16%;
}

.proof_scrap {
  top: 25%;
  bottom: 18%;
  left: 22%;
  right: 12%;
}

.proof_water {
  top: 25%;
  bottom: 20%;
  left: 12%;
  right: 15%;
}

.mobile-paragraph {
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  margin: 5px;
}

.proof_forest-container {
  max-height: calc(100vw * (873 / 1582));
  max-width: calc(100vh * (1582 / 873));
}

.proof_forest-container.mobile-container {
  background-image: radial-gradient(circle, #a39b60, #919051);
}

.proof_knowledge-container {
  max-height: calc(100vw * (873 / 1582));
  max-width: calc(100vh * (1582 / 873));
}

.proof_knowledge-container.mobile-container {
  background-image: radial-gradient(circle, #877f7a, #8d8987);
}

.proof_scrap-container {
  max-height: calc(100vw * (873 / 1510));
  max-width: calc(100vh * (1510 / 873));
}

.proof_scrap-container.mobile-container {
  background-image: radial-gradient(circle, #918276, #978a81);
}

.proof_water-container {
  max-height: calc(100vw * (873 / 1583));
  max-width: calc(100vh * (1583 / 873));
}

.proof_water-container.mobile-container {
  background-image: radial-gradient(circle, #b59d7f, #9b8467);
}

.mobile-container {
  max-height: 100vh;
  max-width: 100vw;
  top: 5vh;
  bottom: 5vh;
  left: 10px;
  right: 10px;
  width: auto;
}

.mobile-title {
  height: 20%;
  width: 100%;
  object-fit: contain;
}

::-webkit-scrollbar-thumb {
  background: v-bind("`#${images[props.source].colorA}`");
  border-radius: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background: v-bind("`#${images[props.source].colorB}`");
}
</style>
