$(window).load(function(){
	getfor1();
	setTimeout(function(){
		var heart = document.getElementsByTagName('p')[0];
		heart.style.opacity = 0.8;
		heart.style.fontSize = 30+'px';
	},5000)
})
var arrleft = [284,852,142,426,710,994,568,0,1136,71,1065,142,994,284,852,426,710,568];
var arrtop = [0,0,50,80,80,50,130,150,150,280,280,410,410,510,510,610,610,700];
var arr1=[];
function getfor1(){
	var $_box=$(".box");
	var $_w=$_box.eq(0).outerWidth();
	var $_col=($(window).width())/$_w;
	var $_cols=Math.floor($_col);
	var hhwin=($(window).height())/2;
	
	$('#main').fireworks({ 
			  sound: false, 
			  opacity: 0.7, 
			  width: '100%', 
			  height: '900',
			});
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
		left:arrleft[i],
		'margin':0,
		top:arrtop[i]
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


