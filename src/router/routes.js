import store from "@/state/store";
import PageNotFound from "../views/errors/404-cover.vue";

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/account/login.vue"),
    meta: {
      title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/register.vue"),
    meta: {
      title: "Register",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("../views/account/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },

  {
    path: "/logout",
    name: "logout",
    meta: {
      title: "Logout", authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch("auth/logOut");
        } else {
          store.dispatch("authfack/logout");
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute ? { name: "default" } : { ...routeFrom }
        );
      },
    },
    component: () => import("../views/account/basic")
  },
  

  {
    path: "/",
    name: "starter",
    meta: { title: "Starter", authRequired: true },
    component: () => import("../views/pages/starter"),
  },
  
  {
    path: '/auth/logout-basic',
    name: 'logout-basic',
    meta: {
      title: "Logout", authRequired: true,
    },
    component: () => import('../views/account/basic')
  },
  {
    path: '/error500',
    name: '500',
    meta: {
      title: "Error 500", authRequired: true,
    },
    component: () => import('../views/errors/500')
  },

  {
    path: '/:catchAll(.*)*',
    name: '404-cover',
    meta: {
      title: "Error 404", authRequired: true,
    },
    component: PageNotFound
  },

];