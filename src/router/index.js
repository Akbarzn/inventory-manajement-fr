// import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/AdminView.vue";
import UserView from "../views/UserView.vue";
import HomeView from "@/components/auth/HomeView.vue";
import LoginView from "@/components/auth/LoginView.vue";
import RegisterView from "@/components/auth/RegisterView.vue";
import { useAuthStore } from "@/store/authStore";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { hideHeader: true, hideSidebar: true },
    children: [
      {
        path: "login",
        name: "login",

        component: LoginView,
      },

      {
        path: "register",
        name: "register",
        component: RegisterView,
      },
    ],
  },

  {
    path: "/admin/:component?",
    name: "admin",
    component: AdminView,
    props: true,
    meta: { requiresAuth: true, role: "ADMIN" },
  },

  {
    path: "/user/:component?",
    name: "user",
    component: UserView,
    props: true,
    meta: { requiresAuth: true, role: "USER" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.token;
  const userRole = authStore.role;
  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      if (userRole === to.meta.role || to.meta.role === undefined) {
        next();
      } else {
        next({ name: "home" });
      }
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
