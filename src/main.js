import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "mint-ui/lib/style.css";
import Axios from "axios";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Axios,
  render: h => h(App)
}).$mount("#app");
