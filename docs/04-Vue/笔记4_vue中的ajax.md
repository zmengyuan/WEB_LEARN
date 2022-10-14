# 第 4 章：Vue 中的 ajax

## 4.1 解决开发环境 Ajax 跨域问题
96
运行资料-其他-test_proxy_server中的server1和server2
```
node server1
```


常用的发送ajax方式
1. xhr new XMLHttpRequest() xhr.open() xhr.send()
2. jQuery库封装 $.get $post
3. axios
4. fetch
   
2和3都是对xhr的封装，fetch是和xhr平级的，xhr是Promise风格的

我们项目使用axios发送，需要先安装
```
npm i axios
```
然后再引入它
```
<script>
	import axios from 'axios'

	export default {
		name:'App',
		methods: {
			getStudents() {
				axios.get('http://localhost:5000/students').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			}
		},	
	}
</script>

```

现在所处的地址是http//localhost:8080
![](img\微信截图_20221012155610.png)
服务器地址：localhost:5000 跨域
浏览器发送了，服务器也返回了，但是浏览器没有显示报错了

**解决跨域**
1. cors:服务器修改，返回的时候添加一些响应头，浏览器看到这些响应头就可以显示了。
2. jsonp: 借用script标签的src属性在引用外部资源时候同源不限制的特点，后端也要配合，只能解决get请求
3. 配置代理服务器
![](img\微信截图_20221012160156.png)
粉色和蓝色都是服务器，两台服务器请求走的是http，不会出现同源策略跨域问题
    开启代理服务器
    - nginx
    - vue-cli(vue官网——生态系统——vue-cli——配置参考——devServer.proxy)
  
vue-lic配置代理vue.config.js文件
```
module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave:false,//关闭语法检查
  //开启代理服务器
  devServer: {
    proxy: 'http://localhost:5000'
  }
}
```
然后修改原请求访问8080
```
axios.get('http://localhost:8080/students').then()
```
但是这种方式有两个缺点：
1. 只能配置一个代理
2. vue脚手架默认public为根目录，当访问的url能在public文件夹找到资源时，它就不会走代理去访问后台服务器了。


P97
配置方式二
```
//开启代理服务器(方式二)
  devServer: {
    proxy: {
      // 只要请求前缀是students,就给5000
      '/students': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/atguigu':''},
        ws: true,//用于支持websocket
        // changeOrigin: true//服务器获取请求头Host值的时候 true:说谎，false：真实，默认是true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
      }
    }
  }
```

P97
配置方式二
```
//开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/students': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/atguigu':''},
        ws: true,//用于支持websocket
        // changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
      }
    }
  }
```

P98
## 4.2 github 用户搜索案例

因为使用了bootstrap样式库，但是bootstrap中的字体又没有使用到，所以采用index.html引入的方式
在public文件夹下新建css文件夹放入bootstrap.css文件，然后在index.html中引入
```
<!-- 引入第三方样式 -->
<link rel="stylesheet" href="<%= BASE_URL %>css/bootstrap.css">
```
然后把各种静态资源样式复制调整好了

P99-P100 github

P101 VUE-RESOURCE

## 4.3 vue-resource
vue-resource vue的插件库，是对xhr的封装
安装
```
npm i vue-resource
```

使用了该插件之后，vc和vm的属性就多了$http，就可以使用了。
不过现在都很少使用了。

## 4.4 插槽

### 4.4.1 默认
102 默认插槽
组件里面再写标签。
比如都使用了相同的组件，但是现在提出需求，不同的组件里面的显示内容不一样，我们现在能想到的就是v-show 来判断展示哪种内容，但是当区别很大的时候，不可能去判断很多个变量，所以使用插槽。

插槽的内容的样式可以写在外面(APP)，也可以写在里面(Category)

P103 具名插槽
### 4.4.2 具名
加一个name属性
`<slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>`

然后使用的时候指定名字
```
<Category title="美食" >
    <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    <a slot="footer" href="http://www.atguigu.com">更多美食</a>
</Category>
```


当想把多个标签列为一个插槽，用template包裹,template具名插槽可以使用v-slot:footer方式
```
<template v-slot:footer>
    <div class="foot">
        <a href="http://www.atguigu.com">经典</a>
        <a href="http://www.atguigu.com">热门</a>
        <a href="http://www.atguigu.com">推荐</a>
    </div>
    <h4>欢迎前来观影</h4>
</template>
```
当然包div也可以实现，但是这样无缘无故又包了一层div不好，所以使用template,这样就不会在结构中出现了

P104 作用域插槽
需求：现在使用三个Category都展示电影，里面内容一样，所以把数据直接放Category组件管理了。现在的需求是第一个展示无序列表，第二个展示有序列表，就是说列表的样式是由使用者来定。（同样的，你也可以用判断来展示，但是这样不好）
所以用作用域插槽，把遍历还是要放到APP里面来，但是数据现在在Category组件里面，所以使用者如何得到数据。
Category组件
```
<!-- 这里:games="games"就是把games传给了插槽的使用者，谁往这个插槽放结构就是把数据传给了谁 -->
<slot :games="games" msg="hello">我是默认的一些内容</slot>
```

APP组件使用，必须包裹一层template，使用属性scope来接收
```
<Category title="游戏">
    <!-- 这样写atguigu不一定要=Category定义的game名 -->
    <template scope="atguigu">
        <ul>
            <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
        </ul>
    </template>
</Category>

<Category title="游戏">
 <!-- 这样写必须和提供者的属性名一样，这是ES6语法，结构赋值 -->
    <template scope="{games}">
        <ol>
            <li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
    </template>
</Category>

<Category title="游戏">
    <template slot-scope="{games}">
        <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
    </template>
</Category>
```

总结：
插槽就是让父组件向子组件指定位置插入http结构，也是一种组件间通信的方式，适用于父组件===>子组件

使用方式
1. 默认插槽
```js
父组件
<Category>
    <div>html结构</div>
</Category
子组件
<template>
	<div >
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
	</div>
</template>
```
2. 具名插槽:就是能起名
```
父组件
<Category >
    <template v-slot:footer>
        <div>html结构</div>
    </template>

    <template slot="center">
        <div>html结构2</div>
    </template>
</Category>


子组件
<template>
	<div >
		<slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
		<slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
	</div>
</template>
```

3. 作用域插槽
数据在组件的自身，但是根据数据生成的结构需要使用者来决定
