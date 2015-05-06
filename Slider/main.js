(function($) {
	 
	var	slider = $('.slides'),
		slides = slider.find(' > li'),
		tabs = $('.navigation > li'),
		offsets = [0, -910, -1820, -2730],
		sliderInterval,
		currentSlide;

	function init(slideIndex) {
		goToSlide(slideIndex || 0);
		startRotation();	
		tabClicks();
	}

	function goToSlide(slideIndex) {
		currentSlide = slideIndex;
		activeTabs();
		slider.stop().animate({'margin-left': offsets[slideIndex]}, 400);
	}

	function activeTabs() {
		tabs.removeClass('active');
		tabs.eq(currentSlide).addClass('active');
	}	

	function startRotation() {
		sliderInterval = setInterval(function() {
			nextSlide();
		}, 2000);
	}
    
	function nextSlide() {
		var nextIndex;

		nextIndex = currentSlide + 1;

		if(nextIndex > slides.length - 1) {
			goToSlide(0);
		} else {
			goToSlide(nextIndex);
		}
	}

	function tabClicks() {

		tabs.on('click', function() {

			goToSlide(tabs.index(this));

			clearInterval(sliderInterval);
			clearTimeout(interruptTimer);
			var interruptTimer = setTimeout(function() {

				startRotation();	

			}, 2000);
			return false;
		});
	}

	init(currentSlide);

})(jQuery);

