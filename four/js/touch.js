

function swipe(obj,dir,fn){
	obj.addEventListener('touchstart',start);
	obj.addEventListener('touchend',end);
	
	var startx = null;
	var starty = null;
	var endx = null;
	var endy = null;
	
	
	function start(ev){
		ev = ev.changedTouches[0];
		startx = ev.pageX;
		starty = ev.pageY;		
	}
	
	function end(ev){
		ev = ev.changedTouches[0];
		endx = ev.pageX;
		endy = ev.pageY;
		
		
		if(Math.abs(endx - startx)>= Math.abs(endy - starty)){ //左右滑屏
			if(endx - startx>0){//右滑
				if(dir=='right'){
					typeof fn == 'function'&&fn();
				}
			}
			if(endx - startx<0){//左滑
				if(dir=='left'){
					typeof fn == 'function'&&fn();
				}
			}
		}
		
		if(Math.abs(endy - starty)>Math.abs(endx - startx)){//上下滑屏
			if(endy-starty>0){//下滑
				if(dir=='down'){
					typeof fn == 'function'&&fn();
				}
			}
			
			if(endy-starty<0){//上滑
				if(dir=='up'){
					typeof fn == 'function'&&fn();
				}
			}
		}
		
		if(endx == startx&&endy==starty){
			if(dir == 'tap'){
				typeof fn == 'function'&&fn();
			}
		}
	}
}










