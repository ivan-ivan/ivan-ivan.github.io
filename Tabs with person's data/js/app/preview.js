function Preview (index) {
	'use strict';

	var btn = document.querySelector('.btn'),
		div = document.querySelector('.full-list'),
		person = new Group();	

	btn.addEventListener('click', showPreview, false);

	function showPreview () {
		var childerLength = div.children,
			tpl = _.template(template.tplFullList),
			span;

		if (childerLength) { 
			div.innerHTML = '';
		} 

		div.innerHTML += tpl({collection: person.students[index].toJSON()});
		btn.disabled = true;	

		span = document.querySelector('span');
		span.addEventListener('click', function() {
			div.innerHTML = '';
			btn.disabled = false;
		}, false);
	}

	return this;
}