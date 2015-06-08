document.addEventListener('DOMContentLoaded', ready, false);

function ready () {
	var students = [
	{
		name: 'Alyona',
		sex: 'female',
		hair: 'dark'
	}, {
		name: 'Andrey',
		sex: 'male',
		hair: 'light'
	}, {
		name: 'Aleksey',
		sex: 'male',
		hair: 'dark'
	}, {
		name: 'Dmitriy',
		sex: 'male',
		hair: 'dark'
	}, {
		name: 'Ivan',
		sex: 'male',
		hair: 'dark'
	}, {
		name: 'Karina',
		sex: 'female',
		hair: 'dark'
	}, {
		name: 'Maxim',
		sex: 'male',
		hair: 'light'
	}, {
		name: 'Sergey',
		sex: 'male',
		hair: 'light'
	}];
	
	var	coolList = new StudentsList(students);
	coolList.init();	
}




