/* 首页大屏广告效果 */
$(window).on('load',function(){
	getfor();
	var backfunc={"data":[{"src":"24.jpg"},{"src":"25.jpg"},{"src":"26.jpg"},{"src":"28.jpg"},{"src":"29.jpg"}
		,{"src":"30.jpg"},{"src":"31.jpg"},{"src":"32.jpg"},{"src":"33.jpg"},{"src":"34.jpg"},{"src":"35.jpg"}
		,{"src":"36.jpg"},{"src":"37.jpg"},{"src":"38.jpg"},{"src":"39.jpg"},{"src":"40.jpg"},{"src":"57.jpg"}
		,{"src":"40.jpg"},{"src":"41.jpg"},{"src":"42.jpg"},{"src":"43.jpg"},{"src":"44.jpg"},{"src":"60.jpg"}
		,{"src":"46.jpg"},{"src":"47.jpg"},{"src":"48.jpg"},{"src":"49.jpg"},{"src":"50.jpg"},{"src":"62.jpg"}
		,{"src":"50.jpg"},{"src":"51.jpg"},{"src":"52.jpg"},{"src":"53.jpg"},{"src":"54.jpg"},{"src":"55.jpg"}]};
		$(window).scroll(function(){
			if(haveH()){
				$.each(backfunc.data,function(key,value){
					var oBox=$('<div>').addClass("box").appendTo($("#main"));
					var oPis=$('<div>').addClass("pis").appendTo(oBox);
					$('<img>').attr('src','img/'+$(this).attr("src")).appendTo(oPis);
				})
				getfor();
			}
		})

})

function getfor(){
	var $_w=$(".box").eq(0).outerWidth(); 	//单个宽度
	var $_win=$(window).width();
	var $_cols=Math.floor($_win/$_w);
	var $_box=$(".box");
	$("#main").width($_cols*$_w).css("margin","0 auto");
	var arr1=[];
	$_box.each(function(index,value){
		var $_height=$_box.eq(index).outerHeight();
		if(index<$_cols){
			arr1[index]=$_height;
		}else{
			var minx=Math.min.apply(null,arr1);
			var n=$.inArray(minx,arr1);
			$(this).css({
				"position":'absolute',
				"top":minx+'px',
				"left":n*$_w+'px'
			});
				arr1[n]+=$(this).outerHeight();					
		}
	})
	
}


function haveH(){
	var $_lastbox=$(".box").last();
	var lastH=$_lastbox.offset().top+Math.floor($_lastbox.outerHeight()/2);
	var scrollH=$(window).scrollTop()+$(window).height();
	return(lastH<scrollH?true:false)
	
}
