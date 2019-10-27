window.onload = function(){
	 var mySwiper = new Swiper ('.swiper-container', {
			  		autoplay: 3000,                 //轮播
				    pagination: '.swiper-pagination',  //分页按钮
				    nextButton: '.swiper-button-next',  // 前进后退按钮
				    prevButton: '.swiper-button-prev',
				    scrollbar: '.swiper-scrollbar', // 滚动条
				    autoplayDisableOnInteraction : false,//操作以后不停止
				    effect : 'cube',  //切换方式
				    paginationClickable :true, //点击切换
				 });
/*主页轮播*/
	var lift_ul_con = document.getElementsByClassName('lift_ul_con')[0];
	var lift_listBtn = document.getElementsByClassName('lift_listBtn')[0];
	var btn_span = lift_listBtn.getElementsByTagName('span');
	swipe(lift_ul_con,'left',function(){
		lift_ul_con.style.transform = 'translateX(-32rem)';
		btn_span[0].className = '';
		btn_span[1].className = 'show';
	});
	swipe(lift_ul_con,'right',function(){
		lift_ul_con.style.transform = 'translateX(0rem)';
		btn_span[0].className = 'show';
		btn_span[1].className = '';
	});
/*主页滑动*/

		var clock = document.getElementsByClassName('clock')[0];
		var clock_span = clock.getElementsByTagName('span');
		var endTime = new Date("2017/08/07 23:03:27");
		var adddate = endTime.getDate();
		var addmon = endTime.getMonth()+1;
		onetimerover();	
		
		function calculate(num){
			return num = num>=10?num:'0'+num;
		}
		
		function onetimerover(){
			var now = new Date();
			if(endTime.getTime()>now.getTime()){
				var oneTime = endTime.getTime() - now.getTime();
				oneTime = parseInt(oneTime / 1000);
			}else{
				adddate++;
				if(adddate==30){adddate==1;addmon++}
				endTime = new Date("2017/"+addmon+"/"+adddate+" 21:09:27");
				var oneTime = endTime.getTime() - now.getTime();
				oneTime = parseInt(oneTime / 1000);
			}
				var o = Math.floor(oneTime / 3600);
				var m = Math.floor(oneTime / 60 % 60);
				var s = oneTime % 60;
				var d = parseInt(o / 24);
				o = calculate(o);
				s = calculate(s);
				m = calculate(m);
				d = calculate(d);
				clock_span[0].innerHTML = d;
				clock_span[1].innerHTML = o;
				clock_span[2].innerHTML = m;
				clock_span[3].innerHTML = s;
				setTimeout(function(){
					onetimerover();	
				},1000);
		}



/*主页倒计时*/
	var hot_foods_boxmove = document.getElementsByClassName('hot_foods_boxmove')[0];
	var hot_foods_boxmove_li = hot_foods_boxmove.getElementsByTagName('li')[0];
	var isdrag=false;   
    var NowLeft = 0,disX;
    var NowTop,disY; 

    hot_foods_boxmove.addEventListener('touchstart',thismousedown);  
    hot_foods_boxmove.addEventListener('touchend',thismouseup);  
    hot_foods_boxmove.addEventListener('touchmove',thismousemove);  

    function thismousedown(e){   
       isdrag = true;   
       disX = e.touches[0].pageX;   
       return false;
    }

    function thismousemove(e){   
      if (isdrag){
      	window.mydis = NowLeft + e.touches[0].pageX - disX;
      	if(mydis>0){
      		mydis = 0;
      	}else if(mydis < -(hot_foods_boxmove_li.offsetWidth*7.3)){
      		mydis = -(hot_foods_boxmove_li.offsetWidth*7.3);
      	}
        hot_foods_boxmove.style.transform = 'translateX('+mydis+'px)';

       return false;   
       }   
    }   

    function thismouseup(){
        NowLeft = mydis;	
        isdrag = false;  
    };

/*主页限时抢购商品浏览*/

function stores(){
	var hot_stores_boxmove = document.getElementsByClassName('hot_stores_boxmove')[0];
	var hot_stores_boxmove_li = hot_stores_boxmove.getElementsByTagName('li')[0];
	var isdrag2=false;   
    var NowLeft2 = 0,disX2;
    var NowTop2,disY2; 

    hot_stores_boxmove.addEventListener('touchstart',thismousedown2);  
    hot_stores_boxmove.addEventListener('touchend',thismouseup2);  
    hot_stores_boxmove.addEventListener('touchmove',thismousemove2);  

    function thismousedown2(e){   
       isdrag2 = true;   
       disX2 = e.touches[0].pageX;   
       return false;
    }

    function thismousemove2(e){   
      if (isdrag2){
      	window.mydis2 = NowLeft2 + e.touches[0].pageX - disX2;
      	if(mydis2>0){
      		mydis2 = 0;
      	}else if(mydis2 < -(hot_stores_boxmove_li.offsetWidth*8.2)){
      		mydis2 = -(hot_stores_boxmove_li.offsetWidth*8.2);
      	}
        hot_stores_boxmove.style.transform = 'translateX('+mydis2+'px)';

       return false;   
       }   
    }   

    function thismouseup2(){
        NowLeft2 = mydis2;	
        isdrag2 = false;  
    };
}

stores();
/*热门商家浏览*/
	var adbanner = document.getElementsByClassName('adbanner')[0];
	var adbanner_div = adbanner.getElementsByClassName('lift_listBtn')[0];
	var adbanner_span = adbanner_div.getElementsByTagName('span');
	var adbanner_li = adbanner.getElementsByTagName('li');
	var adtimer = null;
	var adnum = true;
	
	swipe(adbanner,'left',function(){
		adnum = false;
		adbanner_li[1].className = 'showop';
		adbanner_li[0].className = '';
		adbanner_span[0].className = '';
		adbanner_span[1].className = 'show';
	});
	swipe(adbanner,'right',function(){
		adnum = true;
		adbanner_li[1].className = '';
		adbanner_li[0].className = 'showop';
		adbanner_span[0].className = 'show';
		adbanner_span[1].className = '';
	});
	
	adtimer = setInterval(function(){
		if(adnum){
			adnum = !adnum;
			adbanner_li[1].className = 'showop';
			adbanner_li[0].className = '';
			adbanner_span[0].className = '';
			adbanner_span[1].className = 'show';
		}else{
			adnum = !adnum;
			adbanner_li[1].className = '';
			adbanner_li[0].className = 'showop';
			adbanner_span[0].className = 'show';
			adbanner_span[1].className = '';
		}
		
	},3000);

/*广告轮播*/
	var hash = location.hash;
	var hash_value = document.getElementById('hash_value');
	if(hash!=''){
		var hash_v = hash.split('#')[1];
		hash_value.innerHTML = hash_v;
	}
/*显示hash值的内容*/
	var lo_search_value = location.search;
	var lo_search = document.getElementById('lo_search');
	if(lo_search_value != ''){
		var lo_search_v = lo_search_value.split('?')[1];
		lo_search_v = decodeURI(lo_search_v);
		lo_search.innerHTML = lo_search_v;
	}

/*显示search值的内容*/
	

}