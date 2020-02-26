import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import News from "../views/News/News.vue";
import Search from "../views/Search/Search.vue";
import Mine from "../views/Mine/Mine.vue";
import Release from "../views/Release/Release.vue";
import MineHead from "../views/Mine/MineChind.vue/MineHead.vue";
import MineMain from "../views/Mine/MineChind.vue/MineMain.vue";
import MineCompile from "../views/Mine/MineChind.vue/MineTip/MineCompile.vue"
import Login from "../views/login_register/Login.vue";
import Chat from "../views/Chat/Chat.vue";
import MineShare from "../views/Mine/MineChind.vue/MineShare.vue";
import Newsres from "../views/News/Newsres.vue";
import Focus from "../views/Focus/Focus.vue";

Vue.use(VueRouter);

const routes = [{
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
    },
    {
        path: "/minecompile",
        name: "MineCompile",
        component: MineCompile
    },
    {
        path: "/mineshare",
        name: "MineShare",
        component: MineShare
    },
    {
        path: "/set",
        name: "Set",
        component: () =>
            import("../views/Set/Set.vue"),
        meta: {
            title: "设置"
        }
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: () =>
            import("../views/Set/Privacy.vue"),
        meta: {
            title: "隐私"
        }
    },
    {
        path: "/infomation",
        name: "Infomation",
        component: () =>
            import("../views/Set/Infomation.vue"),
        meta: {
            title: "个人资料"
        }
    },
    {
        path: "/newsres",
        name: "Newsres",
        component: Newsres,
        meta: {
            title: "消息"
        }
    },
    {
        path: "/common",
        name: "Common",
        component: () =>
            import("../views/Set/Common.vue"),
        meta: {
            title: "通用设置"
        }
    },
    {
        path: "/focus",
        name: "Focus",
        component: Focus
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;