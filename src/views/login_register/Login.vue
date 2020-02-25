<template>
  <div class="page login">
    <div class="title">
      <div>驻足</div>
      <div>分享美好生活</div>
    </div>
    <form action class="form">
      <input class="ipt" type="text" name="username" placeholder="请输入手机号码" />
      <br />
      <input class="ipt" type="password" name="password" placeholder="请输入验证码" />
    </form>
    <button class="btn">登录</button>
    <ul class="incon">
      <li>
        <img src="../../assets/loginPage/weixinicon.png" alt />
      </li>
      <li>
        <img src="../../assets/loginPage/weiboicon.png" alt />
      </li>
      <li>
        <img src="../../assets/loginPage/qqicon.png" alt />
      </li>
    </ul>
    <div class="tip">
      <span>注册/登录表示同意</span>
      <a>用户协议|隐私条款</a>
    </div>
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
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.page {
  height: 100%;
  background: url("../../assets/loginPage/bannerlogin.png") no-repeat;
  background-size: cover;
  position: relative;
  // 设置placeholder的颜色
  input::-webkit-input-placeholder {
    color: #fff;
  }
  .title {
    text-align: center;
    position: relative;
    top: 1.15rem;
    left: 0;
    color: #ffffff;

    :nth-child(1) {
      font-size: 0.4rem;
      letter-spacing: 0.3rem;
    }
    :nth-child(2) {
      font-size: 0.15rem;
      letter-spacing: 0.06rem;
      margin-left: -0.2rem;
    }
  }
  .form {
   position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  
    .ipt {
      width: 2.79rem;
      height: 0.38rem;
      margin: 0.065rem auto;
      border-radius: 0.19rem;
      background-color: rgba(0, 0, 0, 0.1);
      color: #ffffff;
      border: 0.005rem solid white;
      outline: none;
    }
  }
  .btn {
    position: absolute;
    left: 50%;
    top: 63%;
    transform: translate(-50%,-50%);
    width: 1.46rem;
    height: 0.36rem;
    border: 0.005rem solid white;
    border-radius: 0.19rem;
    outline: none;
  }
  .incon {
    display: flex;
    justify-content: center;
    position: relative;
    top: 4rem;
    li {
      margin-right: 0.3rem;
      &:nth-child(3) {
        margin-right: 0;
      }
    }
  }
.tip{
  width: 3rem;
   position: absolute;
    left: 50%;
    top: 92%;
    transform: translate(-50%,-50%);
}
}
</style>
