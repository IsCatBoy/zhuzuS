<template>
  <div class="page RelSearch">
    <form action="/">
      <van-search
        shape="round"
        v-model="value"
        show-action
        :placeholder="Ttext"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="xiaoxi">
      <div class="noxian" @click="backnull('')">不显示位置</div>
      <van-list v-model="loading" :finished="finished" finished-text="已经到底了" @load="onLoad">
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
          @click="backnull(item.title)"
        />
      </van-list>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

// import { Toast } from "vant";
export default {
  name: "RelSearch",
  data() {
    return {
      Ttexts: this.$route.params.id,
      value: "",
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      region: "成都市",
      pageindex: 1,
      pageconut: 0
    };
  },
  computed: {
    ...mapState(["ReleaseData"]),
    Ttext: function() {
      if (this.Ttexts == 1) {
        return "搜索主题";
      } else {
        return "搜索地址";
      }
    }
  },
  watch: {
    value(val) {
      let a = val;
      if (a == "") {
        a = this.region;
      }
      this.sousuo(a);
    }
  },
  created() {
    // this.onLoad();
    // let that = this;
    console.log(this.$route.params.id);
    if (this.Ttexts == 1) {
      //   return "搜索主题";
    } else {
      //   let url = `/api/suggestion?key=d84d6d83e0e51e481e50454ccbe8986b&boundary=region(${this.region})&keyword=${this.region}&page_size=20&page_index=${this.pageindex}`;
      //   this.$axios.get(url).then(data => {
      //     that.pageconut = data.data.count;
      //     console.log(data.data);
      //   });
      //   this.onLoad();
    }
  },
  methods: {
    ...mapActions(["action_NewsTheme"]),
    ...mapActions(["action_NewsPositione"]),

    //选完返回
    backnull(a) {
      if (this.Ttexts == 1) {
        this.action_NewsTheme(a);
      }
      if (this.Ttexts == 2) {
        console.log(a);
        this.action_NewsPositione(a);
      }
      console.log(this.ReleaseData);
      this.$router.go(-1);
    },
    //收缩事件
    onSearch(val) {
      console.log(val);
      //   this.sousuo(val);
    },
    //关闭搜索事件
    onCancel() {
      this.$router.go(-1);
    },
    //
    sousuo(a) {
      this.pageindex = 1;
      let that = this;
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      let url = `/api/suggestion?key=d84d6d83e0e51e481e50454ccbe8986b&boundary=region(${this.region})&keyword=${a}&page_size=20&page_index=${this.pageindex}`;
      this.$axios.get(url).then(data => {
        that.pageconut = data.data.count;
        console.log(data.data.data);
        that.list = data.data.data;
        // that.list.push(data.data.data);
        this.loading = false;
        if (this.list.length >= this.pageconut) {
          this.finished = true;
        }
      });
    },
    onLoad() {
      let that = this;
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      let url = `/api/suggestion?key=d84d6d83e0e51e481e50454ccbe8986b&boundary=region(${this.region})&keyword=${this.region}&page_size=20&page_index=${this.pageindex}`;
      this.$axios.get(url).then(data => {
        that.pageconut = data.data.count;
        console.log(data.data.data);
        that.list = [...that.list, ...data.data.data];
        // that.list.push(data.data.data);
        console.log(that.list);
        this.pageindex + 1;
        this.loading = false;
        if (this.list.length >= this.pageconut) {
          this.finished = true;
        }
      });

      //   setTimeout(() => {
      //     // for (let i = 0; i < 10; i++) {
      //     //   this.list.push(this.list.length + 1);
      //     // }
      //     // 加载状态结束
      //
      //     // 数据全部加载完成
      //   }, 1000);
    }
  },
  beforeRouteLeave(to, form, next) {
    next();
  }
};
</script>
<style lang="scss" scoped>
.xiaoxi {
  height: calc(100% - 54px);
  overflow: scroll;
}
.noxian {
  font-size: 14px;
  padding: 10px 16px;
}
</style>
