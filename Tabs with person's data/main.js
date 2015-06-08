document.addEventListener('DOMContentLoaded', ready, false);

function ready () {
	var person = [],
		wrapper = document.querySelector('.container');
		
	person = [{
		name: 'Martin',
		lastName: 'McCluskey',
		patronim: 'Johnovich'
	}, {
		gender: 'male',
		age: 20
	}, {
		passport: 'QN 222DSDF45',
		inn: 215445654
	}];

	var martin = new Person(wrapper, person);
}