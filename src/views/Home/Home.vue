<template>
  <div class="page home">
    <div class="homemore">
      <div class="homemore-font">
        <span>查看精彩内容</span>
        <span class="link">更多</span>
      </div>
      <div class="homemore-conten">
        <div class="gun">
          <Moreitem v-for="i in 5" :key="i"></Moreitem>
        </div>
      </div>
      <Dynamic v-for="i in 4" :key="i"></Dynamic>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Moreitem from "../../components/Home/moreitem";
import Dynamic from "../../components/Home/dynamic";
import { mapState } from "vuex";
import { Dialog } from "vant";

export default {
  name: "Home",
  components: {
    Moreitem,
    Dynamic
  },
  computed: {
    ...mapState(["UserInfoData"])
  },
  created() {
    console.log(this.UserInfoData);
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
