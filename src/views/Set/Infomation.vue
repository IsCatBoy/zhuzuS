<template>
  <div class="page infomation">
    <van-form @submit="onSubmit">
      <!-- 更换头像 -->
      <van-field name="uploader" label="更换头像">
        <template #input>
          <van-uploader v-model="uploader" :rules="[]" :max-count="1" preview-size="110" />
        </template>
      </van-field>
      <!-- 修改用户名 -->
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- 简介 -->
      <van-field
        v-model="introduction"
        name="用户名"
        label="简介"
        placeholder="介绍一下自己吧"
        :rules="[{ required: false, message: '请填写用户名' }]"
      />
      <!-- 选择性别 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="value_sex"
        label="性别"
        placeholder="女"
        @click="showPicker_sex = true"
      />
      <van-popup v-model="showPicker_sex" position="bottom">
        <van-picker
          show-toolbar
          :columns=" sex_list"
          @confirm="onConfirm_sex"
          @cancel="showPicker_sex = false"
        />
      </van-popup>

      <!-- 选择生日 -->
      <van-field
        readonly
        clickable
        name="calendar"
        :value="value_brithday"
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
        :value="value_city"
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
    </van-form>

    <!-- 提交 -->
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </div>
</template>

<script>
import { Field } from "mint-ui";
import { Radio } from "mint-ui";
export default {
  components: { Field },
  name: "Infomation",
  data() {
    return {
      // 简介
      introduction: "这个人很懒，什么都没有写",
      // 昵称
      username: "Modeli",
      //头像地址
      uploader: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      //性别
      value_sex: "",
      sex_list: ["男", "女"],
      showPicker_sex: false,
      //生日
      showCalendar_brithday: false,
      value_brithday: "",
      //城市
      showPicker_city: false,
      value_city: "",
      city_list: ["成都", "重庆", "武汉", "长沙", "深圳", "北京", "石家庄"]
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    // 性别设置
    onConfirm_sex(value_sex) {
      this.value_sex = value_sex;
      this.showPicker_sex = false;
    },
    //生日
    onConfirm_brithday(date) {
      this.value_brithday = `${date.getYear() + 1900}-${date.getMonth() +
        1}-${date.getDate()}`;
      this.showCalendar_brithday = false;
    },
    //城市
    onConfirm_city(value_city) {
      this.value_city = value_city;
      this.showPicker_city = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100% - 64px);
}
</style>