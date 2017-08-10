$(function(){
	var color = '蓝白';
	var size = '未选择';
	var numbers = 1;
	var prises = 200;
	var star = '无'; 
	var clickstra = 'no';
	
	if(localStorage.length == 0){
		$('#skin li').eq(0).addClass('selected').siblings().removeClass('selected');
		$('.nav ul').css('background','#4A4A4A');
		$('h2').css('background','#6E6E6E');
	}else{
		var  mystyle = localStorage.getItem('index');
		var  mycolor = localStorage.getItem('color');
		var  mynum = localStorage.getItem('num');
		$('h2').css('background',mystyle);
		$('.nav ul').css('background',mycolor);
		$('#skin>li').eq(mynum).addClass('selected').siblings().removeClass('selected');
		console.log(localStorage)
	}
	
	$('#skin li').click(function(){
		var localIndex = $(this).get(0).getAttribute('index');
		var localColor = $(this).get(0).getAttribute('color');
		var localNum = $(this).index();
		localStorage.setItem('index',localIndex);
		localStorage.setItem('color',localColor);
		localStorage.setItem('num',localNum);
		
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.nav ul').css('background',this.getAttribute('color'));
		$('h2').css('background',this.getAttribute('index'));
	})
	
	$('.text3 li').click(function(){
		$(this).addClass('on1').siblings().removeClass('on1');
		$('.tab_box>div').addClass('hide');
		$('.tab_box>div').eq($(this).index()).removeClass('hide');
	})
	
	$('.small li').click(function(){
		var src1 = $(this).find('img').attr('src');
		var ac = src1.indexOf('.');
		var qian = src1.slice(0,ac);
		var srcall =qian+'_small.jpg';
		
		$('.bigwrap').css('backgroundImage','url('+qian+'_big.jpg)');
		$('.bigimg').find('img').attr('src',srcall);
		
		
		var src2 = qian+'_big.jpg';
		$('.bigimg').find('a').attr('href',src2);
		$('.textimg').find('a').attr('href',src2);
	
	});
	
	$('.color_1>li>img').click(function(){
		var colors = $(this).get(0).getAttribute('color');
//		var oldsrc = $('.bigwrap').css('backgroundImage');

		$('.bigwrap').css('backgroundImage','url(images/pro_img/'+colors+'_one_big.jpg)');
		$('.small').find('img').eq(0).attr('src','images/pro_img/'+colors+'_one.jpg');
		$('.small').find('img').eq(1).attr('src','images/pro_img/'+colors+'_two.jpg');
		if(colors == 'green'){
			$('.small').find('img').eq(2).remove();		
		}else{
			$('.small').find('a').eq(2).get(0).innerHTML = '<img src = "">';
			$('.small').find('img').eq(2).attr('src','images/pro_img/'+colors+'_three.jpg');		
		}
		
		$('.bigimg').find('img').attr('src','images/pro_img/'+colors+'_one_small.jpg');
		$('.textimg>a').attr('href','images/pro_img/'+colors+'_one_big.jpg');
		$(this).addClass('biankuang').parent().siblings().children('img').removeClass('biankuang');
		color = $(this).attr('alt');
		$('.color_chang>strong').text(color);
	})
	
	$('.size_big>li').click(function(){
		$(this).css('background','#FF6600').siblings().css('background','');
		size = $(this).text()
		$('.pro>strong').text(size);
	})
	
	$('select').change(function(){
		var num= $(this).find('option:selected').text();
		numbers = parseInt(num);
		prises = numbers*200;
		$('.number>i').text(numbers);
		$('.prise>strong').text(prises);
	})
	
	$('.buy_t').click(function(){
		$('body').css('opacity',0.8);
		$('.buy_box').css('display','block');
		var info = '你选择的颜色是：'+color+',你选择的尺寸是：'+size+',你选择的数量是：'+numbers+',你需要付的总价是：'+prises+',你的评价是'+star+'。';
		$('.txt').text(info);
	})
	
	$('.close').click(function(){
		$('body').css('opacity',1);
		$(this).parent().css('display','none');
	})
	


	$("ul.rating>li").mouseover(function(){
		star = $(this).children('a').attr("title");
		var stranum = $(this).attr("class");
		$(this).parent().removeClass().addClass("rating "+stranum+"star");
	}).click(function(){
		star = $(this).children('a').attr("title");
		clickstra = $(this).attr("class");
		alert("您给此商品的评分是："+star);
	})
	.mouseout(function(){
		$(this).parent().removeClass().addClass("rating "+clickstra+"star1");
	})
	
	$('.bigimg').mousemove(function(e){
		var x = $('.bigimg').get(0).offsetLeft+$('#content').get(0).offsetLeft+75; 
		var y = $('#content').get(0).offsetTop+75;
		var XX = e.pageX-x;
		var YY = e.pageY-y;
		if(XX<0){
			XX = 0;
		}else if(XX>155){
			XX = 155;
		}
		if(YY<0){
			YY = 0;
		}else if(YY>155){
			YY = 155
		}
		$('.wrap').css({
			'left':XX,
			'top':YY
		})
		
		var blx = (XX/155)*-400+'px';
		var bly = (YY/155)*-400+'px';
		
		$('.bigwrap').css({
			'background-position-x':blx,
			'background-position-y':bly
		});
	})
	
	$('.bigimg').mouseover(function(){
		$('.bigwrap').css('display','block');
		$('.wrap').css('display','block');
	})
	$('.bigimg').mouseout(function(){
		$('.bigwrap').css('display','none');
		$('.wrap').css('display','none');
	})
})
