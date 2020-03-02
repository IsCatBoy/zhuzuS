import {
  MUTAT_NEWSFILELIST,
  MUTAT_NEWSTITLE,
  MUTAT_NewsContent,
  MUTAT_NewsTheme,
  MUTAT_NewsPosition,
  MUTAT_NewsSynBtn,
  MUTAT_NewsSaveBtn,
  MUTAT_NewsArticletype,
  MUTAT_NewsKeyflag
} from "./ReleaseType";
export default {
  state: {
    //发布信息
    //图片文件
    NewsfileList: [],
    NewsTitle: null,
    NewsContent: null,
    NewsTheme: null,
    NewsPosition: null,
    NewsArticletype: 1,
    NewsSynBtn: true,
    NewsSaveBtn: false,
    NewsKeyflag: true,
    actions: [
      { name: "穿搭", type: 1 },
      { name: "彩妆", type: 2 },
      { name: "美甲", type: 3 },
      { name: "旅游", type: 4 },
      { name: "摄影", type: 5 },
      { name: "美食", type: 6 }
    ]
  },
  mutations: {
    [MUTAT_NEWSFILELIST](state, payload) {
      state.NewsfileList = payload;
    },
    [MUTAT_NEWSTITLE](state, payload) {
      state.NewsTitle = payload;
    },
    [MUTAT_NewsContent](state, payload) {
      state.NewsContent = payload;
    },
    [MUTAT_NewsTheme](state, payload) {
      state.NewsTheme = payload;
    },
    [MUTAT_NewsPosition](state, payload) {
      state.NewsPosition = payload;
    },
    [MUTAT_NewsArticletype](state, payload) {
      state.NewsArticletype = payload;
    },
    [MUTAT_NewsSynBtn](state, payload) {
      state.NewsSynBtn = payload;
    },
    [MUTAT_NewsSaveBtn](state, payload) {
      state.NewsSaveBtn = payload;
    },
    [MUTAT_NewsKeyflag](state, payload) {
      state.NewsKeyflag = payload;
    }
  },
  actions: {
    // {commit, state, getters} = context;

    action_NewsfileList(context, payload) {
      context.commit(MUTAT_NEWSFILELIST, payload);
    },
    //修改标题
    action_NewsTitle(context, payload) {
      context.commit(MUTAT_NEWSTITLE, payload);
    },
    action_NewsContent(context, payload) {
      context.commit(MUTAT_NewsContent, payload);
    },
    action_NewsTheme(context, payload) {
      context.commit(MUTAT_NewsTheme, payload);
    },
    action_NewsPositione(context, payload) {
      context.commit(MUTAT_NewsPosition, payload);
    },
    action_NewsSynBtn(context, payload) {
      context.commit(MUTAT_NewsSynBtn, payload);
    },
    action_NewsSaveBtn(context, payload) {
      context.commit(MUTAT_NewsSaveBtn, payload);
    },
    action_NewsArticletype(context, payload) {
      context.commit(MUTAT_NewsArticletype, payload);
    },
    action_NewsKeyflag(context, payload) {
      context.commit(MUTAT_NewsKeyflag, payload);
    }
  },
  getters: {
    NewsPositions: state => {
      if (state.NewsPosition == null) {
        return "你的位置";
      } else return state.NewsPosition;
    },
    NewsThemes: state => {
      if (state.NewsTheme == null) {
        return "添加主题";
      } else return state.NewsTheme;
    },
    Articletype: stats => {
      //   let actions = [
      //     { name: "穿搭", type: 1 },
      //     { name: "彩妆", type: 2 },
      //     { name: "美甲", type: 3 },
      //     { name: "旅游", type: 4 },
      //     { name: "摄影", type: 5 },
      //     { name: "美食", type: 6 }
      //   ];
      for (const item of stats.actions) {
        if (item.type == stats.NewsArticletype) {
          return item.name;
        }
      }
    }
  }
};
