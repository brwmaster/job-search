import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobResulstView from "@/views/JobResulstView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResulstView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
