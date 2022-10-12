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
  name: "Test",
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

@keyframes atguigu {
    from {
        transform:translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}

.come {
    animation: atguigu 1s;
}

.go {
    animation: atguigu 1s reverse
}

/* vue用的 */
.hello-enter-active{
    animation: atguigu 1s;
}
.hello-leave-active{
    animation: atguigu 1s reverse
}
</style>