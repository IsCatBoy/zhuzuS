<template>
  <div id="app">
    <LWFooter></LWFooter>
    <router-view />
    <LWHeader></LWHeader>
  </div>
</template>
<script>
import "normalize.css/normalize.css";
import LWHeader from "./components/header";
import LWFooter from "./components/footer";
export default {
  name: "App",
  components: {
    LWHeader,
    LWFooter
  },
  methods: {
    goto(id) {
      this.$router.push(id);
    }
  },
};
</script>

<style lang="scss">
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// a {
//   text-decoration: noen;
// }
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
</style>
