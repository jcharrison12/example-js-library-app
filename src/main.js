import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import slick from "slick-carousel";

Vue.use(slick);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
