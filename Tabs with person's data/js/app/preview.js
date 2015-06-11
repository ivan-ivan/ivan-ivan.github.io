function Preview () {
	'use strict';

	var btn = utils.getElement('.btn'),
		div = utils.getElement('.full-list'),
		person = new Person();

	utils.addEvent(btn, showPreview);

	function showPreview () {
		var childerLength = div.children,
			tpl = _.template(template.tplFullList),
			span;

		if (childerLength) { 
			div.innerHTML = '';
		} 

		div.innerHTML += tpl({collection: person.toJSON()});
		btn.disabled = true;	

		span = utils.getElement('span');
		utils.addEvent(span, closePreview);
	}

	function closePreview () {
		div.innerHTML = '';
		btn.disabled = false;
	}

	return this;
}