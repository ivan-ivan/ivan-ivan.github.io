function TimeChooser (_wrapper) {
	'use strict';

	var timerChooser = _wrapper,
	    activeMode = "short";

	function getRightFormat (timeValue) {
		if (timeValue < 10) {
			timeValue = '0' + timeValue;
		}
		return timeValue;
	}

	function getTime (mode) {

		var currentTime = new Date(),
			hours = currentTime.getHours(),
			minutes = currentTime.getMinutes(),
			seconds = currentTime.getSeconds(),
			time = '',
			mySwitch;

		 mySwitch = {
		 	'short': function () {
		 		time = '<span>' + getRightFormat(hours) + ':'
			     + getRightFormat(minutes) + '</span>';
		 	},
		 	'full': function () {
		 		time = '<span>' + getRightFormat(hours) + ':'
			     + getRightFormat(minutes) + ':' + getRightFormat(seconds) + '</span>';
		 	},
		 	'date': function () {
		 		time = '<span>' + getRightFormat(currentTime.getMonth() + 1) + '/'
			     + getRightFormat(currentTime.getDay()) + '/' + currentTime.getFullYear() + '</span>';
		 	}
		 };

	 	mySwitch[mode]();

		return time;
	}

	function renderTime (activeMode) {
		timerChooser.innerHTML = getTime(activeMode);
	}

	timerChooser.addEventListener('click', function() {
		activeMode = (activeMode !== "short") ? "short" : "full";
		renderTime(activeMode);
	}, false);

	timerChooser.addEventListener('contextmenu', function(event) {
		activeMode = (activeMode !== "date") ? "date" : "short";
		renderTime(activeMode);
		event.preventDefault();
	}, false);

	setInterval(function () {
		renderTime(activeMode);
	}, 1000);

	return this;
}

	




