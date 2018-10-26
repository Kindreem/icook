import Vue from 'vue'
//  导入并绑定Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 1定义数据存储仓库state
const state = {
  userid: '',
  items: '', //菜谱搜索列表
  val: '', //搜索框值
  size: '',
  size: '', //条数
  name: '', //昵称
  picimg: '', //头像地址
  i: 1, //top
  top: '', //top排行
  searchsort: 1, //搜索排行类型
  caipu: '', //我的菜谱
  shoucang: '', //我的收藏
  feed: '',  //我的作品
  one: '', //one排列
  num: 1, //页数
  cbname:'',  //菜谱名字
  num: 1, //list页数
  num1: 1, //one页数
  num2: 1, //tow页数
  tow: '', //tow排列
  myach:'', //我的成就
  nodata:'',   //暂无相关菜谱
  step: 1,  //新手指引
  warning: false,  //语音面板
  guide1: false
}


//  2定义用于修改数据的方法
const mutations = {
  setlist: (state, items) => {
    state.items = items
  },
  setsize: (state, size) => {
    state.size = size
  },
  setval: (state, val) => {
    state.val = val
  },
  setimg: (state, picimg) => {
    state.picimg = picimg
  },
  setname: (state, name) => {
    state.name = name
  },
  seti: (state, i) => {
    state.i = i
  },
  settop: (state, top) => {
    state.top = top
  },
  setsearchsort: (state, searchsort) => {
    state.searchsort = searchsort
  },
  setcaipu: (state, caipu) => {
    state.caipu = caipu
  },
  setshoucang: (state, shoucang) => {
    state.shoucang = shoucang
  },
  setfeed: (state, feed) => {
    state.feed = feed
  },
  setone: (state, one) => {
    state.one = one
  },
  setnum: (state, num) => {
    state.num = num
  },
  setcbname: (state, cbname) => {
    state.cbname = cbname
},
  setnum1: (state, num1) => {
    state.num1 = num1
  },
  setnum2: (state, num2) => {
    state.num2 = num2
  },
  settow: (state, tow) => {
    state.tow = tow
  },
  setmyach: (state, myach) => {
    state.myach =myach
  },
  setnodata: (state,nodata) => {
    state.nodata=nodata
  },
  setstep: (state,step) => {
    state.step=step
  },
  setwarning: (state,warning) => {
    state.warning=warning
  },
  setguide1: (state,guide1) => {
    state.guide1=guide1
  },
}

//  3异步修改数据
const actions = {}

//  4就算属性
const getters = {
  getlist: (state) => {
    return state.items
  },
  getsize: (state) => {
    return state.size
  },
  getval: (state) => {
    return state.val
  },
  getimg: (state) => {
    return state.picimg
  },
  getname: (state) => {
    return state.name
  },
  geti: (state) => {
    return state.i
  },
  gettop: (state) => {
    return state.top
  },
  getsearchsort: (state) => {
    return state.searchsort
  },
  getcaipu: (state) => {
    return state.caipu
  },
  getshoucang: (state) => {
    return state.shoucang
  },
  getfeed: (state) => {
    return state.feed
  },
  getone: (state) => {
    return state.one
  },
  getnum: (state) => {
    return state.num
  },
  getcbname: (state) => {
    return state.cbname
 },
  getnum1: (state) => {
    return state.num1
  },
  getnum2: (state) => {
    return state.num2
  },
  gettow: (state) => {
    return state.tow
  },
  getmyach: (state) => {
    return state.myach
  },
  getnodata: (state) => {
    return state.nodata
  },
  getstep: (state) => {
    return state.step
  },
  getwarning: (state) => {
    return state.warning
  },
  getguide1: (state) => {
    return state.guide1
  },
}

//导出store实例
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})
