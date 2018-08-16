// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/js/viewport'
import Vue from 'vue'
import App from './App'
import router from './router'

import iview from 'iview'
import '@/assets/hotcss/hotcss.js'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

import { DatetimePicker,Checklist } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Checklist.name, Checklist);
import 'iview/dist/styles/iview.css';


import wechatAuth from '../static/js/wechatAuth'//微信登录插件
const queryString = require('query-string');
Vue.use(wechatAuth, {appid: "wx46bfe246fb596974"});


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



router.beforeEach((to, from, next) => {
  if (store.state.loginStatus == 0) {
   //微信未授权登录跳转到授权登录页面
    let url = window.location.href;
    //解决重复登录url添加重复的code与state问题
    let parseUrl = queryString.parse(url.split('?')[1]);
    let loginUrl;
    if (parseUrl.code && parseUrl.state) {
      console.log(parseUrl.code)
      delete parseUrl.code;
      delete parseUrl.state;
      loginUrl = `${url.split('?')[0]}?${queryString.stringify(parseUrl)}`;
    } else {
      loginUrl = url;
    }
    wechatAuth.redirect_uri = loginUrl;
    store.dispatch('setLoginStatus', 1);
    window.location.href = wechatAuth.authUrl
  } else if (store.state.loginStatus == 1) {
    try {
      wechatAuth.returnFromWechat(to.fullPath);
    } catch (err) {
      store.dispatch('setLoginStatus', 0)
      next()
    }
    store.dispatch('loginWechatAuth', wechatAuth.code).then((res) => {
      if (res.status == 1) {
        store.dispatch('setLoginStatus', 2)
      } else {
        store.dispatch('setLoginStatus', 0)
      }
      next()
    }).catch((err) => {
      next()
    })
  }else {
    next()
  }
  alert(1)
});
