import { defineStore } from "pinia";
import { post, get } from "@/utils/restClient";
import router from "@/router";
import User from "@/types/user";

const authUrl = `${import.meta.env.VITE_AUTH_API}`;
const missionsUrl = `${import.meta.env.VITE_MISSION_API}`;

const authLocal = JSON.parse(localStorage.getItem("auth") || "{}");
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: authLocal.user || {},
  }),
  getters: {
    currentUser: (state) => state.user,
  },
  actions: {
    getUser() {
      return this.user;
    },

    async signin(name: string, password: string, email: string) {
      await post(`${authUrl}/users`, {
        nickname: name,
        password,
        email,
        image: import.meta.env.VITE_GOODBOARD_DEFAULT_PROFILE,
      });

      await this.login(name, password);
    },

    async refreshUser() {
      const userDetails = await get(
        `${authUrl}/users/${this.user.data.id}`,
        null
      );
      const userGoodboard = await get(
        `${missionsUrl}/users/${this.user.data.id}/user`,
        null
      );
      if (userDetails.error) {
        this.logout();
        return;
      }

      this.user = new User({
        ...userDetails,
        ...userGoodboard.data,
        name: userDetails.nickname,
        tokens: this.user.tokens,
      });

      authLocal.user = this.user;
      localStorage.setItem("auth", JSON.stringify(authLocal));
    },

    async login(name: string, password: string) {
      const response = await post(`${authUrl}/login`, {
        nickname: name,
        password,
      });

      this.user = new User({
        id: response.id,
        tokens: {
          refreshToken: response.refresh_token,
          accessToken: response.access_token,
        },
      });

      this.refreshUser();
      router.push("/immersion/goodboard/settings");
    },

    logout() {
      delete this.user;
      localStorage.removeItem("auth");
    },

    isLoggedIn() {
      return this.user?.data?.tokens?.accessToken !== undefined;
    },
  },
});
