$(function() {
	$('.setup_btn').click(function() {
		$('.min_win_header_list').slideToggle(200);
	})

	$('.detail_smallimg_ul>li').click(function() {
		var smallnum = ($(this).index()) + 1;
		var smallsrc = 'img/detail/detail_big' + smallnum + '.jpg';
		$(this).addClass('op_on').siblings().removeClass('op_on');
		$('#de_bigimg').attr('src', smallsrc);
	})

	$('.detail_smallimg_text_ul>li').click(function() {
		var smallnum1 = ($(this).index()) + 1;
		var smallsrc1 = 'img/detail/detail_big' + smallnum1 + '.jpg';
		$(this).addClass('active').siblings().removeClass('active');
		$('#de_bigimg').attr('src', smallsrc1);
	})

	$('.foots_color_ul>li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	})

	$('.foots_size_ul>li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	})

	$('.detail_prev').click(function() {
		var de_input_num = $('#de_input_num');
		var input_num = de_input_num.val();
		input_num--;
		if(input_num <= 0) {
			input_num = 1
		}
		de_input_num.val(input_num);
	})

	$('.detail_next').click(function() {
		var de_input_num = $('#de_input_num');
		var input_num = de_input_num.val();
		input_num++;
		de_input_num.val(input_num);
	})

	$(window).scroll(function() {
		console.log($('body').scrollTop());
		if($('body').scrollTop() > 266) {
			$('.features_ul2').addClass('animated bounceInLeft');
			$('.paysize_img').addClass('animated bounceInRight');
		}
		if($('body').scrollTop() > 400) {
			$('.footer_box>li').addClass('animated jackInTheBox');
		}
	})

})