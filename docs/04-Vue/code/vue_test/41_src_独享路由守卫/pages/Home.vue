<template>
  <div class="panel-body">
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        <!-- 设置缓存，include写的是组件名，是.vue文件里面设置的名字 -->
        <!-- <keep-alive :include="News">
          <router-view></router-view>
        </keep-alive>-->
        <!-- 缓存多个 -->
        <keep-alive :include="['News','Message']">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home组件即将被销毁");
  },
  mounted() {
    console.log("Home组件挂在完毕");
  }
};
</script>

