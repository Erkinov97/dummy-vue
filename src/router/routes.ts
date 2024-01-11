import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      layout: "AuthLayout",
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "AppLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/post",
    name: "post",
    component: () => import("@/views/post/index.vue"),
    meta: {
      layout: "AppLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/post/:id",
    name: "post-item",
    props: true,
    component: () => import("@/views/post/[id].vue"),
    meta: {
      layout: "AppLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/product",
    name: "product",
    component: () => import("@/views/product/index.vue"),
    meta: {
      layout: "AppLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("@/views/todo/index.vue"),
    meta: {
      layout: "AppLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/user/index.vue"),
    meta: {
      layout: "AppLayout",
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

export default routes;
