<template>
  <div class="minemain">
    <div class="mainInfo">
      <section class="info">
        <section class="headPortrait">
          <img :src="itemMain.headPortrait" alt />
        </section>

        <div class="infoId">
          <div class="nickname">{{itemMain.nickname}}</div>
          <div class="gender">
            <img :src="itemMain.gender" alt />
          </div>
        </div>

        <div class="userId">ID:{{itemMain.userId}}</div>

        <div class="infoSite">
          <section class="city">
            <section class="cityIcon">
              <img :src="itemMain.address" alt />
            </section>
            <section class="cityName">{{itemMain.cityName}}</section>
          </section>
          <section class="compile">
            <MineCompile></MineCompile>
          </section>
        </div>

        <div class="fans">
          <span class="myfans">关注&nbsp;{{itemMain.attention}}&nbsp;</span>
          <span class="dian">&nbsp;·&nbsp;</span>
          <span class="myfans">&nbsp;粉丝&nbsp;{{itemMain.myFans}}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MineCompile from "./MineTip/MineCompile.vue";
export default {
  name: "MineMain",
  components: { MineCompile },
  data() {
    return {};
  },
  props: {
    itemMain: Object
  }
};
</script>

<style lang="scss" scoped>
.mainInfo {
  border-bottom: 1px rgba($color: #dcdcdc, $alpha: 0.53) solid;
}
.info {
  margin-left: 0.26rem;
  .infoId {
    .nickname {
      display: inline-block;
      font-size: 1.25em;
      font-weight: 600;
      color: #222222;
      margin-right: 0.125rem;
    }
    .gender {
      display: inline-block;
      width: 0.095rem;
      vertical-align: 0.125em;
      img {
        width: 100%;
      }
    }
  }
  .userId {
    font-size: 0.69em;
    color: #b6b6b6;
    margin: 0.12rem 0 0.14rem 0;
  }
  .infoSite {
    // display: inline-block;
    .city {
      display: inline-block;
      height: 0.185rem;
      border: 1px solid #c5c5c5;
      border-radius: 0.0925rem;
      margin-right: 0.055rem;
      .cityIcon {
        display: inline-block;
        width: 0.065rem;
        margin: 0 0.075rem 0 0.075rem;
        vertical-align: 0.02rem;
        img {
          width: 100%;
        }
      }
      .cityName {
        display: inline-block;
        font-size: 0.69em;
        font-family: PingFangSC-Regular;
        color: #c5c5c5;
        margin-right: 0.1rem;
        vertical-align: 0.03rem;
      }
    }
    .compile {
      display: inline-block;
    }
  }
  .fans {
    margin: 0.13rem 0;
    span,
    .myfans {
      font-size: 0.69em;
      font-family: PingFangSC-Regular;
      color: #a4a4a4;
    }
    .dian {
      font-weight: 900;
    }
  }
  .headPortrait {
    width: 0.635rem;
    position: relative;
    top: -0.41rem;
    margin-bottom: -0.305rem;
    img {
      width: 100%;
    }
  }
}
</style>