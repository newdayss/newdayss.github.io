window.onload = function(){
	var collection_content_ul = document.getElementsByClassName('collection_content_ul')[0];
	var coll_more = document.getElementsByClassName('coll_more')[0];
  		coll_more.addEventListener('touchstart',function(){
  			var newhtml = `<li><a href="detail.html">
					<div class="coll_li_list clearfix">
						<img src="img/images/d3.jpg" />
						<div class="coll_list_info">
							<p class="coll_li_name overell">肥豚肉骨茶（北京路店）</p>
							<p class="coll_li_place overell">[北京路]新加坡菜色</p>
							<div class="coll_li_price clearfix">
								<span class="price_color">112.5元</span>
								<span class="coll_tag">新店返+</span>
								<span class="coll_right">已售11025</span>
							</div>
						</div>
					</div>
				</a></li>
				<li><a href="detail.html">
					<div class="coll_li_list clearfix">
						<img src="img/images/d4.jpg" />
						<div class="coll_list_info">
							<p class="coll_li_name overell">色乡味特色冬瓜盅主题餐厅（新大新北京路店）</p>
							<p class="coll_li_place overell">[北京路]特色火锅</p>
							<div class="coll_li_price clearfix">
								<span class="price_color">89.0元</span>
								<span class="coll_tag">活动多+</span>
								<span class="coll_right">已售30654</span>
							</div>
						</div>
					</div>
				</a></li>
				<li><a href="detail.html">
					<div class="coll_li_list clearfix">
						<img src="img/images/d5.jpg" />
						<div class="coll_list_info">
							<p class="coll_li_name overell">洛米堤自助西餐厅（公园前店）</p>
							<p class="coll_li_place overell">[北京路商业区]综合自助晚餐</p>
							<div class="coll_li_price clearfix">
								<span class="price_color">49.9元</span>
								<span class="coll_tag">酒水免+</span>
								<span class="coll_right">已售42193</span>
							</div>
						</div>
					</div>
				</a></li>
				<li><a href="detail.html">
					<div class="coll_li_list clearfix">
						<img src="img/images/d6.jpg" />
						<div class="coll_list_info">
							<p class="coll_li_name overell">鱼徒●酸菜鱼（天河城百货店）</p>
							<p class="coll_li_place overell">[北京路]特色酸菜鱼</p>
							<div class="coll_li_price clearfix">
								<span class="price_color">45.0元</span>
								<span class="coll_tag">多折扣+</span>
								<span class="coll_right">已售81122</span>
							</div>
						</div>
					</div>
				</a></li>
				<li><a href="detail.html">
					<div class="coll_li_list clearfix">
						<img src="img/images/d1.jpg" />
						<div class="coll_list_info">
							<p class="coll_li_name overell">锅里添香美食涮烤自助餐厅</p>
							<p class="coll_li_place overell">[北京路]单人自助中餐</p>
							<div class="coll_li_price clearfix">
								<span class="price_color">39.9元</span>
								<span class="coll_tag">多优惠+</span>
								<span class="coll_right">已售50293</span>
							</div>
						</div>
					</div>
				</a></li>;`;
				
				collection_content_ul.innerHTML += newhtml;
				})
  		
  			coll_more.addEventListener('touchend', function(e){
	         	 e.preventDefault();
	    	});
  		
  			
}
	
  			
  			


/*关注页的加载更多*/