var template = {
	
	tplTabs: [
		'	<ul class="list-group">',
		'		<li class="list-group-item 0"></li>',
		'		<li class="list-group-item 1"></li>',
		'		<li class="list-group-item 2"></li>',
		'	</ul>',
		'	<div class="full-list"></div>',
		'	<button class="btn btn-default">Preview</button>'
		].join(''),

	tplPartialInfo:  [
		'		<ul>',
		'		<% for (var key in collection) { %>',
		'			<li class="alert alert-success">',
		'				<%= collection[key]%>',
		'			</li>',
		'		<% } %>',
		'		</ul>'].join(''),

	tplFullList: [
	'		<ul>',
	'		<% for (var key in collection) { %>',
	'			<li class="alert alert-success">',
	'				<%= collection[key]%>',
	'			</li>',
	'		<% } %>',
	'		</ul>',
	'		<span>x</span>'].join('')
};