$(function () {
	$('.preloader').delay(500).fadeOut('slow', function(){
		$(this).attr('style', 'display: none !important');
	})

	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	})

	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	})
	$(".scroll").on('click', '[href*="#"]', function(e){
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	  });
})