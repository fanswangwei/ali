<template>
	<div class="news-list">
    <div class="search">
      <span class="label">新闻类型</span>
        <div class="news-item">
          <el-select v-model="type" placeholder="请选择新闻类型" @change="typeChange">
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
    </div>
		<el-table :data="newsList" border style="width: 100%" v-loading="loading">
			<el-table-column prop="title" align="center" label="标题"></el-table-column>
			<el-table-column prop="remark" align="center" label="摘要"></el-table-column>
			<el-table-column prop="type" align="center" label="栏目">
        <template slot-scope="scope">
          <span>{{filterType(scope.row.type)}}</span>
        </template>
      </el-table-column>
			<el-table-column prop="coverUrl" align="center" label="封面">
        <template slot-scope="scope">
          <a :href="scope.row.coverUrl" target="_blank"><img :src="scope.row.coverUrl" alt="封面图片" width="100" height="80"></a>
        </template>
      </el-table-column>
			<el-table-column prop="createdTime" align="center" label="创建时间">
        <template slot-scope="scope">
          <span>{{dateFormat('yy-MM-dd', scope.row.createdTime)}}</span>
        </template>
      </el-table-column>
			<el-table-column align="center" label="操作">
				<template slot-scope="scope">
					<!-- <el-button
            type="primary"
            size="small"
            @click="$router.push({path: '/editnews', query: {newsId: 1234}})"
          >编辑</el-button> -->
					<el-button size="small" @click="deleteNews(scope)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="page-box">
			<el-pagination background @current-change="currentChange" :current-page="page.pageNum" layout="prev, pager, next" :total="page.total"> </el-pagination>
		</div>
	</div>
</template>
<script>
import { getNews, deleteNews } from '@/api/api'
import {dateFormat} from '@/util/common'
export default {
	name: '',
	data() {
		return {
      newsList: [{}],
      page: {
        total: 100,
        pageNum: 1,
        pageSize: 10
      },
      type: '',
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
      loading: false
		}
	},
	created() {
		this.getNews()
	},
	methods: {
    dateFormat,
    filterType(key){
      if (!key) {return;} 
      let typeArr = key && key.split('_');
      console.log(typeArr)
      let typeMain = '', type = '';
      switch (typeArr[0]) {
        case 'us': typeMain = '关于我们'; break;
        case 'pro': typeMain = '化验项目'; break;
        case 'center': typeMain = '科研中心'; break;
      }
      switch (key) {
        case 'us_company': type = '公司简介'; break;
        case 'us_news': type = '新闻动态'; break;
        case 'us_contact': type = '联系我们'; break;
        case 'pro_dna': type = '无创产前DNA'; break;
        case 'pro_ctc': type = 'CTC检查'; break;
        case 'center_team': type = '技术团队'; break;
        case 'center_result': type = '成果与专利'; break;
        case 'center_example': type = '案例分享'; break;
      }
      return typeMain + '-' + type;
    },
		getNews() {
      this.loading = true;
      let params = {
        type: this.type,
        pageNum: this.page.pageNum,
        pageSize: 10
      }
			getNews(params).then((res) => {
        if(res.code == 200){
          this.newsList = res.data;
          this.page.total = res.total
        }else {
          this.newsList = [];
          this.page.total = 0
        }
      }).finally( () => {
        this.loading = false
      })
		},
		deleteNews(scope) {
      let params = {
        _id: scope.row._id
      }
      console.log(params);
      this.$confirm('此操作将永久删除新闻, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading = true
        deleteNews(params).then( res => {
          if(res.code == 200){
            this.$message({
              message: '删除成功！',
              type: 'success'
            });
            this.getNews();
          }else {
            this.$message.error('删除失败！');
          }
        }).finally(() => {
          this.loading = false;
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    currentChange(currentPage){
      this.page.pageNum = currentPage;
      this.getNews();
    },
    typeChange(){
      this.getNews();
    }
	},
}
</script>
<style lang="scss" scoped>
.news-list {
  .search {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    span {
      margin-right: 25px;
    }
  }
  .page-box {
    text-align: right;
    margin-top: 20px;
  }
}
</style>
