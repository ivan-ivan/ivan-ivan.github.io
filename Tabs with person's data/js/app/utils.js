var utils = {
	addEvent: function (elem, handler) {
		elem.addEventListener('click', handler, false);
	},
	getElement: function (elem) {
		return document.querySelector(elem);
	},
	create: function (tagName) {
		return document.createElement(tagName);
	},
	remove: function (elem, from) {
		from.removeChild(elem);
	}
};