<template>
  <div class="CopyCascadeflow">
    <van-button type="default">默认按钮</van-button>
    <div class="v-waterfall-content" ref="btn" id="v-waterfall">
      <div
        v-for="(img, index) in waterfallList"
        class="v-waterfall-item"
        :key="index"
        :style="{
          width: waterfallImgWidth + 'px',
          top: img.top + 'px',
          left: img.left + 'px'
        }"
        @click="clickto(index)"
      >
        <img :src="img.src" alt />
        <div class="texts">
          <div class="Textcontent">
            <span class="biaoqian">日本|优雅女人日本|优雅女人日本|优雅女人</span>
          </div>
          <div class="Personal">
            <div class="flexs">
              <img src="../assets/indexPage/tou1@3x.png" alt srcset />
              <span class="name">liwang</span>
            </div>
            <div class="flexs">
              <span class="num">12</span>
              <img src="../assets/IMGS/zan.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CopyCascadeflow",
  data() {
    return {
      fullWidth: document.documentElement.clientWidth,
      waterfallList: [], //存放计算好的数据
      waterfallImgCol: 2, //多少列
      waterfallImgWidth: 100, //每一列的宽度
      waterfallImgRight: 0, //右边距
      waterfallImgBottom: 50, //下边距
      waterfallDeviationHeight: [], //存放瀑布流各个列的高度
      imgList: [],
      imgArr: [
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
      ]
    };
  },
  watch: {
    //监听属性值变化
    fullWidth(val) {
      // console.log(val, this.waterfallImgWidth);
    }
  },
  created() {
    for (let i = 0; i < 100; i++) {
      let a = Math.round(Math.random() * 31);
      this.imgList.push(this.imgArr[a]);
    }
    // console.log(this.imgList);
    //监听屏幕大小变化
    window.addEventListener("resize", this.handleResize);
    // console.log(this.fullWidth, this.waterfallImgWidth);
  },
  mounted() {
    this.handleResize();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy: function() {
    //卸载监听屏幕大小变化
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll(event) {
      console.log(
        document.documentElement.scrollTop,
        window.innerHeight,
        document.body.offsetHeight
      );
      console.log(event);
    },
    //点击事件
    clickto(data) {
      console.log(data);
    },

    //改变屏幕时调用方法计算每个图片的宽度或者是列数
    handleResize() {
      this.fullWidth = this.$refs.btn.offsetWidth;
      // this.fullWidth = document.documentElement.clientWidth;
      // let domWidths = document.getElementById("v-waterfall").offsetWidth;
      this.waterfallImgWidth = this.fullWidth / this.waterfallImgCol;
      // console.log(this.fullWidth, this.waterfallImgWidth);
      //初始化偏移高度数组
      this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
      for (let i = 0; i < this.waterfallDeviationHeight.length; i++) {
        this.waterfallDeviationHeight[i] = 0;
      }
      // console.log(this.waterfallDeviationHeight);
      this.imgPreloading();
    },
    //计算每个图片的宽度或者是列数
    // calculationWidth() {
    //   let domWidth = this.$refs.btn.offsetWidth;
    //   console.log("zhege", domWidth);
    //   this.waterfallImgWidth = domWidth / this.waterfallImgCol;
    //   // if (!this.waterfallImgWidth && this.waterfallImgCol) {
    //   //   this.waterfallImgWidth =
    //   //     (domWidth - this.waterfallImgRight * this.waterfallImgCol) /
    //   //     this.waterfallImgCol;
    //   // } else if (this.waterfallImgWidth && !this.waterfallImgCol) {
    //   //   this.waterfallImgCol = Math.floor(
    //   //     domWidth / (this.waterfallImgWidth + this.waterfallImgRight)
    //   //   );
    //   // }

    //   // console.log(this.waterfallDeviationHeight);
    //   // this.imgPreloading();
    // },
    //图片预加载，获取图片宽度，高度
    imgPreloading() {
      this.imgList.forEach((item, index) => {
        let aImg = new Image();
        aImg.src = this.imgList[index];
        aImg.onload = aImg.imgArr = e => {
          let imgData = {};
          imgData.height = Math.ceil(
            (this.waterfallImgWidth / aImg.width) * aImg.height
          );
          // console.log(this.waterfallImgWidth, aImg.width, aImg.height);
          imgData.src = this.imgList[index];
          this.waterfallList.push(imgData);
          // console.log(imgData);
          this.rankImg(imgData);
        };
      });
      // console.log(this.waterfallList);
    },
    //瀑布流布局
    rankImg(imgData) {
      let {
        waterfallImgWidth,
        waterfallImgRight,
        waterfallImgBottom,
        waterfallDeviationHeight,
        waterfallImgCol
      } = this;
      // //for (let i = 0;i < this.waterfallList.length;i++){
      let minIndex = this.filterMin();
      imgData.top = waterfallDeviationHeight[minIndex];
      imgData.left = minIndex * (waterfallImgRight + waterfallImgWidth);
      waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;
      //}
      // console.log(imgData);
    },
    /**
     * 找到最短的列并返回下标
     * @returns {number} 下标
     */
    filterMin() {
      //找到最小那个数的值
      const min = Math.min.apply(null, this.waterfallDeviationHeight);
      // console.log(min);
      return this.waterfallDeviationHeight.indexOf(min);
    }
  }
  // props: ["waterfallData"]
};
</script>
<style lang="scss" scoped>
$bianju: 0.05rem;
.CopyCascadeflow {
  padding-left: $bianju;
}
.v-waterfall-content {
  width: 100%;
  height: 100%;
  position: relative;
}
.v-waterfall-item {
  float: left;
  position: absolute;
  padding-right: $bianju;
  // padding: 10px 0;
  .texts {
    padding: 0 0.03rem;
    .Textcontent {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.1em;
      .biaoqian {
        font-size: 0.75em;
        font-weight: 600;
      }
    }
    .Personal {
      height: 0.18rem;
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
            height: 0.18rem;
          }
        }
        &:nth-child(2) {
          img {
            height: 0.08rem;
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
}
.v-waterfall-item > img {
  width: 100%;
  border-radius: 0.05rem;
  // height: 100%;
}
</style>
