//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

import countOptions from './count'
import personOptions from './person'

// 求和功能相关的配置


//人员管理相关配置



//创建并暴露store
export default new Vuex.Store({
	modules:{
		countOptions,
		personOptions
	}
})
