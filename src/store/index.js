import Vue from 'vue'

//  导入并绑定Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 1定义数据存储仓库state
const state = {
    userid:'',
    items:'' ,       //菜谱搜索列表
    val:'',        //搜索框值
    size:''
}


//  2定义用于修改数据的方法
const mutations = {
        setlist:(state,items)=>{
            state.items = items
        },
        setsize:(state,size)=>{
            state.size= size
        },
        setval:(state,val)=>{
            state.val= val
        }
}

//  3异步修改数据 
const actions = {}

//  4就算属性
const getters = {
    getlist:(state)=>{
        return state.items
    },
    getsize:(state)=>{
        return state.size
    },
    getval:(state)=>{
        return state.val
    }
}


//导出store实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters

})