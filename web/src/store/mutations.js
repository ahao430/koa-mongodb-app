import * as types from './mutationTypes';

export default {
  // sidebar
  [types.SET_CUR_SIDEBAR_INDEX] (state, data) {
    state.curSidebarIndex = data;
  },
  [types.TOGGLE_SIDEBAR] (state) {
    state.isSidebarOpen = !state.isSidebarOpen;
  },
  // login
  [types.LOGIN] (state) {
    state.isLoginRequesting = true;
  },
  [types.LOGIN_SUCCESS] (state, data) {
    state.isLoginRequesting = false;
    state.isLogin = true;
  },
  [types.LOGIN_FAIL] (state) {
    state.isLoginRequesting = false;
  },
  [types.LOGOUT] (state) {
    state.isLogoutRequesting = false;
  },
  [types.LOGOUT_SUCCESS] (state) {
    state.isLogoutRequesting = false;
    state.isLogin = false;
  },
  [types.LOGOUT_FAIL] (state) {
    state.isLogoutRequesting = false;
  },
  // admin
  [types.REQUEST_ADMIN] (state) {
    state.isAdminRequesting = true;
  },
  [types.REQUEST_ADMIN_SUCCESS] (state, data) {
    state.isAdminRequesting = false;
    state.admin = data;
  },
  [types.REQUEST_ADMIN_FAIL] (state) {
    state.isAdminRequesting = false;
  },
  [types.UPDATE_ADMIN] (state) {
    state.isAdminUpdating = true;
  },
  [types.UPDATE_ADMIN_SUCCESS] (state, data) {
    state.isAdminUpdating = false;
  },
  [types.UPDATE_ADMIN_FAIL] (state) {
    state.isAdminUpdating = false;
  },
  [types.SET_ADMIN] (state, data) {
    console.log(data);
    state.admin = data;
  },
  // user
  [types.REQUEST_USER] (state) {
    state.isUserRequesting = true;
  },
  [types.REQUEST_USER_SUCCESS] (state, data) {
    state.isUserRequesting = false;
    state.user = data;
  },
  [types.REQUEST_USER_FAIL] (state) {
    state.isUserRequesting = false;
  },
  [types.REQUEST_USER_LIST] (state) {
    state.isUserRequesting = true;
  },
  [types.REQUEST_USER_LIST_SUCCESS] (state, data) {
    state.isUserListRequesting = false;
    state.userList = data.users;
    state.userTotal = data.total;
  },
  [types.REQUEST_USER_LIST_FAIL] (state) {
    state.isUserListRequesting = false;
  },
  [types.UPDATE_USER] (state) {
    state.isUserUpdating = true;
  },
  [types.UPDATE_USER_SUCCESS] (state, data) {
    state.isUserUpdating = false;
  },
  [types.UPDATE_USER_FAIL] (state) {
    state.isUserUpdating = false;
  },
  [types.ADD_USER] (state) {
    state.isUserAdding = true;
  },
  [types.ADD_USER_SUCCESS] (state, data) {
    state.isUserAdding = false;
  },
  [types.ADD_USER_FAIL] (state) {
    state.isUserAdding = false;
  },
  [types.DELETE_USER] (state) {
    state.isUserDeleting = true;
  },
  [types.DELETE_USER_SUCCESS] (state, data) {
    state.isUserDeleting = false;
  },
  [types.DELETE_USER_FAIL] (state) {
    state.isUserDeleting = false;
  },
  [types.SET_USER_PAGE_NO] (state, data) {
    state.userPageNo = data;
  },
  [types.SET_USER_PAGE_SIZE] (state, data) {
    state.userPageSize = data;
  },
  [types.SET_USER_ID] (state, data) {
    state.userId = data;
  },
  [types.SET_USER] (state, data) {
    state.user = data;
  },
  // article
  [types.REQUEST_ARTICLE] (state) {
    state.isArticleERequesting = true;
  },
  [types.REQUEST_ARTICLE_SUCCESS] (state, data) {
    state.isArticleERequesting = false;
    state.article = data;
  },
  [types.REQUEST_ARTICLE_FAIL] (state) {
    state.isArticleERequesting = false;
  },
  [types.REQUEST_ARTICLE_LIST] (state) {
    state.isArticleERequesting = true;
  },
  [types.REQUEST_ARTICLE_LIST_SUCCESS] (state, data) {
    state.isArticleEListRequesting = false;
    state.articleList = data.articles;
    state.articleTotal = data.total;
  },
  [types.REQUEST_ARTICLE_LIST_FAIL] (state) {
    state.isArticleEListRequesting = false;
  },
  [types.UPDATE_ARTICLE] (state) {
    state.isArticleEUpdating = true;
  },
  [types.UPDATE_ARTICLE_SUCCESS] (state, data) {
    state.isArticleEUpdating = false;
  },
  [types.UPDATE_ARTICLE_FAIL] (state) {
    state.isArticleEUpdating = false;
  },
  [types.ADD_ARTICLE] (state) {
    state.isArticleEAdding = true;
  },
  [types.ADD_ARTICLE_SUCCESS] (state, data) {
    state.isArticleEAdding = false;
  },
  [types.ADD_ARTICLE_FAIL] (state) {
    state.isArticleEAdding = false;
  },
  [types.DELETE_ARTICLE] (state) {
    state.isArticleEDeleting = true;
  },
  [types.DELETE_ARTICLE_SUCCESS] (state, data) {
    state.isArticleEDeleting = false;
  },
  [types.DELETE_ARTICLE_FAIL] (state) {
    state.isArticleEDeleting = false;
  },
  [types.SET_ARTICLE_PAGE_NO] (state, data) {
    state.articlePageNo = data;
  },
  [types.SET_ARTICLE_PAGE_SIZE] (state, data) {
    state.articlePageSize = data;
  },
  [types.SET_ARTICLE_ID] (state, data) {
    state.articleId = data;
  },
  [types.SET_ARTICLE] (state, data) {
    state.article = data;
  },
};
