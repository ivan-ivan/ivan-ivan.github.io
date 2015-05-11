var email = document.querySelector('#email'),
	emailHolder = topWalker(email, function(oneOfparents) {
		return oneOfparents.classList.contains('form-group');
	}),
	password = document.querySelector('#password'),
	passwordHolder = topWalker(password, function(oneOfparents) {
		return oneOfparents.classList.contains('form-group');
	}),
	city = document.querySelector('#city'),
	cityHolder = topWalker(city, function(oneOfparents) {
		return oneOfparents.classList.contains('form-group');
	}),
	submitButton = document.querySelector('button[type=submit]');
//var usedEmails = ['foo@mail.ru', 'bar@mail.ru'];

function topWalker(node, testFunc) {
	while(node) {
		if(testFunc(node)) {
			return node;
		}
		node = node.parentNode;
	}
}

function showError(groupNode, errorMessage) {
	groupNode.classList.add('has-error');
	var alertNode = document.createElement('div');
	alertNode.className = 'alert alert-danger';
	alertNode.innerHTML = errorMessage;
	groupNode.appendChild(alertNode);
}

function hideError(groupNode) {
	groupNode.classList.remove('has-error');
	var alertNode = groupNode.querySelector('.alert.alert-danger');
	if(alertNode) {
		alertNode.parentNode.removeChild(alertNode);
	}
}

var validations = {
	_validations: [],

	add: function(callback) {
		this._validations.push(callback)
	},

	validate: function() {
		var valid = true;
		for(var i = 0; i < this._validations.length; i++) {
			valid = this._validations[i]() && valid;
		}
		//return false;
		return valid;
	},

	isEmailValid: function() {
		var emailValue = email.value.trim();
		hideError(emailHolder);
		if(!emailValue.match(/\S+@\S+\.\S+/)) {
			showError(emailHolder, 'It doesn\'t look like valid email!');
			return false;
		} 
		return true;
	},
	isValidPassword: function() {
		var passwordValue = password.value.trim();
		hideError(passwordHolder);
		if(!passwordValue.match(/^[a-zA-Z0-9!.-_]{5,}$/)) {
			showError(passwordHolder, 'It doesn\'t look like valid password!');
			return false;
		} 
		return true;
	},
	isValidCity: function() {
		var cityValue = city.value.trim();
		hideError(cityHolder);
		if(!cityValue.match(/^[a-zA-Z\- ]+$/)) {
			showError(cityHolder, 'Please enter your real city.');
			return false;
		}
		return true;
	}
};

validations.add(validations.isEmailValid)
validations.add(validations.isValidPassword)
validations.add(validations.isValidCity)

email.addEventListener('blur', validations.isEmailValid, false);
email.addEventListener('keyup', validations.isEmailValid, false);
email.addEventListener('change', validations.isEmailValid, false);

password.addEventListener('blur', validations.isValidPassword, false);
password.addEventListener('keyup', validations.isValidPassword, false);
password.addEventListener('change', validations.isValidPassword, false);

city.addEventListener('blur', validations.isValidCity, false);
city.addEventListener('keyup', validations.isValidCity, false);
city.addEventListener('change', validations.isValidCity, false);

function updateSubmitButton() {
	var valid = validations.validate();
	if(!valid) {
		submitButton.disabled = true;
	 	event.preventDefault();
	 } else {
		submitButton.disabled = false;
	 }
}

document.querySelector('form').addEventListener('submit', function (event) {
	
	var valid = validations.validate(); 
	if(!valid) {
		submitButton.disabled = true;
	 	event.preventDefault();
	 } else {
		submitButton.disabled = false;
	 }

}, false);


