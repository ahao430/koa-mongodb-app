import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import * as types from '../store/mutationTypes';

const VHeader = () => import('../components/VHeader');
const VSidebar = () => import('../components/VSidebar');

const Login = () => import('../views/Login/Index');

const UserList = () => import('../views/User/UserList');
const UserDetail = () => import('../views/User/UserDetail');
const EditUser = () => import('../views/User/EditUser');

const ArticleList = () => import('../views/Article/ArticleList');
const ArticleDetail = () => import('../views/Article/ArticleDetail');
const EditArticle = () => import('../views/Article/EditArticle');

const Setting = () => import('../views/Setting/Index');

const NotFound = () => import('../views/404');

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      components: {
        VFullpage: Login,
      },
    },
    {
      path: '/user',
      name: 'userList',
      components: {
        VHeader,
        VSidebar,
        VMain: UserList,
      },
      meta: {
        sidebarIndex: 0,
      },
    },
    {
      path: '/user/add',
      name: 'addUser',
      components: {
        VHeader,
        VSidebar,
        VMain: EditUser,
      },
      meta: {
        sidebarIndex: 0,
      },
    },
    {
      path: '/user/detail/:id',
      name: 'userDetail',
      components: {
        VHeader,
        VSidebar,
        VMain: UserDetail,
      },
      meta: {
        sidebarIndex: 0,
      },
    },
    {
      path: '/user/edit/:id',
      name: 'editUser',
      components: {
        VHeader,
        VSidebar,
        VMain: EditUser,
      },
      meta: {
        sidebarIndex: 0,
      },
    },
    {
      path: '/article',
      name: 'articleList',
      components: {
        VHeader,
        VSidebar,
        VMain: ArticleList,
      },
      meta: {
        sidebarIndex: 1,
      },
    },
    {
      path: '/article/add',
      name: 'addArticle',
      components: {
        VHeader,
        VSidebar,
        VMain: EditArticle,
      },
      meta: {
        sidebarIndex: 1,
      },
    },
    {
      path: '/article/detail/:id',
      name: 'articleDetail',
      components: {
        VHeader,
        VSidebar,
        VMain: ArticleDetail,
      },
      meta: {
        sidebarIndex: 1,
      },
    },
    {
      path: '/article/edit/:id',
      name: 'editArticle',
      components: {
        VHeader,
        VSidebar,
        VMain: EditArticle,
      },
      meta: {
        sidebarIndex: 1,
      },
    },

    {
      path: '/setting',
      name: 'setting',
      components: {
        VHeader,
        VSidebar,
        VMain: Setting,
      },
    },
    {
      path: '*',
      name: '404',
      components: {
        VFullpage: NotFound,
      },
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    store.dispatch('logout');
  }
  if (to.meta && to.meta.sidebarIndex != null) {
    store.commit(types.SET_CUR_SIDEBAR_INDEX, to.meta.sidebarIndex + '');
  }
  next();
});

export default router;
