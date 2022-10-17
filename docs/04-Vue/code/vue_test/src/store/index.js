// 该文件用于创建Vuex中的store

//引入Vue
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {}

// 用于操作数据
const mutations = {}

// 用于存储数据
const state = {}

// 创建store
const store = new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state
});

// 暴露store
export default store;