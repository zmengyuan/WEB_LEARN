//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

import Detail from '../pages/Detail.vue'

//创建并暴露路由器
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
                    ]
                }
            ]

        },
    ]
})