<template>
    <transition name="todo" :appear="true">
		<li>
			<label>
				<!-- 如何在vue中动态的让标签拥有某个属性 checked -->
				<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
				<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props 
					如果用下面的代码，handleCheck()相关的函数就可以不用写了。
					vue只能监视浅层次的props,对象的属性值修改它不能监视到
				-->
				<!-- <input type="checkbox" v-model="todo.done"/> -->
				<span v-show="!todo.isEdit">{{todo.title}}</span>
				<input 
					v-show="todo.isEdit" 
					type="text" 
					:value="todo.title" 
					@blur ="handleBlur(todo,$event)"
					ref="inputTitle"
				>
			</label>
			
			<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
			<button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
		</li>
	</transition>
</template>

<script>
import pubsub from 'pubsub-js'
    export default {
        name:'MyItem',
        //声明接收
		props:['todo'],
        methods: {
            handleCheck(id){
                console.log(id);
                //通知App组件将对应的todo对象的done值取反
				// this.checkTodo(id)
				this.$bus.$emit('checkTodo',id);
            },
            //删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					// this.deleteTodo(id)

					// 全局事件总线
					// this.$bus.$emit('deleteTodo',id);

					// 消息发布订阅
					pubsub.publish('deleteTodo',id);
				}
			},
			// 编辑
			handleEdit(todo) {
				// 不能这样写，这样写vue不能监视它的变化
				// todo.isEdit = true;

				if (todo.hasOwnProperty('isEdit')) {
					todo.isEdit = true;
				}else {
					this.$set(todo,'isEdit',true);
				}
				// 想在这里直接获取input框的焦点是获取不到的
				// this.$refs.inputTitle,focus();
				// 因为这句代码执行的时候，input框还处于隐藏状态，vue是要这段代码块里面的代码都执行了，看到isEdit数据变化了才会去解析模板的。
				/* 
				所以可以处理的是
				 	1 定时器，延迟200ms执行 或者不写时间，即使不写时间它也会延迟点点执行
					2 官方也想到这个了，使用nextTick
				*/
				this.$nextTick(function(){
					this.$refs.inputTitle,focus();
				})
				
			},
			// 失去焦点回调
			handleBlur(todo,e) {
				todo.isEdit = false;
				
				if (!e.target.value.trim()) {
					return
				}
				this.$bus.$emit('updateTodo',todo.id,e.target.value);
			}
        },
        
    }
</script>

<style  scoped>
    /*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

    li:hover{
		background-color: #ddd;
	}
    li:hover button{
		display: block;
	}

	/* 过度与动画 */
	@keyframes atguigu {
		from {
			transform:translateX(100%);
		}
		to {
			transform: translateX(0px);
		}
	}
	.todo-enter-active{
		animation: atguigu 1s;
	}
	.todo-leave-active{
		animation: atguigu 1s reverse
	}
</style>