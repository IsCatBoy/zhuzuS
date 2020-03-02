<template>
  <div class="Dynamic">
    <div class="header">
      <div class="toubu">
        <img :src="reledata.profile" alt srcset />
        <div class="more">
          <span class="name">{{reledata.nickname}}</span>
          <span class="time">{{reledata.create_time}}</span>
        </div>
      </div>
      <div class="morebtn">
        <img src="../../assets/indexPage/moer@3x.png" alt srcset />
      </div>
    </div>
    <div class="swipers">
      <img v-if="swipers.length>1" class="mores" src="../../assets/indexPage/mores@3x.png" alt />
      <swiper>
        <swiperSlide v-for="(item, i) in swipers" :key="i">
          <img :src="item" alt />
        </swiperSlide>
      </swiper>
    </div>
    <div class="footer">
      <div class="item">
        <img src="../../assets/indexPage/likes@3x.png" alt />
        <span class="num">{{reledata.zdNum}}</span>
      </div>
      <div class="item">
        <img src="../../assets/indexPage/comment@3x.png" alt />
        <span class="num">{{reledata.plNum}}</span>
      </div>
      <div class="item">
        <img src="../../assets/indexPage/Forward@3x.png" alt />
        <span class="num">{{reledata.zfnum}}</span>
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
    return {
      swipers: [1, 2]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  props: ["reledata"],
  created() {
    console.log(this.reledata);
    console.log(this.reledata.photo);
    this.swipers = this.reledata.photo.split(",");
    console.log(this.swipers);
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
        border-radius: 50%;
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
    position: relative;
    height: auto;
    .mores {
      width: 0.2rem;
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      z-index: 10;
    }
    img {
      width: 100%;
    }
    .swiper-container {
      max-height: 375px;
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