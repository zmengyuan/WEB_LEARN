# 第五章 Vuex

P105 Vuex

## 5.1 理解vuex

### 5.1.1 什么是vuex

1. 概念：专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件(使用需要用Vue.use())，对 vue 应 用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方 式，且适用于任意组件间通信。 
2. Github 地址: https://github.com/vuejs/vuex

如图所示：A组件有数据x和y，其他兄弟组件想要读（红色）或者写（绿色其他组件改A中的数据），需要比较繁多的事件总线。当组件更多的时候，事件总线就更多了。
![](img\微信截图_20221017094144.png)

vuex就是来解决共享数据的。vuex不属于任何一个组件
![](img\微信截图_20221017100206.png)

### 5.1.2 什么时候使用 Vuex
其实就是共享

1. 多个组件依赖于同一状态 
2. 来自不同组件的行为需要变更同一状态(比如A组件点一次共享数据+1，B组件划过共享数据+1)


### 5.1.3 案例
P106 求和案例——纯vue版本
![](img\微信截图_20221017100416.png)

## 5.2 Vue工作原理
P107 Vuex工作原理图
![](img/vuex.png)

绿色虚线区是Vuex的重要组成部分，把数据交给Vuex管理的意思是把数据交给Vuex中的State对象管理，
比如State里面有sum：0

在Vue Components中，Vue组件调用方法 dispatch(动作类型A,值B),Actions也是一个普通的对象类型，这个对象里面肯定有一个键值：动作类型A:function1，当匹配上之后，就执行函数function1，这个function1函数里面自己调用commit(动作类型A,值B)，然后Mutations也是一个普通对象类型 ，这里面也有一个键值 动作类型A:function2，然后这个function2里面一定有state和值B，在这个function2里面要执行一条语句 state.sum +=2 ，它会自动走Mutate流程，最后会发现State里面的sum就变成了2，然后vuex就重新Render（渲染）组件，然后页面上的sum就变成了2。

这里看上去Actions像白玩了一圈，但是有一种情况，比如dispatch只指定了动作，值需要后端接口来，这时候就需要Actions去问后端服务器。

![](img\微信截图_20221017104739.png)

实际上Vue是允许不走Actions，直接从Vue Components commit到Mutations的，只是图里面没有展示
![](img\微信截图_20221017104831.png)

可以类比客人到餐厅吃饭,mutations相当于后厨，真正操作是在这里
![](img\微信截图_20221017104957.png)

这个图还有一个没展示的地方是实际上有一个store来管理Actions、Mutations、State
![](img\微信截图_20221017105133.png)

dispatch\commit都需要store来调用


## 5.3 实战

P108 搭建Vuex环境
1. npm i vuex@3(注意：vue2中要使用vuex的3版本，vue3要使用vuex的4版本)
2. 引入Vuex 并且Vue.use(Vuex) 之后，就可以在创建vue的时候传入store对象了
   ```
    new Vue({
        el:'#app',
        store:'hello'
    })
    ```
3. 创建store store/index.js文件
4. 让所有vc能看到store


这样就可以在vm和每个vc实例上看到$store

以上只是说明如何使用的原理，根据官方建议如下使用

### 5.3.1 错误写法 
1、创建store/index.js
```
// 该文件用于创建Vuex中的store


import Vuex from 'vuex'
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
```

2、引入
```main.js
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'

// 引入vuex
import Vuex from 'vuex'
// 引入store，因为是脚手架，如果没有写具体文件，会默认找index文件
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)
Vue.use(Vuex)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	store,
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})
```
这样写之后，浏览器会报错

![](img\微信截图_20221017110749.png)

然后根据提示，会认为是解析顺序导致的这个错误，于是把`import store from './store'`这句移动到最下面引入，但是还是报错。

```
...
//使用插件
Vue.use(vueResource)
Vue.use(Vuex)

import store from './store'
```

这是因为在脚手架中，它会汇集所有的import语句按顺序先执行。
所以按照以下方法引入。



### 5.3.2 正确写法
把vuex的引入使用写在store/index.js中

在src文件夹下新建store文件夹，然后在store文件夹下新建index.js文件
```
//该文件用于创建Vuex中最为核心的store index.js文件
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {}

//准备mutations——用于操作数据（state）
const mutations = {
}

//准备state——用于存储数据
const state = {

}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
```

P109 求和案例_vuex案例
### 5.3.3 vuex实战求和案例

小写是actions里的，大写是mutations中的

###  5.3.4 vuex开发者工具 
P110vuex开发者工具

收集的是Mutations的方法

![](img\微信截图_20221017142204.png)
页面呈现的数据是绿色条的，每一行都有三个按钮。
第一个：合并 第二个：清理 第三个：回到当时那个状态

![](img\微信截图_20220902154639.png)
dispatch可以调多个，以防在某个函数中代码过多

### 5.3.5 getters
P111 getters配置项
```js
//准备getters——用于将state中的数据进行加工
const getters = {
	bigSum(state){
		return state.sum*10
	}
}

/创建并暴露store
export default new Vuex.Store({
	...
	getters
})
```

