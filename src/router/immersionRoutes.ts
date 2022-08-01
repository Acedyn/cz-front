import ImmersionView from "@/views/immersion/ImmersionView.vue";
import PostOfficeView from "@/views/immersion/postOffice/PostOfficeView.vue";
import BillOfLadingView from "@/views/immersion/billOfLading/BillOfLadingView.vue";

export default {
  path: "/immersion",
  name: "immersion",
  component: ImmersionView,
  children: [
    {
      path: "",
      name: "post-office",
      component: PostOfficeView,
    },
    {
      path: "post-office",
      name: "post-office",
      component: PostOfficeView,
    },
    {
      path: "bill-of-lading",
      name: "bill-of-lading",
      component: BillOfLadingView,
    },
  ],
};
