<template>
  <div class="page Search">
    <div class="SearchHead">
      <div class="SearchTop">
        <!-- 导航切换 -->
        <div class="sign">
          <div class="signIcon" @click="qiehuan(1)">
            <div :class="{ signLine: num == 1 ? true:false}">推荐</div>
          </div>
          <div class="signIcon" @click="qiehuan(2)">
            <div :class="{ signLine: num == 2 ? true:false}">穿搭</div>
          </div>
          <div class="signIcon" @click="qiehuan(3)">
            <div :class="{ signLine: num == 3 ? true:false}">彩妆</div>
          </div>
          <div class="signIcon" @click="qiehuan(4)">
            <div :class="{ signLine: num == 4 ? true:false}">美甲</div>
          </div>
          <div class="signIcon" @click="qiehuan(5)">
            <div :class="{ signLine: num == 5 ? true:false}">旅行</div>
          </div>
          <div class="signIcon" @click="qiehuan(6)">
            <div :class="{ signLine: num == 6 ? true:false}">摄影</div>
          </div>
          <div class="signIcon" @click="qiehuan(7)">
            <div :class="{ signLine: num == 7 ? true:false}">美食</div>
          </div>
        </div>

        <!-- search -->
        <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
      </div>
    </div>

    <section class="shareSet">
      <Cascadeflow :itemtype="num"></Cascadeflow>
      <!-- <MineShare
        class="shareCom"
        v-for="(item, index) in data"
        :key="index"
        :shareImg="item.shareImg"
        :shareComment="item.shareComment"
        :userPhoto="item.userPhoto"
        :userName="item.userName"
        :good="item.good"
        :like="item.like"
      ></MineShare>-->
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
import MineShare from "../Mine/MineChind.vue/MineShare.vue";
import Cascadeflow from "../../components/Cascadeflow";
import { Search } from "vant";
import { mapActions } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      value: "",
      num: 1,
      like: require("../../assets/minePage/liked@3x.png"),
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
        },
        {
          shareImg: require("../../assets/minePage/191580582922_.pic@3x.png"),
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
        },
        {
          shareImg: require("../../assets/minePage/191580582922_.pic@3x.png"),
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
      datas: null
    };
  },
  computed: {
    // datas() {
    // }
  },
  created() {
    // this.$axios
    //   .get("/fuwu/getimgdata/getarticles", {
    //     params: { type: 2 }
    //   })
    //   .then(res => {
    //     this.datas = res.data.data;
    //     this.action_ContentDataOne(res.data.data);
    //     console.log(this.datas);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  methods: {
    // ...mapActions(["action_ContentDataOne"]),
    qiehuan(nums) {
      this.num = nums;
    }
  },
  components: {
    Cascadeflow,
    MineShare,
    "van-search": Search
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 49px);
  .SearchHead {
    height: 127.1px;
    .SearchTop {
      width: 100%;
      position: fixed;
      background-color: white;
      .sign {
        display: flex;
        justify-content: space-around;
        font-size: 0.937em;
        color: #434343;
        font-weight: 600;
        margin: 0.335rem 0 0.11rem;
        .signLine {
          border-bottom: 2px solid #6fa7dd;
          font-size: 1.125em;
          padding-bottom: 0.02rem;
        }
      }
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
