import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/user/Login.vue";
import Terms from "../components/user/Terms.vue";
import Register from "../components/user/Register.vue";
import List from "../components/List.vue";
import View from "../components/View.vue";
import Write from "../components/Write.vue";
import Modify from "../components/Modify.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/user/login",
      name: "",
      component: Login,
    },
    {
      path: "/user/terms",
      name: "",
      component: Terms,
    },
    {
      path: "/user/register",
      name: "",
      component: Register,
    },
    {
      path: "/list",
      name: "",
      component: List,
    },
    {
      path: "/write",
      name: "",
      component: Write,
    },
    {
      path: "/view",
      name: "",
      component: View,
    },
    {
      path: "/modify",
      name: "",
      component: Modify,
    },
  ],
});

export default router;
