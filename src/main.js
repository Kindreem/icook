// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/js/viewport'
import Vue from 'vue'
import App from './App'
import router from './router'

import iview from 'iview'
import '@/assets/hotcss/hotcss.js'
import {DatetimePicker} from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);

import 'iview/dist/styles/iview.css';


Vue.use(iview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  iview,
  components: { App },
  template: '<App/>'
})

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

