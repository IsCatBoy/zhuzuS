import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import New from "../views/New.vue";
import Search from "../views/Search.vue";
import Mine from "../views/Mine.vue";
import Release from "../views/Release.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "驻足"
    }
  },
  {
    path: "/new",
    name: "New",
    component: New,
    meta: {
      title: "消息"
    }
  },
  {
    path: "/release",
    name: "Release",
    component: Release,
    meta: {
      title: "发布"
    }
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: {
      title: "搜索"
    }
  },
  {
    path: "/mine",
    name: "Mine",
    component: Mine,
    meta: {
      title: "我的"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
