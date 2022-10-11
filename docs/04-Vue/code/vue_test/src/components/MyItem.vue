<template>
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
				@blur ="handleBlur(todo,$event)">
        </label>
		
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
		<button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
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
</style>