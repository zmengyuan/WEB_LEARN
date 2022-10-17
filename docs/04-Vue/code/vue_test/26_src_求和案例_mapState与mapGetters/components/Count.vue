<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>当前求和10倍为：{{bigSum}}</h3>
		<h3>我在{{school}}学习{{subject}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			// 靠程序员亲自写计算属性
			// sum(){
			// 	return this.$store.state.sum;
			// },
			// school() {
			// 	return this.$store.state.school;
			// },
			// subject() {
			// 	return this.$store.state.subject;
			// },

			// 借助mapState生成计算属性，从state读取数组（对象写法）
			// ...mapState({
			// 	// 左边本来就是字符串，只是平时写都简写了
			// 	'sum':'sum',
			// 	'school':'school',
			// 	'subject':'subject',
			// }),
			...mapState(['sum','school','subject']),

			// bigSum() {
			// 	return this.$store.getters.bigSum;
			// }
			// ...mapGetters({'bigSum':'bigSum'}),
			...mapGetters(['bigSum']),
		},
		methods: {
			increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() {
			// console.log('Count',this.$store);
			const x = mapState({
				'sum':'sum',
				'school':'school',
				'subject':'subject',

			});
			console.log(x);
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
