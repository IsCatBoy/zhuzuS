<template>
  <div class="page set">
    <Cell title="编辑资料" to="/infomation" is-link value></Cell>
    <Cell title="通知设置" to="/notice" is-link value></Cell>
    <Cell title="隐私" to="/privacy" is-link value></Cell>
    <Cell title="通用设置" to="/common" is-link value></Cell>
    <Cell title="清理缓存" value="clear" >
      <div class="clean" @click="alertClean">点击确认清除缓存</div>
    </Cell>
    <Cell title="给驻足意见" to="/advice" is-link value></Cell>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { Cell } from "mint-ui";
export default {
  components: {
    Cell
  },
  name: "Set",
  data() {
    return {
      show: false,
      
    };
  },
  methods: {
    alertClean() {
      Toast({
        message: "缓存已清除",
        position: "middle",
        duration: 3000
      });
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
</style>