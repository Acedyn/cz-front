import { defineStore } from "pinia";
import { post, get } from "@/utils/restClient";
import router from "@/router";
import User from "@/types/user";

const baseUrl = `${import.meta.env.VITE_AUTH_API}`;

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
      await post(`${baseUrl}/users`, {
        nickname: name,
        password,
        email,
        image: import.meta.env.VITE_GOODBOARD_DEFAULT_PROFILE,
      });

      await this.login(name, password);
    },

    async login(name: string, password: string) {
      const response = await post(`${baseUrl}/login`, {
        nickname: name,
        password,
      });

      this.user = new User({
        tokens: {
          refreshToken: response.refresh_token,
          accessToken: response.access_token,
        },
      });

      const userDetails = await get(`${baseUrl}/users/${response.id}`, null);
      if (userDetails.error) {
        this.logout();
        return;
      }

      this.user = new User({
        ...userDetails,
        name,
        tokens: this.user.tokens,
      });

      authLocal.user = this.user;
      localStorage.setItem("auth", JSON.stringify(authLocal));
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
