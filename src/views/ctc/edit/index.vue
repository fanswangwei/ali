<template>
  <div class="add-news-box">
    <h3>{{title}}</h3>
    <ul class="news-info">
      <li>
        <span class="label">新闻title</span>
        <div class="news-item">
          <el-input
            v-model="newsForm.title"
            auto-complete="off"
          ></el-input>
        </div>
      </li>
      <li>
        <span class="label">新闻摘要</span>
        <div class="news-item">
          <el-input
            type="textarea"
            rows="3"
            resize="none"
            v-model="newsForm.remark"
            auto-complete="off"
          ></el-input>
        </div>
      </li>
      <li>
        <span class="label">新闻封面</span>
        <div class="news-item">
          
        </div>
      </li>
      <li>
        <span class="label">新闻内容</span>
        <div class="news-item">
          
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { addUserInfo, getUserInfo, updateUserInfo } from "@/api/api";
import {
  checkNumber,
  checkEmail,
  checkPhone,
  checkName
} from "@/util/validator.js";
export default {
  name: "",
  data() {
    return {
      title: '新增新闻',
      newsForm: {
        
      },
    };
  },
  created() {
    if(this.$route && this.$route.query && this.$route.query.newsId){
      this.title = "编辑新闻"
    }
  },
  methods: {
    submitForm(formName) {
      
    },
    resetForm(formName) {
      
    }
  }
};
</script>
<style lang='scss' scoped>
.wrapper {
  h3 {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .el-form {
    width: 40%;
  }
}
</style>