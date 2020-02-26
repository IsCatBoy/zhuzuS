<template>
  <div class="Dynamic">
    <div class="header">
      <div class="toubu">
        <img src="../../assets/indexPage/tou3@3x.png" alt srcset />
        <div class="more">
          <span class="name">CNU_blank</span>
          <span class="time">1分钟前</span>
        </div>
      </div>
      <div class="morebtn">
        <img src="../../assets/indexPage/moer@3x.png" alt srcset />
      </div>
    </div>
    <div class="swipers">
      <swiper :options="swiperOption">
        <swiperSlide v-for="i in 5" :key="i">
          <img src="../../assets/indexPage/261580746703_.pic@3x.png" alt />
        </swiperSlide>
      </swiper>
    </div>
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
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Dynamic",
  data() {
    return {};
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
.Dynamic {
  margin: 0.1rem 0 0.06rem 0;
  width: 100%;
  .header {
    margin: 0 0.13rem 0.06rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .toubu {
      display: flex;
      .more {
        margin-left: 0.08rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .name {
          font-size: 0.9em;
          font-weight: 600;
        }
        .time {
          font-size: 0.75em;
          color: #aaaaaa;
        }
      }
      img {
        width: 0.35rem;
        height: 0.35rem;
      }
    }
    .morebtn {
      height: 100%;
      img {
        height: 0.15rem;
      }
    }
  }
  .swipers {
    height: auto;
    img {
      width: 100%;
    }
  }
  .footer {
    display: flex;
    align-items: center;
    padding: 0.15rem 0.2rem;
    .item {
      display: flex;
      align-items: center;
      padding-right: 0.24rem;
      .num {
        margin-left: 0.08rem;
      }
      img {
        width: 0.2rem;
      }
    }
  }
}
</style>