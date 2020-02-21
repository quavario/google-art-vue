<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="15">
        <div class="item-container">
          <img
            style
            width="100%"
            class="circle-img-item"
            src="https://lh3.googleusercontent.com/y5h0htkCEcO-ol2HOAUtNymaeft4olN6vJRFSyWNZVqDzrWgr6h1Sm3vbs3Wo-MD=w1200-c-h419-rw-v1"
            alt
          />
          <div>
            <a class="text-item">How 1780s Dress Influenced Fashion</a>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" :gutter="20" style="margin-top: 20px">
      <el-col :span="5">
        <div class="sub-item-container">
          <img
            style
            width="100%"
            src="https://lh3.googleusercontent.com/lk0GbIDlpB4axJKj1QVfBD3yIpBqz9tUt-UhEqeXpT-ow9TpcUSCkDrqdSTW9_SV2g=w467-c-h262-fcrop64=1,3162566ece9ca990-rw-v1"
            alt
          />
          <div>
            <i class="el-icon-share"></i>
            <a>How</a>
          </div>
        </div>
      </el-col>

      <el-col :span="5">
        <div class="sub-item-container">
          <img
            style
            width="100%"
            src="https://lh6.ggpht.com/lrLiU5Xd2GYHOPL2vhjnOu1nKKP8Qyxg0tvyVt4yBG2wa5CTmaLX3MnlCvzh=w467-c-h262-rw-v1"
            alt
          />
          <div>
            <i class="el-icon-share"></i>
            <a>How 1780s Dress Influenced Fashion</a>
          </div>
        </div>
      </el-col>

      <el-col :span="5">
        <div class="sub-item-container">
          <img
            style
            width="100%"
            src="https://lh3.googleusercontent.com/spcEi-RInEg9kQlY_i-7BYrHIsKllKXtZkiP3TWClHNDzJC6gRr0l2GJbo6DKmadUQ=w467-c-h262-rw-v1"
            alt
          />
          <div>
            <i class="el-icon-share"></i>
            <a>How 1780s Dress Influenced Fashion</a>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" style="margin-top:50px">
      <el-col>
        <div>
          <h1 class="title">Trending</h1>
          <p class="sub-title">This week's most popular</p>
        </div>
      </el-col>
    </el-row>

    <!-- trending -->
    <el-row type="flex" justify="center" style="margin-top:20px" :gutter="20">
      <el-col :span="5">
        <div class="sub-item-container">
          <img
            style
            width="100%"
            src="https://lh3.googleusercontent.com/6hJnn46k_NiBCfBbBpcT_CLCCowi--tx8KKp-QiuuLra45e3ZlmM08jj4rRF3lnDVu8=w487-c-h273-fcrop64=1,06ef3571fc43e904-rw-v1"
            alt
          />
          <div>
            <i class="el-icon-share"></i>
            <a>How</a>
          </div>
        </div>
      </el-col>

      <el-col :span="5">
        <div class="sub-item-container">
          <img
            style
            width="100%"
            src="https://lh3.ggpht.com/vZ7NhdKsIiBfYTq4tLybjAtDEKA9pqUELVIAV5NS6_VH3vdaECdGqjIgSe0=w487-c-h273-rw-v1"
            alt
          />
          <div>
            <i class="el-icon-share"></i>
            <a>How 1780s Dress Influenced Fashion</a>
          </div>
        </div>
      </el-col>

      <el-col :span="5">
        <div class="sub-item-container">
          <img style width="100%"
            src="https://lh5.ggpht.com/LI90lhru6dCFuKx4C5S7kDDF0kcxaq98H8ETfWs3UjzjzFylWC14XDJDw_0K=w487-c-h273-rw-v1" alt />
          <div>
            <i class="el-icon-share"></i>
            <a>How 1780s Dress Influenced Fashion</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.title {
  font-size: 30px;
}
.sub-title {
  color: grey
}
</style>