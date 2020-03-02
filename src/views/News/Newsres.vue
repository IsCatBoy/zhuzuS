<template>
  <div class="page Newsresz">
    <Giveup v-for="(item, index) in data" :key="index" :itemdata="item" :ids="ids"></Giveup>
  </div>
</template>
<script>
import Giveup from "../../components/News/Giveup";
import { mapState } from "vuex";
export default {
  name: "Newsres",
  data() {
    return {
      ids: 0,
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
        },
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
        },
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
  computed: {
    ...mapState(["UserInfoData"])
  },
  mounted() {
    if (this.$route.params.title == "点赞") {
      this.ids = 1;
    } else if (this.$route.params.title == "评论") {
      this.ids = 2;
    } else if (this.$route.params.title == "关注") {
      this.ids = 3;
    } else if (this.$route.params.title == "私信") {
      this.ids = 4;
      this.$axios
        .get(`/fuwu/cahts/getchats?id=${this.UserInfoData.user_id}`)
        .then(data => {
          console.log(data.data.data);
          let datas = [];
          for (const item of data.data.data) {
            let a = {
              tousrc: require("../../assets/giveuppage/touer@3x.png"),
              name: item.user_id,
              type: "赞了你的动态",
              time: "14:35",
              taisrc: require("../../assets/giveuppage/tuyi@3x.png"),
              id: item.user_id
            };
            datas.push(a);
          }
          this.data = datas;
          console.log(this.data);
        });
    } else {
      this.ids = 0;
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
