var as = document.getElementsByTagName('a');
	for (var i = 0;i < as.length;i++) {
		if(as[i].href.indexOf("detail.html") != -1){
			var allas = as[i].getElementsByTagName('*');
			for (var j = 0;j < allas.length;j++) {
				if(allas[j].nodeType==1){
					if(allas[j].tagName == 'IMG'){
						var allaSrc = allas[j].src;
						as[i].href = 'detail.html#'+allaSrc;
					}
				}
			}
		}
		
	}
	/*详细页hash*/