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
          meta: {
            title: "Home",
          },
          component: () => import("@/views/home/HomeView.vue"),
        },
        {
          path: "/user",
          name: "user",
          component: () => import("@/views/user/UserView.vue"),
        },
        {
          path: "/transaksi",
          name: "transaksi",
          meta: {
            title: "Transaksi",
            breadcrumb: "Transaction Manajement",
          },
          component: () => import("@/views/transaksi/IndexView.vue"),
          children: [
            {
              path: "/transaksi/income",
              name: "transaksi.income",
              component: () =>
                import("@/views/transaksi/income/IncomeView.vue"),
            },
            {
              path: "/transaksi/outgoing",
              name: "transaksi.outgoing",
              component: () =>
                import("@/views/transaksi/outgoing/OutgoingView.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("@/views/error/NotFoundView.vue"),
    },
    {
      path: "/forbidden",
      name: "forbidden",
      component: () => import("@/views/error/ForbiddenView.vue"),
    },
  ],
});

export default router;
