//引入Vue
import Vue from 'vue'
//引入组件库
// import ElementUI from 'element-ui';
//引入全部样式
// import 'element-ui/lib/theme-chalk/index.css';


//按需
import { Button, Select ,Row,DatePicker} from 'element-ui';
//引入App
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用所有组件
// Vue.use(ElementUI);

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	
})