import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import AdminLayout from "@/layouts/default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "admin",
      component: AdminLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/home/HomeView.vue"),
        },
        {
          path: "/user",
          name: "user",
          component: () => import("@/views/user/UserView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
    },
  ],
});

export default router;
