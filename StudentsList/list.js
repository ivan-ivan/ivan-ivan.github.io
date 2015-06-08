
function StudentsList (students) {
	var students = students,
		body = document.body,
		ul = document.createElement('ul'),
		toggleButton = document.createElement('button');

	function generateList () {
		var i,
			len = students.length,
			li = '';

		for (i = 0; i < len; i++) {
			li += '<li>' + students[i].name + ' ' + students[i].sex + ' ' + students[i].hair + '</li>';
		}

		ul.innerHTML = li;
		body.appendChild(ul);
	}

	function removeList () {
		ul.parentNode.removeChild(ul);
	}

	this.init = function () {
		this.initialiseButton('push to show students');
		this.addListeners();
	};

	this.initialiseButton = function (textOnButton) {
		body.insertBefore(toggleButton, body.firstChild);
		toggleButton.innerHTML = textOnButton;
	};

	this.addListeners = function () {
		toggleButton.addEventListener('click', function() {

			if (this.classList.contains('open')) {
				removeList();
				this.classList.remove('open');
			} else {
				generateList();
				this.classList.add('open');
			}

		}, false);
	};

	return this;
}
















