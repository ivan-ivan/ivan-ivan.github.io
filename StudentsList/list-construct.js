
function StudentsList (options) {
	this.arrayOfStudents = options.arrayOfStudents;
	this.body = document.getElementsByTagName('body')[0];
	this.toggleButton = document.createElement('button');
	this.ul = document.createElement('ul');
}

StudentsList.prototype.putTextIntoButton = function (textOnButton) {
	this.toggleButton.innerHTML = textOnButton;
}

StudentsList.prototype.insertButton = function () {
	this.body.insertBefore(this.toggleButton, this.body.firstChild);
}

StudentsList.prototype.generateList = function () {
	var i,
		len,
		li = '';

	for (i = 0, len = this.arrayOfStudents.length; i < len; i++) {
		li += '<li>' + this.arrayOfStudents[i] + '</li>';
	}

	this.ul.innerHTML = li;
	this.body.appendChild(this.ul);
}

StudentsList.prototype.removeList = function () {
	this.ul.parentNode.removeChild(this.ul);
}

StudentsList.prototype.addListeners = function () {

	var self = this;

	this.toggleButton.addEventListener('click', function() {

		if (this.classList.contains('open')) {
			self.removeList();
			this.classList.remove('open');
		} else {
			self.generateList();
			this.classList.add('open');
		}

	}, false);

}

StudentsList.prototype.init = function () {
	this.putTextIntoButton('push to show students');
	this.insertButton();
}


// declaring and initialising instances
var coolList = new StudentsList({
	arrayOfStudents: ['Алена', 'Андрей', 'Алексей', 'Дмитрий', 'Иван', 'Карина', 'Максим', 'Сергей']
});

coolList.init();
coolList.addListeners();















