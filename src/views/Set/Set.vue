<template>
  <div class="page set">
    <Cell title="编辑资料" to="/infomation" is-link value></Cell>
    <Cell title="通知设置" to="/notice" is-link value></Cell>
    <Cell title="隐私" to="/privacy" is-link value></Cell>
    <Cell title="通用设置" to="/common" is-link value></Cell>
    <Cell title="清理缓存" value="clear">
      <div class="clean" @click="alertClean">点击确认清除缓存</div>
    </Cell>
    <Cell title="给驻足意见" to="/advice" is-link value></Cell>
    <van-cell id="logout" title="退出登录" @click="loginOut" />
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { Cell } from "mint-ui";
import Vue from "vue";
import { Dialog } from "vant";

export default {
  components: {
    Cell,
    [Dialog.Component.name]: Dialog.Component
  },
  name: "Set",
  data() {
    return {
      show: false
    };
  },
  methods: {
    alertClean() {
      Toast({
        message: "缓存已清除",
        position: "middle",
        duration: 3000
      });
    },

    loginOut() {
      // 同步退出登录
      let vm = this;
      // Dialog.confirm({
      //   title: "标题",
      //   message: "弹窗内容"
      // })
      //   .then(() => {
      //     window.localStorage.removeItem('userInfo');
      //      window.localStorage.removeItem('userToken');
      //     vm.$router.push("/login");
      //   })
      //   .catch(() => {
      //     console.log("取消操作");
      //   });

      //异步退出登录
      function beforeClose(action, done) {
        if (action === "confirm") {
          setTimeout(() => {
            window.localStorage.removeItem("userInfo");
            window.localStorage.removeItem("userToken");
            done();
            vm.$router.push("/login");
          }, 1000);
        } else {
          done();
        }
      }
      Dialog.confirm({
        title: "提示",
        message: "确定退出登录吗？",
        beforeClose
      })
        .then()
        .catch();
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 49px);
  position: relative;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
.clean {
  font-size: 0.13rem;
  color: gray;
  position: absolute;
  top: 33.5%;
  left: 70%;
}
#logout {
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  cursor: pointer;
  text-size-adjust: 100%;
  font-size: 16px;
  text-indent: -7px;
  ::before {
    border-bottom-color: rgb(200, 200, 205);
    border-bottom-style: solid;
    border-bottom-width: 0px;
    border-image-outset: 0px;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(200, 200, 205);
    border-left-style: solid;
    border-left-width: 0px;
    border-right-color: rgb(200, 200, 205);
    border-right-style: solid;
    border-right-width: 2px;
    border-top-color: rgb(200, 200, 205);
    border-top-style: solid;
    border-top-width: 2px;
    content: " ";
    display: block;
    height: 5px;
    position: absolute;
    right: 20px;
    top: 24px;
    transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -3.6);
    width: 5px;
  }
}
</style>