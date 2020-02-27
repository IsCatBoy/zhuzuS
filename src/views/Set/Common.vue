<template>
  <div class="page common">
    <cell title="视频播放方式" is-link>
      <span style="color: gray">仅WiFi</span>
    </cell>
    <VSwitch v-for="(item,index) in data" :key="index" :items="item" />
  </div>
</template>

<script>
import { Cell } from "mint-ui";
import VSwitch from "../../components/switch.vue";
export default {
  name: "Common",
  components: {
    Cell,
    VSwitch
  },
  data() {
    return {
       data: [
        { titles: "动态方面", checked: true },
        { titles: "提前上传作品等待时间", checked: true },
        { titles: "私信聊天展示联想聊天包", checked: true },
      ]
    };
  }
  // methods: {
  //   showPopup() {
  //     this.show = true;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 49px);
}
</style>