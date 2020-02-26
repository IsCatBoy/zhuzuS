<template>
  <div class="page New">
    <!-- <div class="NewItem">
      <div class="Item NewItem-left">
        <div class="xiaox">
          <img src="../../assets/Newspage/thumbs-up@3x.png" alt srcset />
        </div>
        <span>点赞</span>
      </div>
      <div class="Item NewItem-right">
        <div class="xiaoxi">
          <img src="../../assets/Newspage/goto@3x.png" alt srcset />
        </div>
      </div>
    </div>
    <div class="NewItem">
      <div class="Item NewItem-left">
        <div class="xiaox">
          <img src="../../assets/Newspage/comment@3x.png" alt srcset />
        </div>
        <span>评论</span>
      </div>
      <div class="Item NewItem-right">
        <div class="xiaoxi">
          <img src="../../assets/Newspage/goto@3x.png" alt srcset />
        </div>
      </div>
    </div>
    <div class="NewItem">
      <div class="Item NewItem-left">
        <div class="xiaox">
          <img src="../../assets/Newspage/follow@3x.png" alt srcset />
        </div>
        <span>关注</span>
      </div>
      <div class="Item NewItem-right">
        <div class="xiaoxi">
          <img src="../../assets/Newspage/goto@3x.png" alt srcset />
        </div>
      </div>
    </div>
    <div class="NewItem">
      <div class="Item NewItem-left">
        <div class="xiaox">
          <img src="../../assets/Newspage/Privateletter@3x.png" alt srcset />
        </div>
        <span>私信</span>
      </div>
      <div class="Item NewItem-right">
        <div class="xiaoxi">
          <img src="../../assets/Newspage/goto@3x.png" alt srcset />
        </div>
      </div>
    </div>
    <div class="NewItem">
      <div class="Item NewItem-left">
        <div class="xiaox zzu">
          <img src="../../assets/Newspage/xiaozu@3x.png" alt srcset />
        </div>
        <span>小足</span>
      </div>
      <div class="Item NewItem-right">
        <div class="xiaoxi">
          <img src="../../assets/Newspage/goto@3x.png" alt srcset />
        </div>
      </div>
    </div>-->
    <NewsItem
      v-for="(item, index) in data"
      :key="index"
      :icon="item.icon"
      :text="item.text"
      :isbak="item.isbak"
      :num="item.num"
    ></NewsItem>
  </div>
</template>
<script>
import NewsItem from "../../components/News/NewsItem";
export default {
  name: "News",
  data() {
    return {
      data: [
        {
          icon: require("../../assets/Newspage/thumbs-up@3x.png"),
          text: "点赞",
          isbak: false,
          num: 0
        },
        {
          icon: require("../../assets/Newspage/comment@3x.png"),
          text: "评论",
          isbak: false,
          num: 99
        },
        {
          icon: require("../../assets/Newspage/follow@3x.png"),
          text: "关注",
          isbak: false,
          num: 0
        },
        {
          icon: require("../../assets/Newspage/Privateletter@3x.png"),
          text: "私信",
          isbak: false,
          num: 16
        },
        {
          icon: require("../../assets/Newspage/xiaozu@3x.png"),
          text: "小足",
          isbak: true,
          num: 12
        }
      ]
    };
  },
  components: {
    NewsItem
  }
};
</script>
<style lang="scss" scoped>
.New {
  padding: 0 0.175rem;
  .NewItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.115rem 0;
    .Item {
      display: flex;
      justify-content: center;
      align-items: center;
      .xiaox {
        width: 0.24rem;
        height: 0.24rem;
        background-color: #eeeeee;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.15rem;
        img {
          width: 65%;
        }
      }
      .zzu {
        background-color: #b63433;
        img {
          height: 65%;
          width: auto;
        }
      }
      span {
        font-size: 0.75px;
        font-weight: 600;
      }
      .xiaoxi {
        height: 0.13rem;
        width: 0.07rem;
        img {
          width: 100%;
        }
      }
      .msgnum {
        width: 0.17rem;
        height: 0.17rem;
        border-radius: 50%;
        font-size: 0.75em;
        background-color: #6fa7dd;
        color: white;
        margin-right: 0.15rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
