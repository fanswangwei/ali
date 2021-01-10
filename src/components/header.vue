<template>
  <div class="wapper">
    <div class="logo">
      <img :src="require('@assets/images/LIBERTAS.png')" alt="LIBERTAS">
    </div>
  </div>
</template>

<script>
import { logout } from "@/api/api";
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
  methods: {
    logout(command){
      console.log('qqqqq');
      if(command == 'logout'){
        logout().then(res => {
          if(res.code == 200){
            this.$cookieStore.delCookie( 'logSession');//存入用户名，设置有效时间1分钟
            this.$router.push('/')

          }
        })
      }
    }
  }
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
