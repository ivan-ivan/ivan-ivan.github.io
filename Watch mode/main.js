(function() {
	'use strict';

	var timerChooser = document.getElementById("time-chooser"),
	    activeMode = "short";

	function getTimeString (mode) {

		var currentTime = new Date(),
			stringWithTime = '';

		function getFullTimeFormat (timeValue) {
			if (timeValue < 10) {
				timeValue = '0' + timeValue;
			}
			return timeValue;
		}

		switch (mode) {

		  case "short":
		    stringWithTime = '<span>' + getFullTimeFormat(currentTime.getHours()) + ':'
		     + getFullTimeFormat(currentTime.getMinutes()) + '</span>';
		    break;

		  case "full":
		  	stringWithTime = '<span>' + getFullTimeFormat(currentTime.getHours()) + ':'
		     + getFullTimeFormat(currentTime.getMinutes()) + ':' + getFullTimeFormat(currentTime.getSeconds()) + '</span>';
		    break;

		  case "date":
		    stringWithTime = '<span>' + getFullTimeFormat(currentTime.getMonth() + 1) + '/'
		     + getFullTimeFormat(currentTime.getDay()) + '/' + currentTime.getFullYear() + '</span>';
		    break;
	
		}

		return stringWithTime;

	}

	timerChooser.addEventListener('click', function() {
		activeMode = (activeMode !== "short") ? "short" : "full";
		timerChooser.innerHTML = getTimeString(activeMode);
	}, false);

	timerChooser.addEventListener('contextmenu', function(event) {
		activeMode = (activeMode !== "date") ? "date" : "short";
		timerChooser.innerHTML = getTimeString(activeMode);
		event.preventDefault();
	}, false);

	setInterval(function () {
		timerChooser.innerHTML = getTimeString(activeMode);
	}, 1000);

})();