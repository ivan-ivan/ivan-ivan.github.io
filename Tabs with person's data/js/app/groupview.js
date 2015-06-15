function GroupView (rootEl) {
	'use strict';

	var group = new Group();

	generateList();
	
	function generateList () {
		var str = '<ul class="student-list">',
			obj,
			objWithId;

		for (var i = 0; i < group.students.length; i++) {
			obj = new StudentView(group.students[i].student);
			objWithId = (obj.studentStr).replace('""','"' + i + '"');
			str += objWithId;
		}

		str += '</ul>';
		rootEl.innerHTML = str;
	}

	rootEl.addEventListener('click', showTabs, false);

	function showTabs () {
		m.publish('ShowTabsInfo');
	}

	return this;
}
















