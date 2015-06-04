'use strict';
//document.addEventListener('DOMContentLoaded', init, false);

var arrayOfStudents = ['Алена', 'Андрей', 'Алексей', 'Дмитрий', 'Иван', 'Карина', 'Максим', 'Сергей'],
	body = document.getElementsByTagName('body')[0],
	toggleButton = document.createElement('button');

	toggleButton.innerHTML = 'push to show students';
	body.insertBefore(toggleButton, body.firstChild);

var listMethods = {

	ul: document.createElement('ul'),

	generateList: function () {
		var i,
			len,
			li = '';

		for (i = 0, len = arrayOfStudents.length; i < len; i++) {
			li += '<li>' + arrayOfStudents[i] + '</li>';
			
		}

		this.ul.innerHTML = li;
		body.appendChild(this.ul);
	},

	removeList: function () {
		this.ul.parentNode.removeChild(this.ul);
	}

};

toggleButton.addEventListener('click', function() {

	if (this.classList.contains('open')) {
		listMethods.removeList();
		this.classList.remove('open');
	} else {
		listMethods.generateList();
		this.classList.add('open');
	}

}, false);









