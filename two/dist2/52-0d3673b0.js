webpackJsonp([52],{303:function(e,t,n){var o=n(14)(n(771),n(846),null,null);e.exports=o.exports},771:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function o(a,r){try{var i=t[a](r),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}return o("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(151),i=o(r),s=n(152),l=o(s);t.default={data:function(){return{aliSubmitBtn:!1,aliSubmitBtnSn:!1,sendRules:[],dataList:[{money:1}],paramID:"",dialogFormVisible:!1,rules:{time:[{required:!0,message:"请选择时间",trigger:"change"}],info:[{required:!0,message:"请输入描述",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}],money:[{required:!0,message:"请输入金额",trigger:"blur"},{pattern:/^\d+(\.\d+)?$/,message:"金额只能为数字"}],number:[{required:!0,message:"请输入张数",trigger:"blur"},{pattern:/^[1-9]\d*$/,message:"不是有效的数字"}]},listId:"",page:1,per_page:10,count:0,per_page_code:10,comboInfo:{title:"",man:"",jian:"",pulse:"",info:"",time:"",number:"",erect:"",ruleReduce:!0,ruleNum:!0,subtraction:!1},postData:{searchSn:"",searchDevice:""},pickerOptions0:{disabledDate:function(e){return e.getTime()<Date.now()}},linkSrc:!1,linkContent:""}},methods:{checkboxQuan:function(e){1==e?this.comboInfo.subtraction=!this.comboInfo.ruleReduce:this.comboInfo.ruleReduce=!this.comboInfo.subtraction},handleCurrentChange:function(e){this.page=e,this.getData(this.page)},changePageNum:function(){this.postData.per_page!=this.per_page_code&&(""!=this.postData.per_page&&0!=this.postData.per_page||(this.postData.per_page=1),this.getData(this.page))},SearchSubmit:function(){this.postData.page=1,this.getData()},linkWeb:function(e){this.linkSrc=!0,this.linkContent="https://api.test2.gzmypay.com/coupon/batch/details?batch="+e},blurSunmit:function(){var e=this;setTimeout(function(){e.aliSubmitBtn=!1},200)},blurSunmitSn:function(){var e=this;setTimeout(function(){e.aliSubmitBtnSn=!1},200)},timeSizes:function(e){this.comboInfo.time=e,console.log(this.comboInfo.time)},addVouch:function(){this.dialogFormVisible=!0},sendDate:function(e){var t=this;return a(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.$refs[e].validate(function(){var e=a(regeneratorRuntime.mark(function e(n){var o,a,r,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return console.log("Ajax error !"),e.abrupt("return");case 3:if(!t.comboInfo.ruleReduce){e.next=13;break}if(!(""==t.comboInfo.man||parseFloat(t.comboInfo.man)<=0||isNaN(parseFloat(t.comboInfo.man)))){e.next=7;break}return t.$notify({title:"温馨提示",message:"满减金额都必须为正数",type:"info"}),e.abrupt("return");case 7:if(!(""==t.comboInfo.jian||parseFloat(t.comboInfo.jian)<=0||isNaN(parseFloat(t.comboInfo.jian)))){e.next=10;break}return t.$notify({title:"温馨提示",message:"满减金额都必须为正数",type:"info"}),e.abrupt("return");case 10:if(!(parseFloat(t.comboInfo.man)<=parseFloat(t.comboInfo.jian))){e.next=13;break}return t.$notify({title:"温馨提示",message:"抵扣(减)金额不能大于上限(满)金额",type:"info"}),e.abrupt("return");case 13:if(!t.comboInfo.subtraction){e.next=17;break}if(!(""==t.comboInfo.erect||parseFloat(t.comboInfo.erect)<=0||isNaN(parseFloat(t.comboInfo.erect)))){e.next=17;break}return t.$notify({title:"温馨提示",message:"立减金额都必须为正数",type:"info"}),e.abrupt("return");case 17:if(!t.comboInfo.ruleNum){e.next=21;break}if(!(""==t.comboInfo.pulse||parseFloat(t.comboInfo.pulse)<=0&&parseFloat(t.comboInfo.pulse)%1==0)){e.next=21;break}return t.$notify({title:"温馨提示",message:"请输入有效的限领张数",type:"info"}),e.abrupt("return");case 21:return o={},a="",t.comboInfo.ruleReduce&&(o[13262729]={},o[13262729].amount=Math.ceil(100*parseFloat(t.comboInfo.man)),o[13262729].money=Math.ceil(100*parseFloat(t.comboInfo.jian)),a+="13262729,"),t.comboInfo.subtraction&&(o[25809930]={},o[25809930].money=Math.ceil(100*parseFloat(t.comboInfo.erect)),a+="25809930,"),t.comboInfo.ruleNum&&(o[95740654]={},o[95740654].number=t.comboInfo.pulse,a+="95740654,"),e.prev=26,r={coupon_name:t.comboInfo.title,expired_date:t.comboInfo.time,coupon_description:t.comboInfo.info,number:t.comboInfo.number,rule_params:JSON.stringify(o),rules:a.slice(0,a.length-1)},e.next=30,i.default.Post(l.default.voucher.createQuan,r);case 30:s=e.sent,t.$notify({title:"温馨提示",message:"生成成功",type:"success"}),t.dialogFormVisible=!1,t.getData(),e.next=39;break;case 36:e.prev=36,e.t0=e.catch(26),t.$notify({title:"温馨提示",message:"生成失败",type:"info"});case 39:case"end":return e.stop()}},e,t,[[26,36]])}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return n.stop()}},n,t)}))()},resetForm:function(e){this.$refs[e].resetFields()},getData:function(){var e=this;return a(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.default.Post(l.default.voucher.getQuanList,{page:e.page,per_page:e.per_page,coupon_name:e.postData.searchSn,coupon_batch:e.postData.searchDevice});case 3:n=t.sent,n.list.forEach(function(e){e.rules=JSON.parse(e.rules),e.rules.hasOwnProperty("13262729")&&(e.allRules="满"+(parseFloat(e.rules[13262729].amount)/100).toFixed(2)+"(元)减"+(parseFloat(e.rules[13262729].money)/100).toFixed(2)+"(元) \n "),e.rules.hasOwnProperty("25809930")&&(e.allRules="立减"+(parseFloat(e.rules[25809930].money)/100).toFixed(2)+"(元)"),e.rules.hasOwnProperty("95740654")&&(e.allRules+=",限领张数"+e.rules[95740654].number+" \n ")}),e.dataList=n.list,e.count=n.count,e.per_page_code=parseInt(e.per_page),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),e.dataList=[],e.count=0,console.info(t.t0);case 15:case"end":return t.stop()}},t,e,[[0,10]])}))()},handleSelectionChange:function(e){this.multipleSelection=e},getAllRules:function(){var e=this;return a(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.default.Post(l.default.voucher.getRules);case 2:n=t.sent,e.sendRules=n;case 4:case"end":return t.stop()}},t,e)}))()}},watch:{per_page:function(){1!=this.per_page&&(this.per_page=this.per_page.replace(/[^0-9]/g,""))}},created:function(){this.getData(),this.getAllRules()}}},846:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-template",staticStyle:{padding:"20px"}},[n("div",{staticClass:"location-template",staticStyle:{"font-family":"Microsoft JhengHei"}},[n("el-row",[n("el-col",[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[e._v("\n            优惠券列表\n          ")])],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"newScreening"},[n("div",{staticClass:"newScreening-item"},[n("label",{attrs:{for:"newScreeningOne"}},[e._v("优惠券标题：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.postData.searchSn,expression:"postData.searchSn"}],attrs:{id:"newScreeningOne",placeholder:"请输入优惠券标题"},domProps:{value:e.postData.searchSn},on:{focus:function(t){e.aliSubmitBtn=!0},blur:function(t){e.blurSunmit()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.SearchSubmit(t):null},input:function(t){t.target.composing||e.$set(e.postData,"searchSn",t.target.value)}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.aliSubmitBtn,expression:"aliSubmitBtn"}],staticClass:"aliSubmit",on:{click:e.SearchSubmit}},[e._v("确定")])]),e._v(" "),n("div",{staticClass:"newScreening-item"},[n("label",{attrs:{for:"newScreeningTwo"}},[e._v("批　次　号：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.postData.searchDevice,expression:"postData.searchDevice"}],attrs:{id:"newScreeningTwo",placeholder:"请输入批次号"},domProps:{value:e.postData.searchDevice},on:{focus:function(t){e.aliSubmitBtnSn=!0},blur:function(t){e.blurSunmitSn()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.SearchSubmit(t):null},input:function(t){t.target.composing||e.$set(e.postData,"searchDevice",t.target.value)}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.aliSubmitBtnSn,expression:"aliSubmitBtnSn"}],staticClass:"aliSubmit",on:{click:e.SearchSubmit}},[e._v("确定")])])]),e._v(" "),n("div",{staticClass:"table-template "},[n("div",{staticClass:"el-table-header"},[n("el-button",{staticClass:"btn-success ",attrs:{icon:"plus",size:"small",type:"success"},on:{click:function(t){e.addVouch()}}},[e._v("\n        生成\n      ")])],1),e._v(" "),n("el-table",{staticClass:"lowWidth",staticStyle:{width:"100%"},attrs:{data:e.dataList},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"index",width:"55",label:"编号"}}),e._v(" "),n("el-table-column",{attrs:{label:"优惠券标题",prop:"coupon_name","min-width":""}}),e._v(" "),n("el-table-column",{attrs:{label:"优惠券规则",prop:"allRules",width:"130"}}),e._v(" "),n("el-table-column",{attrs:{label:"批次号",prop:"coupon_batch","min-width":""}}),e._v(" "),n("el-table-column",{attrs:{label:"到期时间",prop:"expired_date","min-width":"120"}}),e._v(" "),n("el-table-column",{attrs:{label:"总数",prop:"count",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{label:"领取数",prop:"receive_count",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{label:"使用数",prop:"use_count",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{label:"过期数",prop:"expired_count",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",prop:"id",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small",type:"text"}},[n("div",{staticClass:"private-icon icon-points",attrs:{title:"查看链接"},on:{click:function(n){e.linkWeb(t.row.coupon_batch)}}},[n("span")])])]}}])})],1),e._v(" "),n("div",{staticClass:"jump-ability clearfixed"},[n("div",{staticClass:"page-change"},[n("div",{staticClass:"block pagination-template"},[n("el-pagination",{attrs:{layout:"prev, pager, next,jumper",total:e.count,"page-size":e.per_page_code,small:""},on:{"current-change":e.handleCurrentChange}})],1)]),e._v(" "),n("div",{staticClass:"page-number"},[e._v("每页显示\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.per_page,expression:"per_page"}],domProps:{value:e.per_page},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.changePageNum()},blur:function(t){e.changePageNum()},input:function(t){t.target.composing||(e.per_page=t.target.value)}}}),e._v("条\n      ")]),e._v(" "),n("div",{staticClass:"countNumber",staticStyle:{float:"right"}},[e._v("共"+e._s(e.count)+"条列表项")])])],1),e._v(" "),n("el-dialog",{attrs:{title:"查看链接",visible:e.linkSrc},on:{"update:visible":function(t){e.linkSrc=t}}},[n("el-form",[n("el-form-item",{attrs:{label:"链接："}},[n("div",[e._v(e._s(e.linkContent))]),e._v(" "),n("p",[e._v("使用微信打开链接后，可领取优惠券")])]),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.linkSrc=!1}}},[e._v("确定")])],1)],1)],1),e._v(" "),n("el-dialog",{staticClass:"deviceAdd",attrs:{title:"生成优惠券"},model:{value:e.dialogFormVisible,callback:function(t){e.dialogFormVisible=t},expression:"dialogFormVisible"}},[n("el-form",{ref:"comboInfo",staticClass:"demo-ruleFormTwo",attrs:{model:e.comboInfo,rules:e.rules,"label-width":"120px"}},[n("el-form-item",{staticClass:"addRules",attrs:{label:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"ruleOne"},[n("el-checkbox",{on:{change:function(t){e.checkboxQuan(1)}},model:{value:e.comboInfo.ruleReduce,callback:function(t){e.$set(e.comboInfo,"ruleReduce",t)},expression:"comboInfo.ruleReduce"}}),e._v(" "),n("span",[e._v("满减券")])],1),e._v(" "),n("span",{staticClass:"ruleOne"},[n("el-checkbox",{on:{change:function(t){e.checkboxQuan(2)}},model:{value:e.comboInfo.subtraction,callback:function(t){e.$set(e.comboInfo,"subtraction",t)},expression:"comboInfo.subtraction"}}),e._v(" "),n("span",[e._v("立减券")])],1),e._v(" "),n("span",{staticClass:"ruleOne"},[n("el-checkbox",{model:{value:e.comboInfo.ruleNum,callback:function(t){e.$set(e.comboInfo,"ruleNum",t)},expression:"comboInfo.ruleNum"}}),e._v(" "),n("span",[e._v("限领张数")])],1)]}}])}),e._v(" "),n("el-form-item",{attrs:{label:"优惠券标题：",prop:"title"}},[n("el-input",{staticClass:"textareaInput",attrs:{type:"textarea",resize:"none",autosize:{minRows:1,maxRows:2},placeholder:"请输入优惠券标题"},model:{value:e.comboInfo.title,callback:function(t){e.$set(e.comboInfo,"title",t)},expression:"comboInfo.title"}})],1),e._v(" "),e.comboInfo.ruleReduce?n("el-form-item",{staticClass:"ReduceMoney",attrs:{label:"设置满减："},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("满")]),e._v(" "),n("el-input",{attrs:{type:"number"},model:{value:e.comboInfo.man,callback:function(t){e.$set(e.comboInfo,"man",t)},expression:"comboInfo.man"}}),e._v(" "),n("span",[e._v("(元) 减")]),e._v(" "),n("el-input",{attrs:{type:"number"},model:{value:e.comboInfo.jian,callback:function(t){e.$set(e.comboInfo,"jian",t)},expression:"comboInfo.jian"}}),e._v(" "),n("span",[e._v("(元)")])]}}])}):e._e(),e._v(" "),e.comboInfo.subtraction?n("el-form-item",{staticClass:"ReduceMoney",attrs:{label:"设置立减："},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("立减")]),e._v(" "),n("el-input",{attrs:{type:"number"},model:{value:e.comboInfo.erect,callback:function(t){e.$set(e.comboInfo,"erect",t)},expression:"comboInfo.erect"}}),e._v(" "),n("span",[e._v("(元)")])]}}])}):e._e(),e._v(" "),n("el-form-item",{attrs:{label:"到期时间：",prop:"time"}},[n("el-date-picker",{staticStyle:{width:"260px"},attrs:{"picker-options":e.pickerOptions0,format:"yyyy-MM-dd",type:"date",placeholder:"选择到期时间"},on:{change:e.timeSizes},model:{value:e.comboInfo.time,callback:function(t){e.$set(e.comboInfo,"time",t)},expression:"comboInfo.time"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"描     述：",prop:"info"}},[n("el-input",{staticClass:"textareaInput",attrs:{type:"textarea",resize:"none",autosize:{minRows:1,maxRows:2},placeholder:"请输入描述介绍"},model:{value:e.comboInfo.info,callback:function(t){e.$set(e.comboInfo,"info",t)},expression:"comboInfo.info"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"生成张数：",prop:"number"}},[n("el-input",{attrs:{placeholder:"请输入生成张数"},model:{value:e.comboInfo.number,callback:function(t){e.$set(e.comboInfo,"number",t)},expression:"comboInfo.number"}})],1),e._v(" "),e.comboInfo.ruleNum?n("el-form-item",{attrs:{label:"限领张数：",type:"number"}},[n("el-input",{attrs:{placeholder:"请输入限领张数"},model:{value:e.comboInfo.pulse,callback:function(t){e.$set(e.comboInfo,"pulse",t)},expression:"comboInfo.pulse"}})],1):e._e(),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"10px"}},[n("el-button",{staticStyle:{"margin-left":"100px"},attrs:{type:"primary"},on:{click:function(t){e.sendDate("comboInfo")}}},[e._v("\n          生 成\n        ")]),e._v(" "),n("el-button",{staticStyle:{"margin-left":"30px"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")])],1)],1)],1)],1)},staticRenderFns:[]}}});