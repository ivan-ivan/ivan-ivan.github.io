function TimeChooser (wrapper) {
	'use strict';

	var timerChooser = wrapper,
	    activeMode = "short";

	function getFullTimeFormat (timeValue) {
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
		 		time = '<span>' + getFullTimeFormat(hours) + ':'
			     + getFullTimeFormat(minutes) + '</span>';
		 	},
		 	'full': function () {
		 		time = '<span>' + getFullTimeFormat(hours) + ':'
			     + getFullTimeFormat(minutes) + ':' + getFullTimeFormat(seconds) + '</span>';
		 	},
		 	'date': function () {
		 		time = '<span>' + getFullTimeFormat(currentTime.getMonth() + 1) + '/'
			     + getFullTimeFormat(currentTime.getDay()) + '/' + currentTime.getFullYear() + '</span>';
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

	




