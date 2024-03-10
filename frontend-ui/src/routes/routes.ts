import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import SigninRedirect from "../pages/SigninRedirect.vue";
import Logout from "../pages/Logout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/signin-redirect",
    name: "signin-redirect",
    component: SigninRedirect,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
