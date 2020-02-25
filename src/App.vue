<template>
  <div id="app">
    <LWFooter v-if="footer_show"></LWFooter>
    <router-view @header="header" @footer="footer"></router-view>
    <LWHeader v-if="header_show"></LWHeader>
  </div>
</template>
<script>
import "normalize.css/normalize.css";
import LWHeader from "./components/header";
import LWFooter from "./components/footer";
export default {
  name: "App",
  data(){
  return{
    footer_show:true,
    header_show:true,
  }
  
  },
  components: {
    LWHeader,
    LWFooter
  },
  methods: {
    goto(id) {
      this.$router.push(id);
    },
    header(bool){
      this.header_show = bool
    },
    footer(bool){
      this.footer_show = bool
    
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
