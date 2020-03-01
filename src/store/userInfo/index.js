import {
  MUTAT_USERINFO,
  MUTAT_NICKNAME,
  MUTAT_REMARK,
  MUTAT_SEX,
  MUTAT_BIRTHDAY,
  MUTAT_PROFILE,
  MUTAT_REGION
} from "./userInfoType";
export default {
  state: {
    user_id: null,
    username: null,
    nickname: null,
    password: null,
    phone_no: null,
    sex: null,
    birthday: null,
    remark: null,
    profile: null,
    region_id: null
  },
  mutations: {
    //初始添加信息
    [MUTAT_USERINFO](state, payload) {
      state.user_id = payload.user_id;
      state.username = payload.username;
      state.nickname = payload.nickname;
      state.password = payload.password;
      state.phone_no = payload.phone_no;
      state.sex = payload.sex;
      state.birthday = payload.birthday;
      state.remark = payload.remark;
      state.profile = payload.profile;
      state.region_id = payload.region_id;
    },
    //修改昵称
    [MUTAT_NICKNAME](state, payload) {
      state.nickname = payload;
    },
    //修改描述
    [MUTAT_REMARK](state, payload) {
      state.remark = payload;
    },
    //修改性别
    [MUTAT_SEX](state, payload) {
      state.sex = payload;
    },
    //修改生日
    [MUTAT_BIRTHDAY](state, payload) {
      state.birthday = payload;
    },
    //修改头像
    [MUTAT_PROFILE](state, payload) {
      state.profile = payload;
    },
    //修改地区
    [MUTAT_REGION](state, payload) {
      state.region_id = payload;
    }
  },
  actions: {
    // {commit, state, getters} = context;

    action_userinfo(context, payload) {
      context.commit(MUTAT_USERINFO, payload);
    },
    //修改标题
    action_nickname(context, payload) {
      context.commit(MUTAT_NICKNAME, payload);
    },
    action_remark(context, payload) {
      context.commit(MUTAT_REMARK, payload);
    },
    action_sex(context, payload) {
      context.commit(MUTAT_SEX, payload);
    },
    action_birthday(context, payload) {
      context.commit(MUTAT_BIRTHDAY, payload);
    },
    action_profile(context, payload) {
      context.commit(MUTAT_PROFILE, payload);
    },
    action_region_id(context, payload) {
      context.commit(MUTAT_REGION, payload);
    }
  },
  getters: {
    birthdays: state => {
      console.log(state.birthday);
      let bir = new Date(state.birthday);
      return state.birthday == null
        ? null
        : `${bir.getFullYear()}-${bir.getMonth() + 1}-${bir.getDate()}`;
    }
  }
};
