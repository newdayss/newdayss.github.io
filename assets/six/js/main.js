window.onload = function(){
			var btn = document.getElementById('btn');
			var txt = document.getElementById('txt');
			var result_txt = document.getElementsByClassName('result_txt')[0];
			var result = document.getElementsByClassName('result')[0];
			var ul_footer = document.getElementsByClassName('ul_footer')[0];
			
			btn.onclick = function(){
				jsonp({
					url:'https://api.douban.com/v2/book/search',
					api:{
						q:txt.value,
						count:100
					},
					callback:'callback',
					fname:'fn',
					success:function(data){
						result.innerHTML = '搜索结果1-10   共'+data.total;
						result_txt.innerHTML = '';
						var page = Math.ceil(data.total)/10;
						page = page>10?10:page;
							ul_footer.innerHTML = '';
							ul_footer.innerHTML += '<li class="prev"><a href="javascript:;">&lt;上页</a></li><li class="on"><a href="javascript:;">1</a></li>';
							for (var j = 1;j < page;j++) {
								ul_footer.innerHTML += '<li><a href="javascript:;">'+(j+1)+'</a></li>';
							}
							ul_footer.innerHTML += '<li class="next"><a href="javascript:;">下页&gt;</a></li>';
							
						
						for (var i = 0;i < 10;i++) {
							result_txt.innerHTML += `
								<li class="clearfix">
									<div class="li_left">
										<a href="${data.books[i].alt}">
											<img src="${data.books[i].image}" title="" alt="" />
										</a>
									</div>
									<div class="li_right">
										<p><a href="${data.books[i].alt}">${data.books[i].title}</a></p>	
										<p>${data.books[i].author.join('、')} / ${data.books[i].publisher} / ${data.books[i].pubdate} / ${data.books[i].price}</p>	
										<p><span class='stra${parseInt(data.books[i].rating.average)}'></span> ${data.books[i].rating.average}分(${data.books[i].rating.numRaters}人评价)</p>	
									</div>
								</li>
							`;
						}
						
						
						console.log(data);
					}
				})
			}
	
				
			}
			
			function jsonp(opt){
				var arr = [];
				var options = {
					url:opt.url,
					api:opt.api,
					callback:opt.callback,
					success:opt.success,
					fname:opt.fname,
				}
					options.api[options.callback] = options.fname;
					for (var i in options.api) {
						arr.push(i+'='+options.api[i]);
					}
					var newScript = document.createElement('script');
					newScript.src = options.url+'?'+arr.join('&');
					document.body.appendChild(newScript);
					
					window[options.fname] = function(data){
						options.success(data);			
					}
			
			}