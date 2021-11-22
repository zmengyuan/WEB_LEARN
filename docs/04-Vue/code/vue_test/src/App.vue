<template>
	<div>
		<Student/>
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
