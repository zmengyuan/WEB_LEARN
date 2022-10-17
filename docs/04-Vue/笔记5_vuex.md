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
