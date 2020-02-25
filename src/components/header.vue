<template>
  <div class="header">
    <div
      v-show="isshow"
      v-for="(item, index) in list"
      :key="index"
      @click="selNum(index)"
      class="link"
    >
      <router-link class="fonts" :to="item.path">
        <!--   <div class="fonts" @click="goto(item.path)">-->
        <span v-show="index != num" class="icons" :class="item.icon"></span>
        <span v-show="index == num" class="icons" :class="item.active"></span>
        <!-- <span>{{ item.name }}</span>-->
        <!--  </div>-->
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "LWHeader",
  data() {
    return {
      isshow: true,
      num: 0,
      list: [
        {
          icon: "homeicon",
          active: "selhomeicon",
          name: "驻足",
          path: "/"
        },
        {
          icon: "abouticon",
          active: "selabouticon",
          name: "搜索",
          path: "/search"
        },
        {
          icon: "iconc caticon",
          active: "iconc selcaticon ",
          name: "发布",
          path: "/release"
        },
        {
          icon: "newicon",
          active: "selnewicon",
          name: "消息",
          path: "/news"
        },
        {
          icon: "mineicon",
          active: "selmineicon",
          name: "我的",
          path: "/mine"
        },
        {
          icon: "mineicon",
          active: "selmineicon",
          name: "登录",
          path: "/login"
        }
      ]
    };
  },
  watch: {
    $route(route) {
      console.log(route);
      if (route.name === "Login") {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
    }
  },
  methods: {
    goto(to) {
      this.$router.push(to);
    },
    selNum(index) {
      console.log(index);
      this.num = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  box-shadow: 10px 10px 12px 3px #202020b0;
  .link {
    width: 25%;
    height: 49px;
    // background-color: aquamarine;
    // border-left: 1px solid red;
    .fonts {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-decoration: none;
      font-size: 0.6em;
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
      .icons {
        width: 0.24rem;
        height: 0.24rem;
        background-size: cover;
      }
      .iconc {
        width: 0.34rem;
        height: 0.34rem;
      }
      .homeicon {
        background-image: url("../assets/tabicons/homepage@3x.png");
      }
      .selhomeicon {
        background-image: url("../assets/tabicons/homepage@3x.png");
      }
      .abouticon {
        background-image: url("../assets/tabicons/search@3x.png");
      }
      .selabouticon {
        background-image: url("../assets/tabicons/search@3x.png");
      }
      .caticon {
        background-image: url("../assets/tabicons/Release@3x.png");
      }
      .selcaticon {
        background-image: url("../assets/tabicons/Release@3x.png");
      }

      .newicon {
        background-image: url("../assets/tabicons/news@3x.png");
      }
      .selnewicon {
        background-image: url("../assets/tabicons/Selnews@3x.png");
      }

      .mineicon {
        background-image: url("../assets/tabicons/mine@3x.png");
      }
      .selmineicon {
        background-image: url("../assets/tabicons/Selmine@3x.png");
      }
    }

    // img {
    //   width: 0.32rem;
    //   height: 0.32rem;
    // }
  }
}
</style>
