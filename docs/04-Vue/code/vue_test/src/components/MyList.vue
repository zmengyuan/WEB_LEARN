<template>
    <ul class="todo-main">
        <!-- 这里不仅涉及到需要读取todos创建多少条数据，还涉及到要传数据给MyItem 
            用props传 todo记得前面要加: 这样todoObj才是表达式,不然传过去就是个普通todoObj字符串
         -->
        <MyItem 
            v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj" 
        />
    </ul>
</template>

<script>
    import MyItem from './MyItem'
    export default {
        name:'MyList',
        components:{MyItem},
        data() {
            return{
                todos: [
                    {id:'0001',title:'吃饭',done:false},
                    {id:'0002',title:'睡觉',done:false},
                    {id:'0003',title:'喝酒',done:false}
                ]
            }
        }
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