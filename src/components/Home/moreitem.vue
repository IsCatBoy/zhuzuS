<template>
  <div class="contenitem">
    <img class="mores" src="../../assets/indexPage/mores@3x.png" alt />
    <div class="moresimg" style>
      <img :src="items.img" alt />
    </div>
    <div class="tou">
      <img :src="items.touimg" v-lazy="items.touimg" alt />
      <div class="name">{{items.name}}</div>
      <div class="num">粉丝 2238</div>
    </div>
  </div>
</template>
<script>
export default {
  nama: "Moreitem",
  data() {
    return {};
  },
  props: ["items"]
};
</script>
<style lang="scss" scoped>
.contenitem {
  display: inline-block;
  padding-bottom: 0.08rem;
  margin-right: 0.13rem;
  width: 1.5rem;
  //   height: 1.8rem;
  border-radius: 0.1rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 15px 3px #20202015;
  .mores {
    width: 0.15rem;
    position: absolute;
    top: 0.05rem;
    right: 0.05rem;
    z-index: 1;
  }
  .moresimg {
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    width: 100%;
    position: relative;
    img {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      width: 100%;
    }
  }

  .tou {
    position: relative;
    margin: -0.15rem 0 0 0.105rem;
    img {
      width: 0.28rem;
      height: 0.28rem;
      border-radius: 50%;
    }
    .name {
      margin-top: 0.02rem;
    }
    .num {
      font-size: 0.7em;
      color: #8a8a8a;
    }
  }
}
</style>
