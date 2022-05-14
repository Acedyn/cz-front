<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    paragraphs: Array as () => {text: string, head: string}[],
  },
});
</script>

<template>
  <div class="paragraph">
    <div class="card">
      <p class="title">{{ title }}</p>
      <div v-for="(paragraph, index) in paragraphs" :key="paragraph.head" class="block" :style="index % 2 === 0 ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}">
        <div class="text-block">
          <p class="head" :style="index % 2 === 0 ? {textAlign: 'left'} : {textAlign: 'left'}">{{ paragraph.head }}</p>
          <p class="text">{{ paragraph.text }}</p>
        </div>
        <br/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.paragraph {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 40%);
  background-size: contain;
  background-image: url(@/assets/images/doodles.png);
  padding: 5px;
  border-radius: 3px;

  font-weight: bolder;
  font-size: 1em;
  line-height: 1em;
  font-family: "BlockHeadUnplugged", monospace;
  color: #211f1d;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card {
  border: 5px solid transparent;
  border-radius: 2px;
  border-image: url(@/assets/dots/dots_2-1.png) 20 round;
  padding: 10px;
  height: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 1em;
}

.title {
  color: #efd7bc;
  font-weight: normal;
  text-align: center;
  font-family: "BlockHeadFace";
  font-size: 2.5em;
  line-height: 2em;
  text-transform: uppercase;
}

.head {
  color: #efd7bc;
  text-transform: uppercase;
  font-size: 1.5em;
  line-height: 2em;
  text-decoration: underline;
}

.text {
  color: #c1b09d;
  font-size: 1.3em;
  line-height: 1.3em;
  text-align: justify;
  letter-spacing: -0.05em;
}

.block {
  display: flex;
  flex-direction: row;
}

.cardboard-logo {
  max-width: 30%;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  filter: brightness(300%);
}

.text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

