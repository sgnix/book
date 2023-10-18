import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: () => import("./components/LogIn.vue") },
  { path: "/signup", component: () => import("./components/SignUp.vue") },
  {
    path: "/dashboard/:username",
    component: () => import("./components/Dashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "text-blue-500",
  linkExactActiveClass: "text-blue-700",
});

export default router;
