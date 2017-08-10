$(window).load(function(){
	getfor1();
	
})

var arr1=[];
function getfor1(){
	var $_box=$(".box");
	var $_w=$_box.eq(0).outerWidth();
	var $_col=($(window).width())/$_w;
	var $_cols=Math.floor($_col);
	var hhwin=($(window).height())/2;
	$("#main").width($_cols*$_w).css("margin","0 auto");
	
	for(var i in $_box){
		if(i<$_cols){
			arr1.push(0);
		}
	}
	for(var j=0;j<$_box.length;j++){
		$_box.eq(j).css({
			"top":hhwin,
			"left":'50%',
			"margin-top":Math.floor((Math.random()*10)<5?1:-1)*Math.floor(Math.random()*500)-$_box.height()/2,
			"margin-left":Math.floor((Math.random()*10)<5?1:-1)*Math.floor(Math.random()*500)-$_box.width()/2
		});
	}

			animatedd($_box,0,$_w);	
}


function animatedd(box,i,width){
	var minX=getmin(arr1);
	box.eq(i).animate({
		left:minX*width,
		'margin':0,
		top:arr1[minX]
	},300,function(){
		arr1[minX]+=box.eq(i).outerHeight();
		i++;
		animatedd(box,i,width);
	})
	
	
	
}

function getmin(arr){
	var minH=Math.min.apply(null,arr);
	for(var i in arr){
		if(arr[i]==minH){
			return i;
		}
	}
}


