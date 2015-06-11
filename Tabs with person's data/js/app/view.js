function View (_wrapper) {
	'use strict';

	var wrapper = _wrapper,
		person = new Person();

	renderTabs(wrapper); //rendering first, then attaching events 

	function renderTabs (wrapper) {
		var tpl = _.template(template.tplTabs);
		wrapper.innerHTML = tpl();
	}

	var preview = new Preview(wrapper), //place it here 'cause we need to wait 'til all is rendered
		tabs = utils.getElement('.list-group'),
		div = utils.getElement('.full-list');

	utils.addEvent(tabs, getCurrentTab);

	function getCurrentTab (event) {
		var target = event.target,
			uniqueClass = target.classList[1],
			childerLength = div.children;

		if (uniqueClass === '0') {
			if (childerLength) { // check if ul with alerts already exists
				dismiss();
			} 
			show(0);
		} else if (uniqueClass === '1') {
			if (childerLength) { 
				dismiss();
			}
			show(1);
		} else if (uniqueClass === '2') {
			if (childerLength) {
				dismiss();
			}
			show(2);
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
	}

	function renderInfoTabs (index) {
		var tpl = _.template(template.tplPartialInfo);
		div.innerHTML += tpl({collection: person.get(index)});
	}

	function dismiss () {
		div.innerHTML = '';
	}
}