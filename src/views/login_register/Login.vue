<template>
  <div class="page login">
    <input type="text" name="username" placeholder="手机号码" />
    <br />
    <input type="password" name="password" placeholder="验证码" />
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.page {
  height: 100%;
}
</style>
