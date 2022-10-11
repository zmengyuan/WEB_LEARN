<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {
			console.log('School',this);
			this.pubId = pubsub.subscribe('hello',function(msgName,data){
				console.log(this);//undefined，因为是pubsub的，vue就不保证this了。所以最好直接写箭头函数
				console.log('有人发布了hello消息，hello消息的回调执行执行了',data);
			})
		},
		beforeDestroy() {
			pubsub.unsubscribe(this.pubId);
		},
		
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>