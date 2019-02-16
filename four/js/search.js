window.onload = function(){
	var clearhistory = document.getElementsByClassName('clearhistory')[0];
	var history1 = document.getElementsByClassName('history')[0];
	var hash_serch = document.getElementById('hash_serch');
	var input1 = document.getElementsByTagName('input')[0];
	
	input1.onkeyup = function(){
		var hash_key = this.value;
		hash_serch.href = 'index.html#'+hash_key;
	}
	
	clearhistory.addEventListener('touchstart',function(){
		history1.innerHTML = '';
	})
	
	var sec_hash = document.getElementsByClassName('sec_hash')[0];
	var hash_li = sec_hash.getElementsByTagName('li');
	
	for (var i = 0;i < hash_li.length;i++) {
		hash_li[i].index = i;
		hash_li[i].addEventListener('touchstart',function(){
			var sec_name =  this.childNodes[0].innerHTML;
			hash_serch.href = 'index.html#'+sec_name;
			console.log(hash_serch);
		})
	}
}
