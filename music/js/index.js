window.onload = function() {
	
	var json1 ={
		'song':[{'name':'刘惜君  爱情'},{'name':'汪苏泷 东京铁塔的幸福'},{'name':'庄心妍 最后一次'},{'name':'蒋雪儿 纪念青春'},{'name':'薛之谦 我害怕'},{'name':'金志文 远走高飞'},{'name':'潘成、初晴 管住嘴'},{'name':'韩安旭 泥泞'},{'name':'姜潮 过分亲密'},{'name':'Sunshine 朵蜜'}],
		'hot':[{'txt':'刘惜君 - 爱情【不期而遇插曲】'},{'txt':'伦桑 - 龙武盛唐【龙王传说主题曲】'},{'txt':'X玖少年团 - 炫斗青春'},{'txt':'徐真真 - 当妮走了'},{'txt':'薛之谦 我害怕'},{'txt':'金志文 远走高飞'},{'txt':'潘成、初晴 管住嘴'},{'txt':'韩安旭 泥泞'}],
		'hot1':[{'txt':'Mars毒药 - 呼啸青春【那一场呼啸而过的青春主题曲】'},{'txt':'汪苏 东京铁塔的幸福'},{'txt':'庄心 最后一次'},{'txt':'蒋雪儿 纪念青春'},{'txt':'Teen Top - 有趣吗? (Love is)'},{'txt':'SF9 - 轻易 (Easy Love)'},{'txt':'Sunshine - 朵蜜'},{'txt':'Base Ball Bear - すべては君のせいで'}],
		'hot0':[{'txt':'张涵予、黎明 - 大宝【抢红推广曲】'},{'txt':'唐古 - 你傻不傻'},{'txt':'蒋雪儿 - 纪念青春'},{'txt':'阿兰 - 幻梦【捉妖学院主题曲】'},{'txt':'薛之谦 我害怕'},{'txt':'乌兰图雅 - 蓝色的蒙古高原'},{'txt':'戴荃、周华健 - 江湖晚'},{'txt':'姜潮 - 过分亲密'}]
	};
	
	var radom_input = document.getElementById('radom_input');
	var number_inputn = Math.floor((Math.random()*json1.song.length));
	radom_input.placeholder = json1.song[number_inputn].name;
	
//	for(var x20 = 0;x20 < json1.hot.length;x20++){
//		console.log(json1.hot[x20].txt);
//	}
	
	var hot_sing_title_ul = document.getElementsByClassName('hot_sing_title_ul')[1];
	var hot_sing_title_ul_li = hot_sing_title_ul.getElementsByTagName('li');
	var city1 = document.getElementsByClassName('city');
	for(var x10 = 0;x10 < hot_sing_title_ul_li.length;x10++){
		hot_sing_title_ul_li[x10].onmouseover = function() {
			for(var x11 = 0;x11 < hot_sing_title_ul_li.length;x11++){
				hot_sing_title_ul_li[x11].className = '';
				city1[x11].className = 'city';
			}
			this.className = 'color';
		    var index10 = this.getAttribute('index');
		    var index11 = parseInt(index10);
		    city1[index11].className = 'city gocity';
		}
	}
	
	
	var num = 1;
	var newsong_list_pre = document.getElementsByClassName('newsong_list_pre');
	var newsong_list_next = document.getElementsByClassName('newsong_list_next');
	var numpage1 = document.getElementsByClassName('numpage');
	for(var x8 = 0;x8 < newsong_list_pre.length;x8++){
		newsong_list_pre[x8].onclick = function() {
			var num1 = this.nextElementSibling.innerHTML;
			var num2 = parseInt(num1);
			
				var arr8 = [];
				for(var x21 = 0; x21<this.parentNode.parentNode.childNodes.length;x21++){
					if(this.parentNode.parentNode.childNodes[x21].tagName == 'LI'){
						arr8.push(x21);
					}
				}
				if(num2 == 3){
					for(var x23 = 0; x23 < arr8.length;x23++){
					this.parentNode.parentNode.childNodes[arr8[x23]].firstElementChild.innerHTML = json1.hot[x23].txt ;	
					}
				}
				if(num2 == 2){
					for(var x23 = 0; x23 < arr8.length;x23++){
					this.parentNode.parentNode.childNodes[arr8[x23]].firstElementChild.innerHTML = json1.hot0[x23].txt ;	
					}
				}
				
				
			if(num2<=2){
				this.style.backgroundPosition = '0px 0px';
			}
			if(num2<=1){
				num2=1;
				
			}else{
				this.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundPosition = '-13px -14px';
				this.nextElementSibling.innerHTML = '';
				num2--;
				this.nextElementSibling.innerHTML = num2;
			}
			
			}
		
		newsong_list_next[x8].onclick = function() {
			var num1 =this.previousSibling.previousSibling.innerHTML;
			var num2 = parseInt(num1);
			
			var arr8 = [];
				for(var x21 = 0; x21<this.parentNode.parentNode.childNodes.length;x21++){
					if(this.parentNode.parentNode.childNodes[x21].tagName == 'LI'){
						arr8.push(x21);
					}
				}
				if(num2 == 1){
					for(var x23 = 0; x23 < arr8.length;x23++){
					this.parentNode.parentNode.childNodes[arr8[x23]].firstElementChild.innerHTML = json1.hot[x23].txt ;	
					}
				}
				if(num2 == 2){
					for(var x23 = 0; x23 < arr8.length;x23++){
					this.parentNode.parentNode.childNodes[arr8[x23]].firstElementChild.innerHTML = json1.hot1[x23].txt ;	
					}
				}
				
			if(num2 >= 2){
				this.style.backgroundPosition = '-13px 0';
			}
			if(num2>=3){
				num2=3;
			}else{
				this.previousSibling.previousSibling.previousSibling.style.backgroundPosition = '0px -14px';
				this.previousSibling.previousSibling.innerHTML = '';
				num2++;
				this.previousSibling.previousSibling.innerHTML = num2;
			}
		}
			
		}
		

	var tab_img_ul = document.getElementsByClassName('tab_img')[0];
	var tab_img_li = tab_img_ul.getElementsByTagName('li');
	var hot_singer_img1 = document.getElementsByClassName('hot_singer_img1');
	for(var x6 = 0;x6 < tab_img_li.length;x6++){
		tab_img_li[x6].onmouseover = function() {
			for(var x7 = 0;x7 < tab_img_li.length;x7++){
				tab_img_li[x7].className = '';
				hot_singer_img1[x7].className = 'hot_singer_img1';
			
			}
			this.className = 'blue';
			var imgindex = parseInt(this.getAttribute('index'));
			hot_singer_img1[imgindex].className = 'hot_singer_img1 divnohide1';
		}
	}
	
	var tab_img_ul1 = document.getElementsByClassName('tab_img')[1];
	var tab_img_li1 = tab_img_ul1.getElementsByTagName('li');
	var need2 = document.getElementsByClassName('need2');
	for(var x12 = 0;x12 < need2.length;x12++){
		tab_img_li1[x12].onmouseover = function() {
			for(var x13 = 0;x13 < tab_img_li1.length;x13++){
				tab_img_li1[x13].className = '';
				need2[x13].className = 'hot_singer_img1 need2';
			}
			this.className = 'blue';
			var imgindex = parseInt(this.getAttribute('index'));
			need2[imgindex].className = 'hot_singer_img1 divnohide1 need2';
		}
	}
	
	var tab_img_ul2 = document.getElementsByClassName('tab_img')[2];
	var tab_img_li2 = tab_img_ul2.getElementsByTagName('li');
	var need3 = document.getElementsByClassName('need3');
	for(var x15 = 0;x15 < tab_img_li2.length;x15++){
		tab_img_li2[x15].onmouseover = function() {
			for(var x16 = 0;x16 < tab_img_li2.length;x16++){
				tab_img_li2[x16].className = '';
				need3[x16].className = 'hot_singer_img1 need3';
			
			}
			this.className = 'blue';
			var imgindex = parseInt(this.getAttribute('index'));
			need3[imgindex].className = 'hot_singer_img1 divnohide1 need3';
		}
	}
	
	
	var tabul = document.getElementsByClassName('hot_sing_title_ul')[0];
	var tabli = tabul.getElementsByTagName('li');
	var bigtabul = document.getElementsByClassName('newsong_list');
	for(var x3 = 0;x3 < tabli.length;x3++){
		tabli[x3].onmouseover = function() {
			for(var x4 = 0;x4 < bigtabul.length;x4++){
				bigtabul[x4].className = 'newsong_list';
				tabli[x4].className = '';
			}
			var newindex = this.getAttribute('index');
			var newindex2 = parseInt(newindex);
			bigtabul[newindex2].className = 'newsong_list divnohide';
			this.className = 'color';
		}
	}
	
	
	var content_img_top_ul1 = document.getElementsByClassName('content_img_top_ul1')[0];
	var content_img_top_lis = content_img_top_ul1.getElementsByTagName('li');
	for(var i = 0;i < content_img_top_lis.length - 1;i++){
		content_img_top_lis[i].onclick = function() {
			for(var j = 0; j < content_img_top_lis.length - 1;j++){
				content_img_top_lis[j].className = '';
			}
			this.className = 'on';
		}
	}
	
	var pre = document.getElementsByClassName('pre')[0];
	var next = document.getElementsByClassName('next')[0];
	var content_img_middle_sliber = document.getElementsByClassName('content_img_middle_sliber')[0];
	var imgs = content_img_middle_sliber.getElementsByTagName('div');
	var ul_list = document.getElementsByClassName('banner_list_ul')[0];
	var li_list = ul_list.getElementsByTagName('li');
	var banner = document.getElementsByClassName('content_img_middle_banner')[0];
	var blurs = document.getElementsByClassName('blurs');
	var index = 0;
	var timer = null;
	
	for(var x1 = 0;x1 < li_list.length;x1++){
		clearInterval(timer);
		li_list[x1].onmouseover = function() {
			for(var x2 = 0;x2 < li_list.length;x2++){
				li_list[x2].className = '';
				imgs[x2].className = '';	
			}
			this.className = 'biglist';
			var li_index = this.getAttribute('index');
			index = parseInt(li_index);
			imgs[index].className = 'nohide';	
		}
	}
	
	banner.onmousemove = function(){
		clearInterval(timer);
	}
	banner.onmouseout = function(){
		timer = setInterval(function(){
		go(1);
	},2500);
	}
	next.onclick = function() {
		clearInterval(timer);
		go(1);
	}
	
	pre.onclick = function() {
		clearInterval(timer);
		go(-1);
	}
	timer = setInterval(function(){
		go(1);
	},2500);
	
	function go(num){
		index=index+num;
		if(index == -1){
			index = 4;
		}
		if(index > 4){
			index = 0;
		}
		if(index < 0){
			index = 4;
		}
		for(var x=0;x<imgs.length;x++){
			imgs[x].className = '';
			li_list[x].className = '';
			blurs[x].className = 'content_img_middle_under'+x+' blurs';
		}
		imgs[index].className = 'nohide';
		li_list[index].classList = 'biglist';
		blurs[index].className = 'content_img_middle_under'+index+' blurs disblock';
	}
}
