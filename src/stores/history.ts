import { defineStore } from "pinia";

const historyLocal = JSON.parse(localStorage.getItem("history") || "{}");
console.log(historyLocal);
export const useHistoryStore = defineStore({
  id: "history",
  state: () => ({
    sceneVisits: historyLocal.sceneVisits || {},
  }),
  getters: {
    getSceneVisits: (state) => state.sceneVisits,
  },
  actions: {
    storeSceneVisit(path: string) {
      this.sceneVisits[path] = true;

      historyLocal.sceneVisits = this.sceneVisits;
      localStorage.setItem("history", JSON.stringify(historyLocal));
    },
  },
});
