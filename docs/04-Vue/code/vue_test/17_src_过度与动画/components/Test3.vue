<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
  


    <transition-group 
     
      name="animate__animated animate__bounce"
      :appear="true"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
        <h1 v-show="isShow" key="1">你好用vue</h1>
        <h1 v-show="isShow" key="2">尚硅谷多个元素过渡用transition-group</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "Test3",
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



</style>