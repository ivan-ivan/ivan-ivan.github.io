'use strict';

document.addEventListener('DOMContentLoaded', ready, false);

function ready () {
	var	coolList = new GroupView();
}

document.addEventListener('click', function(event) {
	var rootEl = document.querySelector('.container'),
		studentList = document.querySelector('.student-list'),
		children = rootEl.children.length;

		if (event.target.id) {
			if (children > 1) {
				studentList.parentNode.removeChild(studentList.nextElementSibling);
			}
			var martin = new View(rootEl, event.target.id); 
		}

}, false);




