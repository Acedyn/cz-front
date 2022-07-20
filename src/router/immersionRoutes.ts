import PostOfficeView from "@/views/immersion/PostOfficeView.vue";
import BillOfLadingView from "@/views/immersion/BillOfLadingView.vue";

const immersionRoutes = [
  {
    path: "/post-office",
    name: "post-office",
    component: PostOfficeView,
  },
  {
    path: "/bill-of-lading",
    name: "bill-of-lading",
    component: BillOfLadingView,
  },
];

immersionRoutes.forEach((route) => {
  route.path = `/immersion${route.path}`;
});

export default immersionRoutes;
