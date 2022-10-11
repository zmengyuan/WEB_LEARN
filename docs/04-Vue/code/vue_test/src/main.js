//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vc作为时间总线，$on$off$emit不仅vc可以调用，vm也可以调用，所以为了简化代码，不用再新建vc，直接用已有的vm
// const Demo = Vue.extend({});
// const d = new Demo();
// Vue.prototype.x = d;


//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate () {
		// 安装全局事件总线，约定熟成一般用$bus,不用x
		// Vue.prototype.x = this;
		Vue.prototype.$bus = this;
	}
})

