// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/js/viewport'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index.js'

import iview from 'iview'
import '@/assets/hotcss/hotcss.js'

import Calendar from 'vue2-datepick';
Vue.use(Calendar);


import {DatetimePicker,Spinner, InfiniteScroll} from 'mint-ui';
Vue.use(InfiniteScroll);

Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Spinner.name, Spinner);


import 'iview/dist/styles/iview.css';


Vue.use(iview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  iview,
  components: { App },
  template: '<App/>'
})

// 跳转后返回顶部
// router.afterEach((to,from,next) => {
//   window.scrollTo(0,0);
// })

//微信兼容ios
router.beforeEach((to, from, next) => {
  // 处理jssdk签名,兼容history模式
  if (store.state.Url=='') {
    store.commit('setUrl', document.URL)
    next()
  }else{
    next()
  }
})

