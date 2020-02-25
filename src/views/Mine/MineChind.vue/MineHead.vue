<template>
  <div class="minehead">
    <section class="headImg">
      <img :src="imgUrl" alt />
    </section>
    <section class="headPortrait">
      <img :src="headPortrait" alt />
    </section>
  </div>
</template>

<script>
export default {
  name: "MineHead",
  data() {
    return {
      imgUrl: require("../../../assets/minePage/bannerone.pic_hd@3x.png"),
      headPortrait: require("../../../assets/minePage/Headportrait@3x.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.headImg {
  height: 2.355rem;
  img {
    width: 100%;
  }
}
.headPortrait {
  width: 0.635rem;
  position: relative;
  left: 0.25rem;
  top: -0.41rem;
  margin-bottom: -0.305rem;
  img {
    width: 100%;
  }
}
</style>