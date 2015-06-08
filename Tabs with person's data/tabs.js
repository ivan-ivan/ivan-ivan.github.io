function Person (wrapper, person) {
	var wrapper = wrapper,
		ul = document.createElement('ul'),
		person = person;

	ul.classList.add('alerts');

	init();

	function init () {
		renderTabs(wrapper);
		addEvents();
	}

	function renderTabs (wrapper) {
		var ul = document.createElement('ul'),
			i;

		ul.classList.add('list-group');

		for (i = 0; i < 3; i++) {
			var li = document.createElement('li');
			li.classList.add('list-group-item', i);
			ul.appendChild(li);
		}

		wrapper.appendChild(ul);
	}

	function addEvents () {
		var	element = document.querySelector('.list-group');

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

		element.addEventListener('click', getCurrentTab, false);
	}

	function show (whichTab) {
		var key;

		if (whichTab === 0) {
			for (key in person[0]) {
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(person[0][key]));
				li.classList.add('alert', 'alert-success');
				ul.appendChild(li);
			}
		} else if (whichTab === 1) {
			for (key in person[1]) {
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(person[1][key]));
				li.classList.add('alert', 'alert-success');
				ul.appendChild(li);
			}
		} else if (whichTab === 2) {
			for (key in person[2]) {
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(person[2][key]));
				li.classList.add('alert', 'alert-success');
				ul.appendChild(li);
			}
		}
		wrapper.appendChild(ul); 
	}

	function dismiss () {
		ul.innerHTML = '';
		wrapper.removeChild(ul); 
	}
}




