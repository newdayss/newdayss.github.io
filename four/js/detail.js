window.onload = function(){
	var hash_img = document.getElementById('hash_img');
	var hash = location.hash;
	
	if(hash!=''){
		var newhash = hash.split('#')[1];
		hash_img.src = newhash;
	}
}
