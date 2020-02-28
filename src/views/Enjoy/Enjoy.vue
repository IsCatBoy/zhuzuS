<template>
  <div class="page enjoy">
    <div class="enjoyTop" v-show="top">
      <van-icon size="0.24rem" name="arrow-left" @click="$router.go(-1)" />
      <img src="../../assets/indexPage/moer@3x.png" alt />
    </div>
    <div class="enjoyMid" @click="enjoyMidBtn">
      <img :src="enjoyMid" alt />
    </div>
    <div class="enjoyBottom" v-show="top">
      <div class="footer">
        <div class="item">
          <img src="../../assets/indexPage/likes@3x.png" alt />
          <span class="num">12</span>
        </div>
        <div class="item">
          <img src="../../assets/indexPage/comment@3x.png" alt />
          <span class="num">12</span>
        </div>
        <div class="item">
          <img src="../../assets/indexPage/Forward@3x.png" alt />
          <span class="num">12</span>
        </div>
      </div>
      <div class="enjoyBottomUse">
        <div class="enjoyBottomUseT">
          <div class="enjoyBottomUseTt">by {{userBy}}</div>
          <div class="enjoyBottomUseTb">{{onWay}}</div>
        </div>
        <div class="enjoyBottomUseB">
          <img :src="tou" alt />
        </div>
      </div>

      <div class="hot">
        <div class="jiehe">{{jiehe}}</div>
        <div class="hotLook">
          <div class="myHot">
            热度
            <section class="hotNum">97</section>
          </div>
          <div class="myLook">
            浏览量
            <section class="lookNum">2222</section>
          </div>
        </div>

        <div class="loadTime">
          上传时间
          <span class="rq">{{riqi}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Enjoy",
  data() {
    return {
      top: true,
      enjoyMid: require("../../assets/loginPage/bannerlogin@3x.png"),
      userBy: "CNU_blank",
      onWay: "On the way | Daniei Emst",
      tou: require("../../assets/indexPage/tou2@3x.png"),
      jiehe: "#动静结合#  #镜头下的最美瞬间#",
      riqi: "2020.2.5  14:34"
    };
  },
  methods: {
    enjoyMidBtn() {
      console.log("我是冷太阳");
      this.top = !this.top;
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  height: 100%;
  .enjoyTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 32px;
    // background: rgb(128, 128, 125);
    position: absolute;
    z-index: 1;
    top: 0;
    &::before {
      width: 100%;
      height: 32px;
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      filter: blur(4px);
      background: url("../../assets/loginPage/bannerlogin@3x.png") 0 / cover;
    }
    img {
      transform: rotate(90deg);
      position: absolute;
      line-height: 32px;
      right: 20px;
    }
    // height: 40px;
    // background: rgb(128, 128, 125);
    // filter: blur(2px);
    opacity: 0.9;
    // position: absolute;
    &:nth-child(1) {
      padding: 0 0.07rem;
    }
  }
  .enjoyMid {
    height: 100%;
    img {
      height: 100%;
    }
  }
  .enjoyBottom {
    width: 100%;
    min-height: 260px;
    position: absolute;
    // filter: blur(2px);
    opacity: 0.9;
    bottom: 0;
    z-index: 1;
    &::before {
      width: 100%;
      min-height: 260px;
      content: "";
      z-index: -1;
      position: absolute;
      bottom: 0;
      filter: blur(4px);
      background: url("../../assets/loginPage/bannerlogin@3x.png") 0 / cover;
    }
    .footer {
      display: flex;
      align-items: center;
      padding: 0.15rem 0.1rem;
      .item {
        display: flex;
        align-items: center;
        padding-right: 0.2rem;
        .num {
          font-size: 0.8em;
          margin-left: 0.05rem;
        }
        img {
          width: 0.2rem;
        }
      }
    }
    .enjoyBottomUse {
      display: flex;
      justify-content: space-between;
      margin: 0 0.1rem;
      border-bottom: 1px dashed white;
      .enjoyBottomUseT {
        color: white;

        .enjoyBottomUseTt {
          margin-bottom: 0.1rem;
        }
        .enjoyBottomUseTb {
          font-size: 0.8em;
          margin-bottom: 0.15rem;
        }
      }
      .enjoyBottomUseB {
        width: 0.5rem;
        margin-top: -1em;
        img {
          width: 100%;
        }
      }
    }
    .hot {
      margin: 0.12rem 0.1rem;
      .jiehe {
        color: rgb(32, 98, 124);
        font-size: 0.9em;
      }
      .hotLook {
        margin: 0.1rem 0 0.2rem;
        color: white;
        .myHot {
          display: inline-block;
          margin-right: 0.4rem;
          .hotNum {
            padding-top: 0.01rem;
          }
        }
        .myLook {
          display: inline-block;
          .lookNum {
            padding-top: 0.01rem;
          }
        }
      }
      .loadTime {
        color: white;
        .rq {
          margin-left: 0.35rem;
        }
      }
    }
  }
}
</style>