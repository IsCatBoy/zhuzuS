<template>
<<<<<<< HEAD
  <div class="page mine">
    <MineHead></MineHead>
    <MineMain></MineMain>
=======
  <div class="page Mine">this is Mine page
  
>>>>>>> cadd720d152497eb6d9c7e5162b64ad23e4a75db
  </div>
</template>

<script>
// @ is an alias to /src
import MineHead from "./MineChind.vue/MineHead.vue";
import MineMain from "./MineChind.vue/MineMain.vue";

export default {
  name: "Mine",
  data() {
    return {};
  },
  components: {
    MineHead,
    MineMain
  },
  created() {
    // this.$emit('footer',false)
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 49px);
}
</style>