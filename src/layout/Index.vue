<template>
  <div>
    <el-container style="padding-top: 0">
      <el-header>
        <Header />
      </el-header>
      <el-aside style="float: left; index: 999">
        <Sider :show="siderShow" />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './Header'
import Slider from './Sider'
export default {
  name: 'Index',
  created() {
  },
  data() {
    return {
      siderShow: false
    }
  },
  methods: {
  
  },
  components: {
    Header,
    Slider
  },
}
</script>

<style></style>
