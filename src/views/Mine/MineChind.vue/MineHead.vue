<template>
  <div class="minehead">
    <section class="headImg">
      <img :src="imgUrl" alt />
    </section>
  </div>
</template>

<script>
export default {
  name: "MineHead",
  data() {
    return {
      // imgUrl: require("../../../assets/minePage/bannerone.pic_hd@3x.png")
    };
  },
  props:{
    imgUrl:String
  }
};
</script>

<style lang="scss" scoped>
.headImg {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>