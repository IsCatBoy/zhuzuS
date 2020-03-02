<template>
  <div v-show="isfoshow" class="footer">
    <van-icon
      class="back"
      v-show="isshow"
      size="0.24rem"
      name="arrow-left"
      @click="$router.go(-1)"
    />
    <div v-show="quxiaos" class="back quxiao" @click="isshows">取消</div>
    <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" @select="onselect" />
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
      @click="caogao"
    >存草稿</van-button>
    <van-button
      class="fabu"
      round
      type="info"
      size="small"
      color="rgb(211, 171, 144)"
      v-show="quxiaos"
      @click="fabu"
    >发布</van-button>
  </div>
</template>
<script>
import { Toast } from "vant";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "LWFooter",
  data() {
    return {
      show: false,
      actions: [{ name: "存草稿" }, { name: "放弃" }],
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
  computed: {
    ...mapState(["ReleaseData"]),
    ...mapState(["UserInfoData"])
  },
  methods: {
    ...mapActions(["action_NEWLIST"]),
    onselect(item) {
      Toast();
      this.show = false;
      console.log(item);
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "倒计时 3 秒"
      });
      let second = 2;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
          if (item.name == "存草稿") {
            Toast.success("下来再来哦");
          }
          if (item.name == "放弃") {
            this.action_NEWLIST();
          }
          this.$router.go(-1);
        }
      }, 1000);
    },
    isshows() {
      let as = this.ReleaseData;
      console.log(as);
      if (
        as.NewsfileList.length == 0 &&
        (as.NewsTitle == null || as.NewsTitle.trim() == "") &&
        (as.NewsContent == null || as.NewsContent.trim() == "") &&
        (as.NewsTheme == null || as.NewsTheme.trim() == "") &&
        (as.NewsPosition == null || as.NewsPosition.trim() == "")
      ) {
        this.show = false;
        this.$router.go(-1);
      } else {
        this.show = true;
      }
    },
    caogao() {
      let as = this.ReleaseData;
      console.log(as);
      if (
        (as.NewsfileList.length == 0 &&
          (as.NewsTitle == null || as.NewsTitle.trim() == "") &&
          (as.NewsContent == null || as.NewsContent.trim() == "") &&
          (as.NewsTheme == null || as.NewsTheme.trim() == "") &&
          as.NewsPosition == null) ||
        as.NewsPosition.trim() == ""
      ) {
        Toast("没信息不用存，些谢");
      } else {
        Toast();
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: "倒计时 2 秒"
        });
        let second = 2;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `倒计时 ${second} 秒`;
          } else {
            clearInterval(timer);
            // 手动清除 Toast
            Toast.clear();
            Toast.success("下来再来哦");
            setTimeout(() => {
              this.$router.go(-1);
            }, 500);
          }
        }, 1000);
      }
    },
    ReleaseBtn() {
      let that = this;
      return new Promise((res, req) => {
        console.log("zenmel");
        let data = new FormData();
        // this.ReleaseData.NewsfileList;
        // for (var i = 0; i < this.ReleaseData.NewsfileList.length; i++) {
        //   data.append("NewsfileList", this.ReleaseData.NewsfileList[i].file);
        // }
        that.ReleaseData.NewsfileList.forEach((file, index) => {
          data.append(`NewsfileList${index}`, file.file);
          console.log(file);
        });
        // let alist = this.ReleaseData.NewsfileList.map((item, index) => {
        //   return item.file;
        // });
        // console.log(alist);
        // data.append("NewsfileList", alist); //标题
        data.append("NewsUserid", that.UserInfoData.user_id); //ID
        data.append("NewsArticletype", that.ReleaseData.NewsArticletype); //ID
        data.append("NewsTitle", that.ReleaseData.NewsTitle); //标题
        data.append("NewsContent", that.ReleaseData.NewsContent); //内容
        data.append("NewsTheme", that.ReleaseData.NewsTheme); //主题
        data.append("NewsPosition", that.ReleaseData.NewsPosition); //地址
        data.append("NewsSynBtn", that.ReleaseData.NewsSynBtn); //地址
        data.append("NewsSaveBtn", that.ReleaseData.NewsSaveBtn); //地址
        data.append("NewsKeyflag", that.ReleaseData.NewsKeyflag); //推荐
        let config = {
          // "application/x-www-form-urlencoded"
          "Content-Type": "multipart/form-data",
          authorization: localStorage.getItem("userToken")
        };
        that.$axios
          .post("/fuwu/releaapi", data, {
            headers: config
          })
          .then(data => {
            if (data.data.code == 200) {
              res(data.data.message);
            } else {
              throw Error(data.data.message);
            }
          })
          .catch(data => {
            console.log(data);
            req(data);
          });
      });
    },
    fabu() {
      let as = this.ReleaseData;
      console.log(as);
      if (
        as.NewsfileList.length == 0 ||
        (as.NewsTitle == null ? true : as.NewsTitle.trim() == "") ||
        (as.NewsContent == null ? true : as.NewsContent.trim() == "")
      ) {
        Toast("请完善发布类容");
      } else {
        this.ReleaseBtn()
          .then(data => {
            console.log(data);
            Toast.success(data);
            this.action_NEWLIST();
            setTimeout(() => {
              this.$router.go(-1);
            }, 500);
          })
          .catch(err => {
            Toast.fail(err);
          });
      }
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
