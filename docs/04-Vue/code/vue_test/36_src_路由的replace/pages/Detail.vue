<template>
  <ul>
      <!-- <li>消息编号:{{$route.query.id}}</li>
      <li>消息标题L:{{$route.query.title}}</li> -->

      <li>消息编号:{{id}}</li>
      <li>消息标题L:{{title}}</li>
      
  </ul>
</template>

<script>
    export default {
        name:'Detail',
        // props:['a','b'],
        props:['id','title'],
        mounted() {
            
        },
    }
</script>

<style>

</style>