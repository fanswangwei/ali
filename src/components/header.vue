<template>
  <div class="wapper">
    <div class="logo">
      <h3>CTC管理后台</h3>
    </div>
    <div class="header-nav">
      <el-menu
        :default-active="activeNav"
        mode="horizontal"
        :router="true"
        class="top-nav">
        <el-menu-item index="ctc" :route="{name: 'news'}">
          <!-- <i class="el-icon-setting"></i> -->
          <span slot="title">CTC</span>
        </el-menu-item>
      </el-menu>
      <div class="center">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img :src="require('@assets/svg/center.svg')" alt="">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader",
  props: {},
  data() {
    return {
      activeNav: 'ctc'
    };
  },
  created() {
    if(this.$route.meta && this.$route.meta.parent){
      this.activeNav = this.$route.meta.parent
    }else {
      this.activeNav = this.$route.name
    }
    console.log(this.activeNav)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wapper {
  height: 100%;
  background: #fff;
  .logo {
    float: left;
    height: 60px;
    border-bottom: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    h3 {
      line-height: 60px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      width: 199px;
    }
  }
  .header-nav {
    margin-left: 200px;
    position: relative;
    .top-nav {
      height: 60px;
      .el-menu-item {
        height: 59px;
      }
    }
    .center {
      position: absolute;
      top: 14px;
      right: 20px;
    }
  }
}
</style>
