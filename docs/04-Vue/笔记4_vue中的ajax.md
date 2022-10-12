# 第 4 章：Vue 中的 ajax

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
