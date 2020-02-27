<template>
  <div class="page privacy">
      <VSwitch v-for="(item,index) in data" :key="index" :items="item" />
  </div>
</template>

<script>
import VSwitch from "../../components/switch.vue";
export default {
  components: { VSwitch },
  name: "Privacy",
  data() {
    return {
      data: [
        { titles: "允许向往推荐通讯好友", checked: true },
        { titles: "允许把我推荐给其他好友", checked: true }
      ]
    };
  },
 
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 49px);
}
</style>