import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Edit from "../views/Edit.vue";
import AddTag from "../views/AddTag.vue";
import Tag from "../views/Tag.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/transaction/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/tag",
    name: "Tag",
    component: Tag,
  },
  {
    path: "/tag/:id",
    name: "AddTag",
    component: AddTag,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");

  if ((to.name === "Home" || to.name === "Edit") && !token) {
    next({ name: "Login" });
  } else if ((to.name === "Login" || to.name === "Register") && token) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
