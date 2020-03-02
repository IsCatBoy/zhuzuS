<template>
  <div class="page home">
    <div class="homemore">
      <div class="homemore-font">
        <span>查看精彩内容</span>
        <span class="link">更多</span>
      </div>
      <div class="homemore-conten">
        <div class="gun">
          <Moreitem v-for="(item,index) in yizhus" :key="index" :items="item"></Moreitem>
        </div>
      </div>
      <Dynamic
        v-for="(item,index) in $store.state.ContData.ContentData"
        :key="index"
        :reledata="item"
      ></Dynamic>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Moreitem from "../../components/Home/moreitem";
import Dynamic from "../../components/Home/dynamic";
import { mapState, mapActions, mapGetters } from "vuex";
import { Dialog } from "vant";

export default {
  name: "Home",
  data() {
    return {
      // releDatas: this.$store.state.ContData.ContentData
    };
  },
  components: {
    Moreitem,
    Dynamic
  },
  computed: {
    ...mapState(["UserInfoData"]),
    ...mapState(["ContData"]),
    ...mapGetters(["yizhu"]),
    yizhus() {
      return this.yizhu;
    }
  },
  methods: {
    ...mapActions(["action_ContentData"])
  },
  created() {
    // console.log(this.UserInfoData);
    let token = localStorage.getItem("userToken");
    // console.log(token);
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
          // console.log(res);
          if (res.data.code === 409) {
            Dialog.alert({
              title: "小足提醒",
              message: "身份验证失效，请重新登录"
            }).then(() => {
              this.$router.push("/login");
            });
          } else {
            this.$axios
              .get("/fuwu/getimgdata/getarticle")
              .then(data => {
                this.releDatas = data.data.data;
                this.action_ContentData(data.data.data);
                // console.log(this.releDatas);
                console.log(this.yizhu);
              })
              .catch(err => {
                console.log(err);
              });
            console.log(this.ContData);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.homemore {
  font-size: 0.85em;

  .homemore-font {
    margin: 0.05rem 0.13rem;
    display: flex;
    justify-content: space-between;
    .link {
      color: #6fa7dd;
    }
  }
  .homemore-conten {
    width: 100%;
    overflow-x: scroll;
    .gun {
      margin: 0.1rem 0.13rem;
      white-space: nowrap;
    }
  }
}
</style>
