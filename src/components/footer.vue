<template>
  <div v-show="isfoshow" class="footer">
    <span v-show="isshow" class="back" @click="comeBack">返回</span>
    <div class="footer-text">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "LWFooter",
  data() {
    return {
      isfoshow: true,
      isshow: false,
      title: "驻足"
    };
  },
  watch: {
    $route(route) {
      console.log(route);
      this.title = route.meta.title;
      if (route.name === "Details") {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
      //在Mine页面隐藏头部
      if (route.name === "Mine" || route.name === "Login") {
        this.isfoshow = false;
      } else {
        this.isfoshow = true;
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
  .back {
    position: absolute;
    left: 0.12rem;
  }
  .footer-text {
    height: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 1.2em;
    font-weight: bold;
    background-color: aquamarine;
  }
}
</style>
