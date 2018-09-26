import Vue from 'vue'

//  导入并绑定Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 1定义数据存储仓库state
const state = {
    userid:'',
    items:'' ,       //菜谱搜索列表
    val:'',        //搜索框值
    size:'',         //条数
    name:'',        //昵称
    picimg:''       //头像地址
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
        },
        setimg:(state,picimg)=>{
            state.picimg= picimg
        },
        setname:(state,name)=>{
            state.name= name
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
    },
    getimg:(state)=>{
        return state.picimg
    },
    getname:(state)=>{
        return state.name
    }
}


//导出store实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters

})