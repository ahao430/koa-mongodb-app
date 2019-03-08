import * as api from '../api/index.js';
import * as types from './mutationTypes';

// login
export const login = ({ commit }, params) => {
  commit(types.LOGIN);
  return api.login(params)
    .then(res => {
      commit(types.LOGIN_SUCCESS);
      commit(types.SET_ADMIN, res.data.admin);
    })
    .catch(() => {
      commit(types.LOGIN_FAIL);
    });
};
export const logout = ({ commit }, params) => {
  commit(types.LOGOUT);
  return api.logout(params)
    .then(res => {
      commit(types.LOGOUT_SUCCESS, res);
    })
    .catch(() => {
      commit(types.LOGOUT_FAIL);
    });
};

// admin

// user
export const getUserList = ({ commit }, params) => {
  commit(types.REQUEST_USER_LIST);
  return api.getUserList(params)
    .then(res => {
      commit(types.REQUEST_USER_LIST_SUCCESS, res.data);
    })
    .catch(() => {
      commit(types.REQUEST_USER_LIST_FAIL);
    });
};
export const getUser = ({ commit }, params) => {
  commit(types.REQUEST_USER);
  return api.getUser(params)
    .then(res => {
      commit(types.REQUEST_USER_SUCCESS, res.data);
    })
    .catch(() => {
      commit(types.REQUEST_USER_FAIL);
    });
};
export const addUser = ({ commit }, params) => {
  commit(types.ADD_USER);
  return api.addUser(params)
    .then(res => {
      commit(types.ADD_USER_SUCCESS);
    })
    .catch(() => {
      commit(types.ADD_USER_FAIL);
    });
};
export const updateUser = ({ commit }, params) => {
  commit(types.UPDATE_USER);
  return api.updateUser(params)
    .then(res => {
      commit(types.UPDATE_USER_SUCCESS);
    })
    .catch(() => {
      commit(types.UPDATE_USER_FAIL);
    });
};
export const delUser = ({ commit, dispatch }, params) => {
  commit(types.DELETE_USER);
  return api.delUser(params)
    .then(res => {
      commit(types.DELETE_USER_SUCCESS);
      dispatch('getUserList');
    })
    .catch(() => {
      commit(types.DELETE_USER_FAIL);
    });
};

// article
export const getArticleList = ({ commit }, params) => {
  commit(types.REQUEST_ARTICLE_LIST);
  return api.getArticleList(params)
    .then(res => {
      commit(types.REQUEST_ARTICLE_LIST_SUCCESS, res.data);
    })
    .catch(() => {
      commit(types.REQUEST_ARTICLE_LIST_FAIL);
    });
};
export const getArticle = ({ commit }, params) => {
  commit(types.REQUEST_ARTICLE);
  return api.getArticle(params)
    .then(res => {
      commit(types.REQUEST_ARTICLE_SUCCESS, res.data);
    })
    .catch(() => {
      commit(types.REQUEST_ARTICLE_FAIL);
    });
};
export const addArticle = ({ commit }, params) => {
  commit(types.ADD_ARTICLE);
  return api.addArticle(params)
    .then(res => {
      commit(types.ADD_ARTICLE_SUCCESS);
    })
    .catch(() => {
      commit(types.ADD_ARTICLE_FAIL);
    });
};
export const updateArticle = ({ commit }, params) => {
  commit(types.UPDATE_ARTICLE);
  return api.updateArticle(params)
    .then(res => {
      commit(types.UPDATE_ARTICLE_SUCCESS);
    })
    .catch(() => {
      commit(types.UPDATE_ARTICLE_FAIL);
    });
};
export const delArticle = ({ commit, dispatch }, params) => {
  commit(types.DELETE_ARTICLE);
  return api.delArticle(params)
    .then(res => {
      commit(types.DELETE_ARTICLE_SUCCESS);
      dispatch('getArticleList');
    })
    .catch(() => {
      commit(types.DELETE_ARTICLE_FAIL);
    });
};
