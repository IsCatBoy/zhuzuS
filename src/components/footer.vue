<template>
  <div v-show="isfoshow" class="footer">
    <van-icon class="back" v-show="isshow" size="0.24rem" name="arrow-left" @click="comeBack" />
    <div v-show="quxiaos" class="back quxiao" @click="comeBack">取消</div>
    <!-- <span v-show="isshow" class="back" @click="comeBack">返回</span>-->
    <div class="footer-text" v-if="issan">{{ title }}</div>
    <div class="footer-text" v-else>{{ titles }}</div>
    <van-button
      class="fabu cun"
      round
      type="info"
      size="small"
      color="rgb(211, 171, 144)"
      plain
      v-show="quxiaos"
    >存草稿</van-button>
    <van-button
      class="fabu"
      round
      type="info"
      size="small"
      color="rgb(211, 171, 144)"
      v-show="quxiaos"
    >发布</van-button>
  </div>
</template>
<script>
export default {
  name: "LWFooter",
  data() {
    return {
      quxiaos: false,
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
      let routes = ["Home", "Search", "News", "Mine", "Release"];
      if (route.name === "Release") {
        this.quxiaos = true;
      } else {
        this.quxiaos = false;
      }

      if (routes.includes(route.name)) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
      //在Mine页面隐藏头部s
      // let routess = ["Mine", "Login", "Focus", "Search", "Enjoy", "Release"];

      // if (routess.includes(route.name)) {
      //   this.isshow = false;
      // } else {
      //   this.isshow = true;
      // }
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
    left: 0.1rem;
  }
  .quxiao {
    padding: 0 0.05rem;
  }
  .footer-text {
    height: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 1.2em;
    font-weight: bold;
    // background-color: aquamarine;
  }
  .fabu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.1rem;
  }
  .cun {
    right: 0.75rem;
  }
}
</style>
