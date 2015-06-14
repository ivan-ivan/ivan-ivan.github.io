function Student (_student) {
	'use strict';

	this.student = _student; 

	this.get = function (index) { 
		var mySwitch = {
			0: this.student[0],
			1: this.student[1],
			2: this.student[2]
		};
		return mySwitch[index];
	};

	this.toJSON = function () {
		var studentObj = {};
		for (var i = 0; i < this.student.length; i++) {
			for (var key in this.student[i]) {
				studentObj[key] = this.student[i][key];
			}
		}
		return studentObj;
	};

	return this;
}




