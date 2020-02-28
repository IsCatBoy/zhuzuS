<template>
  <div class="mineshare">
    <div class="share">
      <div class="sharePic" @click="sharePicBtn">
        <img :src="shareImg" alt="" v-lazy="shareImg" />
      </div>

      <div class="shareComment">{{ shareComment }}</div>
      <div class="shareAll">
        <div class="shareInfo" @click="BtnFocus" >
          <div class="userPhoto" >
            <img :src="userPhoto" alt v-lazy="userPhoto" />
          </div>
          <div class="userName">{{ userName }}</div>
        </div>
        <div class="goodLike">
          <div class="good">{{ good }}</div>
          <div class="like">
            <img :src="like" alt v-lazy="like" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MineShare",
  data() {
    return {};
  },
  props: {
    shareImg: String,
    shareComment: String,
    userPhoto: String,
    userName: String,
    good: Number,
    like: String
  },
  methods:{
    sharePicBtn (){
      this.$router.push('/enjoy')
    },
     BtnFocus() {
      this.$router.push("/focus");
    }
  }
};
</script>

<style lang="scss" scoped>
.share {
  margin: 0 0.035rem;
  .sharePic {
    width: 100%;
    margin-bottom: 0.04rem;
    img {
      width: 100%;
    }
  }
  .shareComment {
    font-size: 0.625em;
    margin-left: 0.105rem;
    color: #1f1f1f;
  }
  .shareAll {
    margin: 0.03rem 0.105rem 0.105rem;
    color: #5d5d5d;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    .shareInfo {
      .userPhoto {
        display: inline-block;
        width: 0.16rem;
        margin-right: 0.055rem;
        vertical-align: -3px;
        img {
          width: 100%;
        }
      }
      .userName {
        display: inline-block;
        font-size: 0.56em;
      }
    }
    .goodLike {
      .good {
        display: inline-block;
        font-size: 0.56em;
        margin-right: 0.06rem;
      }
      .like {
        display: inline-block;
        width: 0.08rem;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
