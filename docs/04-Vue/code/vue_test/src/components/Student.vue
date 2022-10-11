<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男',				
			}
		},
		
	}
</script>

<style lang="less" scoped>
	.student {
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>