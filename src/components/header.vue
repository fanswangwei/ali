<template>
  <div class="wapper">
    <div class="logo">
      <img :src="require('@assets/images/LIBERTAS.png')" alt="LIBERTAS">
    </div>
    <div class="header-nav">
      <h3>义乌市昶盈贸易有限公司</h3>
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
  },
  methods: {
    
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
    width: 200px;
    height: 60px;
    border-bottom: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    img {
      width: 176px;
      margin: 0 auto;
    }
  }
  .header-nav {
    margin-left: 200px;
    h3 {
      line-height: 60px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
