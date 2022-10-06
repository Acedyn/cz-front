import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { usePreferencesStore } from "../stores/preferences";

import ImmersionView from "@/views/immersion/ImmersionView.vue";
import PostOfficeView from "@/views/immersion/postOffice/PostOfficeView.vue";
import BillOfLadingView from "@/views/immersion/billOfLading/BillOfLadingView.vue";
import WarehouseView from "@/views/immersion/warehouse/WarehouseView.vue";
import GoodboardView from "@/views/immersion/goodboard/GoodboardView.vue";

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
  ],
};
