//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

import Detail from '../pages/Detail.vue'

//创建并暴露路由器
const router = new VueRouter({
    routes: [{
            name: 'aboutname',
            path: '/about',
            component: About

        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: 'news', //不要加/
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    },
                    beforeEnter: (to, from, next) => {
                        console.log('index.js', to, from);
                        // if (to.path === '/home/news' || to.path === '/home/message') {
                        if (to.meta.isAuth) {
                            if(localStorage.getItem('school')==='atguigu'){
                                next()
                            }else{
                                alert('学校名不对，无权限查看！')
                            }
                        } else {
                            next();
                        }
                    }
                },
                {
                    path: 'message', //不要加/
                    component: Message,
                    children: [{
                        name: 'detailname',
                        path: 'detail', //query参数不要接收
                        component: Detail,

                        //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。所以Detail组件要接收。但是这样是死数据
                        // props:{a:1,b:'hello'}

                        //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。但是不会传query参数
                        // props:true

                        //props的第三种写法，值为函数，该函数返回的所有key-value都会以props的形式传给Detail组件
                        // 结构赋值（学习！！）
                        props($route) {
                            return {
                                id: $route.query.id,
                                title: $route.query.title,
                                a: 1,
                                b: 'hello'
                            }
                        }
                    }]
                }
            ]

        },
    ]
})

// //全局前置路由守卫——初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to,from,next) => {
//     // console.log('index.js',to,from);
//     // if (to.path === '/home/news' || to.path === '/home/message') {
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('schooe') === 'atguigu') {
//             next();
//         }    
//     }else {
//         next();
//     }

// })

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
	console.log('后置路由守卫',to,from)
	document.title = to.meta.title || '硅谷系统'
})

export default router