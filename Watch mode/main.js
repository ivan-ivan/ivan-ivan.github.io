(function() {

	var startTimes,
		timerChooser = document.getElementById('time-chooser');

	function loadChosenMode (attachTo, mode) {
		var ourTime = render(mode);
		attachTo.innerHTML = ourTime;
	}

	function render (mode) {

		var currentTime = new Date(),
			hours = currentTime.getHours(),
			minutes = currentTime.getMinutes(),
			seconds = currentTime.getSeconds(),
			year = currentTime.getFullYear(),
			day = currentTime.getDate(),
			month = currentTime.getMonth() + 1,
			resultingString = '';

			if (hours < 10) {
				hours = '0' + hours;
			}
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			if (seconds < 10) {
				seconds = '0' + seconds;
			}
			if (day < 10) {
				day = '0' + day;
			}
			if (month < 10) {
				month = '0' + month;
			}

		if (mode === 'short') {
			resultingString += '<span>' + hours + ':' + minutes + '</span>';
		} else if (mode === 'full') {
			resultingString += '<span>' + hours + ':' + minutes + ':' + seconds + '</span>';
		} else if (mode === 'date') {
			resultingString += '<span>' + month + '/' + day + '/' + year + '</span>';
		}

		return resultingString;

	}

	function leftMouseMode (event) {

		var event = event || window.event,
			target = event.target || event.srcElement,
			parent = target.parentNode;

		if (parent.classList.contains('lmb-mode')) {
			clearInterval(startTimes);
			startTimes = setInterval(function() {
				loadChosenMode(timerChooser, 'full');
			}, 1000);
			parent.classList.remove('lmb-mode');
		} else {
			clearInterval(startTimes);
			startTimes = setInterval(function() {
				loadChosenMode(timerChooser, 'short');
			}, 1000);
			parent.classList.add('lmb-mode');
		}
	}

	function rightMouseMode (event) {

		var event = event || window.event,
			target = event.target || event.srcElement,
			parent = target.parentNode;

		event.preventDefault();

		if (parent.classList.contains('rmb-mode')) {
			clearInterval(startTimes);
			startTimes = setInterval(function() {
				loadChosenMode(timerChooser, 'full');
			}, 1000);
			parent.classList.remove('rmb-mode');
		} else {
			clearInterval(startTimes);
			startTimes = setInterval(function() {
				loadChosenMode(timerChooser, 'date');
			}, 1000);
			parent.classList.add('rmb-mode');
		}
	}

	document.addEventListener('DOMContentLoaded', function() {

		loadChosenMode(timerChooser, 'full');
		startTimes = setInterval(function() {
			loadChosenMode(timerChooser, 'full');
		}, 1000);

	}, false);
	timerChooser.addEventListener('click', leftMouseMode, false);
	timerChooser.addEventListener('contextmenu', rightMouseMode, false);

})();







