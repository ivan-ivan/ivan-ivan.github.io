'use strict';
var m;
document.addEventListener('DOMContentLoaded', ready, false);

function ready () {
 	var rootEl = document.querySelector('.container'),
		controller = new Controller(rootEl);
		
	m = new Mediator();
	controller.start();
}





