<template>
  <div>
                  <ul>
                    <li v-for= "m in messageList" :key="m.id">
                        <!-- 跳转路由携带query参数，to的字符写法 -->
                      <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                      <!-- 跳转路由携带query参数，to的对象 使用name代替path参数，就可以不用写那么长的路径了-->
                      <!-- <router-link :to="{
                        
                          name:'detailname',
                          query: {
                              id:m.id,
                              title:m.title
                          }
                      }">
                          {{m.title}}
                      </router-link> -->

                    <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;

<!-- param的对象写法，不能写path -->
                    <!-- <router-link :to="{
                        
                          name:'detailname',
                          param: {
                              id:m.id,
                              title:m.title
                          }
                      }">
                          {{m.title}}
                      </router-link> -->


                    </li>
                    
                  </ul>
                  <hr>
                  <router-view></router-view>
                </div>
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                messageList:[
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
            }
        }
    }
</script>

<style>

</style>