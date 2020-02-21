<template>
 <transition name="fade">
    <div v-show="showSider">
    <el-menu router :default-active="$route.path">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/1">浏览</el-menu-item>
      <el-menu-item index="/2">附近</el-menu-item>
      <el-menu-item index="/3">个人资料</el-menu-item>
      <el-menu-item index="/4">首页</el-menu-item>
      <el-menu-item index="/5">浏览</el-menu-item>
      <el-menu-item index="/6">附近</el-menu-item>
      <el-menu-item index="/7">个人资料</el-menu-item>
      <el-menu-item index="/8">首页</el-menu-item>
      <el-menu-item index="/11">浏览</el-menu-item>
      <el-menu-item index="/12">附近</el-menu-item>
      <el-menu-item index="/13">个人资料</el-menu-item>
      <el-menu-item index="/13" style="height: 300px; cursor:default" :disabled="true"></el-menu-item>
    </el-menu>
  </div>
 </transition>
</template>

<script>
export default {
  name: 'Sider',
  created() {
  },
  
  data() {
    return {
      showSider: false
    }
  },
  mounted() {
    this.$eventBus.$on('updateShowSider', (val) => {
      this.showSider = val;
      console.log(val)
    })
  }
}
</script>

<style scoped>
div {
  position: fixed;
  z-index: 999;
  width: 300px;
}
</style>