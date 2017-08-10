var as = document.getElementsByTagName('a');
	for (var i = 0;i < as.length;i++) {
		if(as[i].href == 'http://127.0.0.1:8020/%E5%A4%96%E5%8D%96%E9%A1%B9%E7%9B%AE/detail.html'){
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