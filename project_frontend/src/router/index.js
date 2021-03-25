import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recommend from "../views/Recommend.vue";
import View from "../views/View.vue";
import Register from "../views/Register";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/recommend",
    name: "recommend",
    component: Recommend
  },
  {
    path: "/view",
    name: "view",
    component: View
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
