import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { usePreferencesStore } from "@/stores/preferences";

import ImmersionView from "@/views/immersion/ImmersionView.vue";
import PostOfficeView from "@/views/immersion/postOffice/PostOfficeView.vue";
import BillOfLadingView from "@/views/immersion/billOfLading/BillOfLadingView.vue";
import WarehouseView from "@/views/immersion/warehouse/WarehouseView.vue";
import GoodboardView from "@/views/immersion/goodboard/GoodboardView.vue";
import LoginPage from "@/views/auth/loginPage.vue";
import RegisterPage from "@/views/auth/registerPage.vue";
import ResetPassword from "@/views/auth/resetPassword.vue";
import SettingView from "@/views/settings/settingView.vue";
import MyDetailView from "@/views/settings/sections/myDetail.vue";
import SettingOther from "@/views/settings/sections/settingOther.vue";
import SettingSocial from "@/views/settings/sections/settingSocial.vue";


export default {
  path: "/immersion",
  name: "immersion",
  beforeEnter(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) {
    const preferences = usePreferencesStore();
    preferences.setHeaderCollapse(true);
    if (to.name === "immersion") {
      next({ name: "post-office" });
    } else {
      next();
    }
  },
  component: ImmersionView,
  children: [
    {
      path: "",
      name: "post-office",
      component: PostOfficeView,
      meta: { headerCollased: true },
    },
    {
      path: "post-office",
      name: "post-office",
      component: PostOfficeView,
      meta: { headerCollased: true },
    },
    {
      path: "bill-of-lading",
      name: "bill-of-lading",
      component: BillOfLadingView,
      meta: { headerCollased: true },
    },
    {
      path: "goodboard",
      name: "goodboard",
      component: GoodboardView,
      meta: { headerCollased: true },
    },
    {
      path: "warehouse",
      name: "warehouse",
      component: WarehouseView,
      meta: { headerCollased: true },
    },
    {
      path: "goodboard/login",
      name: "loginPage",
      component: LoginPage,
    },
    {
      path: "goodboard/register",
      name: "registerPage",
      component: RegisterPage,
    },
    {
      path: "goodboard/reset-password",
      name: "resetPassword",
      component: ResetPassword,
    },
    {
      path: "goodboard/settings",
      name: "settings",
      component: SettingView,
      children: [
        {
          path: "",
          name: "settings-my-detail",
          component: MyDetailView,
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
