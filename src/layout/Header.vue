<template>
  <div>
    <el-menu mode="horizontal" router :default-active="$route.path">
      <el-menu-item style="float: left"> 
        <a href="#" @click="siderDisplay">
          <i class="el-icon-menu" style="font-size: 23px"></i>
        </a>
      </el-menu-item>

      <el-menu-item index="4" class="right-menu">个人</el-menu-item>
      <el-menu-item index="3" class="right-menu">附近</el-menu-item>
      <el-menu-item index="2" class="right-menu">浏览</el-menu-item>

      <el-menu-item index="/home" class="right-menu">首页</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showSider: false
    }
  },
  created() {
  },
  methods: {
    siderDisplay: function() {
      this.showSider = !this.showSider;
      this.$eventBus.$emit('updateShowSider', this.showSider)
    }
  }
}
</script>

<style scoped>
ul {
  border-bottom: solid 0px #ffffff !important;
}

.right-menu {
  float: right !important;
}
.menu-icon-size {
  font-size: 20px;
}

div {
  position: fixed;
  width: 97%;
  float: right;
  color: #ffffff;
  z-index: 999;
  overflow: hidden;
  /* text-align: center; */
  /* margin-top: 0px; */
}
</style>