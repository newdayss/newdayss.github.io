$(function() {
	$('.setup_btn').click(function() {
		$('.min_win_header_list').slideToggle(200);
	})

	var order_moblie = $('.order_moblie');
	var order_key = $('.order_key');
	var ip_key = $('.ip_key');
	var ip_moblie = $('.ip_moblie');

	order_moblie.click(function() {
		ip_key.css('display', 'none');
		ip_moblie.css('display', 'block');
		$(this).addClass('ordinary_on').siblings().removeClass('ordinary_on');
	})

	order_key.click(function() {
		ip_key.css('display', 'block');
		ip_moblie.css('display', 'none');
		$(this).addClass('ordinary_on').siblings().removeClass('ordinary_on');
	})

	var lg2_moblie = $('.lg2_moblie');
	var lg2_key = $('.lg2_key');

	$('.form2_size_li2').click(function() {
		lg2_moblie.css('display', 'block');
		lg2_key.css('display', 'none');
		$(this).addClass('form2_size_on').siblings().removeClass('form2_size_on');
	})

	$('.form2_size_li1').click(function() {
		lg2_moblie.css('display', 'none');
		lg2_key.css('display', 'block');
		$(this).addClass('form2_size_on').siblings().removeClass('form2_size_on');
	})
})