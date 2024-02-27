import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("../views/LoginPage.vue"),
  },

  {
    path: "/appartments",
    name: "appartements",
    component: () => import("../views/AppartmentsPage.vue"),
  },
  {
    path: "/installments",
    name: "installments",
    component: () => import("../views/InstallmentsPage.vue"),
  },
  {
    path: "/requests",
    name: "requests",
    component: () => import("../views/RequestsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
