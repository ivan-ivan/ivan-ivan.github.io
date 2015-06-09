'use strict';

document.addEventListener('DOMContentLoaded', ready, false);

function ready () {
	var students = [];
	students = [
		new Student('Alyona', 'female', 'dark'),
		new Student('Andrey', 'male', 'light'),
		new Student('Aleksey', 'male', 'dark'),
		new Student('Dmitriy', 'male', 'dark'),
		new Student('Ivan', 'male', 'dark'),
		new Student('Karina', 'female', 'dark'),
		new Student('Maxim', 'male', 'light'),
		new Student('Sergey', 'male', 'light')
	];
	
	var	coolList = new StudentsList(students);
	coolList.render();	
}




