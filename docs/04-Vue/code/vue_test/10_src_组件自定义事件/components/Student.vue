<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>总数：{{number}}</h2>
		<button @click="add">点击++</button>
		<button @click="sendStudentlName">把学生名给App</button>
		<button @click="unbind">解绑atguigu事件</button>
		<button @click="death">销毁当前Student组件的实例（vc)</button>
		
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男',
				number:0
			
			}
		},
		methods: {
			sendStudentlName() {
				// 促发atguigu事件
				this.$emit('atguigu',this.name,1,2);
				this.$emit('demo')
			},
			unbind() {
				// 解绑单个和多个
				// this.$off('atguigu')
				this.$off(['atguigu','demo']);
				//解绑所有自定义事件
				// this.$off();
			},
			death() {
				this.$destroy();//销毁了当前Student实例，销毁后所有Student实例的自定义事件全部不奏效
			},
			add() {
				this.number++;
			}
		}
	}
</script>

<style lang="less" scoped>
	.student {
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>