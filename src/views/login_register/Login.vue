<template>
  <div class="page login" :class="{turnBackGround:tBackGround}">
    <div class="cotent" v-if="isShow">
      <div class="title">
        <div>驻足</div>
        <div>分享美好生活</div>
      </div>
      <form action class="form">
        <img src="../../assets/loginPage/userIcon.png" alt class="img1" />
        <input class="ipt" type="email" name="username" placeholder="请输入手机号码" v-model="username" />
        <br />
        <img src="../../assets/loginPage/passwordIcon.png" alt class="img2" />
        <input class="ipt" type="password" name="password" placeholder="请输入验证码" v-model="password" />
        <div class="forget">忘记密码？</div>
      </form>
      <button class="btn" @click="showUserTips">登录</button>
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
        <router-link to="/#">用户协议|隐私条款</router-link>
      </div>
    </div>
    <div class="user_tips_box" v-else>
      <div class="user_tips">
        <h3 class="top_ti">温馨提示</h3>
        <div class="des">
          欢迎使用驻足！驻足非常重视您的隐私和个人资料保护。在您使用驻足之前，请先仔细阅读
          <router-link to="/#">《用户协议》及《隐私条款》</router-link>
        </div>
        <div class="user_btn">
          <button class="btn" @click="isShow=true">不同意</button>
          <button class="btn" @click="turnWhite" :class="{active:true}">同意</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { Toast } from "mint-ui";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      isShow: true,
      tBackGround: false,
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["UserInfoData"])
  },
  created() {
    console.log(this.UserInfoData);
  },
  methods: {
    ...mapActions(["action_userinfo"]),

    Login() {
      let vm = this;
      const url = "/fuwu/login";
      Axios.post(url, {
        username: this.username,
        password: this.password
      })
        .then(res => {
          if (res.data.code != 200) {
            Toast({
              message: res.data.err,
              position: "middle",
              duration: 5000
            });
            console.log(res.data.err);
            vm.isShow = true;
          } else {
            // console.log(res.data.data);
            // this.action_userinfo(res.data.data);
            localStorage.setItem("userToken", res.data.token);
            localStorage.setItem("userInfo", JSON.stringify(res.data.data));
            console.log(res.data.data);
            this.action_userinfo(JSON.parse(localStorage.getItem("userInfo")));
            vm.$router.push("/");
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //同意按钮变色
    turnWhite() {
      this.isw = !this.isw;
      //如果点击了同意，就提交服务器眼拙账号密码
      if (this.isw == true) {
        this.Login();
        console.log("发送数据成功");
        //如果返回状态码是200，就做跳转
      }
      console.log("2");
    },
    //点击登录后弹出温馨提示
    showUserTips() {
      if (!this.username || !this.password) {
        Toast({
          message: "请先输入账号或密码",
          position: "middle",
          duration: 5000
        });
      } else if (!/^1[34578]\d{9}$/.test(this.username)) {
        console.log("jin");

        Toast({
          message: "请正确输入11位手机号码",
          position: "middle",
          duration: 5000
        });
      } else if (
        !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@!%*#?&])[A-Za-z\d$@!%*#?&]{6,}$/.test(
          this.password
        )
      ) {
        Toast({
          message:
            "密码（最少6位，包括至少一位大写字母，一位小写字母，一个数字，一个特殊字符）",
          position: "middle",
          duration: 5000
        });
      } else {
        this.tBackGround = !this.tBackGround;
        this.isShow = !this.isShow;
      }
    }
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
.active {
  background: #ffffff !important;
  color: #000 !important;
}
.turnBackGround {
  background-color: rgba(0, 0, 0, 0.8) !important;
  height: 100% !important;
  background: url("../../assets/loginPage/bannerlogin@3x.png") no-repeat !important;
  background-size: cover !important;
  position: relative !important;
}
.page {
  height: 100%;
  background: url("../../assets/loginPage/bannerlogin@3x.png") no-repeat;
  background-size: cover;
  position: relative;

  .cotent {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .title {
      text-align: center;
      position: absolute;
      top: -126%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;

      :nth-child(1) {
        font-size: 0.4rem;
        letter-spacing: 0.1rem;
      }
      :nth-child(2) {
        font-size: 0.15rem;
        letter-spacing: 0.04rem;
        margin-left: -0.2rem;
      }
    }
    .form {
      position: relative;
      top: 95%;
      left: 50%;
      transform: translate(-50%, -50%);
      .img1 {
        position: absolute;
        top: 17%;
        left: 6%;
      }
      .img2 {
        position: absolute;
        top: 67%;
        left: 6%;
      }
      .ipt {
        width: 2.79rem;
        height: 0.43rem;
        margin: 0.095rem auto;
        border-radius: 0.43rem;
        background-color: rgba(0, 0, 0, 0.1);
        color: #ffffff;
        border: 0.005rem solid white;
        outline: none;
        padding-left: -0.6rem;
        text-indent: 52px;
      }
      .forget {
        position: absolute;
        left: 77%;
        top: 113%;
        color: #ffffff;
        font-size: 0.1rem;
      }
    }
    .btn {
      position: absolute;
      left: 50%;
      top: 116%;
      transform: translate(-50%, -50%);
      width: 1.46rem;
      height: 0.36rem;
      border: 0.005rem solid white;
      border-radius: 0.19rem;
      outline: none;
    }
    .incon {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 2rem;
      left: 50%;
      transform: translate(-50%, -50%);
      li {
        margin-right: 0.3rem;
        &:nth-child(3) {
          margin-right: 0;
        }
      }
    }
    .tip {
      width: 3rem;
      position: absolute;
      left: 50%;
      top: 280%;
      transform: translate(-50%, -50%);
      color: #ffffff;
    }
  }
  // 设置placeholder的颜色
  input::-webkit-input-placeholder {
    color: #fff;
    letter-spacing: 0.1em;
    text-indent: 0.5rem;
    line-height: 0.43rem;
  }

  .user_tips_box {
    width: 100%;
    height: 3rem;
    background: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    .user_tips {
      width: 75%;
      margin: 0 auto;
      .des {
        font-size: 0.15rem;
        line-height: 0.27rem;
      }
      .user_btn {
        margin-top: 0.3rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        .btn {
          width: 1.26rem;
          height: 0.3rem;
          background-color: rgba(0, 0, 0, 0.2);
          color: #ffffff;
          border-radius: 0.18rem;
          outline: none;
          border: 0.5px solid white;
        }
      }
    }
  }
}
</style>
