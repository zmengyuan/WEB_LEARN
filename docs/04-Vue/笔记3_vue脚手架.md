# 第 3 章：使用 Vue 脚手架

P61 创建Vue脚手架

## 3.1 初始化脚手架 vuecli (command line interface)

### 3.1.1 说明

**说明** 

1. Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）。 
2. 最新的版本是 4.x。 
3. 文档: https://cli.vuejs.org/zh/。
4. 脚手架选新的就可以，它是向下兼容的。不可以框架新脚手架旧

### 3.1.2 具体步骤 

第一步（仅第一次执行）：全局安装@vue/cli。 这样你的电脑就多了一个命令`vue`

```cmd
npm install -g @vue/cli 
```

第二步：切换到你要创建项目的目录，然后使用命令创建项目 

```cmd
vue create xxxx 
```

babel ：ES6转ES5的

eslint：语法检查的

第三步：启动项目 

```cmd
npm run serve 
```

P62 分析脚手架结构

备注：

1. 如出现下载缓慢请配置 npm 淘宝镜像：

   ```cmd
   npm config set registry https://registry.npm.taobao.org
   ```

   

2. Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置， 请执行：

   ```cmd
   vue inspect > output.js
   ```



### 3.1.3 模板项目的结构

脚手架有几个文件夹名和文件名不允许修改，不然就启动不了了

![](D:/IdeaWorkspace/00github/WEB_LEARN/docs/04-Vue/img/微信截图_20211122211900.png)



 ├── node_modules 

 ├── public

 │  ├── favicon.ico: 页签图标

 │  └── index.html: 主页面

 ├── src

 │  ├── assets: 存放静态资源

 │  │  └── logo.png

 │  │── component: 存放组件

 │  │  └── HelloWorld.vue

 │  │── App.vue: 汇总所有组件

 │  │── main.js: 入口文件

 ├── .gitignore: git版本管制忽略的配置

 ├── babel.config.js: babel的配置文件

 ├── package.json: 应用包配置文件，npm相关就有该文件 

 ├── README.md: 应用描述文件

 ├── package-lock.json：包版本控制文件



工具：浏览器可以设置不允许js

P63 render

**使用之前的main.js代码不可以**

```js
import App from './App.vue'

new Vue({
	el:'#root',
	template:`<App></App>`,
	components:{App},
})
```

浏览器会报错：you are using the runtime-only build of vue where the template compiler is not availabel.

```main.js
import Vue from 'vue'
//引入Vue,这里这样写，其实只引入到了node_modules里面的vue文件夹
```

而真正引入的是node_modules下的vue文件夹下的package.json里面module属性值的js文件，module控制的是ES6模块化引入vue时候的文件，

脚手架引入的Vue实际上对应的是右边的js，这实际上是一个残缺的js，缺乏对模板（new Vue里面的template属性）的解析，所以就无法解析`template`，（.vue文件里面的template标签是用vue-template-compiler解析的。（package.json可以查看））

![](D:/IdeaWorkspace/00github/WEB_LEARN/docs/04-Vue/img/微信截图_20211122205718.png)

**解决方案**

1. 引入完整版vue

   ```js
   import Vue from 'vue/dist/vue'
   ```

   

2. 用render解决

   ```js
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
   
   ```

### 3.1.4 Vue.js的不同版本

为什么vue官方要提供那么多精简的vue.js呢，主要还是因为webpack打包之后不再需要模板解析相关代码了，所以打包用简洁版就可以了。

1. vue.js与vue.runtime.xxx.js的区别：

   1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器。

   2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容。

P64 修改默认配置

### 3.1.5 修改默认配置

不能修改的：public文件夹、src文件夹、main.js，如果要修改，到https://cli.vuejs.org/zh/config/查看具体

#### vue.config.js配置文件

1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。

2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

   ```vue.config.js
   //这是commonJS的模块化，不是ES6的模块化
   module.exports = {
     pages: {
       index: {
         //入口
         entry: 'src/main.js',
       },
     },
     //关闭语法检查
     lintOnSave:false
   }
   ```



P65 ref属性

## 3.2 ref 与 props

### ref属性

1. 被用来给元素（id的替代者）或子组件注册引用信息

2. 应用在html标签上获取的是真实DOM元素，应用在 组件标签上是组件实例对象（vc）

3. 使用方式：
   1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```

     2. 获取：```this.$refs.xxx```

P66 props配置

###  props配置项

1. 功能：让组件接收外部传过来的数据

2. 传递数据：```<Demo name="xxx" :age="18"/>```，没有`:`传输的就是字符串，有了`:`就是js表达式

3. 接收数据：

   1. 第一种方式（只接收）：```props:['name'] ```

   2. 第二种方式（限制类型）：```props:{name:String}```

   3. 第三种方式（限制类型、限制必要性、指定默认值）：

      ```js
      props:{
          name:{
              type:String, //类型
              required:true, //必要性
              default:'老王' //默认值
          }
      }
      ```

**备注**：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

程序运行时，props的数据是优先被解析的，所以data中才可以操作复制props

```js
		data() {
			console.log(this)
			return {
                msg:'我是一个尚硅谷的学生',
                myAge: this.age//props属性已经将age属性赋值到this上了
                
			}
        },
        methods: {
			updateAge(){
                // this.age++;//这样会报错！！！所以用另外一个属性来处理！
                this.myAge++;
			}
		},
        //简单声明接收  App使用Student标签的时候直接在标签写了的，使用props接收的值是不能改的
        props:['name','age','sex']
```

P67-mixin混入

## 3.3、mixin(混入)

1. 功能：可以把多个组件共用的配置提取成一个混入对象

2. 使用方式：

  第一步定义混合：

  ```minix.js
export const hunhe = {
	methods: {
		showName(){
			alert(this.name)
		}
	},
	mounted() {
		console.log('你好啊！')
	},
}
export const hunhe2 = {
	data() {
		return {
			x:100,
			y:200
		}
	},
}
  ```

  第二步在vue文件中使用混入：

局部使用：

```vue
<template>
	<div>
		<h2 @click="showName">学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
	</div>
</template>

<script>
    //引入混合
	import {hunhe,hunhe2} from '../mixin'
	export default {
		...
        //引入混合
		mixins:[hunhe,hunhe2],      
	}
</script>
```

全局引入：（注意：这样每个vc/vm都有了混合的配置）

```main.js
import Vue from 'vue'
import App from './App.vue'

import {hunhe,hunhe2} from './mixin'

Vue.config.productionTip = false;

Vue.mixin(hunhe);
Vue.mixin(hunhe2);
new Vue({
    el:'#app',
    render: h => h(App)
})
```

对于混合的配置与自身的配置重复的时候，以自身为主，但是生命周期函数是都要执行。

P68-插件

## 3.4、插件

1. 功能：用于增强Vue

2. 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

3. 定义插件：

   ```plugins.js
   //其实这样就定义好一个插件了，Vue会调用这个install方法。
   export default {
   	install(){
       	
   	}
   }
   //上面与下面这段代码作用一样
   const obj = {
   	install() {
   	
   	}
   }
   export default obj;
   /==========================================================
   对象.install = function (Vue, options) {
       	// 1. 添加全局过滤器
           Vue.filter(....)
          	// 2. 添加全局指令
           Vue.directive(....)
        	 // 3. 配置全局混入(合)
           Vue.mixin(....)
            // 4. 添加实例方法（vc和vm都可以使用了）
            Vue.prototype.$myMethod = function () {...}
            Vue.prototype.$myProperty = xxxx
   }
   ```

4. 使用插件

   ```main.js
   import plugins from './plugins'
   
   //在new Vue()之前应用（使用）插件
   Vue.use(plugins)
   
   ```

5. 然后就可以使用在插件定义好的功能，其实就相当于定义功能，一个插件可以写很多过滤器、自定义事件、方法等等，只需要定义好，然后引入插件，就可以在项目中使用插件提供的这些功能。

P69 scoped

## 3.5 scoped样式

1. 作用：让样式在局部生效，防止冲突。

2. 写法：```<style scoped>```

工具：Vue-cli默认使用的webpack4版本，但是less-loader最新版本已经是迎合webpack5了,所以安装less需要指定版本

```vue
npm view webpack versions
npm i less-loader@7
```
P70
## 3.6 Todo-list案例
组件化编码流程（通用） 
1.实现静态组件：抽取组件，使用组件实现静态页面效果 
2.展示动态数据： 
   2.1. 数据的类型、名称是什么？ 
   2.2. 数据保存在哪个组件？ 
3.交互——从绑定事件监听开始

把资料中的04_静态页面中的todo_page的结构和样式全部先复制到App.vue中，然后再开始拆分。把代码复制到组件后，立马把组件标签写到此处。

P71 初始化列表
按照自己的想法，把列表数组数据todos放到MyList组件中，同时给MyItem传数据

P72 添加
在MyHeader组件添加事件
法一：借助event获取输入的数据
法二：借助v-model
将用户的输入包装成为一个todo对象
```
npm i nanoid
```
然后把这个todo对象添加到todo数组中，但是todo数组在MyList组件中，目前的知识无法实现，MyHeader无法将数据给MyList，它们是兄弟关系。

所以将todo数组放到App组件中去（共同的父亲）
![](img\微信截图_20221010144051.png)

如何实现儿子向父亲传数据。在父亲这里定义一个函数，传给儿子，然后儿子调用这个函数。

`List.vue`
```List.vue
<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader :addTodo="addTodo"/>
			</div>
		</div>
	</div>
</template>


methods: {
   addTodo(todoObj) {}
}
```
`MyHeader.vue`

```MyHeader.vue
//接收app传递过来的函数
props:['addTodo'],

```

P73 勾选
勾选是在MyItem，但是数据在App,所以现在只有逐层传递，MyItem——>MyList——>App

同样的还有更简单的操作,直接使用双向数据绑定，这样就不用一层层传递checkTodo方法了。
```
<input type="checkbox" v-model="todo.done"/>
```
但是不太推荐，因为有点违反原则，因为修改了props。
但是vue只能监视浅层次的props,对象的属性值修改它不能监视到，所以这个props的修改是没有被监测到的，所以不会报错。


## 组件的自定义事件

1. 一种组件间的通信方式，适用于：子组件=>父组件

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要A中给B绑定自定义事件（事件的回调在A中）

3. 绑定自定义事件

   1. 第一种方式：在父组件中```<Demo @atguigu='test'/>```或者```<Demo v-on:atguigu='test'/>```
   2. 第二种方式，在父组件中

   ```
   <Demo ref='demo'/>
   ······
   mounted() {
       this.$refs.xxx.$on('atguigu',this.test)
   }
   ```

   3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或者$once方法

4. 触发自定义事件：```this.$emit('atguigu',数据)```

5. 解绑自定义事件：```this.$off('atguigu')```

6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符

7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！


## 全局事件总线：任意组件间通信