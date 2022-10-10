<template>
	<div class="app">
		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>

		<!-- v-on在谁身上，就是给谁绑定事件
		由于v-on在Student这个组件标签上，所以是给Student这个组件的实例对象vc身上绑定了一个事件，事件名字叫atguigu，
		如果促发了这个事件，getStudentName函数就会被调用

		方式一：使用@或者v-on添加自定义事件
		 -->
		<Student v-on:atguigu="getStudentName" @demo = 'm1'/>

		<!-- 这样写了之后，就代表在APP组件里可以通过this.$refs.student就可以获取到Student组件的实例对象 
		第二种写法：ref

		@click.native才是Student整个的原生点击事件
		@click='show'这样写vue会当成自定义事件
		-->
		<Student ref = 'student' @click.native= 'show'/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好啊！',
				studentName:''
			}
		},
		methods: {
			getSchoolName(name){
				console.log('App收到了学校名：',name)
			},
			getStudentName(name,...params) {
				console.log('App收到了学生名',name,params);
				this.studentName = name
			},
			m1 (){
				console.log('m1事件促发了')
			},
			show() {
				console.log('show事件促发了')
			}
			
		},
		mounted () {
			// this.$refs.student.$on('atguigu',this.getStudentName)
			// 只用一次 用once
			// this.$refs.student.$once('atguigu',this.getStudentName)

			this.$refs.student.$on('atguigu',function(name,...params) {
				console.log('App收到了学生名',name,params);
				this.studentName = name;
				//TODO this很重要，vue的承诺，谁触发的this就是谁。所以这里是Student组件触发的，this是Student组件，所以App中的studentName就没有赋值成功。

				// 那为什么this.$refs.student.$on('atguigu',this.getStudentName)就可以修改成功呢。
				// 因为vue也给过承诺，如果你的方法写在A组件的methods中并且使用的普通函数，那么this一定是该组件A的实例对象

				// 所以这里改成箭头函数就可以成功了，当改成箭头函数的时候，没有this，就往外找，往外就是mounted，mounted的this就是vc了
				console.log(this);//直接写函数这里的this是促发这个自定义事件的组件实例，如果改成箭头函数这里this又是vm了

			})
		}
		
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
