<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <h1 v-show="isShow" class="come">你好</h1> -->
    <!-- transition没名字 用.v-enter-active 起了名字就用名字 -->
    <transition name="hello" :appear="true">
        <h1 v-show="isShow">你好用vue</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
 
}
/* 进入的起点 离开的终点*/
.hello-enter,.hello-leave-to{
  transform: translateX(-100%);
}
/* 进入的终点 离开的起点*/
.hello-enter-to,.hello-leave{
  transform: translateX(0);
}

.hello-enter-active,.hello-leave-active{
  transition: 0.5s linear;
}


</style>