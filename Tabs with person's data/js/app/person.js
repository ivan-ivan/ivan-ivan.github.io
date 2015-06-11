function Person () {
	'use strict';
	var person = {
		name: 'Martin',
		lastName: 'McCluskey',
		patronim: 'Johnovich',
		gender: 'male',
		age: 20,
		passport: 'QN 222DSDF45',
		inn: 215445654
	};

	this.get = function (index) { //have to refactor it 
		var mySwitch = {
			0: {
				name: 'Martin',
				lastName: 'McCluskey',
				patronim: 'Johnovich'
			},
			1: {
				gender: 'male',
				age: 20
			},
			2: {
				passport: 'QN 222DSDF45',
				inn: 215445654
			}
		};
		return mySwitch[index];
	};

	// this.get = function (key) {
	// 	return person[key];
	// };

	this.set = function (key, value) {
		person[key] = value;
	};

	this.toJSON = function () {
		var personClone = {};
		for (var key in person) {
			personClone[key] = person[key];
		}
		return personClone;
	};

	return this;
}




