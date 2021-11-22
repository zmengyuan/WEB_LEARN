<template>
	<div>
        <!-- age加个冒号就可以是数字格式了
        不加冒号，就是key-value value永远是字符串
        加了冒号：v-bind: 引号里面就是js表达式
         -->
		<Student name="李四" sex="女" :age="18"/>
        <hr>
        <!-- 注意三个组件是各自的 -->
        <!--
        <Student/>
        <hr>
        <Student/> -->
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
