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
export default {
  name: "Home",
  components: {
    Moreitem,
    Dynamic
  }
  // created() {
  //   this.Login();
  // },
  // methods: {
  //   Login() {
  //     const url = "http://175.24.82.120:8888/login";
  //     this.$axios
  //       .post(url, {
  //         username: "admin",
  //         password: "qq123456"
  //       })
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }
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
