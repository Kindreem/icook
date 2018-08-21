import Vue from 'vue'

//  导入并绑定Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 1定义数据存储仓库state
const state = {
}


//  2定义用于修改数据的方法
const mutations = {

}

//  3异步修改数据 
const actions = {}

//  4就算属性
const getters = {

}


//导出store实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters

})