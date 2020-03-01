<template>
  <div class="page mine">
    <!-- 头部资料 -->
    <div class="mineTop">
      <MineHead :imgUrl="imgUrl"></MineHead>
      <MineMain
        v-for="(item, index) in dataMain"
        :key="index"
        :itemMain="item"
      ></MineMain>
      <div class="sign">
        <div class="signIcon" @click="qiehuan(1)">
          <img src="../../assets/minePage/Collection@3x.png" alt />
          <div :class="{ signLine: num == 1 ? true : false }"></div>
        </div>
        <div class="signIcon" @click="qiehuan(2)">
          <img src="../../assets/minePage/lovestar@3x.png" alt />
          <div :class="{ signLine: num == 2 ? true : false }"></div>
        </div>
        <div class="signIcon" @click="qiehuan(3)">
          <img src="../../assets/minePage/AIT@3x.png" alt />
          <div :class="{ signLine: num == 3 ? true : false }"></div>
        </div>
      </div>

      <Popup class="twoMa" v-model="show">
        <vue-qr
          :logoSrc="dataMain[0].headPortrait"
          :text="dataMain[0].nickname"
          :size="200"
        ></vue-qr>
      </Popup>
    </div>
    <!-- zujian -->
    <!-- <Cell is-link @click="showPopup">展示弹出层</Cell>
<Popup v-model="show">内容</Popup> -->
    <!-- 二维码，设置 -->
    <div class="QRSet">
      <div @click="showPopup" class="QRcode">
        <img src="../../assets/minePage/QRcode@3x.png" alt />
      </div>
      <div @click="BtnSet" class="mySet">
        <img src="../../assets/minePage/Setup@3x.png" alt />
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
// @ is an alias to /src
import MineHead from "./MineChind.vue/MineHead.vue";
import MineMain from "./MineChind.vue/MineMain.vue";
import MineShare from "./MineChind.vue/MineShare.vue";
import vueQr from "vue-qr";
import { Popup } from "vant";

export default {
  name: "Mine",
  data() {
    return {
      show: false,
      // two: false,
      num: 1,
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
      imgUrl: require("../../assets/minePage/bannerone.pic_hd@3x.png"),

      dataMain: [
        {
          headPortrait: require("../../assets/minePage/Headportrait@3x.png"),
          nickname: "Mondoli",
          gender: require("../../assets/minePage/Gender@3x.png"),
          userId: 6926392032,
          address: require("../../assets/minePage/address@3x.png"),
          cityName: "成都",
          attention: 5,
          myFans: 1928
        }
      ]
    };
  },
  components: {
    MineHead,
    MineMain,
    MineShare,
    vueQr,
    Popup
  },
  methods: {
    //切换
    qiehuan(nums) {
      this.num = nums;
    },

    BtnSet() {
      console.log("set");
      this.$router.push("/set");
    },

    // twoMaBtn() {
    //   this.two = !this.two;
    // },
    // erwei() {
    //   this.two = false;
    // },
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 49px);
  .mineTop {
    position: relative;
    .sign {
      display: flex;
      justify-content: space-evenly;
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

    .twoMa {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
  .QRSet {
    position: absolute;
    z-index: 2;
    right: 0.17rem;
    top: 0.325rem;
    .QRcode {
      width: 0.15rem;
      display: inline-block;
      margin-right: 0.14rem;
      img {
        width: 100%;
      }
    }
    .mySet {
      display: inline-block;
      width: 0.165rem;
      img {
        width: 100%;
      }
    }
  }
}
</style>
