function Controller (rootEl) {
	var view = new GroupView(rootEl);

	this.start = function () {
		m.subscribe('ShowTabsInfo', showView, event);
	};

	function showView () {
		var	studentList = document.querySelector('.student-list'),
			children = rootEl.children.length,
			personView;

		if (event.target.id) {
			if (children > 1) {
				studentList.parentNode.removeChild(studentList.nextElementSibling);
			}
			personView = new View(rootEl, event.target.id); 
		}
	}

	return this;
}