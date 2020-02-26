<template>
  <div class="NewItem" @click="gotoNewsres">
    <div class="Item NewItem-left">
      <div :class="{ xiaox: true, zzu: isbak }">
        <img :src="icon" alt srcset />
      </div>
      <span>{{ text }}</span>
    </div>
    <div class="Item NewItem-right">
      <div class="msgnum" v-if="num > 0">{{ num }}</div>
      <div class="xiaoxi">
        <img src="../../assets/Newspage/goto@3x.png" alt srcset />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsItem",
  data() {
    return {};
  },
  // 接收父组件传递过来的数据
  props: {
    icon: String,
    text: String,
    isbak: Boolean,
    num: Number
  },
  methods: {
    gotoNewsres() {
      this.$router.push({
        name: "Newsres",
        params: {
          title: this.text
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
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
      font-size: 0.75em;
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
      width: 0.15rem;
      height: 0.15rem;
      border-radius: 50%;
      font-size: 0.6em;
      background-color: #6fa7dd;
      color: white;
      margin-right: 0.15rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
