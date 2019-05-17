import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import Vuetify from "vuetify";
import { sync } from "vuex-router-sync";
import "vuetify/dist/vuetify.min.css";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.use(Vuetify);
sync(store, router);

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount("#app");
