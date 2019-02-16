webpackJsonp([34],{274:function(e,r,t){var a=t(14)(t(740),t(821),null,null);e.exports=a.exports},695:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={quicksort:function(e,r,t){if(r<t){for(var a=e[r],s=r,i=t;s<i;){for(;s<i&&e[i]>=a;)i--;for(e[s]=e[i];s<i&&e[s]<=a;)s++;e[i]=e[s]}e[s]=a,this.quicksort(e,r,s-1),this.quicksort(e,s+1,t)}},deepCopy:function(e){if(e instanceof Array){for(var r=[],t=0;t<e.length;++t)r[t]=this.deepCopy(e[t]);return r}if(e instanceof Object){var r={};for(var t in e)r[t]=this.deepCopy(e[t]);return r}return e}}},696:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,r,t){r.length<2?t(new Error("请上传身份证正反面")):t()},s=function(e,r,t){0==parseFloat(r)&&t(new Error("不能为0")),/(\.\d{3})+/.test(r)?t(new Error("最多为两位小数")):t()};r.default={rules:{password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:3,message:"最小不能小于6位",trigger:"blur"}],oldPassword:[{required:!0,trigger:"blur",message:"请输入当前密码"},{min:6,message:"当前密码不能小于6位"}],merchantName:[{required:!0,trigger:"blur",message:"请输入商户名称"},{max:64,message:"商户名称不能大于64位"}],mchDealType:{required:!0,message:"请选择商户经营类型"},isSetWechatPublicNo:{required:!0,message:"请选择是否有自己的公众号"},remark:[{required:!0,trigger:"blur",message:"说些什么..."},{max:128,message:"备注不能大于128位"}],merchantShortName:[{required:!0,trigger:"blur",message:"请输入商户名称"},{max:64,message:"商户简称不能小于64位"}],industrId:{required:!0,message:"请选择行业类型"},province:{required:!0,message:"请选择所在省"},city:{required:!0,message:"请选择请选择所在市"},address:{required:!0,message:"请输入详细地址"},tel:[{required:!0,message:"请输入手机号码",trigger:"blur"},{type:"string",pattern:/^1[3|6|5|7|8|9]\d{9}$/,message:"请输入正确的手机号"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式"}],legalPerson:[{required:!0,trigger:"blur",message:"请输入企业合法人"}],customerPhone:[{required:!0,trigger:"blur",message:"请输入客服电话，电话为手机号"},{type:"string",pattern:/^1[3|6|5|7|8|9]\d{9}$/,message:"请输入正确的手机号"}],principalMobile:[{required:!0,message:"请输入手机号码",trigger:"blur"},{type:"string",pattern:/^1[3|6|5|7|8|9]\d{9}$/,message:"请输入正确的手机号"}],principal:[{required:!0,trigger:"blur",message:"请输入负责人姓名"}],idCode:[{required:!0,message:"请输入身份证号",trigger:"blur"},{type:"string",pattern:/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,message:"请输入正确的身份证号"}],idCard:[{required:!0,message:"请输入身份证号",trigger:"blur"},{type:"string",pattern:/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,message:"请输入正确的身份证号"}],indentityPhoto:[{required:!0,message:"请上传身份证图片"},{required:!0,validator:a}],bankId:{required:!0,message:"请选择开户银行"},accountCode:[{required:!0,message:"请输入银行卡号",trigger:"blur"}],accountName:[{required:!0,message:"请输入开户人姓名",trigger:"blur"}],idCardType:[{required:!0,message:"请选择帐户类型",trigger:"blur"}],contactLine:[{required:!0,message:"请输入联行号",trigger:"blur"}],bankName:[{required:!0,message:"请输入开户支行名称",trigger:"blur"}],address_type:{required:!0,message:"请选择投放地址"},county:{required:!0,message:"请输入地区"},sn:[{required:!0,message:"请输入设备编号",trigger:"blur"},{min:6,message:"设备编号最小不能小于6位",trigger:"blur"}],alias:{required:!0,message:"请输入内容",trigger:"blur"},default_pay:[{required:!0,message:"请输入最低支付金额"},{pattern:/^\d+(\.\d+)?$/,message:"金额只能为数字"}],template_file:{required:!0,message:"请选择支付模板"},address_id:{required:!0,message:"请选择投放地址"},type:{required:!0,message:"请选择设备类型"},mode:{required:!0,message:"请选择工作模式"},title:[{required:!0,message:"请输入标题"}],money:[{required:!0,message:"请输入付款金额"},{pattern:/^\d+(\.\d+)?$/,message:"付款金额只能为数字"}],pulse:[{required:!0,message:"请输入数量"},{pattern:/^\d+(\.\d+)?$/,message:"数量只能为数字"}],name:[{required:!0,message:"请输入用户名",trigger:"blur"}],bank:[{required:!0,message:"请输入开户银行",trigger:"blur"}],account_name:[{required:!0,message:" 请输入户名",trigger:"blur"}],account:[{required:!0,message:" 请输入银行卡号",trigger:"blur"},{required:!0,message:"请输入银行卡号",trigger:"blur"}],percent:[{required:!0,message:" 请输入分成比例"},{pattern:/^\d+(\.\d+)?$/,message:"分成比例只能为数字"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{type:"string",pattern:/^1[3|6|5|7|8|9]\d{9}$/,message:"请输入正确的手机号"}],user_name:[{required:!0,message:"请输入手机号码",trigger:"blur"},{type:"string",pattern:/^1[3|5|6|7|8|9]\d{9}$/,message:"请输入正确的手机号"}],user:[{required:!0,message:"请输入手机号码",trigger:"blur"},{type:"string",pattern:/^1[3|5|6|7|8|9]\d{9}$/,message:"请输入正确的账号"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],auth:[{required:!0,message:"请选择权限"}],type_default_1:[{required:!0,message:" 请输入每秒最低收费多少元"},{pattern:/^\d+(\.\d+)?$/,message:"收费只能为数字"},{required:!0,validator:s}],type_default_2:[{required:!0,message:" 请输入每秒最低收费多少元"},{pattern:/^\d+(\.\d+)?$/,message:"收费只能为数字"},{required:!0,validator:s}],type_default_3:[{required:!0,message:" 请输入每秒最低收费多少元"},{pattern:/^\d+(\.\d+)?$/,message:"收费只能为数字"},{required:!0,validator:s}],type_default_4:[{required:!0,message:" 请输入每秒最低收费多少元"},{pattern:/^\d+(\.\d+)?$/,message:"收费只能为数字"},{required:!0,validator:s}],type_default_5:[{required:!0,message:" 请输入每秒最低收费多少元"},{pattern:/^\d+(\.\d+)?$/,message:"收费只能为数字"},{required:!0,validator:s}],recharge_money:[{required:!0,message:"请输入对应的金额",trigger:"blur"},{pattern:/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/,message:"请输入正确的金额"}],actual_money:[{required:!0,message:"请输入对应的金额",trigger:"blur"},{pattern:/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/,message:"请输入正确的金额"}],day:[{required:!0,message:"请输入活动日期"}],combo:[{required:!0,message:"请输入套餐名",trigger:"blur"}],min_cash:[{required:!0,message:"请输入最低提现金额",trigger:"blur"},{pattern:/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/,message:"请输入正确的金额"}],edit_device_auth:[{required:!0,message:"请选择套餐权限"}]}}},740:function(e,r,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function a(s,i){try{var n=r[s](i),u=n.value}catch(e){return void t(e)}if(!n.done)return Promise.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)});e(u)}return a("next")})}}Object.defineProperty(r,"__esModule",{value:!0});var i=t(695),n=(a(i),t(152)),u=a(n),d=t(151),o=a(d);a(t(696)),r.default={data:function(){return{queryID:"",postData:{id:"",seller_id:"",device_id:"",device_sn:"",wrong_type:"",wrong_info:"",fixed_info:"",fixed_time:"",status:"",created_at:"",updated_at:""}}},methods:{getData:function(){var e=this;return s(regeneratorRuntime.mark(function r(){var t,a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e.queryID=e.$route.query.id,!e.queryID){r.next=9;break}return r.next=4,o.default.Post(u.default.wrong.detail,{id:e.queryID});case 4:t=r.sent,a=new Map,a.set(0,"未解决").set(1,"已解决"),t.status=a.get(t.status),e.postData=t;case 9:case"end":return r.stop()}},r,e)}))()}},created:function(){var e=this;return s(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e.getData();case 1:case"end":return r.stop()}},r,e)}))()}}},821:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"main-template"},[t("div",{staticClass:"location-template"},[t("el-row",[t("el-col",{attrs:{lg:{span:16},xs:{span:20},sm:{span:14},md:{span:16}}},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),t("el-breadcrumb-item",[e._v("故障管理")]),e._v(" "),t("el-breadcrumb-item",[e._v("列表")]),e._v(" "),t("el-breadcrumb-item",[e._v("故障详情")])],1)],1),e._v(" "),t("el-col",{staticClass:"location-refresh",attrs:{lg:{span:8},xs:{span:4},sm:{span:10},md:{span:8}}},[t("a",{staticClass:"location-template-btn",attrs:{href:"javascript:window.location.reload();"}},[t("el-button",{attrs:{type:"primary"}},[t("icon",{attrs:{name:"refresh",scale:"0.7"}})],1)],1)])],1)],1),e._v(" "),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{lg:{span:12,offset:6},xs:{span:20,offset:2},sm:{span:18,offset:3},md:{span:16,offset:4}}},[t("div",{staticClass:"grid-content bg-purple-dark"},[t("el-form",{ref:"postData",staticClass:"demo-ruleForm",attrs:{model:e.postData,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"设备ID :",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.postData.id,callback:function(r){e.$set(e.postData,"id",r)},expression:"postData.id"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"设备编号 :"}},[t("el-input",{attrs:{disabled:""},model:{value:e.postData.device_sn,callback:function(r){e.$set(e.postData,"device_sn",r)},expression:"postData.device_sn"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"故障类型 :"}},[t("el-input",{attrs:{disabled:""},model:{value:e.postData.wrong_type,callback:function(r){e.$set(e.postData,"wrong_type",r)},expression:"postData.wrong_type"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"故障详情 :"}},[t("el-input",{attrs:{disabled:""},model:{value:e.postData.wrong_info,callback:function(r){e.$set(e.postData,"wrong_info",r)},expression:"postData.wrong_info"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"修复状态 :"}},[t("el-input",{attrs:{disabled:""},model:{value:e.postData.status,callback:function(r){e.$set(e.postData,"status",r)},expression:"postData.status"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"修复详情 :"}},[t("el-input",{attrs:{disabled:""},model:{value:e.postData.fixed_info,callback:function(r){e.$set(e.postData,"fixed_info",r)},expression:"postData.fixed_info"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"修复时间 :"}},[t("el-input",{attrs:{disabled:""},model:{value:e.postData.fixed_time,callback:function(r){e.$set(e.postData,"fixed_time",r)},expression:"postData.fixed_time"}})],1)],1)],1)])],1)],1)},staticRenderFns:[]}}});