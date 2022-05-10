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
    <div id="text-container">
      <p id="title">{{ title }}</p>
      <br/>
      <div v-for="paragraph in paragraphs" :key="paragraph.title">
        <p class="head">{{ paragraph.head }}</p>
        <p class="text">{{ paragraph.text }}</p>
        <br/>
      </div>
    </div>
  </div>
</template>

<style scoped>
#paragraph {
  font-family: "BlockHeadUnplugged";
  background-image: url(@/assets/images/carboard_template_hover.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  font-weight: bolder;
  padding: 20px;
  width: 100%;
  height: 100%;
}

#text-container {
  position: absolute;
  left: 38%;
  width: 49%;
  top: 5%;
  height: 90%;
  text-overflow: scroll;
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
}
</style>

