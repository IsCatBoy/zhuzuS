<template>
  <div class="minemain">
    <div class="mainInfo">
      <section class="info">
        <div class="infoId">
          <div class="nickname">{{nickname}}</div>
          <div class="gender">
            <img :src="gender" alt="" />
          </div>
        </div>
        <div class="userId">ID:{{userId}}</div>

        <div class="infoSite">
          <section class="city">
              <section class="cityIcon"><img :src="address" alt=""></section>
              <section class="cityName">{{cityName}}</section>
          </section>
        </div>

        <div class="fans">
            <span class="myfans">关注&nbsp;{{attention}}&nbsp;</span>
            <span class="dian">&nbsp;·&nbsp;</span>
            <span class="myfans">&nbsp;粉丝&nbsp;{{myFans}}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "MineMain",
  data() {
    return {
      nickname: "Mondoli",
      gender: require("../../../assets/minePage/Gender@3x.png"),
      userId: 6926392032,
      address: require("../../../assets/minePage/address@3x.png"),
      cityName: '成都',
      attention: 5,
      myFans: 1928,
    };
  }
};
</script>

<style lang="scss" scoped>
.mainInfo{
  border-bottom: 1px rgba($color: #DCDCDC, $alpha: 0.53) solid
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
  .infoSite{
          display: inline-block;
      .city{
          display: inline-block;
          height: 0.185rem;
          border: 1px solid #C5C5C5;
          border-radius: 0.0925rem;
          margin-right: 0.055rem;
          .cityIcon{
              display: inline-block;
              width: 0.065rem;
              margin: 0 0.075rem 0 0.075rem;
              vertical-align: 0.01rem;
              img{
                  width: 100%;
              }
          }
          .cityName{
              display: inline-block;
              font-size: 0.69em;
              font-family: PingFangSC-Regular;
              color: #C5C5C5;
              margin-right: 0.1rem;
              vertical-align: 0.01rem;
          }
      }
  }
  .fans{
    margin: 0.13rem 0;
span,.myfans{
font-size: 0.69em;
font-family: PingFangSC-Regular;
color: #A4A4A4;
}
.dian{
    font-weight: 900;
}
  }

}
</style>