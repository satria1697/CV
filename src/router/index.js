import Vue from "vue";
import VueRouter from "vue-router";
import Person from "../views/Home.vue";
import Form from "../views/About";
import Homes from "../views/homes";
import FormPH from "../views/formPH";

Vue.use(VueRouter);

const routes = [
  {
    path: "/person",
    name: "person",
    component: Person
  },
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/",
    name: "Homes",
    component: Homes
  },
  {
    path: "/formPH",
    name: "FormPH",
    component: FormPH
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
