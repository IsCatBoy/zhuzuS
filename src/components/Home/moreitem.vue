<template>
  <div class="contenitem">
    <img class="mores" src="../../assets/indexPage/mores@3x.png" alt />
    <img src="../../assets/indexPage/191580746702_.pic@3x.png" alt />
    <div class="tou">
      <img src="../../assets/indexPage/tou1@3x.png" alt />
      <div class="name">Sunny</div>
      <div class="num">粉丝 2238</div>
    </div>
  </div>
</template>
<script>
export default {
  nama: "Moreitem"
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
  img {
    width: 100%;
    transform: scale(1.05);
  }
  .tou {
    position: relative;
    margin: -0.15rem 0 0 0.105rem;
    img {
      width: 0.28rem;
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
