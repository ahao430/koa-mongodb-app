import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 当前侧边栏index
    curSidebarIndex: '0',
    isSidebarOpen: true,
    // 登录
    isLogin: false,
    isLoginRequesting: false,
    isLogoutRequesting: false,
    // 管理员信息
    isAdminRequesting: false,
    isAdminUpdating: false,
    admin: {},
    // 用户
    userPageNo: 1,
    userPageSize: 10,
    userTotal: 0,
    userList: [],
    isUserAdding: false,
    isUserRequesting: false,
    isUserUpdating: false,
    isUserDeling: false,
    userId: '',
    user: {},
    isUserListRequesting: false,
    // 文章
    articlePageNo: 1,
    articlePageSize: 10,
    articleTotal: 0,
    articleList: [],
    isArticleAdding: false,
    isArticleRequesting: false,
    isArticleUpdating: false,
    isArticleDeling: false,
    articleId: '',
    article: {},
    isArticleListRequesting: false,

  },
  getters,
  mutations,
  actions,
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});
