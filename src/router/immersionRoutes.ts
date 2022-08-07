import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

import ImmersionView from "@/views/immersion/ImmersionView.vue";
import PostOfficeView from "@/views/immersion/postOffice/PostOfficeView.vue";
import BillOfLadingView from "@/views/immersion/billOfLading/BillOfLadingView.vue";
import WarehouseView from "@/views/immersion/warehouse/WarehouseView.vue";

export default {
  path: "/immersion",
  name: "immersion",
  // beforeEnter(to: RouteLocationNormalized) {
  //   if (to.name === "immersion") {
  //     console.log("fkfk");
  //   }
  // },
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
      path: "warehouse",
      name: "warehouse",
      component: WarehouseView,
      meta: { headerCollased: true },
    },
  ],
};
