import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';
import * as types from '../store/mutationTypes';

// defaults
axios.defaults.baseURL = '/';

// axios.defaults.baseURL = 'http://127.0.0.1:5000/';
// axios.defaults.baseURL = 'http://rest.apizza.net/mock/dc9f82d2b73cf12e287057524784601a';

// inteceptors
axios.interceptors.request.use(config => {
  return config;
});
axios.interceptors.response.use(response => {
  switch (response.data.code) {
    case '0000':
      return response.data;
    case '4000':
      Message.error('登录过期！');
      store.dispatch(types.LOGOUT);
      break;
    default:
      Message.error(response.data.data.message);
      return Promise.reject(response.data);
  }
}, err => {
  Message.error('请求失败！');
  return err;
});

// apis
export const login = (data) => axios.post('/api/login/login', data);
export const logout = (params) => axios.get('/api/login/logout', { params });

export const getAdmin = (params) => axios.get('/api/admin', { params });
export const updateAdmin = (data) => axios.update('/api/admin', data);

export const getUserList = (params) => axios.get('/api/user/list', { params });
export const getUser = (params) => axios.get('/api/user', { params });
export const addUser = (data) => axios.post('/api/user', data);
export const updateUser = (data) => axios.put('/api/user', data);
export const delUser = (params) => axios.delete('/api/user', { params });

export const getArticleList = (params) => axios.get('/api/article/list', { params });
export const getArticle = (params) => axios.get('/api/article', { params });
export const addArticle = (data) => axios.post('/api/article', data);
export const updateArticle = (data) => axios.put('/api/article', data);
export const delArticle = (params) => axios.delete('/api/article', { params });
