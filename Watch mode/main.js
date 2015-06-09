'use strict';

document.addEventListener('DOMContentLoaded', ready, false);

function ready () {
	var wrapper = document.querySelector('#time-chooser'),
		timer = new TimeChooser(wrapper);
}