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
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			...mapState(['sum','school','subject']),

			...mapGetters(['bigSum']),
		},
		methods: {
			// increment(){
			// 	this.$store.commit('JIA',this.n)
			// },
			// decrement(){
			// 	this.$store.commit('JIAN',this.n)
			// },

			/*
				mapMutations生成的函数是这样的
				increment(value){
			 		this.$store.commit('JIA',value)
			 	},
				当调用increment函数没有传参数的时候，会默认传event事件参数
			*/	
			// 借助mapMutations生成对应的方法，方法中会调用commit去练习mutations(对象写法)
			...mapMutations({increment:'JIA',decrement:'JIAN'}),

			// 数组的写法要保证这里和mutations的方法名字一样



			//=====================================
			// incrementOdd(){
			// 	this.$store.dispatch('jiaOdd',this.n)
			// },
			// incrementWait(){
			// 	this.$store.dispatch('jiaWait',this.n)
			// },
			// 借助mapActions生成对应的方法，方法中会调用dispatch去练习actions
			...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

			// 数组形式同理
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
