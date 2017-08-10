window.onload = function(){
	var pis = document.getElementsByClassName('pis');
	var domWidth = document.documentElement.clientWidth;
	var box = document.getElementsByClassName('box');
	var main = document.getElementById('main');
	var boxWidth = box[0].offsetWidth;
	var cols = Math.floor(domWidth/boxWidth);
	var arr = [];
	
	main.style.width = cols*boxWidth +'px';
	for (var i =0;i < box.length;i++) {
		if(i <6){
			arr.push(box[i].offsetHeight);
		}else{
		 	var minHeight = Math.min.apply(null,arr);
		 	var newHeight = minHeight+box[i].offsetHeight;
		 	var index = getmins(minHeight,arr);
		 	arr[index] = newHeight;
		 	box[i].style.position="absolute";
	   		box[i].style.top=minHeight+"px";
	   		box[i].style.left=boxWidth*index+"px";
		}
	}
	
	function getmins(minHeight,arr){
		for(var index in arr){
			if(arr[index]==minHeight){
				return index;
			}
		}
	}
	
}
