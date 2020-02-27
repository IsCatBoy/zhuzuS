<template>
  <div class="page set">
    <Cell title="编辑资料" to="/infomation" is-link value></Cell>
    <Cell title="通知设置" to="/notice" is-link value></Cell>
    <Cell title="隐私" to="/privacy" is-link value></Cell>
    <Cell title="通用设置" to="common" is-link value></Cell>
    <Cell title="清理缓存" to="/cleancooki" is-link value></Cell>
    <Cell title="给驻足意见" to="/advice" is-link value></Cell>
  </div>
</template>

<script>
import { Cell } from "mint-ui";
export default {
  components: {
    Cell
  },
  name: "Set"
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 49px);
}
</style>