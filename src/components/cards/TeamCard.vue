<script lang="ts">
export default {
  props: {
    name: String,
    description: String,
    src: String,
    link: String,
    social: String,
  },
};
</script>

<template>
  <div class="container">
    <div class="description card">
      <div class="picture">
        <img class="profile" :src="src" />
      </div>
      <div class="description">
        <h3>
          {{ name }}
          <a v-if="social !== undefined" :href="social">
            <img class="social" src="../../assets/logos/twitter.svg" />
          </a>
        </h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: horizontal;
  margin: 10px;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 36em;


  border: 5px solid transparent;
  border-radius: 2px;
  border-image: url(@/assets/dots/dots_2-1.png) 20 round;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 40%);
  background-image: radial-gradient(circle, #a37e60, #916d51);
  padding: 10px;
}

.picture {
  max-height: 200px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
}

.description {
  padding: 10px;
  font-weight: bolder;
  font-size: 1em;
  line-height: 1em;
  font-family: "BlockHeadUnplugged", monospace;
}

h3 {
  margin: 10px 0px;
  font-family: BlockHeadFace;
  line-height: 30px;
  font-size: 30px;
  color: rgba(0, 0, 0, 70%);
  text-align: start;
}

.social {
  height: 20px;
  margin: 0px 5px;
}

.profile {
  max-width: 100%;
  filter: brightness(90%);
  border-radius: 3%;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 40%);
}
</style>
