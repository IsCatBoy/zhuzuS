import { MUTAT_ContentData, MUTAT_ContentDataOne } from "./contdataType";
export default {
  state: {
    //图片文件
    CAS: 12,
    ContentData: [],
    ContentDataOne: [],
    ContentDataTwo: [],
    ContentDataThree: [],
    ContentDataFour: [],
    ContentDataFive: [],
    ContentDataSix: []
  },
  mutations: {
    //获取页面信息
    [MUTAT_ContentData](state, payload) {
      state.ContentData = payload;
    },
    [MUTAT_ContentDataOne](state, payload) {
      state.ContentDataOne = payload;
    }
  },
  actions: {
    // {commit, state, getters} = context;
    action_ContentData(context, payload) {
      context.commit(MUTAT_ContentData, payload);
    },
    action_ContentDataOne(context, payload) {
      context.commit(MUTAT_ContentDataOne, payload);
    }
  },
  getters: {
    yizhu: state => {
      let xi = [];
      let tmpArr = [];
      for (const item of state.ContentData) {
        if (!tmpArr.includes(item.nickname)) {
          tmpArr.push(item.nickname);
          xi.push({
            name: item.nickname,
            imgs: [],
            img: item.photo.split(",")[0],
            touimg: item.profile
          });
        }
      }
      for (const item of state.ContentData) {
        for (const it of xi) {
          if (it.name == item.nickname) {
            it.imgs.push(item);
          }
        }
      }
      console.log(xi);
      return xi;
    }
  }
};
