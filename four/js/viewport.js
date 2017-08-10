var meta = document.createElement('meta');
	meta.name = 'viewport';
	var meta_i = window.devicePixelRatio>1?1/window.devicePixelRatio:1;
	meta.content = 'width=device-width,user-scalable=no,initial-scale='+meta_i+',maximum-scale='+meta_i+',minimum-scale='+meta_i;
	document.head.appendChild(meta);
	
var html = document.getElementsByTagName('html')[0];
var win_width = window.innerWidth;
var ipike = win_width/32;
	html.style.fontSize = ipike + 'px';