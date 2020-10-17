<template>
  <div class="add-news-box">
    <h3>{{ title }}</h3>
    <ul class="news-info">
      <li>
        <span class="label">标题</span>
        <div class="news-item">
          <el-input v-model="newsForm.title" auto-complete="off"></el-input>
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
        <span class="label">新闻类型</span>
        <div class="news-item">
          <el-select v-model="newsForm.type" placeholder="请选择新闻类型">
            <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </li>
      <li>
        <span class="label">新闻封面</span>
        <div class="news-item">
          <el-upload
            class="upload-demo"
            action="http://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary"
              >点击上传<i class="el-icon-upload el-icon--right"></i
            ></el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过1MB
            </div>
          </el-upload>
        </div>
      </li>
    </ul>
    <div class="news-item">
     <span class="label">新闻内容</span>
     <div id="newsEditor"></div>
     </div>
     <div class="news-item">
       <el-button type="primary" @click="onSubmit" class="news-button">点击发布</el-button>
     </div>
  </div>
</template>
<script>
import { addUserInfo, getUserInfo, updateUserInfo } from "@/api/api";
import editor from "wangeditor";
import {
  checkNumber,
  checkEmail,
  checkPhone,
  checkName,
} from "@/util/validator.js";
export default {
  name: "",
  data() {
    return {
      title: "新增新闻",
      newsForm: {},
      fileList: [{name:'picture.jpg',url:'#'}],
      options:[{
        value:'选项1',
        label:'类型1'
      },
      {
        value:'选项2',
        label:'类型2'
      },
      {
        value:'选项3',
        label:'类型3'
      },
      {
        value:'选项4',
        label:'类型4'
      }]
    };
  },
  created() {
    if (this.$route && this.$route.query && this.$route.query.newsId) {
      this.title = "编辑新闻";
    }
  },
  mounted() {
    const newsEditor = new editor("#newsEditor");
    newsEditor.config.height = 200;
    newsEditor.config.zIndex = 100;
    newsEditor.create();
  },
  methods: {
    onSubmit(){
      console.log(this.newsForm.title);
      console.log(this.newsForm.remark);
      console.log(this.newsForm.type);
      console.log();


    },
    submitForm(formName) {},
    resetForm(formName) {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm('确定移除${file.name}?');
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        '当前限制选择1个文件,本次选了${files.length}个文件,共选择了${files.length+fileList.length}个文件'
      );
    },
  },
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