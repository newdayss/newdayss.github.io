webpackJsonp([39],{301:function(e,t,a){var i=a(14)(a(769),a(862),null,null);e.exports=i.exports},698:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteComboList=t.GetComboSetList=t.TemplateComboAdd=t.DeviceComboAdd=t.DeviceComboDelete=t.GetDeviceComboList=t.templateAdd=t.templateEdit=t.getTemplateDetail=t.templateRemove=t.templateRemoves=t.getDeviceComboList=t.PostAddressList=t.GetAddressList=t.updateDeviceAddress=t.DeleteAddressList=t.AddAddressData=t.RemoveBindDevice=t.updateDeviceTtemplate=t.getTemplateList=t.ChangeDevideStatus=t.AddDevice=t.EditDevice=t.lockDevice=t.PointsDevice=t.getDeviceDetail=t.GetDeviceList=void 0;var n=a(151),s=i(n),r=a(75),l=(i(r),a(98)),o=(i(l),a(152)),c=i(o),d=a(153),u=(i(d),a(97)),p=(i(u),function(e){var t="";for(var a in e)t+=a+"="+e[a]+"&";return"?"+t.substr(0,t.length-1)});t.GetDeviceList=function(e,t){return s.default.Get(c.default.device.list+p(e),t)},t.getDeviceDetail=function(e,t){return s.default.Get(c.default.device.details+p(e),t)},t.PointsDevice=function(e){return s.default.Post(c.default.device.topSplit,{device_id:e.device_id,device_sn:e.device_sn,coin_num:e.coin_num})},t.lockDevice=function(e){return s.default.Post(c.default.device.lockDevice,{device_id:e.device_id})},t.EditDevice=function(e){return s.default.Post(c.default.device.edit,e)},t.AddDevice=function(e){return s.default.Post(c.default.device.join,e)},t.ChangeDevideStatus=function(e){return s.default.Post(c.default.device.deviceStatus,{device_id:e.device_id,status:e.status})},t.getTemplateList=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return s.default.Post(c.default.device.templateList,e,t)},t.updateDeviceTtemplate=function(e){return s.default.Post(c.default.device.updateDeviceTtemplate,{ids:e.ids,device:e.device,toall:e.toall})},t.RemoveBindDevice=function(e){return s.default.Post(c.default.device.removeBind,{device_id:params.device_id})},t.AddAddressData=function(e){return s.default.Get(c.default.device.add+p(e))},t.DeleteAddressList=function(e){return s.default.Post(c.default.personal.del,{aId:e.aId})},t.updateDeviceAddress=function(e){return s.default.Post(c.default.personal.updateDeveceAddress,{id:e.id,province:e.province,city:e.city,county:e.county,addressType:e.addressType,latitude:e.latitude,longitude:e.longitude,address:e.address})},t.GetAddressList=function(e){var t="";for(var a in e)t+=a+"="+e[a]+"&";return s.default.Get(c.default.personal.list+"?"+t.substr(0,t.length-1))},t.PostAddressList=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return s.default.Post(c.default.personal.list,e,t)},t.getDeviceComboList=function(e,t){return s.default.Post(c.default.device.getTemplateFile,e,t)},t.templateRemoves=function(e){return s.default.Post(c.default.device.templateRemoves,{ids:e.ids})},t.templateRemove=function(e){return s.default.Post(c.default.device.templateRemove,{ids:e.ids})},t.getTemplateDetail=function(e,t){return s.default.Get(c.default.device.getTemplateDetail+p(e),t)},t.templateEdit=function(e){return s.default.Post(c.default.device.templateEdit,{name:e.name,id:e.id?e.id:"",default_pay:e.default_pay,alias:e.alias,address_id:e.address_id,combo_type:e.combo_type})},t.templateAdd=function(e){return s.default.Post(c.default.device.templateAdd,{name:e.name,id:e.id?e.id:"",default_pay:e.default_pay,alias:e.alias,address_id:e.address_id,combo_type:e.combo_type})},t.GetDeviceComboList=function(e){return s.default.Post(c.default.device.combo,{device_id:e.device_id})},t.DeviceComboDelete=function(e){return s.default.Post(c.default.device.deviceOneDelete,{id:e.id})},t.DeviceComboAdd=function(e){return s.default.Post(c.default.device.deviceOneAdd,{title:e.title,money:e.money,pulse:e.pulse,id:e.id})},t.TemplateComboAdd=function(e){return s.default.Post(c.default.device.templateComboAdd,{title:e.title,money:e.money,pulse:e.pulse,id:e.id})},t.GetComboSetList=function(e){return s.default.Post(c.default.device.getComboSetList,e)},t.DeleteComboList=function(e){return s.default.Post(c.default.device.deleteComboList,e)}},769:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function i(n,s){try{var r=t[n](s),l=r.value}catch(e){return void a(e)}if(!r.done)return Promise.resolve(l).then(function(e){i("next",e)},function(e){i("throw",e)});e(l)}return i("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(151),r=i(s),l=a(152),o=i(l),c=a(698);t.default={data:function(){return{tempForm:{template_size:""},dialogUpdata:!1,addmentOne:!1,addment:!1,per_page_detail:10,per_page_detail_code:10,count_detail:0,isBtn:!1,dayNum:"",dialogTableVisible:!1,static:!0,statusSrceen:"",statusSrceenSort:"timeUp",aliSubmitBtnSn:!1,dialogUpdataAddress:!1,addressForm:{address_name:"",address_id:""},addressList:[],postData:{d_sn:"",ids:"",page_number:1,per_page:10,per_page_code:10,mode:"pay",address_id:"",template_id:"",time_cycle:"",sort_type:"timeUp"},address_name:"",per_page_code:10,deviceData:[],count:0,currentPage:1,rules:{address_id:{required:!0,message:"请选择场地地址"}},multipleSelection:[]}},methods:{changePageNumDetail:function(){this.per_page_detail!=this.per_page_detail_code&&(""!=this.per_page_detail&&0!=this.per_page_detail||(this.per_page_detail=1),this.getDetail())},handleCurrentChangeDetail:function(e){var t=this;return n(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.page_detail=e,t.getDetail();case 2:case"end":return a.stop()}},a,t)}))()},deviceReportExcelDeatil:function(){var e=this;return n(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getDetail(0,1);case 3:a=t.sent,window.location.href=a.url,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Ajax Error");case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},getDetail:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n(regeneratorRuntime.mark(function i(){var n,s,l,c;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(t.postData.time1&&t.showTime(t.postData.time1),n=new Map,n.set("日","day").set("月","month").set("周","week"),s={start_time:t.postData.time1?t.dayList[0]:"",end_time:t.postData.time1?t.dayList[1]:"",page:t.page_detail,per_page:t.per_page_detail,device_sn:t.detail_sn,type:t.postData.type?n.get(t.postData.type):"day",is_export:a},l=e||s,i.prev=5,c="","deviceOnline"!=t.needList){i.next=13;break}return i.next=10,r.default.Post(o.default.finance.financedetail,l);case 10:c=i.sent,i.next=16;break;case 13:return i.next=15,r.default.Post(o.default.finance.financedetailOff,l);case 15:c=i.sent;case 16:if(1!=a){i.next=18;break}return i.abrupt("return",c);case 18:t.detailList=c.list,t.count_detail=c.count,t.per_page_detail_code=parseInt(t.per_page_detail),t.detailList.forEach(function(e){e.money=parseFloat(e.money/100).toFixed(2)}),i.next=29;break;case 24:i.prev=24,i.t0=i.catch(5),t.count_detail=0,t.detailList=[],console.log(i.t0);case 29:case"end":return i.stop()}},i,t,[[5,24]])}))()},actiondialogTableVisible:function(){this.dialogTableVisible=!0},changeScreenLi:function(e){e!=this.statusSrceen&&(this.statusSrceen=e,this.postData.mode=e,this.SearchSubmit())},changeScreenLiSort:function(e){e!=this.statusSrceenSort&&(this.statusSrceenSort=e,this.postData.sort_type=e,this.SearchSubmit())},changepick:function(){this.isBtn||(this.dayNum="",this.SearchSubmit())},getnowDay:function(){var e=new Date,t=e.getMonth()+1,a=e.getDate(),i=e.getFullYear();return a=a<10?"0"+a:a,t=t<10?"0"+t:t,i+"-"+t+"-"+a},historyTime:function(e){var t=this;if(this.dayNum!=e){if(this.dayNum=e,!e)return this.dayList=[],this.postData.time_cycle="",void this.SearchSubmit();var a=new Date;if(1==e){var i=this.getnowDay();this.dayList=[],this.dayList[0]=i,this.dayList[1]=i;var n=[],s=(new Date).toUTCString();n[0]=s,n[1]=s,this.postData.time_cycle=n,this.isBtn=!0,setTimeout(function(){t.isBtn=!1},1e3)}else{a.setTime(a.getTime()-864e5*e);var r=a.getMonth()+1,l=a.getDate(),o=a.getFullYear();l=l<10?"0"+l:l,r=r<10?"0"+r:r;var c=o+"-"+r+"-"+l,d=this.getnowDay();this.dayList=[],this.dayList[0]=c,this.dayList[1]=d;var u=[],p=a.toUTCString(),m=(new Date).toUTCString();u[0]=p,u[1]=m,this.postData.time_cycle=u,this.isBtn=!0,setTimeout(function(){t.isBtn=!1},1e3)}this.SearchSubmit()}},deviceReportExcel:function(){var e=this;return n(regeneratorRuntime.mark(function t(){var a,i,n,s,l,c,d,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(t.prev=0,a="",i=!0,n=!1,s=void 0,t.prev=5,l=e.multipleSelection[Symbol.iterator]();!(i=(c=l.next()).done);i=!0)d=c.value,a+=d.device_sn+",";t.next=13;break;case 9:t.prev=9,t.t0=t.catch(5),n=!0,s=t.t0;case 13:t.prev=13,t.prev=14,!i&&l.return&&l.return();case 16:if(t.prev=16,!n){t.next=19;break}throw s;case 19:return t.finish(16);case 20:return t.finish(13);case 21:return a=a.substr(0,a.length-1),t.next=24,r.default.Post(o.default.operation.qrCreated,{sn:a});case 24:u=t.sent,window.location.href=u,t.next=32;break;case 28:t.prev=28,t.t1=t.catch(0),e.$notify({title:"温馨提示",message:"导出失败",type:"success"}),console.log(t.t1);case 32:case"end":return t.stop()}},t,e,[[0,28],[5,9,13,21],[14,,16,20]])}))()},blurSunmitSn:function(){var e=this;setTimeout(function(){e.aliSubmitBtnSn=!1},200)},querySearch:function(e,t){var a=this.addressList;t(e?a.filter(this.createFilter(e)):a)},createFilter:function(e){return function(t){return-1!=t.value.toLowerCase().indexOf(e.toLowerCase())}},handleSelectCb:function(e){this.postData.address_id=e.id,this.SearchSubmit()},handleIconClick:function(){""!=this.postData.address_id&&(this.postData.address_id="",this.address_name="",this.SearchSubmit())},getDataList:function(e,t){var a=this;return n(regeneratorRuntime.mark(function i(){var n,s,r;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=a.postData,a.deviceData=[],e&&(n.page_number=e),t&&(n.per_page=t),i.next=6,(0,c.GetDeviceList)(n);case 6:s=i.sent,a.postData.per_page_code=n.per_page,a.per_page_code=parseInt(n.per_page),a.count=s.count,r=new Map,r.set("pay","常规"),r.set("ad","分享朋友圈"),r.set("share","拉粉"),r.set("payAndintegral","M币加支付"),r.set("payAndfy","免费加支付"),s.list.forEach(function(e){e.device.status="enable"==e.device.status,e.mode=r.get(e.mode)}),a.deviceData=s.list;case 18:case"end":return i.stop()}},i,a)}))()},changePageNum:function(){this.postData.per_page!=this.per_page_code&&(""!=this.postData.per_page&&0!=this.postData.per_page||(this.postData.per_page=1),this.getDataList(this.currentPage))},topSplitAll:function(e){var t=this,a="",i="",s="",r=!0,l=!1,o=void 0;try{for(var c,d=e[Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var u=c.value;a+=u.id+",",i+=u.sn+",",s+=u.coin_num+","}}catch(e){l=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(l)throw o}}this.$confirm("此操作将批量启动设备, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(n(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,PointsDevice({device_id:a,device_sn:i,coin_num:s});case 2:n=e.sent,t.$notify({title:"温馨提示",message:"启动成功",type:"success"});case 4:case"end":return e.stop()}},e,t)}))).catch(function(){t.$notify({title:"温馨提示",message:"已取消启动",type:"info"})})},SearchSubmit:function(){var e=this;return n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.getDataList(1);case 1:case"end":return t.stop()}},t,e)}))()},handleSelectionChange:function(e){this.multipleSelection=e},handleCurrentChange:function(e){this.currentPage=e,this.getDataList(this.currentPage)},requireTemplateList:function(){var e=this;return n(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.default.Post(o.default.personal.list,{mode:2});case 2:a=t.sent,a.data.forEach(function(e,t){e.value=e.address}),e.addressList=a.data;case 5:case"end":return t.stop()}},t,e)}))()},create:function(){this.requireTemplateList(),this.getDataList()}},created:function(){this.$store.commit("checkDeviceInfo","list"),this.create()},activated:function(){this.getDataList(this.postData.page_number,this.postData.per_page)},watch:{"postData.per_page":{handler:function(e,t){1!=this.postData.per_page&&(this.postData.per_page=this.postData.per_page.replace(/[^0-9]/g,""))},deep:!0},address_name:function(){""==this.address_name&&(this.postData.address_id="")}}}},862:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-template",staticStyle:{"margin-top":"40px"}},[a("div",{staticClass:"main-container"},[a("div",{staticClass:"location-template"},[a("el-row",[a("el-col",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("\n              库存设置\n            ")])],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"newScreening"},[a("div",{staticClass:"newScreening-item"},[a("label",{attrs:{for:"newScreeningFive"}},[e._v("时间区间：")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"-",placeholder:"选择日期范围","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:function(t){e.changepick()}},model:{value:e.postData.time_cycle,callback:function(t){e.$set(e.postData,"time_cycle",t)},expression:"postData.time_cycle"}}),e._v(" "),a("ul",{staticClass:"newScreening-ul picker-data-ul clearfixed"},[a("li",{class:{active:""==e.dayNum},on:{click:function(t){e.historyTime("")}}},[e._v("全部")]),e._v(" "),a("li",{class:{active:1==e.dayNum},on:{click:function(t){e.historyTime(1)}}},[e._v("今日")]),e._v(" "),a("li",{class:{active:7==e.dayNum},on:{click:function(t){e.historyTime(7)}}},[e._v("本周")]),e._v(" "),a("li",{class:{active:30==e.dayNum},on:{click:function(t){e.historyTime(30)}}},[e._v("本月")])])],1),e._v(" "),a("div",{staticClass:"newScreening-item"},[a("label",{attrs:{for:"newScreeningTwo"}},[e._v("编号/别名：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.postData.d_sn,expression:"postData.d_sn"}],attrs:{id:"newScreeningTwo",placeholder:"请输入设备编号"},domProps:{value:e.postData.d_sn},on:{focus:function(t){e.aliSubmitBtnSn=!0},blur:function(t){e.blurSunmitSn()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.SearchSubmit(t):null},input:function(t){t.target.composing||e.$set(e.postData,"d_sn",t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.aliSubmitBtnSn,expression:"aliSubmitBtnSn"}],staticClass:"aliSubmit",on:{click:e.SearchSubmit}},[e._v("确定")])]),e._v(" "),a("div",{staticClass:"newScreening-item"},[a("label",{attrs:{for:"newScreeningOne"}},[e._v("地　　址：")]),e._v(" "),a("el-autocomplete",{staticClass:"inline-input addWidth",attrs:{"suffix-icon":"el-icon-date","fetch-suggestions":e.querySearch,placeholder:"请选择场地地址"},on:{select:e.handleSelectCb},model:{value:e.address_name,callback:function(t){e.address_name=t},expression:"address_name"}}),e._v(" "),a("div",{staticClass:"icon-delete-cb",on:{click:function(t){e.handleIconClick()}}})],1),e._v(" "),a("div",{staticClass:"newScreening-item"},[a("label",{attrs:{for:"newScreeningThree"}},[e._v("设备模式：")]),e._v(" "),a("ul",{staticClass:"newScreening-ul clearfixed"},[a("li",{class:{active:""==e.statusSrceen},on:{click:function(t){e.changeScreenLi("")}}},[e._v("全部")]),e._v(" "),a("li",{class:{active:"pay"==e.statusSrceen},on:{click:function(t){e.changeScreenLi("pay")}}},[e._v("常规")]),e._v(" "),a("li",{class:{active:"share"==e.statusSrceen},on:{click:function(t){e.changeScreenLi("share")}}},[e._v("拉粉")]),e._v(" "),a("li",{class:{active:"payAndintegral"==e.statusSrceen},on:{click:function(t){e.changeScreenLi("payAndintegral")}}},[e._v("M币加支付")]),e._v(" "),a("li",{class:{active:"payAndfy"==e.statusSrceen},on:{click:function(t){e.changeScreenLi("payAndfy")}}},[e._v("免费加支付")]),e._v(" "),a("li",{class:{active:"ad"==e.statusSrceen},on:{click:function(t){e.changeScreenLi("ad")}}},[e._v("分享朋友圈")])])]),e._v(" "),a("div",{staticClass:"newScreening-item"},[a("label",{attrs:{for:"newScreeningThree"}},[e._v("搜索排序：")]),e._v(" "),a("ul",{staticClass:"newScreening-ul clearfixed"},[a("li",{class:{active:"timeUp"==e.statusSrceenSort},on:{click:function(t){e.changeScreenLiSort("timeUp")}}},[e._v("时间升序")]),e._v(" "),a("li",{class:{active:"timeDown"==e.statusSrceenSort},on:{click:function(t){e.changeScreenLiSort("timeDown")}}},[e._v("时间降序")]),e._v(" "),a("li",{class:{active:"numUp"==e.statusSrceenSort},on:{click:function(t){e.changeScreenLiSort("numUp")}}},[e._v("次数升序")]),e._v(" "),a("li",{class:{active:"numDown"==e.statusSrceenSort},on:{click:function(t){e.changeScreenLiSort("numDown")}}},[e._v("次数降序")])])])]),e._v(" "),a("el-dialog",{staticStyle:{width:"450px",margin:"0 auto"},attrs:{title:"库存设置"},model:{value:e.dialogUpdata,callback:function(t){e.dialogUpdata=t},expression:"dialogUpdata"}},[a("el-form",{ref:"tempForm",staticClass:"addressForm",attrs:{model:e.tempForm,inline:!0,rules:e.rules,id:"tempForm","label-width":"90px"}},[a("el-form-item",{attrs:{"label-width":"140px",label:"库存总数：",prop:"template_id"}},[a("el-input",{staticClass:"inline-input addWidth210",attrs:{placeholder:"请输入设备库存的最大数量"},model:{value:e.tempForm.template_size,callback:function(t){e.$set(e.tempForm,"template_size",t)},expression:"tempForm.template_size"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"140px",label:"每启动一次,需：",prop:"template_id"}},[a("el-input",{staticClass:"inline-input addWidth160",attrs:{placeholder:""},model:{value:e.tempForm.template_size,callback:function(t){e.$set(e.tempForm,"template_size",t)},expression:"tempForm.template_size"}}),e._v(" "),a("span",[e._v("个脉冲")])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogUpdata=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.UpDataIds()}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticStyle:{width:"450px",margin:"0 auto"},attrs:{title:"批量补货"},model:{value:e.addment,callback:function(t){e.addment=t},expression:"addment"}},[a("el-form",{ref:"tempForm",staticClass:"addressForm",attrs:{model:e.tempForm,inline:!0,rules:e.rules,id:"tempForm","label-width":"90px"}},[a("el-form-item",{attrs:{"label-width":"120px",label:"补货数量：",prop:"template_id"}},[a("el-input",{staticClass:"inline-input addWidth135",attrs:{placeholder:"请输入补货数量"},model:{value:e.tempForm.template_size,callback:function(t){e.$set(e.tempForm,"template_size",t)},expression:"tempForm.template_size"}}),e._v(" "),a("el-button",{staticClass:"addmentButton"},[e._v("一键补满")])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addment=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.UpDataIds()}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticStyle:{width:"450px",margin:"0 auto"},attrs:{title:"设备补货"},model:{value:e.addmentOne,callback:function(t){e.addmentOne=t},expression:"addmentOne"}},[a("el-form",{ref:"tempForm",staticClass:"addressForm",attrs:{model:e.tempForm,inline:!0,rules:e.rules,id:"tempForm","label-width":"90px"}},[a("div",{staticClass:"addsize_info"},[a("div",{staticClass:"addsize_header"},[a("p",{staticClass:"addsize_li"},[e._v("设备编号：235295")]),e._v(" "),a("p",{staticClass:"addsize_li"},[e._v("设备别名：纸巾机")])]),e._v(" "),a("div",{staticClass:"addsize_content"},[a("p",{staticClass:"addsize_li"},[e._v("需补满数：10")]),e._v(" "),a("p",{staticClass:"addsize_li"},[e._v("库存剩余：20")]),e._v(" "),a("p",{staticClass:"addsize_li"},[e._v("库存总数：30")]),e._v(" "),a("p",{staticClass:"addsize_li"},[e._v("今日启动：30")])])]),e._v(" "),a("el-form-item",{attrs:{"label-width":"120px",label:"补货数量：",prop:"template_id"}},[a("el-input",{staticClass:"inline-input addWidth200",attrs:{placeholder:"请输入补货数量"},model:{value:e.tempForm.template_size,callback:function(t){e.$set(e.tempForm,"template_size",t)},expression:"tempForm.template_size"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addmentOne=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.UpDataIds()}}},[e._v("确 定")])],1)],1),e._v(" "),a("div",{staticClass:"table-template"},[a("div",{staticClass:"el-table-header"},[a("el-button",{staticClass:"btn-success",class:{"btn-noable":0==e.multipleSelection.length},attrs:{disabled:0==e.multipleSelection.length,size:"small",type:"success"},on:{click:function(t){e.addment=!0}}},[e._v("\n          批量补货\n        ")]),e._v(" "),a("el-button",{staticClass:"btn-success",class:{"btn-noable":0==e.multipleSelection.length},attrs:{disabled:0==e.multipleSelection.length,size:"small",type:"success"},on:{click:function(t){e.dialogUpdata=!0}}},[e._v("\n          批量设置\n        ")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{"min-height":"390",data:e.deviceData,"highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"100",align:"center",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{label:"别名",property:"alias",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"设备编号",property:"device_sn",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"模式",property:"mode",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{label:"设备地址",property:"address.address","min-width":"220"}}),e._v(" "),a("el-table-column",{attrs:{label:"库存总数",property:"create_time",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"库存剩余",property:"create_time",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"启动次数",property:"create_time",width:""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",property:"","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"final_detail",on:{click:function(t){e.dialogUpdata=!0}}},[e._v("基础设置")]),e._v(" "),a("div",{staticClass:"final_detail",on:{click:function(t){e.addmentOne=!0}}},[e._v("补货")])]}}])})],1),e._v(" "),a("div",{staticClass:"jump-ability clearfixed"},[a("div",{staticClass:"page-change"},[a("div",{staticClass:"block pagination-template"},[a("el-pagination",{attrs:{layout:"prev, pager, next,jumper",total:e.count,"page-size":e.postData.per_page_code,small:""},on:{"current-change":e.handleCurrentChange}})],1)]),e._v(" "),a("div",{staticClass:"page-number"},[e._v("每页显示\n          "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.postData.per_page,expression:"postData.per_page"}],domProps:{value:e.postData.per_page},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.changePageNum()},blur:function(t){e.changePageNum()},input:function(t){t.target.composing||e.$set(e.postData,"per_page",t.target.value)}}}),e._v("条\n        ")])])],1)],1)])},staticRenderFns:[]}}});