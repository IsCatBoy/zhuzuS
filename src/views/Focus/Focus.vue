<template>
  <div class="page focus">
      <div class="focusTop">
      <MineHead :imgUrl="imgUrl"></MineHead>
       <MineMain v-for="(item, index) in dataMain" :key="index" :itemMain="item"></MineMain>
<div class="sign">
        <div class="signIcon">
          <img src="../../assets/minePage/Collection@3x.png" alt />
          <div class="signLine"></div>
        </div>
        <div class="signIcon">
          <img src="../../assets/minePage/lovestar@3x.png" alt />
          <div ></div>
        </div>
      </div>
      </div>

      <section class="shareSet">
      <MineShare
        class="shareCom"
        v-for="(item, index) in data"
        :key="index"
        :shareImg="item.shareImg"
        :shareComment="item.shareComment"
        :userPhoto="item.userPhoto"
        :userName="item.userName"
        :good="item.good"
        :like="item.like"
      ></MineShare>
    </section>
  </div>
</template>

<script>
import MineHead from "../Mine/MineChind.vue/MineHead.vue";
import MineMain from "../Mine/MineChind.vue/MineMain.vue";
import MineShare from "../Mine/MineChind.vue/MineShare.vue";

export default {
  name: "Focus",
  data(){
      return {
      imgUrl: require("../../assets/minePage/251581178791_.pic_hd@3x.png"),
       dataMain: [
        {
          headPortrait: require("../../assets/minePage/Headportrait@3x.png"),
          nickname: "冷太阳",
          gender: require("../../assets/minePage/Gender@3x.png"),
          userId: 6926392032,
          address: require("../../assets/minePage/address@3x.png"),
          cityName: "成都",
          attention: 555,
          myFans: 2020
        }
      ],
 data: [
        {
          shareImg: require("../../assets/minePage/191580582922_.pic@3x.png"),
          shareComment: "慢生活",
          userPhoto: require("../../assets/minePage/HeadONE.pic@3x.png"),
          userName: "CNU",
          good: 520,
          like: require("../../assets/minePage/liked@3x.png")
        },
        {
          shareImg: require("../../assets/minePage/161580581454_.pic_hd@3x.png"),
          shareComment: "慢生活",
          userPhoto: require("../../assets/minePage/HeadONE.pic@3x.png"),
          userName: "CNU",
          good: 520,
          like: require("../../assets/minePage/liked@3x.png")
        },
        {
          shareImg: require("../../assets/minePage/161580581454_.pic_hd@3x.png"),
          shareComment: "慢生活",
          userPhoto: require("../../assets/minePage/HeadONE.pic@3x.png"),
          userName: "CNU",
          good: 520,
          like: require("../../assets/minePage/liked@3x.png")
        },
        {
          shareImg: require("../../assets/minePage/191580582922_.pic@3x.png"),
          shareComment: "慢生活",
          userPhoto: require("../../assets/minePage/HeadONE.pic@3x.png"),
          userName: "CNU",
          good: 520,
          like: require("../../assets/minePage/liked@3x.png")
        }
      ],
      }
  },
  components:{
      MineHead,
      MineMain,
      MineShare
  }
};
</script>

<style lang="scss" scoped>
.page{
    height: 100%;
    .sign {
      display: flex;
      justify-content: space-around;
      margin: 0.16rem 0 0.19rem 0;

      .signIcon {
        height: 0.18rem;
        img {
          height: 100%;
        }
      }
      .signLine {
        margin-top: 0.035rem;
        border: 1px solid #6fa7dd;
        background-color: #6fa7dd;
      }
    }

    
  .shareSet {
    margin: 0 0.025rem;
    display: flex;
    flex-wrap: wrap;
    .shareCom {
      width: 50%;
    }
  }
}
</style>