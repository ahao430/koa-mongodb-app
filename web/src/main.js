import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/index.scss';
import 'font-awesome/scss/font-awesome.scss';

import 'babel-polyfill';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
