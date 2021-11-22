/*
该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue'
//引入App，它是所有组件的父组件
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false

/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/


//创建vm
new Vue({
  el:'#app',
  //下面这行代码一会解释，完成了这个功能，将App组件放入容器中
  /*
  正常原始的写法，createElement是一个函数
  */
  // render(createElement){
  //   console.log('render');
  //   return createElement('h1','你好呀');
  // }
  /*因为没有用到this ，直接用箭头函数了 */
  render: h => h(App),
})
