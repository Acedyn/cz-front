import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { usePreferencesStore } from "@/stores/preferences";

import AuthView from "@/views/auth/AuthView.vue";
import LoginPage from "@/views/auth/loginPage.vue";
import RegisterPage from "@/views/auth/registerPage.vue";
import ResetPassword from "@/views/auth/resetPassword.vue";
import SettingView from "@/views/settings/settingView.vue";
import SettingDetail from "@/views/settings/sections/settingDetail.vue";
import SettingOther from "@/views/settings/sections/settingOther.vue";
import SettingSocial from "@/views/settings/sections/settingSocial.vue";

export default {
  path: "/auth",
  name: "auth",
  component: AuthView,
  beforeEnter(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) {
    const preferences = usePreferencesStore();
    preferences.setHeaderCollapse(true);
    if (to.name === "auth") {
      next({ name: "settings" });
    } else {
      next();
    }
  },
  children: [
    {
      path: "login",
      name: "loginPage",
      component: LoginPage,
    },
    {
      path: "register",
      name: "registerPage",
      component: RegisterPage,
    },
    {
      path: "reset-password",
      name: "resetPassword",
      component: ResetPassword,
    },
    {
      path: "settings",
      name: "settings",
      component: SettingView,
      children: [
        {
          path: "",
          name: "settings-my-detail",
          component: SettingDetail,
          meta: { headerCollased: true },
        },
        {
          path: "social",
          name: "settings-socials",
          component: SettingSocial,
          meta: { headerCollased: true },
        },
        {
          path: "other",
          name: "settings-other",
          component: SettingOther,
          meta: { headerCollased: true },
        },
      ],
    },
  ],
};
