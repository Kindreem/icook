// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/js/viewport'
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// Vue.prototype.axios = axios;

import iview from 'iview'
import '@/assets/hotcss/hotcss.js'
<<<<<<< HEAD
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import {DatetimePicker} from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);
=======

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


import { DatetimePicker,Checklist } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);


>>>>>>> 39341eeb0c57444603e172f4b6a9e2396d7bdcb3

import 'iview/dist/styles/iview.css';


Vue.use(iview)
// Vue.use(MintUI)

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

