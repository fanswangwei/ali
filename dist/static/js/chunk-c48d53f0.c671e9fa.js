(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c48d53f0"],{"81af":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tag-size-box"},[i("ul",{staticClass:"tag-size-form"},[i("li",{staticClass:"tag-size-type"},[i("h4",[t._v("产品款式码")]),i("el-input",{staticStyle:{width:"150px"},model:{value:t.productTypeNum,callback:function(e){t.productTypeNum=e},expression:"productTypeNum"}})],1),i("li",{staticClass:"tag-size-type"},[i("h4",[t._v("产品颜色表数量")]),i("el-input",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{readonly:""},model:{value:t.productNums,callback:function(e){t.productNums=e},expression:"productNums"}}),i("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.productNums++}}},[t._v("增加")]),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.productNums--}}},[t._v("减少")])],1),i("li",{staticClass:"tag-size-type"},[i("h4",[t._v("产品价格")]),i("el-input",{staticStyle:{width:"150px"},model:{value:t.productPrice,callback:function(e){t.productPrice=e},expression:"productPrice"}})],1),i("li",{staticClass:"tag-size-type"},[i("h4",[t._v("尺码数量")]),i("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.productSizeChange(!1)}}},[t._v("增加")]),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.productSizeChange(!0)}}},[t._v("减少")])],1),i("li",{staticClass:"tag-size-type"},[i("h4",[t._v("尺码表头颜色")]),i("el-color-picker",{model:{value:t.tagSizeColor,callback:function(e){t.tagSizeColor=e},expression:"tagSizeColor"}})],1),i("li",{staticClass:"tag-size-type"},[i("h4",[t._v("尺码表头")]),i("div",{staticClass:"tag-container"},[t._l(t.tagList,(function(e){return i("el-tag",{key:e,attrs:{"disable-transitions":!1},on:{close:function(a){return t.handleClose(e)}}},[t._v(" "+t._s(e)+" ")])})),t.tagInputStatus?i("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.tagValue,callback:function(e){t.tagValue=e},expression:"tagValue"}}):i("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ New Tag")])],2)])]),i("div",{staticClass:"tag-size-view"},[i("div",{staticClass:"tag-size-detail"},[i("div",{staticClass:"left-model",style:{height:48*(t.tableData.length+1)+"px"}},[i("h4",{style:{background:t.tagSizeColor}},[t._v("Model Number")]),i("div",{staticClass:"upload-product-img"},[i("img",{attrs:{src:a("e0bb"),id:"productImgViewID",alt:""}}),i("form",{attrs:{id:"productImgView"}},[i("input",{attrs:{type:"file"},on:{change:function(e){return t.uploadProductImg(e,"productImgView")}}})]),i("p",[t._v(t._s(t.productTypeNum))])])]),i("ul",{staticClass:"tag-table right-table"},[i("li",{staticClass:"tab-table-title",style:{background:t.tagSizeColor}},t._l(t.tagList,(function(e,a){return i("h4",{key:a,style:{width:"calc(100% /"+t.tagList.length+")"}},[t._v(" "+t._s(e)+" ")])})),0),t._l(t.tableData,(function(e,a){return i("li",{key:a,staticClass:"tab-table-detail"},t._l(t.tagList,(function(a,s){return i("div",{key:s,style:{width:"calc(100% /"+t.tagList.length+")"},on:{click:function(a){return t.inputTagSise(e,s)}}},[i("span",[t._v(t._s(s?e["col"+(s+1)]+"cm":e["col"+(s+1)]))])])})),0)}))],2)]),i("div",{staticClass:"tag-size-info"},[i("p",{staticClass:"price"},[t._v(t._s(t.productPrice))]),t._m(0),i("ul",{staticClass:"product-list"},t._l(t.productNums,(function(e){return i("li",{key:e,staticClass:"product-item"},[i("div",{staticClass:"upload-product-img"},[i("img",{attrs:{src:a("e0bb"),id:"productImgColor"+e+"ID",alt:""}}),i("form",{attrs:{id:"productImgColor"+e}},[i("input",{attrs:{type:"file"},on:{change:function(a){return t.uploadProductImg(a,"productImgColor"+e)}}})])]),i("p",[t._v(t._s("CY-"+e))])])})),0)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warm-prompt"},[a("span",[t._v("warm prompt: ")]),t._v(" notice: 1cm = 0.3937inch; The error is within 2 ~ 3 cm belongs to the normal phenomenon Shopping please refer to our measurement ")])}],n=(a("c975"),a("d81d"),a("a434"),a("b0c0"),{name:"",data:function(){return{tagList:["Tag Size","Length"],tagInputStatus:!1,tagValue:"",productTypeNum:"CY-",productNums:10,productPrice:"25.5",tagSizeColor:"#281be0",tableData:[{col1:"0",col2:"0"},{col1:"0",col2:"0"},{col1:"0",col2:"0"},{col1:"0",col2:"0"},{col1:"0",col2:"0"},{col1:"0",col2:"0"},{col1:"0",col2:"0"},{col1:"0",col2:"0"}]}},created:function(){},methods:{handleClose:function(t){var e=this.tagList.indexOf(t);this.tagList.splice(e,1)},showInput:function(){var t=this;this.tagInputStatus=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.tagValue;t&&(this.tagList.push(t),this.dealTableData()),this.tagInputStatus=!1,this.tagValue=""},dealTableData:function(){var t=this;this.tableData.map((function(e){t.$set(e,"col"+t.tagList.length,"0")}))},inputTagSise:function(t,e){var a=this;this.$prompt("请输入size","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(a){var i=a.value;t["col"+(e+1)]=i})).catch((function(){a.$message({type:"info",message:"取消输入"})}))},uploadProductImg:function(t,e){var a=t.target.files[0],i=(a.size,a.name,new FileReader);i.readAsDataURL(a),i.onload=function(t){var a=t.target.result,i=e+"ID";console.log(document.getElementById(i)),document.getElementById(i)&&(document.getElementById(i).src=a),document.getElementById(e)&&document.getElementById(e).reset()}},productSizeChange:function(t){if(t)this.tableData.pop();else{var e={};this.tagList.map((function(t,a){e["col"+(a+1)]=0})),console.log(e),this.tableData.push(e)}}}}),l=n,o=(a("d250"),a("2877")),c=Object(o["a"])(l,i,s,!1,null,"dbefcebe",null);e["default"]=c.exports},a434:function(t,e,a){"use strict";var i=a("23e7"),s=a("23cb"),n=a("a691"),l=a("50c4"),o=a("7b0b"),c=a("65f0"),r=a("8418"),u=a("1dde"),p=a("ae40"),d=u("splice"),g=p("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d||!g},{splice:function(t,e){var a,i,u,p,d,g,y=o(this),b=l(y.length),C=s(t,b),_=arguments.length;if(0===_?a=i=0:1===_?(a=0,i=b-C):(a=_-2,i=f(m(n(e),0),b-C)),b+a-i>h)throw TypeError(v);for(u=c(y,i),p=0;p<i;p++)d=C+p,d in y&&r(u,p,y[d]);if(u.length=i,a<i){for(p=C;p<b-i;p++)d=p+i,g=p+a,d in y?y[g]=y[d]:delete y[g];for(p=b;p>b-i+a;p--)delete y[p-1]}else if(a>i)for(p=b-i;p>C;p--)d=p+i-1,g=p+a-1,d in y?y[g]=y[d]:delete y[g];for(p=0;p<a;p++)y[p+C]=arguments[p+2];return y.length=b-i+a,u}})},d250:function(t,e,a){"use strict";var i=a("ec92"),s=a.n(i);s.a},e0bb:function(t,e,a){t.exports=a.p+"static/img/43.691368c6.jpg"},ec92:function(t,e,a){}}]);