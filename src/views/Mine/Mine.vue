<template>
  <div class="page Mine">this is Mine page</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Mine",
  components: {},
  created() {
    // this.$emit('footer',false)
  }
};
</script>

<style lang="scss" scoped>
body,
html,
#app {
  height: 100%;
}
#app {
  font-size: 16px;
}
.page {
  height: calc(100% - 49px);
  overflow: scroll;
}
</style>