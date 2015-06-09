function Person (_wrapper, _person) {
	'use strict';

	var wrapper = _wrapper,
		person = _person,
		ul = document.createElement('ul');

	ul.classList.add('alerts');

	init();

	function init () {
		renderTabs(wrapper);
		addEvents();
	}

	function renderTabs (wrapper) {
		var ul = document.createElement('ul'),
			i,
			li;

		ul.classList.add('list-group');

		for (i = 0; i < 3; i++) {
			li = document.createElement('li');
			li.classList.add('list-group-item', i);
			ul.appendChild(li);
		}

		wrapper.appendChild(ul);
	}

	function addEvents () {
		var	element = document.querySelector('.list-group');

		element.addEventListener('click', getCurrentTab, false);

		function getCurrentTab (event) {
			var target = event.target,
				uniqueClass = target.classList[1],
				childerLength = wrapper.children.length;

			if (uniqueClass === '0') {
				if (childerLength > 1) { // check if ul with alerts already exists, otherwise will throw an error
					dismiss();
				} 
				show(0);
			} else if (uniqueClass === '1') {
				if (childerLength > 1) {
					dismiss();
				}
				show(1);
			} else if (uniqueClass === '2') {
				if (childerLength > 1) {
					dismiss();
				}
				show(2);
			}
		}
	}

	function renderInfoTabs (index) {
		var key,
			li;

		for (key in person[index]) {
			li = document.createElement('li');
			li.appendChild(document.createTextNode(person[index][key]));
			li.classList.add('alert', 'alert-success');
			ul.appendChild(li);
		}	
	}
	
	function show (whichTab) {

		if (whichTab === 0) {
			renderInfoTabs(0);
		} else if (whichTab === 1) {
			renderInfoTabs(1);
		} else if (whichTab === 2) {
			renderInfoTabs(2);
		}

		wrapper.appendChild(ul); 
	}

	function dismiss () {
		ul.innerHTML = '';
		wrapper.removeChild(ul); 
	}
}




