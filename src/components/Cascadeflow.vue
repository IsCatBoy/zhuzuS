<template>
  <div class="friend_moments">
    <div class="water">
      <div class="piping" ref="pipingone">
        <MineShare
          class="card"
          v-for="(item, index) in list1"
          :key="index"
          :shareImg="item.shareImg"
          :shareComment="item.shareComment"
          :userPhoto="item.userPhoto"
          :userName="item.userName"
          :good="item.good"
          :like="item.like"
        ></MineShare>
      </div>
      <div class="piping" ref="pipingtwo">
        <MineShare
          class="card"
          v-for="(item, index) in list2"
          :key="index"
          :shareImg="item.shareImg"
          :shareComment="item.shareComment"
          :userPhoto="item.userPhoto"
          :userName="item.userName"
          :good="item.good"
          :like="item.like"
        ></MineShare>
      </div>
    </div>
  </div>
</template>
<script>
import MineShare from "../views/Mine/MineChind.vue/MineShare";
export default {
  data() {
    return {
      imgs: require("../assets/indexPage/tou1@3x.png"),
      imgss: require("../assets/IMGS/zan.png"),
      moments: [
        require("../assets/IMGS/IMG_1318.jpg"),
        require("../assets/IMGS/IMG_1315.jpg"),
        require("../assets/IMGS/IMG_1312.jpg"),
        require("../assets/IMGS/IMG_1320.jpg"),
        require("../assets/IMGS/IMG_1314.jpg"),
        require("../assets/IMGS/IMG_1311.jpg"),
        require("../assets/IMGS/IMG_1316.jpg"),
        require("../assets/IMGS/IMG_1317.jpg"),
        require("../assets/IMGS/IMG_1310.jpg"),
        require("../assets/IMGS/IMG_1313.jpg"),
        require("../assets/IMGS/IMG_1319.jpg"),
        require("../assets/IMGS/IMG_1321.jpg"),
        require("../assets/IMGS/IMG_1322.jpg"),
        require("../assets/IMGS/IMG_1323.jpg"),
        require("../assets/IMGS/IMG_1324.jpg"),
        require("../assets/IMGS/IMG_1325.jpg"),
        require("../assets/IMGS/IMG_1326.jpg"),
        require("../assets/IMGS/IMG_1327.jpg"),
        require("../assets/IMGS/IMG_1328.jpg"),
        require("../assets/IMGS/IMG_1329.jpg"),
        require("../assets/IMGS/IMG_1330.jpg"),
        require("../assets/IMGS/IMG_1331.jpg"),
        require("../assets/IMGS/IMG_1332.jpg"),
        require("../assets/IMGS/IMG_1333.jpg"),
        require("../assets/IMGS/IMG_1334.jpg"),
        require("../assets/IMGS/IMG_1335.jpg"),
        require("../assets/IMGS/IMG_1336.jpg"),
        require("../assets/IMGS/IMG_1337.jpg"),
        require("../assets/IMGS/IMG_1338.jpg"),
        require("../assets/IMGS/IMG_1339.jpg"),
        require("../assets/IMGS/IMG_1340.jpg")
      ],
      available: 1,
      height1: 0,
      height2: 0,
      height3: 0,
      page: 1,
      list1: [],
      list2: []
    };
  },
  components: {
    MineShare
  },
  created() {
    // 获取第一页数据
    this.fetchMoments();
    window.addEventListener("scroll", this.scrollHandle, true);
  },
  mounted() {
    // 用来监听滚轮
  },
  methods: {
    fetchMoments() {
      console.log("asdsa");
      // 请求接口方法
      // fetch("./jsonas.json")
      //   .then(res => res.json())
      //   .then(res => {
      //     this.moments = res.data;
      //     // 分配数据到指定管道
      //     this.sort(0);
      //   });
      this.sort(0);
    },
    // sort()函数是递归的，因为要确保每个卡片的图片加载完成后再获取管道的高度，但是图片加载完成的函数是个异步函数，
    // 如果放在for循环中会打乱顺序，因此要使异步函数同步执行，for循环改为递归。
    sort(j) {
      if (j < this.moments.length) {
        let that = this;
        // 创建Image类
        var newImg = new Image();
        // 获取要加载的图片地址
        newImg.src = this.moments[j];

        // 图片加载完成后（异步）
        newImg.onload = newImg.imgArr = e => {
          // 四个管道的高度
          var arr = [
            that.$refs.pipingone.offsetHeight,
            that.$refs.pipingtwo.offsetHeight
          ];
          //获取管道最小高度
          var min = arr.indexOf(Math.min.apply(Math, arr));
          // 添加卡片的模板
          // var html =
          //   `<div class="card">
          //       <img src=` +
          //   newImg.src +
          //   `>
          //       <div>
          //         <img src="http://lanyue.ink:8123/images/avatar.jpg" alt="">
          //         <div>` +
          //   this.moments[j].id +
          //   "  " +
          //   this.moments[j].content +
          //   `</div>
          //       </div>
          //   </div>`;
          //给最小的管道添加卡片
          let a = {
            shareImg: this.moments[j],
            shareComment: "慢生活",
            userPhoto: require("../assets/minePage/HeadONE.pic@3x.png"),
            userName: "CNU",
            good: 520,
            like: require("../assets/minePage/liked@3x.png")
          };
          if (min == 0) {
            this.list1.push(a);
          } else if (min == 1) {
            this.list2.push(a);
          }
          that.sort(j + 1);
        };
      }
    },
    scrollHandle() {
      // 获取页面页面的滚动高度
      this.height2 = document.getElementsByClassName("page")[0].scrollHeight;
      this.height1 = document.getElementsByClassName("page")[0].scrollTop;
      this.height3 = document.getElementsByClassName("page")[0].clientHeight;
      // 如果滚动到最低（这里设置离最底还有100距离才触发函数）
      // available条件是为了防止触底时一直不断地请求。因此，请求一次后available设为0，直到滚动到离底部超过100距离（即数据加载玩后）才设为1
      if (this.height3 + this.height1 >= this.height2 - 100 && this.available) {
        //请求下一页
        this.page++;
        this.available = 0;
        let asd = this.moments;
        console.log(asd);
        // let that = this;
        // fetch("./jsonas.json")
        //   .then(res => res.json())
        //   .then(res => {
        //     that.moments = res.data;
        //     if (that.moments[0]) {
        //       that.sort(0);
        //     } else {
        //       that.page--;
        //     }
        //   });
        if (this.list1.length + this.list2.length < 100) {
          this.moments = [...asd, ...asd];
          this.sort(0);
        }
      } else if (this.height3 + this.height1 < this.height2 - 100) {
        this.available = 1;
      }
    }
  },
  destroyed() {
    // 页面卸载时移除监听事件
    window.removeEventListener("scroll", this.scrollhandle, true);
  }
};
</script>
<style lang="scss">
.friend_moments {
  width: 100%;
  display: flex;
  justify-content: center;
}
// .a {
//   position: fixed;
//   width: 200px;
//   top: 200px;
//   right: 100px;
//   z-index: 10;
//   background: #eee;
// }
.water {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  .piping {
    width: 50%;
    // padding: 10px;
    padding-bottom: 0px;
  }
}
.card {
  width: 100%;
  border-radius: 4px;
  // box-shadow: 0px 0px 5px #888888;
  margin-bottom: 20px;
  img:first-child {
    width: 100%;
    border-radius: 4px;
  }
  .texts {
    padding: 0 0.03rem;
    .Textcontent {
      line-height: 1em;
      padding: 0.04rem 0;
      .biaoqian {
        font-size: 0.75em;
        font-weight: 600;
      }
    }
    .Personal {
      // height: 0.18rem;
      font-size: 0.65em;
      color: #5d5d5d;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .flexs {
        display: flex;
        align-items: center;
        &:nth-child(1) {
          img {
            width: 0.2rem;
          }
        }
        &:nth-child(2) {
          img {
            width: 0.1rem;
          }
        }
        .name {
          margin-left: 0.055rem;
        }
        .num {
          margin-right: 0.1rem;
        }
      }
    }
  }
  // > div:nth-child(2) {
  //   display: flex;
  //   align-items: center;
  //   padding: 10px;
  //   > img {
  //     border-radius: 100%;
  //     width: 32px;
  //     height: 32px;
  //     margin-right: 10px;
  //   }
  // }
}
</style>
