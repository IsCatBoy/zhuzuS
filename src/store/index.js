import Vue from "vue";
import Vuex from "vuex";
import ReleaseData from "./Release";
import UserInfoData from "./userInfo";
import ContData from "./contdata";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "liwang"
  },
  mutations: {},
  actions: {},
  modules: {
    ReleaseData,
    UserInfoData,
    ContData
  }
});
