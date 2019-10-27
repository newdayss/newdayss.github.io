$(function(){
	
	$('.pagetitle>li>a').mouseover(function(){
		var titdiv = $('<div></div>');
		var tit = $(this).parent().get(0).getAttribute('titlex');
		titdiv.html(tit).addClass('tit');
		$(this).append(titdiv);	
	}).mousemove(function(e){
		$('.tit').css({
			'top':18,
			'left':e.offsetX+10
		})
	})
	
	$('.pagetitle>li').mouseout(function(){
		$(this).find('.tit').remove();
	})
	/*鼠标移动 */
	
	var  mystyle = localStorage.getItem('index');
	var  mycolor = localStorage.getItem('color');
	var  mynum = localStorage.getItem('num');
	console.log(localStorage)
	if(localStorage.length == 0){
		$('h2').css('background','#6e6e6e');
		$('.daohang').css('background','#4a4a4a');
		$('.color_cookies>span').eq(0).addClass('selected').siblings().removeClass('selected');
	}else{
		$('h2').css('background',mystyle);
		$('.daohang').css('background',mycolor);
		$('.color_cookies>span').eq(mynum).addClass('selected').siblings().removeClass('selected');
	}
	
	/*本地存储 */
	
//	localStorage.removeItem('color');
//	localStorage.removeItem('index');
//	localStorage.removeItem('num');
	$('.color_cookies span').click(function(){
		var localIndex = $(this).get(0).getAttribute('index');
		var localColor = $(this).get(0).getAttribute('color');
		var localNum = $(this).index();
		localStorage.setItem('index',localIndex);
		localStorage.setItem('color',localColor);
		localStorage.setItem('num',localNum);
		
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.daohang').css('background',this.getAttribute('color'));
		$('h2').css('background',this.getAttribute('index'));
	})
	
	
	var index = 0;
	var timer = null;
	
	timer = setInterval(go,2000);
	
	$('.image_action').mouseover(function(){
		clearInterval(timer);
	})
	$('.image_action').mouseout(function(){
		timer = setInterval(go,2000);
	})
	
	$('.naxx a').mouseover(function(){
		clearInterval(timer);
		index = $(this).index();
		$('.image_action>a>img').eq(index).css('opacity','1').parent().siblings().children('img').css('opacity','0');
		$('.naxx a').eq(index).addClass('banners').siblings().removeClass('banners');
	})
	
	function go(){
		index++;
		if(index==5){
			index = 0;
		}
		$('.image_action>a>img').eq(index).css('opacity','1').parent().siblings().children('img').css('opacity','0');
		$('.naxx a').eq(index).addClass('banners').siblings().removeClass('banners');
	}
	/*轮播结束，move开始*/
	
	$('.rightbox>li').click(function(){
		$(this).addClass('in1').siblings().removeClass('in1');
		$('.video_top').stop().animate({
			'left':-772*$(this).index()
		},500)
	})
})
