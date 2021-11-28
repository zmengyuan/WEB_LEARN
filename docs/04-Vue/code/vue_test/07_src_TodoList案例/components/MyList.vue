<template>
    <ul class="todo-main">
        <!-- 这里不仅涉及到需要读取todos创建多少条数据，还涉及到要传数据给MyItem 
            用props传 todo记得前面要加: 这样todoObj才是表达式,不然传过去就是个普通todoObj字符串
         -->
        <MyItem 
            v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj" 
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
        />
    </ul>
</template>

<script>
    import MyItem from './MyItem'
    export default {
        name:'MyList',
        components:{MyItem},
        //声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
		props:['todos','checkTodo','deleteTodo']
        
    }
</script>

<style  scoped>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>