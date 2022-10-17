<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<!-- 这里写.number是因为不写的话n收集到的数据是字符串类型
			还有一种解决方案，就是把option里面的value="1" 改为:value="1"，这样引号里面就是js表达式
		-->
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
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
				sum:0 //当前的和
			}
		},
		methods: {
			increment(){
				this.sum += this.n
			},
			decrement(){
				this.sum -= this.n
			},
			incrementOdd(){
				if(this.sum % 2){
					this.sum += this.n
				}
			},
			incrementWait(){
				setTimeout(()=>{
					this.sum += this.n
				},500)
			},
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
