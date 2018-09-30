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
  sea: ['麻辣鸡丝', '水煮肉', '叉烧肉'], //历史搜索
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
  setsea: (state, sea) => {
    state.sea = sea
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

  getsea: (state) => {
    return state.sea
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
}


//导出store实例
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})
