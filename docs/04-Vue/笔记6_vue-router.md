# vue-router

P117-路由的简介

## 1 相关理解

### **何为路由**

- 路由就是一组key-value的对应关系；

- 多个路由，需要经过路由器的管理



### SPA应用

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

## 2 实现一个小功能——基本路由

### 基本操作

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

P119-几个注意点

### 几个注意点

将头部单独提取出来为Banner.vue

![](img\Snipaste_2022-09-10_14-11-46.png)



1. 项目中一般分为一般组件和路由组件。路由组件通常放在pages文件夹，普通组件放在components文件夹
2. 通过切换，隐藏了路由组件，默认是被销毁掉的，需要的时候再去挂载
3. 每个组件都有自己的$route属性，里面存储着自己的路由信息
4. 整个应用只有一个router，可以通过组件的$router属性获取

路由组件的vm上会多出两个属性

![](img\Snipaste_2022-09-10_14-19-03.png)

$route 是每个组件自己拥有自己的

$router整个vue项目都是同一个

P120-嵌套路由

## 3 嵌套（多级）路由

找到route_page2写好的页面，把组件页面写好

1. 配置路由规则，使用children

   ```js
   routes:[
       {
           path:'/about',
           component:About
   
       },
       {
           path:'/home',
           component:Home,
           children:[
               {
                   path:'news',//不要加/
                   component:News
               },
               {
                   path:'message',//不要加/
                   component:Message
               }
           ]
   
       },
   ]
   ```

   

2. 跳转（要写完成路径）

   ```html
   <router-link class="list-group-item" active-class='active' to="/home/news">News</router-link> 
   ```

## 4 路由的query参数

接收使用

```html
<template>
  <ul>
      <li>消息编号:{{$route.query.id}}</li>
      <li>消息标题L:{{$route.query.title}}</li>
  </ul>
</template>
```

传递

```html
 <li v-for= "m in messageList" :key="m.id">
                        <!-- 跳转路由携带query参数，to的字符写法 -->
     <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;

                      <!-- 跳转路由携带query参数，to的对象 -->
     <router-link :to="{
                       path: '/home/message/detail',
                       query: {
                       id:m.id,
                       title:m.title
                       }
                       }">
         {{m.title}}
     </router-link>
                    </li>
```

## 5 命名路由

1. 作用：可以简化路由的跳转

2. 如何使用

   1. 给路由命名

      ```js
      routes:[
              {
                  name:'aboutname',
                  path:'/about',
                  component:About
      
              },
              {
                  path:'/home',
                  component:Home,
                  children:[
                      {
                          path:'news',//不要加/
                          component:News
                      },
                      {
                          path:'message',//不要加/
                          component:Message,
                          children:[
                              {
                                  name:'detailname',
                                  path:'detail',
                                  component:Detail
                              }
                          ]
                      }
                  ]
      
              },
          ]
      ```

      

   2. 简化跳转

      ```html
      <!-- 跳转路由携带query参数，to的对象 使用name代替path参数，就可以不用写那么长的路径了-->
                            <router-link :to="{
                              
                                name:'detailname',
                                query: {
                                    id:m.id,
                                    title:m.title
                                }
                            }">
                                {{m.title}}
                            </router-link>
      ```

   
   

## 6 路由的params参数

1. 声明接收params参数

   ```js
   export default new VueRouter({
       routes:[
           {
               name:'aboutname',
               path:'/about',
               component:About
   
           },
           {
               path:'/home',
               component:Home,
               children:[
                   {
                       path:'news',//不要加/
                       component:News
                   },
                   {
                       path:'message',//不要加/
                       component:Message,
                       children:[
                           {
                               name:'detailname',
                               path:'detail/:id/:title',//这样写
                               component:Detail
                           }
                       ]
                   }
               ]
   
           },
       ]
   })
   ```

   

2. 传参

   ```html
   <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;
   
   <!-- param的对象写法，不能写path -->
                       <!-- <router-link :to="{
                           
                             name:'detailname',
                             param: {
                                 id:m.id,
                                 title:m.title
                             }
                         }">
                             {{m.title}}
                         </router-link> -->
   ```

   

   

3. 使用

   ```html
   <li>消息编号:{{$route.params.id}}</li>
         <li>消息标题L:{{$route.params.title}}</li>
   ```

   

## 7 路由的props参数

作用：让路由组件更方便接收参数

1. 在index.js中定义

   ```js
   {
                               name:'detailname',
                               path:'detail/:id/:title',
                               component:Detail,
   
                               //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。所以Detail组件要接收。但是这样是死数据
   							// props:{a:1,b:'hello'}
   
   							//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。但是不会传query参数
   							// props:true
   
                               //props的第三种写法，值为函数，该函数返回的所有key-value都会以props的形式传给Detail组件
                               // 结构赋值（学习！！）
   							props($route){
   								return {
   									id:$route.query.id,
   									title:$route.query.title,
   									a:1,
   									b:'hello'
   								}
   							}
                           }
   ```

   

2. 使用

   ```html
   <template>
     <ul>
         <!-- <li>消息编号:{{$route.query.id}}</li>
         <li>消息标题L:{{$route.query.title}}</li> -->
   
         <li>消息编号:{{id}}</li>
         <li>消息标题L:{{title}}</li>
         
     </ul>
   </template>
   
   <script>
       export default {
           name:'Detail',
           props:['id','title'],//接收路由组件定义的参数
           mounted() {
               
           },
       }
   </script>
   ```

   

## 8 router-link的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式

2. 浏览器的历史记录有两种写入方式：分别为`push`和`replace`，push是追加历史记录，replace是替换当前记录。路由跳转时候默认为push

3. 如何开启replace

   ```html
   <router-link replace ...>About</router-link>
   ```



## 9 编程式路由导航

1. 就是不借助`router-link`实现路由跳转，注意query和param接收参数路径不一样【7和8项目有问题，就是query和params没有搞清楚】

2. 具体编码

   ```js
   pushShow(m) {
         this.$router.push({
           name: "detailname",
           query: {
             id: m.id,
             title: m.title
           }
         });
       },
       replaceShow(m) {
         this.$router.replace({
           name: "detailname",
           query: {
             id: m.id,
             title: m.title
           }
         });
       }
   //后退
   back(){
       this.$router.back()
       // console.log(this.$router)
   },
       //前进
       forward(){
           this.$router.forward()
       },
           test(){
               this.$router.go(3)
           }
   ```

## 10 缓存路由组件

1. 作用：让不展示的路由组件保持挂载，不被销毁。

2. 具体编码：

   ```html
   <!-- 设置缓存，include写的是组件名，是.vue文件里面设置的名字 -->
   <keep-alive include="News">
       <router-view></router-view>
   </keep-alive>
   缓存多个
   :include="['News','Message']"
   ```

## 11 两个新的生命周期钩子

1. 作用：路由组件所独有的两个钩子，用于捕获由组件的激活状态；
2. 具体名字：
   1. `activated`路由组件被激活时触发
   2. `deactivated`路由组件失活时触发

## 12 路由守卫

1. 作用：对路由进行权限控制

2. 分类：全局守卫、独享守卫、组件内守卫

3. 全局守卫

   ```js
   //全局前置路由守卫——初始化的时候被调用，每次路由切换之前被调用
   router.beforeEach((to,from,next) => {
       // console.log('index.js',to,from);
       // if (to.path === '/home/news' || to.path === '/home/message') {
       if (to.meta.isAuth) {
           if (localStorage.getItem('schooe') === 'atguigu') {
               next();
           }    
       }else {
           next();
       }
       
   })
   
   //全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
   router.afterEach((to,from)=>{
   	console.log('后置路由守卫',to,from)
   	document.title = to.meta.title || '硅谷系统'
   })
   
   export default router
   ```

   





