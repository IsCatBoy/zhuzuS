<template>
  <div class="Giveup">
    <div class="Giveuptou">
      <img :src="itemdata.tousrc" alt srcset />
      <div class="Giveuptext">
        <div class="name">{{ itemdata.name }}</div>
        <div class="chaoz">{{ itemdata.type }}</div>
        <div class="time">{{ itemdata.time }}</div>
      </div>
    </div>
    <div class="Giveupwei" v-if="ids == 1 || ids == 2">
      <img :src="itemdata.taisrc" alt srcset />
    </div>
    <div class="Giveupweis" v-else-if="ids == 4 || ids == 0">
      <div class="btn btns" @click="gochat(itemdata.name)">去聊天</div>
    </div>
    <div class="Giveupweis" v-else>
      <div class="btn btns">互相关注</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Giveup",
  data() {
    return {};
  },
  props: {
    itemdata: Object,
    ids: Number
  },
  methods: {
    gochat(val) {
      this.$router.push({
        name: "Chat",
        params: {
          chatname: val
        }
      });
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.Giveup {
  padding: 0.1rem 0;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  font-weight: 600;
  .Giveuptou {
    display: flex;
    height: 100%;
    img {
      width: 0.365rem;
      height: 0.365rem;
    }
    .Giveuptext {
      margin: 0 0.06rem;
      div {
        margin: 0.04rem 0;
      }
      .chaoz {
        line-height: 1.2em;
      }
      .time {
        color: #ababab;
        font-size: 0.7em;
      }
    }
  }
  .Giveupwei {
    img {
      margin-top: 0.06rem;
      width: 0.4rem;
      border-radius: 0.03rem;
    }
  }
  .Giveupweis {
    display: flex;
    align-items: center;
    .btn {
      color: #999999;
      padding: 0.065rem;
      text-align: center;
      width: 0.7rem;
      border-radius: 0.7rem;
      border: 0.01rem solid #999999;
    }
    .btns {
      color: #6fa7dd;
      border: 0.01rem solid #6fa7dd;
    }
  }
}
</style>
