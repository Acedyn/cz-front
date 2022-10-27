<template>
  <div class="reward-header-container">
    <img src="@/assets/goodboard/pouch.png" class="reward-menu" />
    <img src="@/assets/goodboard/title.png" class="reward-title" />
    <img src="@/assets/goodboard/infobook_closed.png" class="reward-menu" />
  </div>
</template>

<style scoped>
.reward-header-container {
  display: flex;
  justify-content: space-between;
  height: 25%;
  width: 100%;
  max-width: 80rem;
  margin-block: 2rem;
  margin-inline: auto;
  z-index: 1;
}

.reward-title {
  height: 70%;
}

.reward-menu {
  transition: 0.1s ease-in;
  cursor: pointer;
}

.reward-menu:hover {
  filter: brightness(1.2) drop-shadow(0px 0px 1rem #ea9953);
}
</style>
