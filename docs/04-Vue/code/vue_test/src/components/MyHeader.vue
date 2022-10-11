<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
    </div>
</template>

<script>
    // 引入nanoid
    import {nanoid} from 'nanoid'
    export default {
        name:'MyHeader',
        
        
        data() {
            return {
                //收集用户输入的title
                title:''
            }
        },
        methods: {
            //如何获取用户输入的值呢 方法一：通过事件对象，方法二：v-model 双向数据绑定
            // add (e) {
            //     console.log(e.target.value)
            // }
            add () {
                //校验数据
			    if(!this.title.trim()) return alert('输入不能为空');
                console.log(this.title)
                /*将用户的输入包装成一个todo对象 引用要用nanoid，所以安装 npm i nanoid
                 要把todoObj交给List组件，目前的知识量 要从组件的外部给组件里面携带数据
                 只能<MyList a="">，但是现在list和head组件没有关系，没法传输。所以就
                 想到最初始的方法：todos 给 app，由app再来给list
                 */
                const todoObj = {id:nanoid(),title:this.title,done:false};
                this.$emit('addTodo',todoObj);
                this.title = ''
               
            }
        },
        
    }
</script>

<style  scoped>
    /*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>