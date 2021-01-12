<template>
	<div class="tag-size-box">
		<ul class="tag-size-form">
			<li class="tag-size-type">
				<h4>产品款式码</h4>
				<el-input v-model="productTypeNum" style="width: 150px" />
			</li>
			<li class="tag-size-type">
				<h4>产品颜色表数量</h4>
				<el-input v-model="productNums" style="width: 150px; margin-right: 10px" readonly />
				<el-button type="primary" @click="productNums++" size="small" style="margin-right: 10px"
					>增加</el-button
				>
				<el-button type="primary" @click="productNums--" size="small">减少</el-button>
			</li>
			<li class="tag-size-type">
				<h4>产品价格</h4>
				<el-input v-model="productPrice" style="width: 150px;" />
			</li>
			<li class="tag-size-type">
				<h4>尺码数量</h4>
				<el-button type="primary" @click="productSizeChange(false)" size="small" style="margin-right: 10px"
					>增加</el-button
				>
				<el-button type="primary" @click="productSizeChange(true)" size="small">减少</el-button>
			</li>
      <li class="tag-size-type">
				<h4>尺码表头颜色</h4>
				<el-color-picker v-model="tagSizeColor"></el-color-picker>
			</li>
			<li class="tag-size-type">
				<h4>尺码表头</h4>
				<div class="tag-container">
					<el-tag :key="tag" v-for="tag in tagList" :disable-transitions="false" @close="handleClose(tag)">
						{{ tag }}
					</el-tag>
					<el-input
						class="input-new-tag"
						v-if="tagInputStatus"
						v-model="tagValue"
						ref="saveTagInput"
						size="small"
						@keyup.enter.native="handleInputConfirm"
						@blur="handleInputConfirm"
					>
					</el-input>
					<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
				</div>
			</li>
		</ul>
		<div class="tag-size-view">
			<div class="tag-size-detail">
				<div class="left-model" :style="{ height: 48 * (tableData.length + 1) + 'px' }">
					<h4 :style="{background: tagSizeColor}">Model Number</h4>
					<div class="upload-product-img">
						<img :src="require('@assets/images/43.jpg')" id="productImgViewID" alt="" />
						<form id="productImgView">
							<input type="file" @change="uploadProductImg($event, 'productImgView')" />
						</form>
					  <p>{{ productTypeNum }}</p>
					</div>
				</div>
				<ul class="tag-table right-table">
					<li :style="{background: tagSizeColor}" class="tab-table-title">
						<h4
							v-for="(item, index) in tagList"
							:key="index"
							:style="{ width: 'calc(100% /' + tagList.length + ')' }"
						>
							{{ item }}
						</h4>
					</li>
					<li class="tab-table-detail" v-for="(child, idx) in tableData" :key="idx">
						<div
							v-for="(item, index) in tagList"
							:key="index"
							:style="{ width: 'calc(100% /' + tagList.length + ')' }"
							@click="inputTagSise(child, index)"
						>
							<span>{{ index ? (child['col' + (index + 1)] + 'cm') : child['col' + (index + 1)] }}</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="tag-size-info">
				<p class="price">{{ productPrice }}</p>
				<div class="warm-prompt">
					<span>warm prompt: </span>
					notice: 1cm = 0.3937inch; The error is within 2 ~ 3 cm belongs to the normal phenomenon Shopping
					please refer to our measurement
				</div>
				<ul class="product-list">
					<li class="product-item" v-for="idx in productNums" :key="idx">
						<div class="upload-product-img">
							<!-- <img :src="require('@assets/images/43.jpg')" alt="" /> -->
							<img :src="require('@assets/images/43.jpg')" :id="'productImgColor' + idx + 'ID'" alt="" />
							<form :id="'productImgColor' + idx">
								<input type="file" @change="uploadProductImg($event, 'productImgColor' + idx)" />
							</form>
						</div>
						<p>{{ 'CY-' + (idx + 1) }}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: '',
	data() {
		return {
			tagList: ['Tag Size', 'Length'],
			tagInputStatus: false,
			tagValue: '',
			productTypeNum: 'CY-',
			productNums: 10,
      productPrice: '25.5',
      tagSizeColor: '#281be0',
			tableData: [
				{
					col1: '0',
					col2: '0',
				},
				{
					col1: '0',
					col2: '0',
				},
				{
					col1: '0',
					col2: '0',
				},
				{
					col1: '0',
					col2: '0',
				},
				{
					col1: '0',
					col2: '0',
				},
				{
					col1: '0',
					col2: '0',
				},
				{
					col1: '0',
					col2: '0',
				},
				{
					col1: '0',
					col2: '0',
				},
			],
		}
	},
	created() {},
	methods: {
		handleClose(tag) {
			let index = this.tagList.indexOf(tag);
			this.tagList.splice(index, 1)
		},
		showInput() {
			this.tagInputStatus = true
			this.$nextTick((_) => {
				this.$refs.saveTagInput.$refs.input.focus()
			})
		},
		handleInputConfirm() {
			let tagValue = this.tagValue
			if (tagValue) {
				this.tagList.push(tagValue)
				this.dealTableData()
			}
			this.tagInputStatus = false
			this.tagValue = ''
		},
		dealTableData() {
			this.tableData.map((item) => {
				this.$set(item, 'col' + this.tagList.length, '0')
				// item['col' + this.tagList.length] = 'xx'
				// console.log(item)
			})
		},
		inputTagSise(child, index) {
			this.$prompt('请输入size', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
			})
				.then(({ value }) => {
					child['col' + (index + 1)] = value
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入',
					})
				})
		},
		uploadProductImg(e, ref) {
			// 利用fileReader对象获取file
			var file = e.target.files[0]
			var filesize = file.size
			var filename = file.name

			var reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = (e) => {
				// 读取到的图片base64 数据编码 将此编码字符串传给后台即可
				var imgcode = e.target.result
				// console.log(imgcode)
				let imgId = ref + 'ID'
				console.log(document.getElementById(imgId))
				if (document.getElementById(imgId)) {
					document.getElementById(imgId).src = imgcode
				}
				document.getElementById(ref) && document.getElementById(ref).reset()
			}
		},
		productSizeChange(status) {
			if (status) {
				this.tableData.pop()
			} else {
				let obj = {};
				this.tagList.map((item, index) => {
					obj['col' + (index + 1)] = 0
				})
				console.log(obj);
				this.tableData.push(obj)
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.tag-size-box {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	.tag-size-form {
		width: 35%;
		.tag-size-type {
			margin: 10px 0;

			h4 {
				line-height: 32px;
				font-size: 16px;
				font-weight: normal;
			}
			.tag-container {
				width: 100%;
				.el-tag {
					margin-right: 10px;
					margin-bottom: 10px;
				}
				.button-new-tag {
					margin-right: 10px;
					height: 32px;
					line-height: 30px;
					padding-top: 0;
					padding-bottom: 0;
				}
				.input-new-tag {
					width: 90px;
					margin-right: 10px;
					margin-bottom: 10px;
					vertical-align: bottom;
				}
			}
		}
	}
	.tag-size-view {
		width: 65%;
		padding: 30px 20px;
		.tag-size-detail {
			overflow: hidden;
			border-bottom: 1px solid #ddd;
			border-left: 1px solid #ddd;
			width: 100%;
			.left-model {
				width: 220px;
				float: left;
				text-align: center;
				position: relative;
				h4 {
					width: 221px;
          position: relative;
          left: -1px;
					// background: #281be0;
					font-weight: normal;
          font-size: 14px;
					color: #fff;
					float: left;
					text-align: center;
					line-height: 48px;
					border: 1px solid #ddd;
					border-right: 1px solid #fff;
					border-top: 0;
				}
				.upload-product-img {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 80%;
					img {
						width: 100%;
					}
					input {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -60%);
						z-index: 10;
						width: 100%;
						height: 100%;
						opacity: 0;
					}
          p {
            text-align: center;
            position: absolute;
            bottom: -25px;
            width: 176px;
            text-align: center;
          }
				}
			}
			.tag-table {
				float: right;
				width: calc(100% - 220px);
				.tab-table-title {
					width: calc(100% + 1px);
					overflow: hidden;
					// background: #281be0;
					h4 {
						font-weight: normal;
            white-space:nowrap;
            font-size: 14px;
						color: #fff;
						float: left;
						text-align: center;
						line-height: 48px;
						border: 1px solid #ddd;
						border-right: 0;
						border-top: 0;
            position: relative;
            left: -1px;
					}
				}
				.tab-table-detail {
					overflow: hidden;
					div {
						box-sizing: border-box;
						float: left;
						height: 48px;
						border: 1px solid #ddd;
						border-right: 0;
						border-top: 0;
						display: flex;
						align-items: center;
						justify-content: center;
						span {
							color: rgba($color: #000, $alpha: 0.65);
							font-size: 12px;
						}
						// &:first-child {
						// 	width: 30%;
						// 	border-bottom: 0;
						// }
						&:last-child {
							border-right: 1px solid #ddd;
						}
					}
					&:last-child {
						div {
							border-bottom: 0;
						}
					}
				}
			}
		}
		.tag-size-info {
			.price {
				text-align: right;
				font-size: 12px;
				color: #666;
				line-height: 24px;
			}
			.warm-prompt {
				margin-top: 20px;
				border: 1px solid #444;
				padding: 10px 15px;
				width: 80%;
				margin: 0 auto;
				text-align: center;
				line-height: 24px;
				font-size: 14px;
				color: rgba($color: #000, $alpha: 0.55);
				span {
					font-weight: 400;
					color: rgba($color: #f00, $alpha: 0.85);
				}
			}
			.product-list {
				width: 100%;
				margin: 0 auto;
				text-align: center;
				overflow: hidden;
				.product-item {
					float: left;
					width: 20%;
					box-sizing: border-box;
					padding: 20px;
					text-align: center;
					.upload-product-img {
						width: 100%;
						position: relative;
						img {
							width: 100%;
						}
						input {
							position: absolute;
							top: 0;
							left: 0;
							z-index: 10;
							width: 100%;
							height: 100%;
							opacity: 0;
						}
					}
					p {
						width: 100%;
						font-size: 12px;
						text-align: center;
					}
				}
			}
		}
	}
}
</style>
