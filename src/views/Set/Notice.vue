<template>
  <div class="page notice">
    <VSwitch v-for="(item,index) in data" :key="index" :items="item" />
  </div>
</template>

<script>
import VSwitch from "../../components/switch.vue";
export default {
  components: { VSwitch },
  name: "Notice",
  data() {
    return {
      data: [
        { titles: "赞", checked: true },
        { titles: "评论", checked: true },
        { titles: "新粉丝", checked: true },
        { titles: "@我", checked: true },
        { titles: "私信通知", checked: true },
        { titles: "好友发布动态", checked: true }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 49px);
}
</style>