<template>
  <div v-show="isfoshow" class="footer">
    <van-icon class="back" v-show="isshow" size="0.24rem" name="arrow-left" @click="comeBack" />
    <!-- <span v-show="isshow" class="back" @click="comeBack">返回</span>-->
    <div class="footer-text" v-if="issan">{{ title }}</div>
    <div class="footer-text" v-else>{{ titles }}</div>
  </div>
</template>
<script>
export default {
  name: "LWFooter",
  data() {
    return {
      issan: true,
      isfoshow: true,
      isshow: false,
      title: "驻足",
      titles: ""
    };
  },
  watch: {
    $route(route) {
      this.title = route.meta.title;
      //匹配到的就不显示返回按钮
      let routes = ["Home", "Search", "News", "Mine"];
      if (routes.includes(route.name)) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
      //在Mine页面隐藏头部
      if (
        route.name === "Mine" ||
        route.name === "Login" ||
        route.name === "Focus" ||
        route.name === "Search" ||
        route.name === "Enjoy"
      ) {
        this.isfoshow = false;
      } else {
        this.isfoshow = true;
      }

      //设置标题
      if (route.params.title) {
        this.titles = route.params.title;
        this.issan = false;
      } else {
        this.issan = true;
      }
    }
  },
  methods: {
    comeBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.footer {
  position: relative;
  box-shadow: 0px -10px 14px 1px #202020b0;
  .back {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.07rem;
  }
  .footer-text {
    height: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 1.2em;
    font-weight: bold;
    // background-color: aquamarine;
  }
}
</style>
