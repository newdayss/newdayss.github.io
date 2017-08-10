window.onload = function() {
	var nav_inputdiv = document.querySelector('.nav_inputdiv');
	var inputSearch = document.querySelector('#nav_input');
	var inputSubmit = document.querySelector('.nav_submit');
	var need = 0;
	inputSearch.onfocus = function() {
		need++;
		this.style.borderColor = '#ff6700';
		inputSubmit.style.borderColor = '#ff6700';
		this.nextElementSibling.style.display = 'none';
		this.nextElementSibling.nextElementSibling.style.display = 'none';
		this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
		
	}
	
	inputSearch.onblur = function() {
		need = 0;
		this.style.borderColor = '#e0e0e0';
		inputSubmit.style.borderColor = '#e0e0e0';
		this.nextElementSibling.style.display = 'block';
		this.nextElementSibling.nextElementSibling.style.display = 'block';
		this.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
	}
	
	nav_inputdiv.onmouseover = function() {
		if(need){
			return;
		}
		inputSearch.style.borderColor = '#B0B0B0';
		inputSubmit.style.borderColor = '#B0B0B0';
	}
	
	nav_inputdiv.onmouseout = function() {
		if(need){
			return;
		}
		inputSearch.style.borderColor = '#E0E0E0';
		inputSubmit.style.borderColor = '#E0E0E0';
	}
	/*搜索框效果*/
	
	var imgDiv = document.getElementsByClassName('banner_img');
	var next = document.querySelector('.next');
	var pre = document.querySelector('.pre');
	var banner_out = document.querySelector('.banner_out');
	var banner_btn = document.querySelectorAll('.banner_btn span');
	var index = 0;
	var timer = null;
	
	for(var i = 0;i < banner_btn.length;i++){
		banner_btn[i].onclick = function () {
			for(var j = 0;j < banner_btn.length;j++){
				banner_btn[j].className = '';
				imgDiv[j].className = 'banner_img';			
			}
			this.className = 'btn_o';
			btnIndex = parseInt(this.getAttribute('index'));
			index = btnIndex;
			imgDiv[index].className = 'banner_img nohide';	
		}
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
	},2000);
	banner_out.onmouseover = function(){
		clearInterval(timer);
	}
	banner_out.onmouseout = function(){
		timer = setInterval(function(){
			go(1);
		},2000);
	}
	function go(n){
		index = index+n;
		if(index >4){
			index = 0;
		}else if(index<0){
			index = 4;
		}
		
		for(var i = 0;i < imgDiv.length;i++){
			imgDiv[i].className = 'banner_img';
			banner_btn[i].className = '';
		}
		imgDiv[index].className = 'banner_img nohide';
		banner_btn[index].className = 'btn_o';
	}
	/*轮 播*/
}
