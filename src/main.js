// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/js/viewport'
import Vue from 'vue'
import App from './App'
import router from './router'

import iview from 'iview'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/assets/hotcss/hotcss.js'
import 'iview/dist/styles/iview.css';


Vue.use(iview)
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  iview,
  components: { App },
  template: '<App/>'
})
