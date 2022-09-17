// 这句话浏览器就不认识，所以在非脚手架无法运行index.html
import App from './App.vue'

new Vue({
	el:'#root',
	template:`<App></App>`,
	components:{App},
})