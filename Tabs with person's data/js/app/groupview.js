	function GroupView () {
	'use strict';

	var group = new Group(),
		rootEl = document.querySelector('.container');

	generateList();
	
	function generateList () {
		var str = '<ul class="student-list">';

		for (var i = 0; i < group.students.length; i++) {
			var obj = new StudentView(group.students[i].student);
			var objWithId = (obj.studentStr).replace('""','"' + i + '"');
			str += objWithId;
		}

		str += '</ul>';
		rootEl.innerHTML = str;
	}

	return this;
}
















