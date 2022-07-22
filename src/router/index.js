import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/origins",
    name: "origins",
    // route level code-splitting
    // this generates a separate chunk (origins.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "origins" */ "../views/OriginsView.vue"),
  },
  {
    path: "/destinations",
    name: "destinations",
    component: () =>
      import(
        /* webpackChunkName: "destinations" */ "../views/DestinationsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
