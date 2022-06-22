import { createRouter, createWebHistory } from 'vue-router'

import Home from "./views/Home.vue";
import Callback from "./views/Callback.vue";
// import Profile from "./views/Profile.vue";
/**
 * Import the state for determining current auth state.
 */
import store from "./store";

/**
 * Initialize a new instance of the vue router
 * and configure the paths.
 */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    // {
    //   path: "/profile",
    //   name: "profile",
    //   component: Profile,
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "/auth/callback",
      name: "callback",
      component: Callback
    },
    {
      path: "/logout",
      redirect: "/"
    }
  ]
});

/**
 * Impliment router guards
 * for protected routes.
 */
router.beforeEach((to, from, next) => {
  /* If the route requires auth */
  if (to.meta.requiresAuth) {
    store.getters.authenticated ? next() : next({ name: "home" });
  } else {
    /* If the route is public */
    next();
  }
});

export default router;