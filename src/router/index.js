import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import News from "../views/News/News.vue";
import Search from "../views/Search/Search.vue";
import Mine from "../views/Mine/Mine.vue";
import Release from "../views/Release/Release.vue";
import MineHead from "../views/Mine/MineChind.vue/MineHead.vue";
import MineMain from "../views/Mine/MineChind.vue/MineMain.vue";

import Login from "../views/login_register/Login.vue";
import Chat from "../views/Chat/Chat.vue";
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
        path: "/news",
        name: "News",
        component: News,
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
    },
    {
        path: "/minehead",
        name: "MineHead",
        component: MineHead
    },
    {
        path: "/minemain",
        name: "MineMain",
        component: MineMain
    },
        {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "登录"
        }
    },
    {
        path: "/chat",
        name: "Chat",
        component: Chat,
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
