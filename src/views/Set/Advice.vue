<template>
  <div class="page Advice">
    <van-button class="btn" type="primary" size="small" to="/">提交</van-button>
    <img src="../../assets/loginPage/吐槽@2x.png" alt />
    <div class="title">您的意见和建议，是对我们最大的支持</div>
    <textarea name id="textarea"></textarea>
  </div>
</template>

<script>
export default {
  name: "Advice"
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 49px);
  position: relative;
  .btn {
    font-size: 0.14em;
    position: absolute;
    background-color: #6fa9de;
    left: 83%;
  }
  img {
    width: 2.17rem;
    height: 1.73rem;
    margin: 0 auto;
  }
  .title {
    width: 54%;
    margin: 0 auto;
    background: rgba(111, 167, 221, 1);
    border-radius: 10px;
    font-size: 0.18em;
    color: #fffefeff;
    text-align: center;
    line-height: 0.15rem;
  }
  #textarea {
    width: 2.56rem;
    height: 1.75rem;
    resize: none;
    border: 1px dotted blue;
    border-radius: 10px;
    z-index: 12px;
    position: absolute;
    left: 50%;
    top: 47%;
    transform: translate(-50%, -50%);
  }
}
</style>