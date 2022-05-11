<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    paragraphs: Array,
  },
});
</script>

<template>
  <div id="paragraph">
    <p id="title">{{ title }}</p>
    <br/>
    <div v-for="(paragraph, index) in paragraphs" :key="paragraph.title" class="block" :style="index % 2 === 0 ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}">
      <img class="cardboard-logo" src="../../assets/logos/brand_logo.png" />
      <div class="text-block">
        <p class="head" :style="index % 2 === 0 ? {textAlign: 'left'} : {textAlign: 'right'}">{{ paragraph.head }}</p>
        <p class="text">{{ paragraph.text }}</p>
      </div>
      <br/>
    </div>
  </div>
</template>

<style scoped>
#paragraph {
  border: 5px solid transparent;
  border-radius: 2px;
  border-image: url(@/assets/dots/dots_2-1.png) 20 round;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 40%);
  background-image: radial-gradient(circle, rgb(110 82 59 / 95%),  rgb(112 83 60 / 95%));
  padding: 10px;
  overflow: auto;

  font-weight: bolder;
  font-size: 1em;
  line-height: 1em;
  font-family: "BlockHeadUnplugged", monospace;
  color: #211f1d;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#title {
  font-weight: normal;
  text-align: center;
  font-family: "BlockHeadFace";
  font-size: 30px;
  line-height: 30px;
}

.head {
  font-size: 1.2em;
  line-height: 1.2em;
  text-decoration: underline;
}

.text {
  font-size: 1em;
  line-height: 1em;
  text-align: justify;
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

