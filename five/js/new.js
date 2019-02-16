window.onload=function(){
		waterfor("main","box");
		var backfunc={"data":[{"src":"24.jpg"},{"src":"25.jpg"},{"src":"26.jpg"},{"src":"28.jpg"},{"src":"29.jpg"}
		,{"src":"30.jpg"},{"src":"31.jpg"},{"src":"32.jpg"},{"src":"33.jpg"},{"src":"34.jpg"},{"src":"35.jpg"}
		,{"src":"36.jpg"},{"src":"37.jpg"},{"src":"38.jpg"},{"src":"39.jpg"},{"src":"40.jpg"},{"src":"57.jpg"}
		,{"src":"40.jpg"},{"src":"41.jpg"},{"src":"42.jpg"},{"src":"43.jpg"},{"src":"44.jpg"},{"src":"60.jpg"}
		,{"src":"46.jpg"},{"src":"47.jpg"},{"src":"48.jpg"},{"src":"49.jpg"},{"src":"50.jpg"},{"src":"62.jpg"}
		,{"src":"50.jpg"},{"src":"51.jpg"},{"src":"52.jpg"},{"src":"53.jpg"},{"src":"54.jpg"},{"src":"55.jpg"},]};
		window.onscroll=function(){
			if(havescreen()){
				var oParent=document.getElementById("main");
				for(var i=0;i<backfunc.data.length;i++){
					var newbox1=document.createElement("div");
					newbox1.className='box';
					oParent.appendChild(newbox1);
					var newbox2=document.createElement("div");
					newbox2.className='pis';
					newbox1.appendChild(newbox2);
					var newimg=document.createElement("img");
					newimg.src='img/'+backfunc.data[i].src;
					newbox2.appendChild(newimg);
				}
				waterfor("main","box");
			}
		}
// window.onscroll=function(){
//      if(havescreen()){
//          var oParent = document.getElementById('main');// 父级对象
//          for(var i=0;i<backfunc.data.length;i++){
//              var oPin=document.createElement('div'); //添加 元素节点
//              oPin.className='box';                   //添加 类名 name属性
//              oParent.appendChild(oPin);              //添加 子节点
//              var oBox=document.createElement('div');
//              oBox.className='pis';
//              oPin.appendChild(oBox);
//              var oImg=document.createElement('img');
//              oImg.src='img/'+backfunc.data[i].src;
//              oBox.appendChild(oImg);
//          }
//          waterfor('main','box');
//      };
//  }
}


function waterfor(parent,box){
	var oParent=document.getElementById("main");
	var oBox=getclass(box);
	var oWidth=oBox[0].offsetWidth;
	var winWidth=document.documentElement.clientWidth;
	var cols=Math.floor(winWidth/oWidth);
	oParent.style.cssText="width:"+(cols*oWidth+5)+"px;margin: 0 auto";
	var arr1=new Array();
	   	for(var i=0;i<oBox.length;i++){
	   		if(i<cols){
	   			var OHight=oBox[i].offsetHeight;
	   			arr1.push(OHight);
	   		}else{
	   			var oMin=Math.min.apply(null,arr1);
	   			var index=getindex(arr1,oMin);
	   			oBox[i].style.position="absolute";
	   			oBox[i].style.top=oMin+"px";
	   			oBox[i].style.left=oWidth*index+"px";
	   			arr1[index]=arr1[index]+oBox[i].offsetHeight;
	   		}
	   		
	   	}
}

function getclass(cla){
	var oParent=document.getElementById("main");
	var oo=oParent.getElementsByTagName("*");
	var arrs=new Array();
	for(var i=0;i<oo.length;i++){
		if(oo[i].className==cla){
			arrs.push(oo[i]);
		}
	}
	return arrs;
}


function getindex(arr,min){
	for(var i in arr){
		if(arr[i]==min){
			return i;
		}
		
	}
}

function havescreen(){
	var oParent=document.getElementById("main");
	var oBox=document.getElementsByClassName("box");
	var moon=oBox[oBox.length-1];
	var lastBoxTop= oBox[oBox.length-1].offsetTop+(Math.floor(oBox[oBox.length-1].offsetHeight/2));
	var scrollTTop=document.body.scrollTop||document.documentElement.scrollTop;
	var bodyTop=document.body.clientHeight||document.documentElement.clientHeight;
	var needtop=bodyTop+scrollTTop;
	console.log(needtop);
	console.log(lastBoxTop);
 	return(lastBoxTop<needtop?true:false)

}