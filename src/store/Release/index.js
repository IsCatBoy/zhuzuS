import {
    MUTAT_NEWSFILELIST,
    MUTAT_NEWSTITLE,
    MUTAT_NewsContent,
    MUTAT_NewsTheme,
    MUTAT_NewsPosition,
    MUTAT_NewsSynBtn,
    MUTAT_NewsSaveBtn
} from "./ReleaseType";
export default {
    state: {
        //发布信息
        //图片文件
        NewsfileList: [],
        NewsTitle: "",
        NewsContent: "",
        NewsTheme: "",
        NewsPosition: "",
        NewsSynBtn: true,
        NewsSaveBtn: false
    },
    mutations: {
        [MUTAT_NEWSFILELIST](state, payload) {
            
            console.log(payload);
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
        [MUTAT_NewsSynBtn](state, payload) {
            state.NewsSynBtn = payload;
        },
        [MUTAT_NewsSaveBtn](state, payload) {
            state.NewsSaveBtn = payload;
        }
    },
    actions: {
        // {commit, state, getters} = context;
        //修改标题
        action_NewsfileList(context, payload) {

            context.commit(MUTAT_NEWSFILELIST, payload);
        },
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
        }
    },
    getters: {
        NewsPositions: state => {
            if (state.NewsPosition == "") {
                return "你的位置";
            }
            else
                return state.NewsPosition;
        },
        NewsThemes: state => {
            if (state.NewsTheme == "") {
                return "添加主题";
            } else
                return state.NewsTheme;
        }
    }
};
