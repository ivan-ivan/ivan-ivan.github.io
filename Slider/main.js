(function($) {
	 
	var	slider = $('.slides'),
		slides = slider.find(' > li'),
		tabs = $('.navigation > li'),
		offsets = [0, -910, -1820, -2730],
		sliderInterval,
		currentSlide;

	function init() {
		startRotation(0);	
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

	function startRotation(index) {
		goToSlide(index)
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

			clearInterval(sliderInterval);
			startRotation(tabs.index(this));	

			return false;
		});
	}

	init();

})(jQuery);

