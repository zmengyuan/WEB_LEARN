# vue-router

P117-路由的简介

## **何为路由**

- 路由就是一组key-value的对应关系；

- 多个路由，需要经过路由器的管理



## SPA应用

Vue中的路由是为了实现SPA应用（single page web application）

**vue-router监测**

vue-router是一个插件库；

当浏览器路径发生变化，由192.0.0.1:8080变为192.0.0.1:8080/class，router就在自己的路由规则集里面寻找/class ==> 班级组件；

对于前端来说，key就是路径，value就是组件；

对于后端来说，key就是路径，value就是对应响应的函数；

![](img\Snipaste_2022-09-10_10-33-58.png)

**SPA应用**

- 一个应用只有一个完整页面
- 点击页面中的导航链接不会刷新页面，只会做页面的局部更新
- 数据需要通过ajax获取

P118-路由的基本使用

## 实现一个小功能

![](img\Snipaste_2022-09-10_10-43-57.png)

使用资料中静态页面的3_route_page1写好的页面

2022-02-07之后，vue-router的默认版本是4，只能用于vue3，所以要指定vue-router3

1. 安装，命令 `npm i vue-router@3`

2. 引入并应用 `import VueRouter from 'vue-router'` `Vue.use(VueRouter)`，这样就可以在new Vue({})的配置项中传入router属性了

3. 编写router配置项 src/router/index.js

   ```js
   //该文件专门用于创建整个应用的路由器
   import VueRouter from 'vue-router'
   //引入组件
   import About from '../components/About.vue'
   import Home from '../components/Home.vue'
   
   //创建并暴露路由器
   export default new VueRouter({
       routes:[
           {
               path:'/about',
               component:About
   
           },
           {
               path:'/home',
               component:Home
   
           },
       ]
   })
   ```

4. 在main.js中使用路由器 `import router from './router'`

5. 实现切换

   ```html
   <router-link class="list-group-item" active-class='active' to="/about">About</router-link>
   ```

6. 指定展示位置

   ```html
   <router-view></router-view>
   ```

   



