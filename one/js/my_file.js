window.onload = function(){
	var chess = document.getElementById('chess');
	var me = true;
	var havechess = [];
	var wins = [];
	var count = 0;
	var myWin=[];
	var computerWin=[];
	var over=false;
	
	
	for (var i = 0;i<15;i++) {
		havechess[i] = [];
		for (var j = 0;j<15;j++) {
			havechess[i][j] = 0;
		}
	}
	
	for (var i = 0;i < 15;i++) {
		 wins[i] = [];
		for (var j = 0;j < 15;j++) {
			wins[i][j] = [];
		}
	}
	
	for (var i = 0;i < 15;i++) {
		for (var j = 0;j < 11;j++) {
			for (var k = 0;k < 5;k++) {
				wins[i][j+k][count] = true;
			}
			count++;
		}
	}
	
	
	for (var i = 0;i < 15;i++) {
		for (var j = 0;j < 11;j++) {
			for (var k = 0;k < 5;k++) {
				wins[j+k][i][count] = true;
			}
			count++;
		}
	}
	
	for (var i = 0;i < 11;i++) {
		for (var j = 0;j < 11;j++) {
			for (var k = 0;k < 5;k++) {
				wins[j+k][i+k][count] = true;
			}
			count++;
		}
	}
	
	
	for(var i=0;i<11;i++){
		for(var j=14;j>3;j--){             //大于三而不是四！因为K最大值为4
			for(var k=0;k<5;k++){
				wins[i+k][j-k][count]=true;
			}
			count++;
		}
	}
	
	for(var i=0;i<count;i++){
		myWin[i]=0;
		computerWin[i]=0;
	}
	
	console.log(count);      //所有赢法
	
	
	context = chess.getContext('2d');
	
	context.strokeStyle='#bfbfbf';
	
	var img = new Image();
	img.src = 'img/headerbg.png';
	img.onload = function(){
		context.drawImage(img,0,0,450,450);
		for (var i = 0;i < 15;i++) {
		context.moveTo(i*30+15,15);
		context.lineTo(i*30+15,435);
		context.stroke();
		
		context.moveTo(15,i*30+15);
		context.lineTo(435,i*30+15);
		context.stroke();
	}
	}
	
	chess.onclick = function(e){
		if(over){
			return ;
		}
		if(!me){
			return;
		}
		
		var e = e||window.event;
		var pageX = e.offsetX;
		var pageY = e.offsetY;
		var i=  Math.floor(pageX/30);  
		var j=  Math.floor(pageY/30);
		if(havechess[i][j]==0){
			havechess[i][j] = 1;
			drawyuan(i,j,me);
			for(var k=0;k<count;k++){
				if(wins[i][j][k]){
					myWin[k]++;
					computerWin[k]=6;
					if(myWin[k]==5){
						alert("你赢了");
						over=true;
					}
				}
			}
			
			if(!over){
				computerAI();
				me = !me;
			}
		}
	}
	
	function drawyuan(i,j,color){
		context.beginPath();
		context.arc(15+30*i,15+30*j,13,0,2*Math.PI);
		context.closePath();
		var gradient = context.createRadialGradient(17+30*i,13+30*j,13,17+30*i,13+30*j,0);
		if(color){
			gradient.addColorStop('0','#0a0a0a');
			gradient.addColorStop('1','#636766');
		}else{
			gradient.addColorStop('0','#d1d1d1');
			gradient.addColorStop('1','#f9f9f9');
		}
		context.fillStyle=gradient;
		context.fill();
		me = !me;
	}
	
	function computerAI(){
		var myScore=[];
			var max=0;
			var u=0;
			var v=0;
			var computerScore=[];
			for(var i=0;i<15;i++){
				myScore[i]=[];
				computerScore[i]=[];
				for(j=0;j<15;j++){
					myScore[i][j]=0;
					computerScore[i][j]=0;
				}
			}
			
			for(var i=0;i<15;i++){
				for(var j=0;j<15;j++){
					if(havechess[i][j]==0){
						for(var k=0;k<count;k++){
							if(wins[i][j][k]){
								if(myWin[k]==1){
									myScore[i][j]+=200;
								}else if(myWin[k]==2){
									myScore[i][j]+=400;
								}else if(myWin[k]==3){
									myScore[i][j]+=2000;
								}else if(myWin[k]==4){
									myScore[i][j]+=10000;
								}
								
								if(computerWin[k]==1){
									computerScore[i][j]+=220;
								}else if(computerWin[k]==2){
									computerScore[i][j]+=420;
								}else if(computerWin[k]==3){
									computerScore[i][j]+=2200;
								}else if(computerWin[k]==4){
									computerScore[i][j]+=20000;
								}
							}

						}
						if(myScore[i][j]>max){
							max=myScore[i][j];
							u=i;
							v=j;
						}else if(myScore[i][j]==max){
							if(computerScore[i][j]>computerScore[u][v]){
								u=i;
								v=j;
							}
						
						}
						
					
						if(computerScore[i][j]>max){
							max=computerScore[i][j];
							u=i;
							v=j;
						}else if(computerScore[i][j]==max){
							if(myScore[i][j]>myScore[u][v]){
								u=i;
								v=j;
							}
						}
					}
					
				}
				
			}
	drawyuan(u,v,false)	;
	havechess[u][v]=2;
	for(var k=0;k<count;k++){
			if(wins[u][v][k]){
				computerWin[k]++;
				myWin[k]=6;
				if(computerWin[k]==5){
					alert("计算机赢了");
					over=true;
				}
			}
		}
		
		if(!over){
			me=!me;
		}
	}
}
