(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chengjixinxi-add-or-update"],{"165d":function(r,e,t){"use strict";var i,n=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("编号")]),t("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.bianhao))])],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("名称")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.mingcheng,placeholder:"名称"},model:{value:r.ruleForm.mingcheng,callback:function(e){r.$set(r.ruleForm,"mingcheng",e)},expression:"ruleForm.mingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("学号")]),t("v-uni-picker",{attrs:{value:r.xuehaoIndex,range:r.xuehaoOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xuehaoChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.xuehaoOptions[r.xuehaoIndex]))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("学生姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:r.ruleForm.xueshengxingming,callback:function(e){r.$set(r.ruleForm,"xueshengxingming",e)},expression:"ruleForm.xueshengxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("科目")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.kemu,placeholder:"科目"},model:{value:r.ruleForm.kemu,callback:function(e){r.$set(r.ruleForm,"kemu",e)},expression:"ruleForm.kemu"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("成绩")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.chengji,placeholder:"成绩"},model:{value:r.ruleForm.chengji,callback:function(e){r.$set(r.ruleForm,"chengji",e)},expression:"ruleForm.chengji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("工号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.gonghao,placeholder:"工号"},model:{value:r.ruleForm.gonghao,callback:function(e){r.$set(r.ruleForm,"gonghao",e)},expression:"ruleForm.gonghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("教师姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.jiaoshixingming,placeholder:"教师姓名"},model:{value:r.ruleForm.jiaoshixingming,callback:function(e){r.$set(r.ruleForm,"jiaoshixingming",e)},expression:"ruleForm.jiaoshixingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("点评")]),t("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"点评"},model:{value:r.ruleForm.dianping,callback:function(e){r.$set(r.ruleForm,"dianping",e)},expression:"ruleForm.dianping"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(51, 153, 153, 1)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},o=[];t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}))},"214c":function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-42c22025]{padding:%?20?%}.content[data-v-42c22025]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-42c22025]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-42c22025]{width:%?180?%}.avator[data-v-42c22025]{width:%?150?%;height:%?60?%}.right-input[data-v-42c22025]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-42c22025]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-42c22025]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-42c22025]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-42c22025]{border:0}.cu-form-group uni-input[data-v-42c22025]{padding:0 %?30?%}.uni-input[data-v-42c22025]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-42c22025]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-42c22025]::after{line-height:%?88?%}.select .uni-input[data-v-42c22025]{line-height:%?88?%}.input .right-input[data-v-42c22025]{line-height:%?88?%}',""]),r.exports=e},"2cf2":function(r,e,t){var i=t("214c");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var n=t("4f06").default;n("db76a30c",i,!0,{sourceMap:!1,shadowMode:!1})},"790c":function(r,e,t){"use strict";var i=t("2cf2"),n=t.n(i);n.a},"8cb7":function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("96cf");var n=i(t("3b8d")),o=i(t("e2b1")),a={data:function(){return{ruleForm:{bianhao:this.getUUID(),mingcheng:"",xuehao:"",xueshengxingming:"",kemu:"",chengji:"",dianping:"",gonghao:"",jiaoshixingming:"",userid:""},xuehaoOptions:[],xuehaoIndex:0,user:{},ro:{bianhao:!1,mingcheng:!1,xuehao:!1,xueshengxingming:!1,kemu:!1,chengji:!1,dianping:!1,gonghao:!1,jiaoshixingming:!1,userid:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(e){var t,i,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:return i=r.sent,this.user=i.data,this.ruleForm.gonghao=this.user.gonghao,this.ruleForm.jiaoshixingming=this.user.jiaoshixingming,r.next=9,this.$api.option("xuesheng","xuehao",{});case 9:if(i=r.sent,this.xuehaoOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=19;break}return this.ruleForm.id=e.id,r.next=17,this.$api.info("chengjixinxi",this.ruleForm.id);case 17:i=r.sent,this.ruleForm=i.data;case 19:if(!e.cross){r.next=66;break}n=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(n);case 22:if((r.t1=r.t0()).done){r.next=66;break}if(o=r.t1.value,"bianhao"!=o){r.next=28;break}return this.ruleForm.bianhao=n[o],this.ro.bianhao=!0,r.abrupt("continue",22);case 28:if("mingcheng"!=o){r.next=32;break}return this.ruleForm.mingcheng=n[o],this.ro.mingcheng=!0,r.abrupt("continue",22);case 32:if("xuehao"!=o){r.next=36;break}return this.ruleForm.xuehao=n[o],this.ro.xuehao=!0,r.abrupt("continue",22);case 36:if("xueshengxingming"!=o){r.next=40;break}return this.ruleForm.xueshengxingming=n[o],this.ro.xueshengxingming=!0,r.abrupt("continue",22);case 40:if("kemu"!=o){r.next=44;break}return this.ruleForm.kemu=n[o],this.ro.kemu=!0,r.abrupt("continue",22);case 44:if("chengji"!=o){r.next=48;break}return this.ruleForm.chengji=n[o],this.ro.chengji=!0,r.abrupt("continue",22);case 48:if("dianping"!=o){r.next=52;break}return this.ruleForm.dianping=n[o],this.ro.dianping=!0,r.abrupt("continue",22);case 52:if("gonghao"!=o){r.next=56;break}return this.ruleForm.gonghao=n[o],this.ro.gonghao=!0,r.abrupt("continue",22);case 56:if("jiaoshixingming"!=o){r.next=60;break}return this.ruleForm.jiaoshixingming=n[o],this.ro.jiaoshixingming=!0,r.abrupt("continue",22);case 60:if("userid"!=o){r.next=64;break}return this.ruleForm.userid=n[o],this.ro.userid=!0,r.abrupt("continue",22);case 64:r.next=22;break;case 66:this.styleChange();case 67:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xuehaoChange:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(e){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.xuehaoIndex=e.target.value,this.ruleForm.xuehao=this.xuehaoOptions[this.xuehaoIndex],r.next=4,this.$api.follow("xuesheng","xuehao",{columnValue:this.ruleForm.xuehao});case 4:t=r.sent,t.data.xueshengxingming&&(this.ruleForm.xueshengxingming=t.data.xueshengxingming);case 6:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.mingcheng){r.next=3;break}return this.$utils.msg("名称不能为空"),r.abrupt("return");case 3:if(this.ruleForm.kemu){r.next=6;break}return this.$utils.msg("科目不能为空"),r.abrupt("return");case 6:if(this.ruleForm.chengji){r.next=9;break}return this.$utils.msg("成绩不能为空"),r.abrupt("return");case 9:if(this.ruleForm.userid){r.next=12;break}return this.$utils.msg("用户id不能为空"),r.abrupt("return");case 12:if(!this.ruleForm.id){r.next=17;break}return r.next=15,this.$api.update("chengjixinxi",this.ruleForm);case 15:r.next=19;break;case 17:return r.next=19,this.$api.add("chengjixinxi",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};e.default=a},ef37:function(r,e,t){"use strict";t.r(e);var i=t("8cb7"),n=t.n(i);for(var o in i)"default"!==o&&function(r){t.d(e,r,(function(){return i[r]}))}(o);e["default"]=n.a},f14c:function(r,e,t){"use strict";t.r(e);var i=t("165d"),n=t("ef37");for(var o in n)"default"!==o&&function(r){t.d(e,r,(function(){return n[r]}))}(o);t("790c");var a,s=t("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"42c22025",null,!1,i["a"],a);e["default"]=u.exports}}]);