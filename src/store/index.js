import Vue from "vue";
import Vuex from "vuex";
import ReleaseData from "./Release";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "liwang"
  },
  mutations: {},
  actions: {},
  modules: {
    ReleaseData
  }
});
