<template>
  <div class="page Release">
    <div class="fliesdiv">
      <van-uploader v-model="fileList" multiple :max-count="5" preview-size="110" />
      <!-- :after-read="afterread" -->
    </div>
    <div class="fontben">
      <div class="title">
        <input
          type="text"
          v-model="$store.state.ReleaseData.NewsTitle"
          placeholder="写下标题收获更多赞哦~"
          maxlength="20"
        />
      </div>
      <div class="xian"></div>
      <div class="conte">
        <textarea rows="8" v-model="$store.state.ReleaseData.NewsContent"></textarea>
      </div>
      <div class="xian"></div>
    </div>
    <div class="Setupitem">
      <van-cell
        title="发布类型"
        icon="bookmark"
        v-model="$store.getters.Articletype"
        @click="show = !show"
      />
      <van-action-sheet
        v-model="show"
        :actions="ReleaseData.actions"
        description="选择发布类型"
        @select="onSelect"
      />
      <van-cell
        :title="NewsThemes"
        icon="fire"
        is-link
        :to="{ name: 'RelSearch', params: { id: 1 } }"
      />
      <van-cell
        :title="NewsPositions"
        icon="location"
        is-link
        :to="{ name: 'RelSearch', params: { id: 2 } }"
      />
      <van-cell title="同步到微博" icon="award">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-switch
          v-model="$store.state.ReleaseData.NewsSynBtn"
          size="22px"
          active-color="#d3ab90"
          inactive-color="#f2f3f5"
        />
      </van-cell>
      <van-cell title="保存到相册" icon="coupon">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-switch
          v-model="$store.state.ReleaseData.NewsSaveBtn"
          size="22px"
          active-color="#d3ab90"
          inactive-color="#f2f3f5"
        />
      </van-cell>
      <van-cell title="是否挤上推荐" icon="hot">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-switch
          v-model="$store.state.ReleaseData.NewsKeyflag"
          size="22px"
          active-color="#d3ab90"
          inactive-color="#f2f3f5"
        />
      </van-cell>
    </div>
    <!-- <van-button type="primary" @click="Uploadbutton">主要按钮</van-button> -->
    <div id="qrcode"></div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { Dialog } from "vant";
export default {
  name: "Release",
  data() {
    return {
      // actionss: this.$store.getters.Articletype,
      show: false,
      // article_type: 1,
      // actions: this.$store.state.ReleaseData.actions,
      // title1: "添加主题",
      // title2: "你的位置",
      region: "成都市",
      // checkeds: this.$store.state.ReleaseData.NewsSynBtn,
      // checkedt: this.$store.state.ReleaseData.NewsSaveBtn,
      fileList: this.$store.state.ReleaseData.NewsfileList
    };
  },
  watch: {
    fileList(val) {
      console.log(val);
      this.action_NewsfileList(val);
      // console.log(this.fileList);
      console.log(this.ReleaseData);
    }
  },
  //导航首位
  // beforeRouteEnter(to, from, next) {
  //   // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
  //   console.log("this");
  //   console.log(to);
  //   console.log(from.params.id);
  //   next(vm => {
  //     vm[`title${from.params.id}`] = to.params.weizhi;
  //   });
  // },
  computed: {
    ...mapState(["ReleaseData"]),
    ...mapState(["UserInfoData"]),
    ...mapGetters(["NewsPositions"]),
    ...mapGetters(["NewsThemes"]),
    ...mapGetters(["Articletype"])
  },
  created() {
    // let url = `/api/suggestion?key=d84d6d83e0e51e481e50454ccbe8986b&boundary=region(${this.region})&keyword=${this.region}`;
    // this.$axios.get(url).then(data => {
    //   console.log(data.data);
    // });
    console.log(this.ReleaseData);
    console.log(this.NewsPositions);
    console.log(this.NewsThemes);
    let token = localStorage.getItem("userToken");
    console.log(token);
    // let url = "/auth";
    if (!token) {
      this.$router.push("/login");
    } else {
      this.$axios.defaults.headers.common["authorization"] = token;
      this.$axios({
        method: "POST",
        url: "/fuwu/auth"
      })
        .then(res => {
          console.log(res);
          if (res.data.code === 409) {
            Dialog.alert({
              title: "小足提醒",
              message: "身份验证失效，请重新登录"
            }).then(() => {
              this.$router.push("/login");
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    ...mapActions(["action_NewsfileList"]),
    ...mapActions(["action_NewsArticletype"]),
    ...mapActions(["action_NewsTitle"]),
    ...mapActions(["action_NewsSynBtn"]),
    ...mapActions(["action_NewsSaveBtn"]),
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onSelect(item) {
      this.article_type = item.type;
      this.actionss = item.name;
      this.action_NewsArticletype(item.type);
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      console.log(this.article_type);
      // Toast(item.name);
    },
    // 图片上传
    // afterread(file, detail) {
    //   let a=[...file];
    //   this.action_NewsfileList(a);
    //   console.log(a, detail);
    //   console.log(this.ReleaseData);
    // },
    //切换开关状态
    // onInput(a) {
    //   console.log(a);
    //   if (a == 1) {
    //     console.log(!this.ReleaseData.NewsSynBtn);
    //     this.action_NewsSynBtn(!this.ReleaseData.NewsSynBtn);
    //   }
    //   if (a == 2) {
    //     this.action_NewsSaveBtn(!this.ReleaseData.NewsSaveBtn);
    //   }
    // },
    //上传按钮

    ReleaseBtn() {
      let data = new FormData();
      // this.ReleaseData.NewsfileList;
      // for (var i = 0; i < this.ReleaseData.NewsfileList.length; i++) {
      //   data.append("NewsfileList", this.ReleaseData.NewsfileList[i].file);
      // }
      this.ReleaseData.NewsfileList.forEach((file, index) => {
        data.append(`NewsfileList${index}`, file.file);
      });
      // let alist = this.ReleaseData.NewsfileList.map((item, index) => {
      //   return item.file;
      // });
      // console.log(alist);
      // data.append("NewsfileList", alist); //标题
      data.append("NewsUserid", this.UserInfoData.user_id); //ID
      data.append("NewsArticletype", this.ReleaseData.NewsArticletype); //ID
      data.append("NewsTitle", this.ReleaseData.NewsTitle); //标题
      data.append("NewsContent", this.ReleaseData.NewsContent); //内容
      data.append("NewsTheme", this.ReleaseData.NewsTheme); //主题
      data.append("NewsPosition", this.ReleaseData.NewsPosition); //地址
      data.append("NewsSynBtn", this.ReleaseData.NewsSynBtn); //地址
      data.append("NewsSaveBtn", this.ReleaseData.NewsSaveBtn); //地址
      data.append("NewsKeyflag", this.ReleaseData.NewsKeyflag == true ? 1 : 0); //推荐
      let config = {
        // "application/x-www-form-urlencoded"
        "Content-Type": "multipart/form-data",
        authorization: localStorage.getItem("userToken")
      };
      this.$axios
        .post("/fuwu/releaapi", data, {
          headers: config
        })
        .then(data => {
          console.log(data);
        })
        .catch(data => {
          console.log(data);
        });
    },

    Uploadbutton() {
      function beforeClose(action, done) {
        if (action === "confirm") {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }
      Dialog.confirm({
        title: "标题",
        message: "是否存入草稿箱",
        confirmButtonText: "存草稿",
        cancelButtonText: "取消",
        beforeClose
      })
        .then(() => {
          // console.log(data);
          this.ReleaseBtn();
        })
        .catch(() => {
          // console.log(data);
        });
      console.log(this.ReleaseData);
    },
    //聊天按钮
    goto() {
      this.$router.push("/Chat");
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  height: calc(100% - 64px);
}
.Release {
  padding: 0.1rem 0;
  .fliesdiv {
    padding: 0.1rem 0.25rem;
    overflow: scroll;
  }
  .fontben {
    padding: 0.1rem 0.2rem;
    font-size: 0.85em;
    letter-spacing: 0.2em;
    .title {
      input {
        letter-spacing: 0.1em;
        padding: 0;
        margin: 0;
        height: 1.2em;
        border: none;
        line-height: 1.2em;
        width: 100%;
      }
    }
    .xian {
      border-bottom: 0.5px solid rgb(195, 195, 195);
      margin: 0.06rem 0;
    }
    .conte {
      textarea {
        letter-spacing: 0.1em;
        resize: none;
        padding: 10px 0;
        margin: 0;
        border: none;
        line-height: 1.2em;
        width: 100%;
      }
    }
  }
  .Setupitem {
    .van-cell__value {
      height: 24px;
    }
  }
}
</style>
