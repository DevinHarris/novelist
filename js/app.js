$(function() {
	$(window).on('scroll', function(){
		$('.infobar').css({'border-bottom': '1px solid #ECECEC'}).animate({
			'padding-bottom': 10,
		}, 1500);
	});

	$('.menu').click(function() {
		$('aside').toggleClass('active').css({'display': 'block'});
	});

});