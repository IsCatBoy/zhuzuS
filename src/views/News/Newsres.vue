<template>
  <div class="page Newsresz">
    <Giveup v-for="(item, index) in data" :key="index" :itemdata="item"></Giveup>
  </div>
</template>
<script>
import Giveup from "../../components/News/Giveup";
export default {
  name: "Newsres",
  data() {
    return {
      data: [
        {
          tousrc: require("../../assets/giveuppage/touyi@3x.png"),
          name: "Hosic",
          type: "赞了你的动态",
          time: "14:35",
          taisrc: require("../../assets/giveuppage/tuyi@3x.png")
        },
        {
          tousrc: require("../../assets/giveuppage/tousan@3x.png"),
          name: "Hosic",
          type: "赞了你的动态",
          time: "14:35",
          taisrc: require("../../assets/giveuppage/tuyi@3x.png")
        },
        {
          tousrc: require("../../assets/giveuppage/touer@3x.png"),
          name: "Hosic",
          type: "赞了你的动态",
          time: "14:35",
          taisrc: require("../../assets/giveuppage/tuyi@3x.png")
        }
      ]
    };
  },
  watch: {
    $route(route) {
      console.log(route);
    }
  },
  components: {
    Giveup
  }
};
</script>
<style lang="scss" scoped>
.Newsresz {
  padding: 0 0.175rem;
}
</style>
