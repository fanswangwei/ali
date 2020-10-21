<template>
  <div class="add-news-box">
    <h3>{{ title }}</h3>
		<div v-loading="loading">
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
							<el-option-group
								v-for="group in options"
								:key="group.key"
								:label="group.group">
								<el-option
									v-for="item in group.option"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-option-group>
							</el-option>
						</el-select>
					</div>
				</li>
				<li>
					<span class="label">新闻封面</span>
					<div class="news-item">
						<el-upload
							class="avatar-uploader"
							action="//8.129.3.87:9999/upload"
							:show-file-list="false"
							:limit="1"
							:on-success="handleAvatarSuccess">
							<img v-if="newsForm.coverUrl" :src="newsForm.coverUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</div>
				</li>
			</ul>
			<div class="news-content">
			<span class="label">新闻内容</span>
			<div id="newsEditor"></div>
			</div>
			<div class="form-btn">
				<el-button type="primary" @click="onSubmit" class="news-button">点击发布</el-button>
			</div>
		</div>
  </div>
</template>
<script>
import { addNews } from "@/api/api";
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
      newsForm: {
				title: '',
				remark: '',
				type: '',
				coverUrl: '',
				content: ''
			},
      fileList: [],
      options:[
				{
					group: '关于我们',
					key: 'us',
					option: [{
						label: '公司简介', 
						value: 'us_company'
					}, {
						label: '新闻动态', 
						value: 'us_news'
					}, {
						label: '联系我们', 
						value: 'us_contact'
					}]
				}, 
				{
					group: '化验项目',
					key: 'pro',
					option: [{
						label: '无创产前DNA', 
						value: 'pro_dna'
					}, {
						label: 'CTC检查', 
						value: 'pro_ctc'
					}]
				},
				{
					group: '科研中心',
					key: 'center',
					option: [{
						label: '技术团队', 
						value: 'center_team'
					}, {
						label: '成果与专利', 
						value: 'center_result'
					}, {
						label: '案例分享', 
						value: 'center_example'
					}]
				}
			],
			editor: null,
			loading: false
    };
  },
  created() {
    if (this.$route && this.$route.query && this.$route.query.newsId) {
      this.title = "编辑新闻";
    }
  },
  mounted() {
		this.initEditor()
  },
  methods: {
		initEditor(){
			this.editor = new editor("#newsEditor");
			this.editor.config.height = 300;
			this.editor.config.zIndex = 100;
			this.editor.txt.html(this.newsForm.content);
			this.editor.config.uploadImgServer = '//8.129.3.87:9999/upload'
			this.editor.config.uploadImgMaxLength = 1;
			this.editor.config.onchange = (newHtml) => {
				this.newsForm.content = newHtml;
			}
			this.editor.create();
		},
    onSubmit(){
			let params = this.newsForm;
			let empty = true;
			for (const key in params) {
				if(params[key] !== ''){
					empty = false;
				}
			}
			if(empty){
				this.$message({
          message: '当前新闻内容为空！',
          type: 'warning'
				});
				return false;
			}
			if(params.type == ''){
				this.$message({
          message: '请选择新闻类型',
          type: 'warning'
				});
				return false;
			}
			this.loading = true;
			addNews(params).then( res => {
				if(res.code == 200){
					this.$message({
						message: '新闻新建成功！',
						type: 'success'
					});
					this.editor.txt.html('');
					this.newsForm = {
						title: '',
						remark: '',
						type: '',
						coverUrl: '',
						content: ''
					}
				}
			}).finally(() => {
				this.loading = false;
			})
		},
		handleAvatarSuccess(res, file) {
			console.log(res, file);
			this.newsForm.coverUrl = res.data[0];
		},
	}
};
</script>
<style lang='scss' scoped>
.add-news-box {
  h3 {
    font-weight: normal;
    font-size: 18px;
		font-weight: bold;
    margin-bottom: 20px;
  }
  .news-info {
		li {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
    	margin-bottom: 20px;
			span {
				font-weight: normal;
				font-size: 16px;
				line-height: 40px;
				width: 100px;
			}
			.news-item {
				width: calc(100% - 120px);
			}
		}
	}
	.news-content {
		span {
			font-weight: normal;
			font-size: 16px;
			line-height: 40px;
		}
	}
	.form-btn {
		margin-top: 20px;
	}
	.avatar-uploader-icon {
		cursor: pointer;
		border-radius: 6px;
		border: 1px dashed #d9d9d9;
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
		&:hover {
			border-color: #409EFF;
		}
	}
	.avatar {
		border-radius: 6px;
		width: 178px;
		height: 178px;
		display: block;
	}
}
</style>