<template>
  <div class="main">
    <section class="login_bg">
      <div class="login_title">
        <h1>欢迎登录CTC后台管理系统</h1>
      </div>
      <div class="loginPane">
        <h2>管理员登录</h2>
        <div class="loginInputBox">
          <el-input class="input_inner" v-model="user.name" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        <el-input class="input_inner" v-model="user.password" prefix-icon="el-icon-unlock" placeholder="请输入密码" show-password></el-input>
        <el-button class="subButton" type="primary" @click="subLogin">立即登录</el-button>
        </div>
        
        </div>
    </section>
  </div>
</template>
<script>
import { login } from "@/api/api";
export default {
  name: '',
  data() {
    return {
      user:{},
    };
  },
  created() {
    if(this.$cookieStore.getCookie('logSession')){
      this.$router.push('/news')
    }
  },
  methods: {
    subLogin(){
      let params = {
        name: this.user.name,
        password: this.user.password
      }
      login(params).then( res => {
        if(res.code == 200){
          this.$cookieStore.setCookie( 'logSession', 'admin' + Math.random(10), 12000);//存入用户名，设置有效时间120分钟
          this.$cookieStore.delCookie( 'status')
					this.$message({
						message: '登录成功',
						type: 'success'
					});
          this.$router.push({name:'news',params:{userName:"admin"}});
        }else {
          this.$message.error('登录失败，账户或密码错误！');
        }
      })
    }
  }
};
</script>
<style lang='scss' scoped>
  .main{
    .login_bg{
      position: relative;
      width: 100%;
      height: calc(50vh);
      background-color: #4a8cef;
      .login_title{
        width: 550px;
        position:absolute;
        top:30%;
        left: 50%;
        margin-left: -275px;
        h1{
          font-size: 35px;
          color: #fff;
          font-weight: 500;
          text-align: center;
          letter-spacing: 1px;
          text-shadow: 0 3px 3px #0b60de;
        }
      }
      .loginPane{
        width:550px;
        height: 400px;
        background-color:#ffffff0f;
        position: absolute;
        top:50%;
        left: 50%;
        margin-left:-275px;
        transition: ease all 0.5s;
        box-shadow: 0 5px 10px #4a8cef59;
        h2{
          font-size: 28px;
          color: #fff;
          font-weight: 500;
          text-align: center;
          letter-spacing: 1px;
          text-shadow: 0 3px 3px #0b60de;
          margin-top: 35px;
          margin-bottom:35px;
        }
        .loginInputBox{
          width: 70%;
          margin:0 auto;
          .input_inner{
            height: 44px;
            line-height: 44px;
            margin-bottom:40px;
          }
          .subButton{
            width: 100%;
          }
        }
      }
    }
  }
</style>