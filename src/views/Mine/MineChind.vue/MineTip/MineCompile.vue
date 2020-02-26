<template>
  <div class="minecompile">
    <div class="compileUse">
      <section class="compileIcon">
        <img :src="compileIcon" alt />
      </section>
      <section class="compileName" @click="btnCompile">编辑资料</section>
    </div>
  </div>
</template>

<script>
export default {
  name: "MineCompile",
  data() {
    return {
      compileIcon: require("../../../../assets/minePage/edit@3x.png")
    };
  },
  methods:{
      btnCompile(){
          this.$router.push("/infomation")
      }
  }
};
</script>

<style lang="scss" scoped>
.compileUse {
  display: inline-block;
  height: 0.185rem;
  border: 1px solid #c5c5c5;
  border-radius: 0.0925rem;
  .compileIcon {
    display: inline-block;
    width: 0.08rem;
    margin: 0 0.08rem;
    vertical-align: 0.02rem;
    img {
      width: 100%;
    }
  }
  .compileName {
    display: inline-block;
    font-size: 0.69em;
    font-family: PingFangSC-Regular;
    color: #c5c5c5;
    margin-right: 0.07rem;
    vertical-align: 0.03rem;
  }
}
</style>