window.onload = function(){
	var clearhistory = document.getElementsByClassName('clearhistory')[0];
	var history1 = document.getElementsByClassName('history')[0];
	console.log(history1);
	clearhistory.addEventListener('touchstart',function(){
		history1.innerHTML = '';
	})
	
}
