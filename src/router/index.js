import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DownloadView from "../views/DownloadView.vue";
import GetStartedView from "../views/GetStartedView.vue";
import SupportView from "../views/SupportView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 }; // Go to the top of the page if no hash
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/quickstart",
      name: "get-started",
      component: GetStartedView,
    },
    {
      path: "/download",
      name: "download",
      component: DownloadView,
    },
    {
      path: "/support",
      name: "support",
      component: SupportView,
    },
  ],
});

export default router;
