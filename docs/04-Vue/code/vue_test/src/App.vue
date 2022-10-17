<template>
	<div>
		<Count/>
		<hr>
		<!-- <Person></Person> -->
	</div>
</template>

<script>
	import Count from './components/Count'
	// import Person from './components/Person'
	export default {
		name:'App',
		components:{Count},
		mounted() {
			// console.log('App',this)
		},
	}
</script>
