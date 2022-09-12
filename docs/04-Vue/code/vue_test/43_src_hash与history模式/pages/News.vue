<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>
      news001
      <input type="text" />
    </li>
    <li>
      news002
      <input type="text" />
    </li>
    <li>
      news003
      <input type="text" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1
    };
  },

  //用这种方法实现透明度的变化，在遇到组件有缓存的情况下，切换组件定时器无法销毁，还在工作，所以引出新的生命周期钩子=======================
  // mounted() {
  //   this.timer = setInterval(() => {
  //     console.log("@");
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },
  // beforeDestroy() {
  //   console.log("News即将被销毁了");
  //   clearInterval(this.timer)
  // }
  //=======================

  // News组件从没有出现到出现在你眼前，就叫激活了
  activated() {
    console.log("News组件被激活了");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  }
};
</script>

<style>
</style>