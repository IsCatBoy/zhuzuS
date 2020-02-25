<template>
  <div class="page mine">
    <MineHead></MineHead>
    <MineMain></MineMain>
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