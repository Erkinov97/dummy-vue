import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useAuthStore } from "@/store/auth";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const useAuth = useAuthStore();
  if (to.meta.requiresAuth) {
    useAuth.fetchProfile();
  }

  if (to.path !== "/login" && !useAuth.token) {
    next("/login");
  } else if (to.path === "/login" && useAuth.token) {
    next("/");
  } else {
    next();
  }
});

export default router;
