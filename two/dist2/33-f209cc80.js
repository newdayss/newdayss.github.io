webpackJsonp([33],{275:function(e,t,a){var n=a(14)(a(742),a(842),null,null);e.exports=n.exports},695:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={quicksort:function(e,t,a){if(t<a){for(var n=e[t],i=t,r=a;i<r;){for(;i<r&&e[r]>=n;)r--;for(e[i]=e[r];i<r&&e[i]<=n;)i++;e[r]=e[i]}e[i]=n,this.quicksort(e,t,i-1),this.quicksort(e,i+1,a)}},deepCopy:function(e){if(e instanceof Array){for(var t=[],a=0;a<e.length;++a)t[a]=this.deepCopy(e[a]);return t}if(e instanceof Object){var t={};for(var a in e)t[a]=this.deepCopy(e[a]);return t}return e}}},705:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.DeviceReportExcel=t.GetFinanceList=t.SellerReportExcel=t.getSellerList=t.AddressReportExcel=t.GetFinanceAddress=t.GetFinanceAddressData=void 0;var i=a(99),r=(n(i),a(151)),s=n(r),l=a(75),o=(n(l),a(98)),c=(n(o),a(152)),d=n(c);n((n(a(153)),a(97))),t.GetFinanceAddressData=function(e){return s.default.Post(d.default.finance.report,e)},t.GetFinanceAddress=function(e){return s.default.Post(d.default.finance.addressArr,e)},t.AddressReportExcel=function(e){return s.default.Post(d.default.finance.addressReport,e)},t.getSellerList=function(e){return s.default.Post(d.default.finance.sellerList,e)},t.SellerReportExcel=function(e){return s.default.Post(d.default.finance.agentReport,e)},t.GetFinanceList=function(e){return s.default.Post(d.default.finance.report,e)},t.DeviceReportExcel=function(e){return s.default.Post(d.default.finance.deviceReport,e)}},742:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(i,r){try{var s=t[i](r),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var s,l=a(151),o=n(l),c=a(152),d=n(c);n(a(695)),a(705),t.default={data:function(){return{isBtn:!1,dialogTableVisible:!1,expands:[],postData:{address_id:"",type:"日",time1:""},address_name:"",dataList:[],detailList:[],addressArr:[],page:1,per_page:10,per_page_code:10,page_detail:1,per_page_detail:10,per_page_detail_code:10,currentPage_detail:1,count_detail:0,currentPage:1,count:0,startDate:"",endDate:"",dayList:"",detail_sn:"",dayNum:30,aliSubmitBtnAddress:!1,calculation:!1,calcObj:{order:0,money:0,allSumMoney:0}}},methods:(s={calculaOn:function(){this.calculation=!this.calculation},getnowDay:function(){var e=new Date,t=e.getMonth()+1,a=e.getDate(),n=e.getFullYear();return a=a<10?"0"+a:a,t=t<10?"0"+t:t,n+"-"+t+"-"+a},historyTime:function(e){var t=this;if(this.dayNum!=e){if(this.dayNum=e,!e)return this.dayList=[],void this.SearchSubmit();var a=new Date;a.setTime(a.getTime()-864e5*e);var n=a.getMonth()+1,i=a.getDate(),r=a.getFullYear();i=i<10?"0"+i:i,n=n<10?"0"+n:n;var s=r+"-"+n+"-"+i,l=this.getnowDay();this.dayList=[],this.dayList[0]=s,this.dayList[1]=l;var o=[],c=a.toUTCString(),d=(new Date).toUTCString();o[0]=c,o[1]=d,this.postData.time1=o,this.isBtn=!0,setTimeout(function(){t.isBtn=!1},1e3),this.SearchSubmit()}},changepick:function(){this.isBtn||(this.dayNum="",this.SearchSubmit())},querySearch:function(e,t){var a=this.addressArr;t(e?a.filter(this.createFilter(e)):a)},createFilter:function(e){return function(t){return-1!=t.value.toLowerCase().indexOf(e.toLowerCase())}},handleSelectCb:function(e){this.postData.address_id=e.id,this.SearchSubmit()},handleIconClick:function(){""!=this.postData.address_id&&(this.postData.address_id="",this.address_name="",this.SearchSubmit())},showTime:function(e){var t=+new Date-6048e5;this.endDate=new Date(t).format("yyyy-MM-dd");var a=+new Date;if(this.startDate=new Date(a).format("yyyy-MM-dd"),!e.length>0&&(e=[new Date(t),new Date(a)]),null==e[0]||null==e[1])return void(this.dayList="");var n=e.length>0?e[0].format("yyyy-MM-dd"):this.startDate,i=e.length>0?e[1].format("yyyy-MM-dd"):this.endDate;this.dayList=[],this.dayList.push(n),this.dayList.push(i)},rowClick:function(e,t,a){var n=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.dialogTableVisible=!0,n.detail_sn=e.address_id,n.getDetail(0);case 3:case"end":return t.stop()}},t,n)}))()},getDetail:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r(regeneratorRuntime.mark(function n(){var i,r,s,l;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.postData.time1&&t.showTime(t.postData.time1),i=new Map,i.set("日","day").set("月","month").set("周","week"),r={start_time:t.postData.time1?t.dayList[0]:"",end_time:t.postData.time1?t.dayList[1]:"",page:t.page_detail,per_page:t.per_page_detail,address_id:t.detail_sn,type:t.postData.type?i.get(t.postData.type):"day",is_export:a},s=e||r,n.prev=5,n.next=8,o.default.Post(d.default.finance.newaddressDetail,s);case 8:if(l=n.sent,1!=a){n.next=11;break}return n.abrupt("return",l);case 11:t.detailList=l.list,t.count_detail=l.count,t.per_page_detail_code=parseInt(t.per_page_detail),t.detailList.forEach(function(e){e.money=parseFloat(e.money/100).toFixed(2)}),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(5),t.count_detail=0,t.detailList=[],console.log(n.t0);case 22:case"end":return n.stop()}},n,t,[[5,17]])}))()},deviceReportExcel:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.default.Post(d.default.finance.newaddressList,e.getOption(1,1));case 3:a=t.sent,window.location.href=a.url,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Ajax Error");case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},deviceReportExcelDeatil:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getDetail(0,1);case 3:a=t.sent,window.location.href=a.url,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Ajax Error");case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},getSummaries:function(e){var t=e.columns,a=e.data,n=[],i=["address_type","address","date"];return t.forEach(function(e,t){if(0===t)return void(n[t]="合计");var r=a.map(function(t){return Number(t[e.property])});r.every(function(e){return isNaN(e)})?n[t]="-":(n[t]=r.reduce(function(e,t){var a=Number(t);return isNaN(a)?e:e+t},0),i.includes(e.property)?n[t]="-":"money"==e.property&&(n[t]=n[t].toFixed(2)))}),n},changePageNum:function(){this.per_page!=this.per_page_code&&(""!=this.per_page&&0!=this.per_page||(this.per_page=1),this.getData())},changePageNumDetail:function(){this.per_page_detail!=this.per_page_detail_code&&(""!=this.per_page_detail&&0!=this.per_page_detail||(this.per_page_detail=1),this.getDetail())}},i(s,"showTime",function(e){var t=+new Date-6048e5;this.endDate=new Date(t).format("yyyy-MM-dd");var a=+new Date;if(this.startDate=new Date(a).format("yyyy-MM-dd"),e.length,null==e[0]||null==e[1])return void(this.dayList="");var n=e.length>0?e[0].format("yyyy-MM-dd"):this.startDate,i=e.length>0?e[1].format("yyyy-MM-dd"):this.endDate;this.dayList=[],this.dayList.push(n),this.dayList.push(i)}),i(s,"getData",function(e){var t=this;return r(regeneratorRuntime.mark(function a(){var n,i,r,s,l,c,u;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n={},i="",r=+new Date-2592e6,t.endDate=new Date(r).format("yyyy-MM-dd"),s=+new Date,t.startDate=new Date(s).format("yyyy-MM-dd"),e||(i=[new Date(r),new Date(s)],t.postData.time1=i,n={per_page:t.per_page,page:t.page,start_time:i[0].format("yyyy-MM-dd"),end_time:i[1].format("yyyy-MM-dd")},t.postData.time1&&t.showTime(t.postData.time1)),l=e||n,a.prev=8,a.next=11,o.default.Post(d.default.finance.newaddressList,l);case 11:for(c=a.sent,u=0;u<c.list.length;u++)c.list[u].money=parseFloat(c.list[u].money/100).toFixed(2),c.list[u].sumMoney=parseFloat(c.list[u].sumMoney/100).toFixed(2),t.dayList.length>0||null!=t.postData.time1[0]?c.list[u].time=t.dayList[0]+"-"+t.dayList[1]:c.list[u].time="-",c.list[u].detail=[],c.list[u].number=u,c.list[u].money_code=c.list[u].money;t.calcObj.money=(parseFloat(c.sumMoney)/100).toFixed(2),t.calcObj.allSumMoney=(parseFloat(c.allSumMoney)/100).toFixed(2),t.calcObj.order=c.orderCount,t.dataList=c.list,t.per_page_code=parseInt(t.per_page),t.count=c.count?c.count:t.count,a.next=29;break;case 21:a.prev=21,a.t0=a.catch(8),t.calcObj.allSumMoney=0,t.calcObj.money=0,t.calcObj.order=0,t.dataList=[],t.count=0,console.log(a.t0);case 29:case"end":return a.stop()}},a,t,[[8,21]])}))()}),i(s,"handleCurrentChange",function(e){var t=this;return r(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.page=e,a.t0=t,a.next=4,t.getOption(e);case 4:a.t1=a.sent,a.t0.getData.call(a.t0,a.t1);case 6:case"end":return a.stop()}},a,t)}))()}),i(s,"handleCurrentChangeDetail",function(e){var t=this;return r(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.page_detail=e,t.getDetail();case 2:case"end":return a.stop()}},a,t)}))()}),i(s,"SearchSubmit",function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,e.getOption();case 3:t.t1=t.sent,t.t0.getData.call(t.t0,t.t1);case 5:case"end":return t.stop()}},t,e)}))()}),i(s,"getOption",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=new Map;a.set("日","day").set("月","month").set("周","week"),this.postData.time1&&""==this.dayNum&&this.showTime(this.postData.time1);var n=this.postData;void 0==n.time1&&(n.time1=[]);var i=n.address_id?n.address_id:0,r=n.time1?this.dayList[0]:"",s=n.time1?this.dayList[1]:"",l=n.type?a.get(n.type):"day",o=e||this.page;return{address_id:i,start_time:r,end_time:s,type:l,per_page:this.per_page,page:o,mode:"address",is_export:t}}),i(s,"getAddressArr",function(){var e=this;return r(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.default.Post(d.default.personal.list,{mode:2});case 3:a=t.sent,e.addressArr=a.data,e.addressArr.forEach(function(e,t){e.value=e.address}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()}),s),watch:{per_page:function(){1!=this.per_page&&(this.per_page=this.per_page.replace(/[^0-9]/g,""))},per_page_detail:function(){1!=this.per_page_detail&&(this.per_page_detail=this.per_page_detail.replace(/[^0-9]/g,""))},"postData.type":{handler:function(e,t){this.page_detail=1,this.per_page_detail=10,this.getDetail()},deep:!0},address_name:function(){""==this.address_name&&(this.postData.address_id="")}},created:function(){this.$store.commit("checkFinace","address"),this.getAddressArr(),this.getData()},activated:function(){}}},842:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-template"},[a("div",{staticClass:"main-container",staticStyle:{"padding-top":"20px"}},[a("div",{staticClass:"newScreening"},[a("div",{staticClass:"newScreening-item"},[a("label",{attrs:{for:"newScreeningTwo"}},[e._v("时间区间：")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"-",placeholder:"选择日期范围","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:function(t){e.changepick()}},model:{value:e.postData.time1,callback:function(t){e.$set(e.postData,"time1",t)},expression:"postData.time1"}}),e._v(" "),a("label",{staticClass:"picker-data",attrs:{for:"newScreeningSix"}},[e._v("最近：")]),e._v(" "),a("ul",{staticClass:"newScreening-ul picker-data-ul clearfixed"},[a("li",{class:{active:30==e.dayNum},on:{click:function(t){e.historyTime(30)}}},[e._v("1个月")]),e._v(" "),a("li",{class:{active:90==e.dayNum},on:{click:function(t){e.historyTime(90)}}},[e._v("3个月")]),e._v(" "),a("li",{class:{active:180==e.dayNum},on:{click:function(t){e.historyTime(180)}}},[e._v("半年")])])],1),e._v(" "),a("div",{staticClass:"newScreening-item"},[a("label",{attrs:{for:"newScreeningOne"}},[e._v("地      址：")]),e._v(" "),a("el-autocomplete",{staticClass:"inline-input addWidth",attrs:{"suffix-icon":"el-icon-date","fetch-suggestions":e.querySearch,placeholder:"请选择场地地址"},on:{select:e.handleSelectCb},model:{value:e.address_name,callback:function(t){e.address_name=t},expression:"address_name"}}),e._v(" "),a("div",{staticClass:"icon-delete-cb",on:{click:function(t){e.handleIconClick()}}})],1)]),e._v(" "),a("div",{staticClass:"table-template"},[a("el-table",{attrs:{"row-key":"number","expand-row-keys":e.expands,data:e.dataList,align:"center"}},[a("el-table-column",{attrs:{type:"index",width:"100",align:"center",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address.address",align:"center",label:"地址","min-width":"220"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address.address_type",align:"center",label:"地址类型",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderCount",align:"center",label:"产生订单数",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",align:"center",label:"时间","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"money",align:"center",label:"收益(元)",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"sumMoney",align:"center",label:"累计收益(元)",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"",align:"center",label:"操作",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"final_detail",on:{click:function(a){e.rowClick(t.row)}}},[e._v("查看详情")])]}}])})],1),e._v(" "),a("div",{staticClass:"jump-ability clearfixed"},[a("div",{staticClass:"jump-btn",class:{"jump-none":0==e.dataList.length}},[a("span",{staticClass:"jump-text jump-bg1",class:{"jump-bg2":e.calculation},attrs:{unselectable:"on"},on:{click:function(t){t.preventDefault(),e.calculaOn()}}},[e._v("统计查询结果")]),e._v(" "),a("span",{class:{"jump-none":e.calculation}},[e._v("|")]),e._v(" "),a("span",{staticClass:"jump-text",on:{click:function(t){e.deviceReportExcel()}}},[e._v("下载查询结果")])]),e._v(" "),a("div",{staticClass:"page-change"},[a("div",{staticClass:"block pagination-template"},[a("el-pagination",{attrs:{layout:"prev, pager, next,jumper",total:e.count,"page-size":e.per_page_code,small:""},on:{"current-change":e.handleCurrentChange}})],1)]),e._v(" "),a("div",{staticClass:"page-number"},[e._v("每页显示\n                    "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.per_page,expression:"per_page"}],domProps:{value:e.per_page},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.changePageNum()},blur:function(t){e.changePageNum()},input:function(t){t.target.composing||(e.per_page=t.target.value)}}}),e._v("\n                    条\n                ")]),e._v(" "),a("div",{staticClass:"countNumber",staticStyle:{float:"right"}},[e._v("共"+e._s(e.count)+"条列表项")])]),e._v(" "),a("div",{staticClass:"calculateBox",class:{disNone:!e.calculation}},[e._v("\n               产生总订单数 "+e._s(e.calcObj.order)+" 笔　|　收益合计 "+e._s(e.calcObj.money)+" 元　|　累计总收益 "+e._s(e.calcObj.allSumMoney)+" 元\n            ")])],1),e._v(" "),a("el-dialog",{attrs:{title:"地址收益详情",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("div",{staticClass:"search-template detailInput"},[a("el-form",{staticClass:"demo-form-inline",staticStyle:{"padding-left":"0"},attrs:{inline:!0,model:e.postData,labelWidth:"70px"}},[a("div",{staticClass:"grid-content bg-purple-dark form-grid-content"},[a("el-form-item",{staticClass:"needLeft",attrs:{label:"视　　图"}},[a("el-radio-group",{model:{value:e.postData.type,callback:function(t){e.$set(e.postData,"type",t)},expression:"postData.type"}},[a("el-radio-button",{attrs:{label:"月"}}),e._v(" "),a("el-radio-button",{attrs:{label:"日"}}),e._v(" "),a("el-radio-button",{attrs:{label:"周"}})],1)],1)],1)])],1),e._v(" "),a("div",{staticClass:"table-template"},[a("div",{staticClass:"table-title"},[a("button",{staticClass:"table-export",class:{"btn-noable":0==e.detailList.length},attrs:{disabled:0==e.detailList.length},on:{click:e.deviceReportExcelDeatil}},[a("span",[e._v("导出")])]),e._v(" "),a("span",{staticClass:"info-list"},[e._v("共"+e._s(e.count_detail)+"条列表项")])]),e._v(" "),a("el-table",{attrs:{"show-summary":!0,"summary-method":e.getSummaries,data:e.detailList,align:"center"}},[a("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address.address",align:"center",label:"地址",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",align:"center",label:"时间",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"money",align:"center",label:"金额(元)",width:""}})],1),e._v(" "),a("div",{staticClass:"jump-ability clearfixed",staticStyle:{"padding-bottom":"20px"}},[a("div",{staticClass:"page-change"},[a("div",{staticClass:"block pagination-template"},[a("el-pagination",{attrs:{layout:"prev, pager, next,jumper",total:e.count_detail,"page-size":e.per_page_detail_code,small:""},on:{"current-change":e.handleCurrentChangeDetail}})],1)]),e._v(" "),a("div",{staticClass:"page-number"},[e._v("每页显示\n                            "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.per_page_detail,expression:"per_page_detail"}],domProps:{value:e.per_page_detail},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.changePageNumDetail()},blur:function(t){e.changePageNumDetail()},input:function(t){t.target.composing||(e.per_page_detail=t.target.value)}}}),e._v("条\n                        ")])])],1)])],1)])},staticRenderFns:[]}}});