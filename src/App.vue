<template>
  <div id="app">
    <LWFooter></LWFooter>
    <router-view></router-view>
    <LWHeader></LWHeader>
  </div>
</template>
<script>
import "normalize.css/normalize.css";
import LWHeader from "./components/header";
import LWFooter from "./components/footer";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    LWHeader,
    LWFooter
  },
  computed: {
    ...mapState(["ContData"])
  },
  created() {
    this.action_userinfo(JSON.parse(localStorage.getItem("userInfo")));
    let that = this;
    function sasd() {
      return new Promise((res, req) => {
        that.$axios
          .get("/fuwu/getimgdata/getarticle")
          .then(data => {
            res(data.data.data);
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
    sasd().then(data => {
      this.action_ContentData(data);
      // console.log(this.releDatas);
    });
  },
  methods: {
    ...mapActions(["action_userinfo"]),
    ...mapActions(["action_ContentData"]),
    goto(id) {
      this.$router.push(id);
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
// a {
//   text-decoration: noen;
// }
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  display: block;
}
html {
  font-size: 625%;
}
body,
html,
#app {
  height: 100%;
  width: 100%;
}
#app {
  font-size: 16px;
}
.page {
  height: calc(100% - 64px - 49px);
  overflow: scroll;
}
.Tabbarimg {
  img {
    width: 0.25rem;
  }

  a {
    text-decoration: none;
  }
}
.van-uploader__wrapper {
  flex-wrap: nowrap !important;
}
// .van-uploader__upload {
//   width: 110px !important;
// }
// .van-uploader__input {
//   width: 110px !important;
// }
</style>
