function Group () {
	'use strict';
	this.students = [];
	this.students = [
		new Student([{name: 'john', lastName: 'fox', middleName: 'yonson'}, {age: 26, gender: 'male'}, {passport: 'qpuid5423', inn: 123542}]),
		new Student([{name: 'jane', lastName: 'bergstein', middleName: 'stevenson'}, {age: 30, gender: 'female'}, {passport: 'qrtd5423', inn: 2432434}]),
		new Student([{name: 'peter', lastName: 'lucevich', middleName: 'peterson'}, {age: 20, gender: 'male'}, {passport: 'fgnd5423', inn: 5435453}]),
		new Student([{name: 'brad', lastName: 'korneev', middleName: 'bradson'}, {age: 19, gender: 'male'}, {passport: 'qerd5423', inn: 2343434}]),
		new Student([{name: 'johny', lastName: 'aliev', middleName: 'gustavson'}, {age: 15, gender: 'male'}, {passport: 'qdfd5423', inn: 3434434}]),
		new Student([{name: 'steven', lastName: 'bradly', middleName: 'janson'}, {age: 35, gender: 'male'}, {passport: 'q23d5423', inn: 23234}]),
		new Student([{name: 'sylwia', lastName: 'leonevich', middleName: 'lundgren'}, {age: 24, gender: 'female'}, {passport: 'qnd53423', inn: 4443333}]),
		new Student([{name: 'leopold', lastName: 'peters', middleName: 'karlson'}, {age: 22, gender: 'male'}, {passport: 'qnd52323', inn: 6575767}])
	];	
}

//make a setter for pushing a new student to the hash