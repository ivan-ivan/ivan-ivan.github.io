function View (_rootEl, index) {
	'use strict';

	var rootEl = _rootEl,
		person = new Group(); 

	function renderTabs (rootEl) {
		var tpl = _.template(template.tplTabs);
		rootEl.innerHTML += tpl(); 
	}

	renderTabs(rootEl); //rendering first, then attaching events 

	var preview = new Preview(index), //place it here 'cause we need to wait 'til all is rendered
		tabs = document.querySelector('.list-group'),
		div = document.querySelector('.full-list');

	tabs.addEventListener('click', renderInfo, false);

	function renderInfo (event) {
		var uniqueClass = event.target.classList[1],
			childerLength = div.children,
			tpl = _.template(template.tplPartialInfo);

		function renderUnique (uniqueClass) { 
			if (childerLength) { // check if ul with info already exists
				div.innerHTML = '';
			} 
			div.innerHTML += tpl({collection: person.students[index].get(Number(uniqueClass))}); 
		}

		renderUnique(uniqueClass);
	}
}