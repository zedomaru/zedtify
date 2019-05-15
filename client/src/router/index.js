import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/HelloWorld.vue";
import Register from "../components/Register.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/register", name: "register", component: Register },
    { path: "/", name: "Hello", component: Hello }
  ]
});
