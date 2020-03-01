<template>
  <div class="page infomation">
    <van-form>
      <!-- 更换头像 -->
      <van-field name="profile" label="更换头像">
        <template #input>
          <van-uploader v-model="profile" :rules="[]" :max-count="1" preview-size="110" />
        </template>
      </van-field>
      <!-- 修改用户名 -->
      <van-field v-model="nickname" name="nickname" label="用户名" placeholder="用户名" />
      <!-- :rules="[{ required: true, message: '请填写用户名' }]" -->
      <!-- 简介 -->
      <van-field
        v-model="remark"
        name="remark"
        label="简介"
        placeholder="介绍一下自己吧"
        :rules="[{ required: false, message: '请填写用户名' }]"
      />
      <!-- 选择性别 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="sex"
        label="性别"
        placeholder="女"
        @click="showPicker_sex = true"
      />
      <van-popup v-model="showPicker_sex" position="bottom">
        <van-picker
          show-toolbar
          :columns="sex_list"
          @confirm="onConfirm_sex"
          @cancel="showPicker_sex = false"
        />
      </van-popup>

      <!-- 选择生日 -->
      <van-field
        readonly
        clickable
        name="calendar"
        :value="birthday"
        label="生日"
        placeholder="点击选择日期"
        @click="showCalendar_brithday = true"
      />
      <van-calendar v-model="showCalendar_brithday" @confirm="onConfirm_brithday" />

      <!-- 选择城市 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="region_name"
        label="城市"
        placeholder="成都"
        @click="showPicker_city = true"
      />
      <van-popup v-model="showPicker_city" position="bottom">
        <van-picker
          show-toolbar
          :columns="city_list"
          @confirm="onConfirm_city"
          @cancel="showPicker_city = false"
        />
      </van-popup>

      <!-- 提交 -->
      <div style="margin: 16px;">
        <van-button round block type="info" @click="onSubmit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Field } from "mint-ui";
import { Radio } from "mint-ui";
import { mapState, mapGetters } from "vuex";
import { Toast } from "vant";
import { Dialog } from "vant";
export default {
  components: { Field },
  name: "Infomation",
  data() {
    return {
      istui: true,
      // postImgApi: "/fuwu/updata",
      // 简介
      remark: this.$store.state.UserInfoData.remark,
      // 昵称
      nickname: this.$store.state.UserInfoData.nickname,
      //头像地址
      profile: [
        {
          url:
            this.$store.state.UserInfoData.profile === null
              ? `http://175.24.82.120:8888/touxiang/IMG_1319.jpg`
              : this.$store.state.UserInfoData.profile
        }
      ],
      //性别
      sex:
        this.$store.state.UserInfoData.sex === 1
          ? "男"
          : this.$store.state.UserInfoData.sex === 2
          ? "女"
          : "",
      sex_list: ["男", "女"],
      showPicker_sex: false,
      //生日
      showCalendar_brithday: false,
      birthday: null,
      //城市
      showPicker_city: false,
      region_name: null,
      region_id: this.$store.state.UserInfoData.region_id,
      city_list: null,
      city_lists: null
    };
  },
  watch: {
    profile(val) {
      console.log(val);
      this.istui = true;
      // if (val.length == 0) {
      //   this.profile = [
      //     { url: `http://175.24.82.120:8888/touxiang/IMG_1319.jpg` }
      //   ];
      // }
    }
  },
  computed: {
    ...mapState(["UserInfoData"]),
    ...mapGetters(["birthdays"])
  },
  created() {
    this.birthday = this.birthdays;
    // console.log(this.profile);
    // console.log(this.UserInfoData);
    let getcity = new Promise((res, req) => {
      this.$axios.get("/fuwu/getregion").then(data => {
        // console.log(data.data);
        let act = data.data.data;
        this.city_lists = act;
        this.city_list = act.map((item, index) => {
          // console.log(item.region_name);
          return `${item.region_name}`;
        });
        res();
      });
    });
    getcity.then(() => {
      // console.log(this.city_list);
      for (var itemcitys of this.city_lists) {
        if (itemcitys.region_id == this.region_id) {
          this.region_name = itemcitys.region_name;
          break;
        }
      }
      // console.log(this.region_name);
      // console.log(this.region_id);
    });
  },
  methods: {
    onSubmit(values) {
      let that = this;
      let data = new FormData();
      function pandaunnickname() {
        if (
          that.nickname === undefined ||
          that.nickname === null ||
          !that.nickname.trim()
        ) {
          Toast("用户名不得为空");
        } else {
          data.append("user_id", that.UserInfoData.user_id); //id;
          data.append(
            "sex",
            that.sex === "男" ? 1 : that.sex === "女" ? 2 : null
          ); //性别
          data.append("remark", that.remark); //简介
          data.append("nickname", that.nickname); //名称
          data.append("region_id", that.region_id); //城市
          data.append("birthday", that.birthday); //名称
          let config = {
            // "application/x-www-form-urlencoded"
            "Content-Type": "application/x-www-form-urlencoded",
            authorization: localStorage.getItem("userToken")
          };
          that
            .$axios({
              method: "POST",
              url: "/fuwu/updata",
              data: data,
              headers: config
            })
            .then(res => {
              if (res.data.code == 200) {
                Toast.success("上传成功");
              } else {
                Toast.fail("上传失败");
              }
              console.log(res);
            })
            .catch(res => {
              console.log(res);
            });
        }
      }
      function beforeClose(action, done) {
        if (action === "confirm") {
          // setTimeout(done, 1000);
          that.istui = false;
          done();
        } else {
          setTimeout(() => {
            that.profile = [
              { url: `http://175.24.82.120:8888/touxiang/IMG_1319.jpg` }
            ];
            that.istui = true;
            done();
          }, 1000);
        }
      }
      if (this.profile.length <= 0) {
        Dialog.confirm({
          title: "没头像吗？",
          message: "是否选用系统通奸头像",
          confirmButtonText: "自己选",
          cancelButtonText: "选择推荐",
          beforeClose
        })
          .then(data => {
            console.log(data);
          })
          .catch(data => {
            console.log(data);
          });
      }
      if (that.profile.length > 0) {
        if (that.profile[0].url) {
          data.append("profile", that.profile[0].url);
          console.log("tuijain" + that.profile);
        } else {
          data.append("profile", that.profile[0].file);
          console.log("notuiamn" + that.profile);
        } //图片
        pandaunnickname();
      }
    },
    // 性别设置
    onConfirm_sex(sex) {
      this.sex = sex;
      this.showPicker_sex = false;
    },
    //生日
    onConfirm_brithday(date) {
      this.birthday = `${date.getYear() + 1900}-${date.getMonth() +
        1}-${date.getDate()}`;
      this.showCalendar_brithday = false;
    },
    //城市
    onConfirm_city(region) {
      for (var itemcitys of this.city_lists) {
        if (itemcitys.region_name == region) {
          this.region_id = itemcitys.region_id;
          break;
        }
      }
      this.region_name = region;
      this.showPicker_city = false;
      // console.log(this.region_id);
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 64px);
}
</style>