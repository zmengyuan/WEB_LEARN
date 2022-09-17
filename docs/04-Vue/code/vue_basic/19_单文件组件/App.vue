<template>
	<div>
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件 汇总所有的组件
	// 脚手架里可以不用写后缀名
	import School from './School'
	import Student from './Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
